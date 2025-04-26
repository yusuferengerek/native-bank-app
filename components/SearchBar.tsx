import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}) => {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-3xl px-4 py-2">
      <Ionicons name="search" size={20} color="#6b7280" />
      <TextInput
        className="flex-1 ml-2 text-gray-800 text-base"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}; 