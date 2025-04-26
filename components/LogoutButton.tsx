import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface LogoutButtonProps {
  onPress: () => void;
  className?: string;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress, className }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`rounded-full bg-red-100 py-5 ${className || ''}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-center">
        <Feather name="log-out" size={18} color="#EF4444" />
        <Text className="font-semibold text-red-500 ml-4">Logout</Text>
      </View>
    </TouchableOpacity>
  );
}; 