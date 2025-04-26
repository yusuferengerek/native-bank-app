import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  activeColorClass?: string;
  inactiveColorClass?: string;
  activeTextColorClass?: string;
  inactiveTextColorClass?: string;
  className?: string;
  textClassName?: string;
}

export const FilterChip: React.FC<FilterChipProps> = ({
  label,
  isActive,
  onPress,
  activeColorClass = 'bg-blue-100',
  inactiveColorClass = 'bg-gray-50',
  activeTextColorClass = 'text-blue-600',
  inactiveTextColorClass = 'text-gray-600',
  className,
  textClassName,
}) => {
  const bgColorClass = isActive ? activeColorClass : inactiveColorClass;
  const textColorClass = isActive ? activeTextColorClass : inactiveTextColorClass;

  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full mx-1 ${bgColorClass} ${className || ''}`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className={`font-semibold text-sm ${textColorClass} ${textClassName || ''}`}>{label}</Text>
    </TouchableOpacity>
  );
}; 