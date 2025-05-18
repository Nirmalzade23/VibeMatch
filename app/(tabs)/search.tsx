import { Ionicons } from '@expo/vector-icons';
import { useContext, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../_layout';

export default function Search() {
  const { dark } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');

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
      marginBottom: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: dark ? '#23242a' : '#f0f0f0',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: dark ? '#fff' : '#333',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    section: {
      marginBottom: 30,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: dark ? '#fff' : '#333',
      marginBottom: 15,
    },
    categoriesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    categoryCard: {
      width: '48%',
      backgroundColor: dark ? '#23242a' : '#f8f8f8',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      alignItems: 'center',
    },
    categoryIcon: {
      marginBottom: 10,
    },
    categoryName: {
      fontSize: 16,
      fontWeight: '600',
      color: dark ? '#fff' : '#333',
    },
    popularSearchItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    popularSearchText: {
      fontSize: 16,
      color: dark ? '#fff' : '#333',
      marginLeft: 15,
    },
    searchResultItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    searchResultImage: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    searchResultInfo: {
      flex: 1,
      marginLeft: 15,
    },
    searchResultTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: dark ? '#fff' : '#333',
    },
    searchResultSubtitle: {
      fontSize: 14,
      color: dark ? '#aaa' : '#666',
    },
  }), [dark]);

  const categories = [
    { id: 1, name: 'Pop', icon: 'play' },
    { id: 2, name: 'Rock', icon: 'play' },
    { id: 3, name: 'Hip Hop', icon: 'play' },
    { id: 4, name: 'Jazz', icon: 'play' },
    { id: 5, name: 'Classical', icon: 'play' },
    { id: 6, name: 'Electronic', icon: 'play' },
  ];

  const popularSearches = [
    'Top Hits 2024',
    'Chill Vibes',
    'Workout Mix',
    'Study Music',
    'Party Playlist',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={dark ? "#4F8CFF" : "#007AFF"} />
          <TextInput
            style={styles.searchInput}
            placeholder="Songs, artists, or playlists"
            placeholderTextColor={dark ? "#666" : "#999"}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={dark ? "#666" : "#999"} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.content}>
        {searchQuery.length === 0 ? (
          <>
            {/* Browse Categories */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Browse Categories</Text>
              <View style={styles.categoriesGrid}>
                {categories.map((category) => (
                  <TouchableOpacity key={category.id} style={styles.categoryCard}>
                    <Ionicons
                      name={category.icon as any}
                      size={30}
                      color={dark ? "#4F8CFF" : "#007AFF"}
                      style={styles.categoryIcon}
                    />
                    <Text style={styles.categoryName}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Popular Searches */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Searches</Text>
              {popularSearches.map((search, index) => (
                <TouchableOpacity key={index} style={styles.popularSearchItem}>
                  <Ionicons name="trending-up" size={20} color={dark ? "#4F8CFF" : "#007AFF"} />
                  <Text style={styles.popularSearchText}>{search}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          // Search Results
          <View style={styles.section}>
            {[1, 2, 3, 4, 5].map((item) => (
              <TouchableOpacity key={item} style={styles.searchResultItem}>
                <Image
                  source={{ uri: 'https://picsum.photos/200' }}
                  style={styles.searchResultImage}
                />
                <View style={styles.searchResultInfo}>
                  <Text style={styles.searchResultTitle}>Search Result {item}</Text>
                  <Text style={styles.searchResultSubtitle}>Artist Name</Text>
                </View>
                <Ionicons name="play" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
