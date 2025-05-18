import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useContext, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../_layout';

export default function Settings() {
  const { dark, toggle } = useContext(ThemeContext);
  const [notifications, setNotifications] = useState(true);
  const [highQuality, setHighQuality] = useState(true);
  const [downloadOverWifi, setDownloadOverWifi] = useState(true);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: dark ? '#181A20' : '#fff',
    },
    header: {
      padding: 20,
      paddingTop: 20,
      backgroundColor: dark ? '#181A20' : '#fff',
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: dark ? '#4F8CFF' : '#007AFF',
    },
    content: {
      flex: 1,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: dark ? '#aaa' : '#666',
      marginLeft: 20,
      marginBottom: 10,
    },
    sectionContent: {
      backgroundColor: dark ? '#23242a' : '#fff',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: dark ? '#23242a' : '#f0f0f0',
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    settingItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingItemText: {
      fontSize: 16,
      color: dark ? '#fff' : '#333',
      marginLeft: 15,
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      padding: 15,
      backgroundColor: dark ? '#23242a' : '#fff',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#FF3B30',
    },
    logoutText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FF3B30',
      marginLeft: 10,
    },
  }), [dark]);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: 'person-outline', title: 'Profile', action: () => router.push("/profile") },
        { icon: 'card-outline', title: 'Subscription', action: () => router.push("/subscription") },
        { icon: 'download-outline', title: 'Downloads', action: () => {} },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: 'notifications-outline', title: 'Notifications', type: 'switch', value: notifications, onValueChange: setNotifications },
        { icon: 'moon-outline', title: 'Dark Mode', type: 'switch', value: dark, onValueChange: toggle },
        { icon: 'musical-notes-outline', title: 'High Quality Streaming', type: 'switch', value: highQuality, onValueChange: setHighQuality },
        { icon: 'wifi-outline', title: 'Download Over WiFi Only', type: 'switch', value: downloadOverWifi, onValueChange: setDownloadOverWifi },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: 'help-circle-outline', title: 'Help Center', action: () => {} },
        { icon: 'information-circle-outline', title: 'About', action: () => {} },
        { icon: 'document-text-outline', title: 'Terms of Service', action: () => {} },
        { icon: 'shield-checkmark-outline', title: 'Privacy Policy', action: () => {} },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={styles.settingItem}
                  onPress={('action' in item) ? item.action : undefined}
                  activeOpacity={('action' in item) ? 0.7 : 1}
                >
                  <View style={styles.settingItemLeft}>
                    <Ionicons name={item.icon as any} size={24} color="#007AFF" />
                    <Text style={styles.settingItemText}>{item.title}</Text>
                  </View>
                  {'type' in item && item.type === 'switch' ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onValueChange}
                      trackColor={{ false: '#767577', true: '#81b0ff' }}
                      thumbColor={item.value ? '#007AFF' : '#f4f3f4'}
                    />
                  ) : (
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => router.push("/")}
        >
          <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
