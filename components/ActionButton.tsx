import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ActionButtonProps {
  icon: string;
  title: string;
  onPress: () => void;
  bgColorClass?: string;
  iconColorClass?: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  title,
  onPress,
  bgColorClass = 'bg-gray-100',
  iconColorClass = '#2563eb',
  className,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`items-center justify-center flex-1 mx-1 ${className || ''}`}
      activeOpacity={0.8}
    >
      <View
        className={`items-center justify-center rounded-full shadow-sm w-12 h-12 ${bgColorClass}`}
      >
        <Ionicons name={icon as any} size={24} color={iconColorClass} />
      </View>
      <Text className="mt-2 text-xs font-medium text-gray-700">{title}</Text>
    </TouchableOpacity>
  );
}; 