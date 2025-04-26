import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  cardNumber,
  cardHolder,
  expiryDate,
  cvv,
  className,
}) => {
  const [showCVV, setShowCVV] = useState(false);
  
  return (
    <View
      className={`bg-blue-600 rounded-3xl p-6 min-h-[200px] shadow-lg shadow-black/60 ${className || ''}`}
    >
      <View className="flex-row justify-between items-center">
        <View className="bg-white p-2 rounded-lg shadow">
          <Ionicons name="card" size={28} color="#2563eb" />
        </View>
        <View className="bg-white p-2 rounded-lg shadow">
          <Text className="text-xl font-extrabold text-blue-600">VISA</Text>
        </View>
      </View>

      <View className="flex-1 justify-center items-center my-4">
        <Text className="text-white text-2xl font-bold tracking-widest">
          {cardNumber}
        </Text>
      </View>

      <View className="flex-row justify-between items-end">
        <View>
          <Text className="text-white/70 text-xs mb-1">CARD HOLDER</Text>
          <Text className="text-white text-base font-semibold">{cardHolder}</Text>
        </View>
        <View>
          <Text className="text-white/70 text-xs mb-1">EXPIRY DATE</Text>
          <Text className="text-white text-base font-semibold">{expiryDate}</Text>
        </View>
        <View>
          <Text className="text-white/70 text-xs mb-1">CVV</Text>
          <TouchableOpacity onPress={() => setShowCVV(!showCVV)} activeOpacity={0.7}>
            <Text className="text-white text-base font-semibold">
              {showCVV ? cvv : '***'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}; 