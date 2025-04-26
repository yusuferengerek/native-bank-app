import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import profile from '@/data/profile';
import { Header } from '@/components/Header';
import { Card } from '@/components/Card';
import { CardOperationButton } from '@/components/CardOperationButton';
import { CardDetailsRow } from '@/components/CardDetailsRow';

export default function CardInfo() {
  return (
    <ScrollView 
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingTop: 40, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="dark-content" />
      <Header
        title="Card Details"
        className="mx-6 pt-0 pb-2"
      />

      <View className="mx-6 mt-6">
        <Card
          cardNumber={profile.card.number}
          cardHolder={`${profile.firstName} ${profile.lastName}`}
          expiryDate={profile.card.expiryDate}
          cvv="123"
        />
      </View>

      <View className="mx-6 mt-9">
        <Text className="text-gray-800 text-lg font-bold mb-4">Card Operations</Text>
        <View className="flex-row flex-wrap justify-between px-0.5">
          <CardOperationButton
            icon="lock-closed"
            title="Lock Card"
            description="Temporarily disable your card"
            iconColor="#3b82f6"
            iconBgColor="bg-blue-100"
            onPress={() => {}}
          />
          <CardOperationButton
            icon="pin"
            title="Change PIN"
            description="Update your card PIN"
            iconColor="#22c55e"
            iconBgColor="bg-green-100"
            onPress={() => {}}
          />
          <CardOperationButton
            icon="alert-circle"
            title="Set Limit"
            description="Set your spending limit"
            iconColor="#facc15"
            iconBgColor="bg-yellow-100"
            onPress={() => {}}
          />
          <CardOperationButton
            icon="trash"
            title="Cancel Card"
            description="Permanently close your card"
            iconColor="#ef4444"
            iconBgColor="bg-red-100"
            onPress={() => {}}
          />
        </View>
      </View>

      <View className="mx-6 mt-9">
        <Text className="text-gray-800 text-lg font-bold mb-4">Card Details</Text>
        <View className="bg-gray-100 rounded-xl shadow p-4 border border-gray-100">
          <CardDetailsRow label="Card Type" value="VISA Debit Card" />
          <CardDetailsRow label="Daily Limit" value="₺5,000" />
          <CardDetailsRow 
            label="Status" 
            value="Active" 
            showStatusDot 
            statusDotColorClass="bg-green-500" 
            className="border-b-0" 
          />
        </View>
      </View>
    </ScrollView>
  );
}