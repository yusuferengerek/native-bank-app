import React, { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import transactions from '@/data/transactions';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterChip } from '@/components/FilterChip';
import { TransactionItem } from '@/components/TransactionItem';

export default function History() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = transactions
    .filter(transaction => {
      const matchesSearch = 
      transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'all' || transaction.type === filter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <View className="flex-1 bg-white pt-10">
      <StatusBar barStyle="dark-content" />
      
      <Header 
        title="Transaction History" 
        className="mx-6 pt-0 pb-2"
      />

      <View className="mx-6 mt-4 mb-4">
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search transactions..."
        />
      </View>

      <View className="flex-row justify-center my-2 mx-6">
        <FilterChip
          label="All"
          isActive={filter === 'all'}
          onPress={() => setFilter('all')}
          activeColorClass="bg-blue-100"
          activeTextColorClass="text-blue-600"
          className="flex"
        />
        <FilterChip
          label="Income"
          isActive={filter === 'income'}
          onPress={() => setFilter('income')}
          activeColorClass="bg-green-100"
          activeTextColorClass="text-green-600"
          className="flex"
        />
        <FilterChip
          label="Expenses"
          isActive={filter === 'expense'}
          onPress={() => setFilter('expense')}
          activeColorClass="bg-red-100"
          activeTextColorClass="text-red-600"
          className="flex"
        />
      </View>

      <ScrollView 
        className="mx-6 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {filteredTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            id={String(transaction.id)}
            title={transaction.title}
            subtitle={transaction.subtitle}
            amount={transaction.amount}
            date={transaction.date}
            type={transaction.type as 'income' | 'expense'}
            icon={transaction.icon}
            iconColor={transaction.iconColor}
            color={transaction.color}
          />
        ))}
      </ScrollView>
    </View>
  );
}