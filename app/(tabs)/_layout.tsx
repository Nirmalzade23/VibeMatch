import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useContext } from 'react';
import { ThemeContext } from '../_layout';

export default function TabLayout() {
  const { dark } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: dark ? '#181A20' : '#fff',
          borderTopColor: dark ? '#23242a' : '#f0f0f0',
        },
        tabBarActiveTintColor: dark ? '#4F8CFF' : '#007AFF',
        tabBarInactiveTintColor: dark ? '#666' : '#999',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="seting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}