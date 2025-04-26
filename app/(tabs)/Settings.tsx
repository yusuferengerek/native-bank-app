import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import profile from '@/data/profile';
import { Header } from '@/components/Header';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { SettingsItem, SettingsToggleItem } from '@/components/SettingsItem';
import { LogoutButton } from '@/components/LogoutButton';


export default function Settings() {
  return (
    <ScrollView
  className="flex-1 bg-white"
  contentContainerStyle={{ paddingTop: 40, paddingBottom: 32 }}
  showsVerticalScrollIndicator={false}
>
  <StatusBar barStyle="dark-content" />
  
  <Header title="Settings" className="mx-6 pt-0 pb-2" />

  <View className="mx-6 mb-8">
    <Text className="text-gray-500 text-sm font-semibold mb-3 tracking-wider">
      PROFILE
    </Text>
    <View className="bg-white rounded-2xl p-4 shadow-md shadow-black/60">
      <View className="flex-row items-center mb-4">
        <ProfileAvatar size={48} />
        <View className="ml-4">
          <Text className="text-gray-800 font-semibold text-base">
            {profile.firstName} {profile.lastName}
          </Text>
          <Text className="text-gray-500 text-sm">
            {profile.email}
          </Text>
        </View>
      </View>
      <SettingsItem
        icon="person"
        iconColor="#6b7280"
        iconBgColor="bg-gray-200"
        title="Profile Information"
        onPress={() => {}}
        showBorder={false}
      />
    </View>
  </View>

  <View className="mx-6 mb-8">
    <Text className="text-gray-500 text-sm font-semibold mb-3 tracking-wider">
      SECURITY
    </Text>
    <View className="bg-white rounded-2xl p-4 shadow-md shadow-black/60">
      <SettingsToggleItem
        icon="finger-print"
        iconColor="#3b82f6"
        iconBgColor="bg-blue-100"
        title="Fingerprint Login"
        value={true}
        onToggle={() => {}}
        onPress={() => {}}
      />
      <SettingsToggleItem
        icon="shield-checkmark"
        iconColor="#22c55e"
        iconBgColor="bg-green-100"
        title="Two-Factor Authentication"
        value={false}
        onToggle={() => {}}
        onPress={() => {}}
      />
      <SettingsItem
        icon="lock-closed"
        iconColor="#ef4444"
        iconBgColor="bg-red-100"
        title="Change Password"
        onPress={() => {}}
        showBorder={false}
      />
    </View>
  </View>

  <View className="mx-6 mb-8">
    <Text className="text-gray-500 text-sm font-semibold mb-3 tracking-wider">
      APP
    </Text>
    <View className="bg-white rounded-2xl p-4 shadow-md shadow-black/60">
      <SettingsToggleItem
        icon="notifications"
        iconColor="#7e22ce"
        iconBgColor="bg-purple-100"
        title="Notifications"
        value={true}
        onToggle={() => {}}
        onPress={() => {}}
      />
      <SettingsItem
        icon="language"
        iconColor="#facc15"
        iconBgColor="bg-yellow-100"
        title="Language"
        onPress={() => {}}
        rightElement={
          <View className="flex-row items-center">
            <Text className="text-gray-500 mr-2">English</Text>
          </View>
        }
      />
      <SettingsToggleItem
        icon="moon"
        iconColor="#6b7280"
        iconBgColor="bg-gray-100"
        title="Dark Mode"
        value={false}
        onToggle={() => {}}
        onPress={() => {}}
        showBorder={false}
      />
    </View>
  </View>

  <View className="mx-6 mb-8">
    <Text className="text-gray-500 text-sm font-semibold mb-3 tracking-wider">
      HELP & SUPPORT
    </Text>
    <View className="bg-white rounded-2xl p-4 shadow-md shadow-black/60">
      <SettingsItem
        icon="help-circle"
        iconColor="#3b82f6"
        iconBgColor="bg-blue-100"
        title="Help Center"
        onPress={() => {}}
      />
      <SettingsItem
        icon="chatbubble-ellipses"
        iconColor="#22c55e"
        iconBgColor="bg-green-100"
        title="Contact Us"
        onPress={() => {}}
      />
      <SettingsItem
        icon="information-circle"
        iconColor="#6b7280"
        iconBgColor="bg-gray-100"
        title="About"
        onPress={() => {}}
        showBorder={false}
      />
    </View>
  </View>

  <View className="mx-6 mt-4">
    <LogoutButton onPress={() => {}} />
  </View>
</ScrollView>

  );
}