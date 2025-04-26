import React from 'react';
import { View, Text } from 'react-native';

interface CardDetailsRowProps {
  label: string;
  value: string;
  showStatusDot?: boolean;
  statusDotColorClass?: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export const CardDetailsRow: React.FC<CardDetailsRowProps> = ({
  label,
  value,
  showStatusDot = false,
  statusDotColorClass = 'bg-green-500',
  className,
  labelClassName,
  valueClassName,
}) => {
  return (
    <View className={`flex-row justify-between items-center py-3.5 border-b border-gray-200 ${className || ''}`}>
      <Text className={`text-gray-500 text-base ${labelClassName || ''}`}>{label}</Text>
      <View className="flex-row items-center">
        {showStatusDot && (
          <View className={`w-2 h-2 rounded-full mr-2 ${statusDotColorClass}`} />
        )}
        <Text className={`text-gray-800 font-semibold text-base ${valueClassName || ''}`}>{value}</Text>
      </View>
    </View>
  );
}; 