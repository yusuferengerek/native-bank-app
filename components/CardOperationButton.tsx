import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardOperationButtonProps {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
  onPress: () => void;
}

export const CardOperationButton: React.FC<CardOperationButtonProps> = ({
  icon,
  title,
  description,
  iconColor,
  iconBgColor,
  onPress
}) => {
  return (
    <TouchableOpacity
      className='w-[48%] bg-white p-5 rounded-2xl mb-5 shadow-lg shadow-black border border-slate-100'
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View className={`w-10 h-10 rounded-full items-center justify-center mb-3 shadow-sm shadow-black/10 ${iconBgColor}`}>
        <Ionicons name={icon as any} size={22} color={iconColor} />
      </View>
      <Text className="text-gray-800 font-bold text-[15px] mb-1" >{title}</Text>
      <Text className="text-gray-500 text-xs" >{description}</Text>
    </TouchableOpacity>
  );
}; 