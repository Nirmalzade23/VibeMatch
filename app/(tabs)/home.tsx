import { Ionicons } from '@expo/vector-icons';
import { useContext, useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../_layout';

export default function Home() {
  const { dark } = useContext(ThemeContext);

  const recentlyPlayed = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://picsum.photos/200/1' },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', image: 'https://picsum.photos/200/2' },
    { id: 3, title: 'Dance Monkey', artist: 'Tones and I', image: 'https://picsum.photos/200/3' },
    { id: 4, title: 'Someone You Loved', artist: 'Lewis Capaldi', image: 'https://picsum.photos/200/4' },
    { id: 5, title: 'Don\'t Start Now', artist: 'Dua Lipa', image: 'https://picsum.photos/200/5' },
  ];

  const madeForYou = [
    { id: 1, title: 'Daily Mix 1', description: 'The Weeknd, Dua Lipa, more', image: 'https://picsum.photos/200/6' },
    { id: 2, title: 'Discover Weekly', description: 'Your weekly mixtape', image: 'https://picsum.photos/200/7' },
    { id: 3, title: 'Release Radar', description: 'Catch all the latest music', image: 'https://picsum.photos/200/8' },
    { id: 4, title: 'Time Capsule', description: 'We made you a personalized playlist', image: 'https://picsum.photos/200/9' },
  ];

  const popularArtists = [
    { id: 1, name: 'Taylor Swift', image: 'https://picsum.photos/200/10' },
    { id: 2, name: 'Drake', image: 'https://picsum.photos/200/11' },
    { id: 3, name: 'Billie Eilish', image: 'https://picsum.photos/200/12' },
    { id: 4, name: 'Bad Bunny', image: 'https://picsum.photos/200/13' },
  ];

  const topCharts = [
    { id: 1, title: 'Top 50 Global', description: 'Your daily update of the most played tracks', image: 'https://picsum.photos/200/14' },
    { id: 2, title: 'Viral Hits', description: 'Trending tracks on social media', image: 'https://picsum.photos/200/15' },
    { id: 3, title: 'All Out 2010s', description: 'The biggest songs of the 2010s', image: 'https://picsum.photos/200/16' },
    { id: 4, title: 'Rock Classics', description: 'Rock legends & epic songs', image: 'https://picsum.photos/200/17' },
  ];

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: dark ? '#181A20' : '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: dark ? '#181A20' : '#fff',
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    headerLeft: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: dark ? '#4F8CFF' : '#007AFF',
    },
    headerRight: {
      flexDirection: 'row',
      gap: 20,
    },
    iconButton: {
      padding: 5,
    },
    content: {
      flex: 1,
    },
    section: {
      padding: 20,
    },
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: dark ? '#fff' : '#333',
      marginBottom: 15,
    },
    sectionSubtitle: {
      fontSize: 16,
      color: dark ? '#aaa' : '#666',
      marginBottom: 20,
    },
    playlistScroll: {
      marginHorizontal: -20,
      paddingHorizontal: 20,
    },
    playlistCard: {
      width: 160,
      marginRight: 15,
    },
    playlistImage: {
      width: 160,
      height: 160,
      borderRadius: 10,
      marginBottom: 8,
    },
    playlistTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: dark ? '#fff' : '#333',
    },
    playlistSubtitle: {
      fontSize: 14,
      color: dark ? '#aaa' : '#666',
    },
    trackItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: dark ? '#23242a' : '#f0f0f0',
    },
    trackImage: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    trackInfo: {
      flex: 1,
      marginLeft: 15,
    },
    trackTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: dark ? '#fff' : '#333',
    },
    trackArtist: {
      fontSize: 14,
      color: dark ? '#aaa' : '#666',
    },
    playButton: {
      padding: 10,
    },
    artistCard: {
      width: 120,
      marginRight: 15,
      alignItems: 'center',
    },
    artistImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 8,
    },
    artistName: {
      fontSize: 14,
      fontWeight: '600',
      color: dark ? '#fff' : '#333',
      textAlign: 'center',
    },
    miniPlayer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: dark ? '#23242a' : '#f8f8f8',
      borderTopWidth: 1,
      borderTopColor: dark ? '#23242a' : '#f0f0f0',
    },
    miniPlayerImage: {
      width: 40,
      height: 40,
      borderRadius: 5,
    },
    miniPlayerInfo: {
      flex: 1,
      marginLeft: 15,
    },
    miniPlayerTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: dark ? '#fff' : '#333',
    },
    miniPlayerArtist: {
      fontSize: 12,
      color: dark ? '#aaa' : '#666',
    },
    miniPlayerControls: {
      flexDirection: 'row',
      gap: 20,
    },
  }), [dark]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>VibeMatch</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="time-outline" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="add-circle-outline" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Recently Played */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistScroll}>
            {recentlyPlayed.map((track) => (
              <TouchableOpacity key={track.id} style={styles.playlistCard}>
                <Image source={{ uri: track.image }} style={styles.playlistImage} />
                <Text style={styles.playlistTitle}>{track.title}</Text>
                <Text style={styles.playlistSubtitle}>{track.artist}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Made for You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Made for You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistScroll}>
            {madeForYou.map((playlist) => (
              <TouchableOpacity key={playlist.id} style={styles.playlistCard}>
                <Image source={{ uri: playlist.image }} style={styles.playlistImage} />
                <Text style={styles.playlistTitle}>{playlist.title}</Text>
                <Text style={styles.playlistSubtitle}>{playlist.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Artists */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Artists</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistScroll}>
            {popularArtists.map((artist) => (
              <TouchableOpacity key={artist.id} style={styles.artistCard}>
                <Image source={{ uri: artist.image }} style={styles.artistImage} />
                <Text style={styles.artistName}>{artist.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Top Charts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Charts</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistScroll}>
            {topCharts.map((chart) => (
              <TouchableOpacity key={chart.id} style={styles.playlistCard}>
                <Image source={{ uri: chart.image }} style={styles.playlistImage} />
                <Text style={styles.playlistTitle}>{chart.title}</Text>
                <Text style={styles.playlistSubtitle}>{chart.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.miniPlayerImage}
        />
        <View style={styles.miniPlayerInfo}>
          <Text style={styles.miniPlayerTitle}>Now Playing</Text>
          <Text style={styles.miniPlayerArtist}>Artist Name</Text>
        </View>
        <View style={styles.miniPlayerControls}>
          <TouchableOpacity>
            <Ionicons name="play" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="play-forward" size={24} color={dark ? "#4F8CFF" : "#007AFF"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}