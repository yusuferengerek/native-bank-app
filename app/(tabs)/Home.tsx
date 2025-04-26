import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import profile from '@/data/profile';
import transactions from '@/data/transactions';
import calculateBalance from '@/utils/calculateBalance';
import formatCurrency from '@/utils/formatCurrency';

export default function Home() {
  const balance = calculateBalance({ transactions });

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <View className="flex-row justify-between items-center px-6 pt-14 pb-5">
        <View className="bg-gray-50 w-10 h-10 rounded-full items-center justify-center shadow-sm">
          <Ionicons name="notifications-outline" size={22} color="#0063F5" />
        </View>
        <Text className="text-blue-600 font-bold text-3xl tracking-wider">BANK</Text>
        <View className="shadow-md bg-gray-300 w-10 h-10 rounded-full items-center justify-center">
          {profile.avatar ? (
            <Image source={profile.avatar} style={{ width: 22, height: 22, borderRadius: 11 }} />
          ) : (
            <Ionicons name="person" size={22} color="white" />
          )}
        </View>
      </View>

      <View className="items-center">
        <Text className="text-gray-500 font-medium tracking-wider mb-1">MY ACCOUNT</Text>
        <Text className="text-4xl font-bold text-gray-800">{formatCurrency({ amount: balance })}</Text>
      </View>
      
      <View className="flex-row justify-center mt-7 space-x-12">
        <TouchableOpacity className="items-center p-4 rounded-full shadow-sm mr-3">
          <Ionicons name="stats-chart" size={25} />
        </TouchableOpacity>
        <TouchableOpacity className="items-center p-4 rounded-full shadow-sm ml-3">
          <Ionicons name="settings-outline" size={25} />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-around mt-8">
        <TouchableOpacity className="items-center">
          <View className="bg-green-500 w-14 h-14 rounded-2xl items-center justify-center shadow-md" 
                style={{ shadowColor: '#22c55e', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3 }}>
            <Ionicons name="add" size={32} color="white" />
          </View>
          <Text className="mt-2 text-xs font-medium text-gray-700">DEPOSIT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <View className="bg-red-500 w-14 h-14 rounded-2xl items-center justify-center shadow-md" 
                style={{ shadowColor: '#22c55e', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3 }}>
            <Ionicons name="remove" size={32} color="white" />
          </View>
          <Text className="mt-2 text-xs font-medium text-gray-700">WITHDRAW</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <View className="bg-gray-50 w-14 h-14 rounded-2xl items-center justify-center shadow-sm">
            <Ionicons name="document-text-outline" size={24} color="#0063F5" />
          </View>
          <Text className="mt-2 text-xs font-medium text-gray-700">PAY</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="items-center">
          <View className="bg-gray-50 w-14 h-14 rounded-2xl items-center justify-center shadow-sm">
            <Ionicons name="ellipsis-horizontal" size={24} color="#0063F5" />
          </View>
          <Text className="mt-2 text-xs font-medium text-gray-700">MORE</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between items-center px-6 mt-10">
        <Text className="text-gray-700 uppercase font-semibold tracking-wide">RECENT TRANSACTIONS</Text>
        <TouchableOpacity>
          <Text className="text-blue-500 text-xs font-medium">VIEW ALL</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="mt-4 px-6" showsVerticalScrollIndicator={false}>
        {transactions.slice(0, 4).map((transaction) => (
          <View 
            key={transaction.id}
            className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-50 flex-row items-center justify-between"
          >
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
              <Text className={`font-bold ${transaction.type == 'expense' ? 'text-red-800' : 'text-green-600'}`}>
                {transaction.type == 'expense' ? '- ' : '+ '}{formatCurrency({ amount: transaction.amount })}
              </Text>
              <Text className="text-gray-400 text-xs mt-0.5">{transaction.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}