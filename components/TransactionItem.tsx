import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import formatCurrency from '@/utils/formatCurrency';
import formatDate from '@/utils/formatDate';

interface TransactionItemProps {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  icon: string;
  iconColor: string;
  color: string;
  compact?: boolean;
  style?: ViewStyle;
}

const colorMap: Record<string, string> = {
  'bg-blue-100': '#dbeafe',
  'bg-green-100': '#dcfce7',
  'bg-yellow-100': '#fef9c3',
  'bg-red-100': '#fee2e2',
  'bg-gray-50': '#f9fafb',
  'bg-gray-100': '#f3f4f6',
  'bg-gray-200': '#e5e7eb',
  'bg-purple-100': '#f3e8ff',
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  subtitle,
  amount,
  date,
  type,
  icon,
  iconColor,
  color,
  compact = false,
  style,
}) => {
  const resolvedBg = colorMap[color] || color;
  const formattedDate = formatDate(date);

  return (
    <View
      className={`
        bg-white rounded-3xl p-4 mb-3 
        ${compact ? 'flex-col' : 'flex-row'} 
        ${compact ? '' : 'items-center justify-between'} 
        shadow-sm border border-gray-200
      `}
      style={style}
    >
      <View className="flex-row items-center">
        <View
          style={{ backgroundColor: resolvedBg }}
          className="w-12 h-12 rounded-lg items-center justify-center mr-4"
        >
          <Ionicons name={icon as any} size={22} color={iconColor} />
        </View>
        <View>
          <Text className="font-semibold text-gray-900 text-base">{title}</Text>
          <Text className="text-gray-500 text-xs mt-1">{subtitle}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text
          className={`
            font-semibold 
            ${type === 'expense' ? 'text-red-600' : 'text-green-600'}
            text-sm
          `}
        >
          {type === 'expense' ? '- ' : '+ '}{formatCurrency({ amount })}
        </Text>
        <Text className="text-gray-500 text-xs mt-1">{formattedDate}</Text>
      </View>
    </View>
  );
};
