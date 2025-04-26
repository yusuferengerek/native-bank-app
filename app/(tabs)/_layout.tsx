import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import '../globals.css';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={
        {
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E8F',
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#E5E5EA',
            height: 60,
            paddingBottom: 10
          }
        }
      }
    >
      <Tabs.Screen
        name='Home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='CardInfo'
        options={{
          title: 'Card Details',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='card-outline' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='History'
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='time-outline' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='Settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
