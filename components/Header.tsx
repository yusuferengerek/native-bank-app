import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { ProfileAvatar } from './ProfileAvatar';
import { ImageSourcePropType } from 'react-native';

interface HeaderProps {
  title?: string;
  showAvatar?: boolean;
  avatar?: ImageSourcePropType;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showAvatar = false,
  avatar,
  leftComponent,
  rightComponent,
  className,
}) => {
  return (
    <View className={`flex-row justify-between items-center py-2 ${className || ''}`}>
      {leftComponent || (title ? <Text className="text-3xl font-bold text-gray-800">{title}</Text> : null)}
      {rightComponent || (showAvatar ? <ProfileAvatar avatar={avatar} size={40} /> : null)}
    </View>
  );
}; 