import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import profile from '@/data/profile';

export default function CardInfo() {
  const [showCVV, setShowCVV] = useState(false);
  
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <View className="flex-row justify-between items-center px-6 pt-14 pb-5">
        <Text className="text-2xl font-bold">Card Details</Text>
        <View className="shadow-md bg-gray-300 w-10 h-10 rounded-full items-center justify-center">
          {profile.avatar ? (
            <Image source={profile.avatar} style={{ width: 22, height: 22, borderRadius: 11 }} />
          ) : (
            <Ionicons name="person" size={22} color="white" />
          )}
        </View>
      </View>

      <View className="px-6 mt-8">
        <View
          className="rounded-3xl shadow-xl p-6"
          style={{
            backgroundColor: '#2563eb',
            elevation: 8,
            minHeight: 200,
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <View className="flex-row justify-between items-center">
            <View className="bg-white p-2 rounded-lg">
              <Ionicons name="card" size={32} color="#2563eb" />
            </View>
            <View className="bg-white p-2 rounded-lg">
              <Text className="text-2xl font-bold text-blue-600">VISA</Text>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text className="text-white text-3xl font-bold tracking-widest letter-spacing-2">
              {profile.card.number}
            </Text>
          </View>

          <View className="flex-row justify-between items-end">
            <View>
              <Text className="text-white text-xs opacity-70">CARD HOLDER</Text>
              <Text className="text-white text-base font-semibold">{profile.firstName} {profile.lastName}</Text>
            </View>
            <View>
              <Text className="text-white text-xs opacity-70">EXPIRY DATE</Text>
              <Text className="text-white text-base font-semibold">{profile.card.expiryDate}</Text>
            </View>
            <View>
              <Text className="text-white text-xs opacity-70">CVV</Text>
              <TouchableOpacity onPress={() => setShowCVV(!showCVV)}>
                <Text className="text-white text-base font-semibold">
                  {showCVV ? '123' : '***'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className="px-6 mt-10">
        <Text className="text-gray-800 text-lg font-semibold mb-4">Card Operations</Text>
        
        <View className="flex-row flex-wrap justify-between">
          <TouchableOpacity className="w-[48%] bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
            <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Ionicons name="lock-closed" size={20} color="#3b82f6" />
            </View>
            <Text className="text-gray-800 font-medium">Lock Card</Text>
            <Text className="text-gray-500 text-xs mt-1">Temporarily disable your card</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-[48%] bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
            <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Ionicons name="pin" size={20} color="#22c55e" />
            </View>
            <Text className="text-gray-800 font-medium">Change PIN</Text>
            <Text className="text-gray-500 text-xs mt-1">Update your card PIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-[48%] bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
            <View className="bg-yellow-100 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Ionicons name="alert-circle" size={20} color="#facc15" />
            </View>
            <Text className="text-gray-800 font-medium">Set Limit</Text>
            <Text className="text-gray-500 text-xs mt-1">Set your spending limit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="w-[48%] bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
            <View className="bg-red-100 w-10 h-10 rounded-full items-center justify-center mb-2">
              <Ionicons name="trash" size={20} color="#ef4444" />
            </View>
            <Text className="text-gray-800 font-medium">Cancel Card</Text>
            <Text className="text-gray-500 text-xs mt-1">Permanently close your card</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 mt-6 mb-6">
        <Text className="text-gray-800 text-lg font-semibold mb-4">Card Details</Text>
        
        <View className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
            <Text className="text-gray-500">Card Type</Text>
            <Text className="text-gray-800 font-medium">VISA Debit Card</Text>
          </View>
          
          <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
            <Text className="text-gray-500">Daily Limit</Text>
            <Text className="text-gray-800 font-medium">₺5.000</Text>
          </View>
          
          <View className="flex-row justify-between items-center py-3">
            <Text className="text-gray-500">Status</Text>
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <Text className="text-gray-800 font-medium">Active</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}