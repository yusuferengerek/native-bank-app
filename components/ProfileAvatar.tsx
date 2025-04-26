import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ProfileAvatarProps {
  avatar?: ImageSourcePropType;
  size?: number;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  avatar,
  size = 40,
}) => {
  const imageSize = size * 0.6;
  const borderRadius = imageSize / 2;

  return (
    <View 
    className="bg-gray-300 items-center justify-center shadow-sm shadow-black/10"
    style={{ width: size, height: size, borderRadius: size / 2 }}>
      {avatar ? (
        <Image source={avatar} style={{ width: imageSize, height: imageSize, borderRadius }} />
      ) : (
        <Ionicons name="person" size={imageSize} color="white" />
      )}
    </View>
  );
}; 