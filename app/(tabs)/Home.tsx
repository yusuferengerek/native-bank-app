import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import transactions from '@/data/transactions';
import calculateBalance from '@/utils/calculateBalance';
import formatCurrency from '@/utils/formatCurrency';
import { Header } from '@/components/Header';
import { ActionButton } from '@/components/ActionButton';
import { TransactionItem } from '@/components/TransactionItem';
import { SectionTitleWithAction } from '@/components/SectionTitleWithAction';

export default function Home() {
  const balance = calculateBalance({ transactions });

  return (
    <View className="flex-1 bg-white pt-10">
      <StatusBar barStyle="dark-content" />
      <Header
        leftComponent={
          <View className="bg-gray-100 w-10 h-10 rounded-full items-center justify-center shadow-sm">
            <Ionicons name="notifications-outline" size={22} color="#0063F5" />
          </View>
        }
        rightComponent={
          <View className="bg-gray-300 w-10 h-10 rounded-full items-center justify-center shadow">
            <Ionicons name="person" size={22} color="white" />
          </View>
        }
        className="justify-between mx-6"
      />

      <View className="items-center my-6">
        <Text className="text-gray-500 font-medium tracking-wider mb-1">MY ACCOUNT</Text>
        <Text className="text-4xl font-bold text-gray-800">{formatCurrency({ amount: balance })}</Text>
      </View>

      

      <View className="flex-row justify-between mx-6 my-6">
        <ActionButton 
          icon="add" 
          title="DEPOSIT" 
          onPress={() => {}} 
          bgColorClass="bg-green-500" 
          iconColorClass="#fff"
          className="mx-1"
        />
        <ActionButton 
          icon="remove" 
          title="WITHDRAW" 
          onPress={() => {}} 
          bgColorClass="bg-red-500" 
          iconColorClass="#fff"
          className="mx-1"
        />
        <ActionButton 
          icon="document-text-outline" 
          title="PAY" 
          onPress={() => {}} 
          bgColorClass="bg-gray-100" 
          iconColorClass="text-blue-600"
          className="mx-1"
        />
        <ActionButton 
          icon="ellipsis-horizontal" 
          title="MORE" 
          onPress={() => {}} 
          bgColorClass="bg-gray-100" 
          iconColorClass="text-blue-600"
          className="mx-1"
        />
      </View>

      <SectionTitleWithAction
        title="RECENT TRANSACTIONS"
        actionLabel="VIEW ALL"
        onActionPress={() => {}}
        className="mx-6 mt-8 mb-2"
      />

      <ScrollView 
        className="mx-6 mt-2"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {transactions.slice(0, 4).map((transaction) => (
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