import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useContext, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from './_layout';

export default function Profile() {
  const { dark } = useContext(ThemeContext);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 234 567 8900');
  const [profileImage, setProfileImage] = useState('https://picsum.photos/200');

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
    profileImageContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 15,
    },
    changePhotoButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: dark ? '#23242a' : '#f0f0f0',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    changePhotoText: {
      color: dark ? '#4F8CFF' : '#007AFF',
      marginLeft: 5,
      fontSize: 16,
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: dark ? '#aaa' : '#666',
      marginBottom: 8,
    },
    input: {
      backgroundColor: dark ? '#23242a' : '#f0f0f0',
      borderRadius: 12,
      padding: 15,
      fontSize: 16,
      color: dark ? '#fff' : '#333',
    },
    saveButton: {
      backgroundColor: dark ? '#4F8CFF' : '#007AFF',
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 20,
    },
    saveButtonText: {
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
        <Text style={styles.headerTitle}> Profile</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image 
            source={{ uri: profileImage }} 
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.changePhotoButton}>
            <Ionicons 
              name="camera" 
              size={20} 
              color={dark ? '#4F8CFF' : '#007AFF'} 
            />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
            placeholderTextColor={dark ? '#666' : '#999'}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={dark ? '#666' : '#999'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            placeholderTextColor={dark ? '#666' : '#999'}
            keyboardType="phone-pad"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => {
            // Handle save action
            router.back();
          }}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
