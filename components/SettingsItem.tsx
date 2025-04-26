import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, Switch, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingsItemProps {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  onPress: () => void;
  rightElement?: ReactNode;
  showBorder?: boolean;
  style?: ViewStyle;
}

export const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  onPress,
  rightElement,
}) => {
  const bgColorMap: Record<string, string> = {
    'bg-blue-100': '#dbeafe',
    'bg-green-100': '#dcfce7',
    'bg-yellow-100': '#fef9c3',
    'bg-red-100': '#fee2e2',
    'bg-gray-50': '#f9fafb',
    'bg-gray-100': '#f3f4f6',
    'bg-gray-200': '#e5e7eb',
    'bg-purple-100': '#f3e8ff',
  };
  const resolvedIconBg = bgColorMap[iconBgColor] || iconBgColor;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className='flex-row items-center justify-between py-4 px-4 border-b border-gray-200'
    >
      <View className="flex-row items-center">
        <View
          className={`w-12 h-12 rounded-full items-center justify-center mr-4 shadow-sm ${iconBgColor}`}
        >
          <Ionicons name={icon as any} size={20} color={iconColor} />
        </View>
        <Text className="text-gray-900 text-base">{title}</Text>
      </View>
      {rightElement || <Ionicons name="chevron-forward" size={20} color="#6b7280" />}
    </TouchableOpacity>
  );
};

export const SettingsToggleItem: React.FC<Omit<SettingsItemProps, 'rightElement'> & { value: boolean, onToggle: (value: boolean) => void }> = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  onPress,
  value,
  onToggle,
  showBorder = true,
  style,
}) => {
  return (
    <SettingsItem
      icon={icon}
      iconColor={iconColor}
      iconBgColor={iconBgColor}
      title={title}
      onPress={onPress}
      showBorder={showBorder}
      style={style}
      rightElement={<Switch value={value} onValueChange={onToggle} />}
    />
  );
};
