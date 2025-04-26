import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionTitleWithActionProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  className?: string;
}

export const SectionTitleWithAction: React.FC<SectionTitleWithActionProps> = ({
  title,
  actionLabel,
  onActionPress,
  className,
}) => (
  <View className={`flex-row justify-between items-center ${className || ''}`}>
    <Text className="text-gray-700 uppercase font-semibold tracking-wide">{title}</Text>
    {actionLabel && (
      <TouchableOpacity onPress={onActionPress} activeOpacity={0.7}>
        <Text className="text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg">{actionLabel}</Text>
      </TouchableOpacity>
    )}
  </View>
); 