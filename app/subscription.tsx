import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useContext, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './_layout';

export default function Subscription() {
  const { dark } = useContext(ThemeContext);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: dark ? '#181A20' : '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      paddingTop: 20,
      backgroundColor: dark ? '#181A20' : '#fff',
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    backButton: {
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: dark ? '#4F8CFF' : '#007AFF',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: dark ? '#aaa' : '#666',
      marginBottom: 10,
    },
    card: {
      backgroundColor: dark ? '#23242a' : '#f0f0f0',
      borderRadius: 12,
      padding: 15,
    },
    cardText: {
      fontSize: 16,
      color: dark ? '#fff' : '#333',
      marginBottom: 5,
    },
    button: {
      backgroundColor: dark ? '#4F8CFF' : '#007AFF',
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  }), [dark]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={dark ? '#4F8CFF' : '#007AFF'} 
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Current Subscription Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Plan</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>Current Plan: Free Tier</Text>
            <Text style={styles.cardText}>Expires: N/A</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Upgrade to Premium</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Subscription Options (Placeholder) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Options</Text>
          <View style={styles.card}>
             <TouchableOpacity>
                <Text style={[styles.cardText, { marginBottom: 10 }]}>Manage Payment Methods</Text>
             </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.cardText}>View Billing History</Text>
             </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
} 