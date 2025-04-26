import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import transactions from '@/data/transactions';
import formatCurrency from '@/utils/formatCurrency';

export default function History() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = transactions
    .filter(transaction => {
      const matchesSearch = transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          transaction.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'all' || transaction.type === filter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <View className="px-6 pt-14 pb-5">
        <Text className="text-2xl font-bold">Transaction History</Text>
      </View>

      <View className="px-6 mb-4">
        <View className="flex-row items-center bg-gray-50 rounded-xl px-4 py-3">
          <Ionicons name="search" size={20} color="#6b7280" />
          <TextInput
            className="flex-1 ml-2 text-gray-800"
            placeholder="Search transactions..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View className="flex-row justify-around px-6 mb-6">
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-blue-100' : 'bg-gray-50'}`}
          onPress={() => setFilter('all')}
        >
          <Text className={`font-medium ${filter === 'all' ? 'text-blue-600' : 'text-gray-600'}`}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${filter === 'income' ? 'bg-green-100' : 'bg-gray-50'}`}
          onPress={() => setFilter('income')}
        >
          <Text className={`font-medium ${filter === 'income' ? 'text-green-600' : 'text-gray-600'}`}>Income</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-4 py-2 rounded-full ${filter === 'expense' ? 'bg-red-100' : 'bg-gray-50'}`}
          onPress={() => setFilter('expense')}
        >
          <Text className={`font-medium ${filter === 'expense' ? 'text-red-600' : 'text-gray-600'}`}>Expenses</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {filteredTransactions.map((transaction) => (
          <View
            key={transaction.id}
            className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-50"
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className={`${transaction.color} w-12 h-12 rounded-2xl items-center justify-center mr-4`}>
                  <Ionicons name={transaction.icon as any} size={22} color={transaction.iconColor} />
                </View>
                <View>
                  <Text className="font-semibold text-gray-800">{transaction.title}</Text>
                  <Text className="text-gray-400 text-xs mt-0.5">{transaction.subtitle}</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className={`font-bold ${transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
                  {transaction.type === 'expense' ? '- ' : '+ '}{formatCurrency({ amount: transaction.amount })}
                </Text>
                <Text className="text-gray-400 text-xs mt-0.5">
                  {new Date(transaction.date).toLocaleDateString('tr-TR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}