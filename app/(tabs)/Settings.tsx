import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profile from '@/data/profile';

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      <View className="px-6 pt-14 pb-5">
        <Text className="text-2xl font-bold">Settings</Text>
      </View>

      <View className="px-6 mb-6">
        <Text className="text-gray-500 text-sm font-medium mb-3">PROFILE</Text>
        <View className="bg-gray-50 rounded-xl p-4">
          <View className="flex-row items-center mb-4">
            <View className="bg-gray-200 w-12 h-12 rounded-full items-center justify-center mr-4">
              <Ionicons name="person" size={24} color="#6b7280" />
            </View>
            <View>
              <Text className="text-gray-800 font-semibold">{profile.firstName} {profile.lastName}</Text>
              <Text className="text-gray-500 text-sm">{profile.email}</Text>
            </View>
          </View>
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-t border-gray-100">
            <Text className="text-gray-800">Profile Information</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 mb-6">
        <Text className="text-gray-500 text-sm font-medium mb-3">SECURITY</Text>
        <View className="bg-gray-50 rounded-xl">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="finger-print" size={20} color="#3b82f6" />
              </View>
              <Text className="text-gray-800">Fingerprint Login</Text>
            </View>
            <Switch value={true} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="shield-checkmark" size={20} color="#22c55e" />
              </View>
              <Text className="text-gray-800">Two-Factor Authentication</Text>
            </View>
            <Switch value={false} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <View className="bg-red-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="lock-closed" size={20} color="#ef4444" />
              </View>
              <Text className="text-gray-800">Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 mb-6">
        <Text className="text-gray-500 text-sm font-medium mb-3">APP</Text>
        <View className="bg-gray-50 rounded-xl">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-purple-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="notifications" size={20} color="#7e22ce" />
              </View>
              <Text className="text-gray-800">Notifications</Text>
            </View>
            <Switch value={true} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-yellow-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="language" size={20} color="#facc15" />
              </View>
              <Text className="text-gray-800">Language</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-gray-500 mr-2">English</Text>
              <Ionicons name="chevron-forward" size={20} color="#6b7280" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <View className="bg-gray-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="moon" size={20} color="#6b7280" />
              </View>
              <Text className="text-gray-800">Dark Mode</Text>
            </View>
            <Switch value={false} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 mb-6">
        <Text className="text-gray-500 text-sm font-medium mb-3">HELP & SUPPORT</Text>
        <View className="bg-gray-50 rounded-xl">
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="help-circle" size={20} color="#3b82f6" />
              </View>
              <Text className="text-gray-800">Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="chatbubble-ellipses" size={20} color="#22c55e" />
              </View>
              <Text className="text-gray-800">Contact Us</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between p-4">
            <View className="flex-row items-center">
              <View className="bg-gray-100 w-10 h-10 rounded-full items-center justify-center mr-4">
                <Ionicons name="information-circle" size={20} color="#6b7280" />
              </View>
              <Text className="text-gray-800">About</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 mb-10">
        <TouchableOpacity className="bg-red-50 rounded-xl p-4 items-center">
          <Text className="text-red-600 font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}