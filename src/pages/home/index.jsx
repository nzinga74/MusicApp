import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
function Home({ navigation }) {
  const topTracks = [
    {
      id: 1,
      title: 'Closer (feat Halsey)',
      artist: 'The Chainsmokers feat. Halsey',
      time: '03:20',
    },
    {
      id: 2,
      title: 'Closer (feat Halsey)',
      artist: 'The Chainsmokers feat. Halsey',
      time: '03:20',
    },
    {
      id: 3,
      title: 'Closer (feat Halsey)',
      artist: 'The Chainsmokers feat. Halsey',
      time: '03:20',
    },
    {
      id: 4,
      title: 'Closer (feat Halsey)',
      artist: 'The Chainsmokers feat. Halsey',
      time: '03:20',
    },
  ];
  const tracks = [
    {
      id: 1,
      title: 'Sucker',
      artist: 'Jonas Brother',
      url: '../../assets/track1.png',
    },
    {
      id: 2,
      title: 'Sucker',
      artist: 'Jonas Brother',
      url: '../../assets/track1.png',
    },
    {
      id: 3,
      title: 'Sucker',
      artist: 'Jonas Brother',
      url: '../../assets/track1.png',
    },
    {
      id: 4,
      title: 'Sucker',
      artist: 'Jonas Brother',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.banner}></View>
      <View style={styles.mainSection}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={topTracks}
          keyExtractor={item => String(item.id)}
          ListHeaderComponent={
            <>
              <Text style={styles.trackTitle}>Feactures Tracks</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={tracks}
                horizontal={true}
                scrollEventThrottle={16}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <TouchableOpacity key={item.id} style={styles.eachAlbum}>
                    <Image
                      style={styles.trackImage}
                      source={require('../../assets/track1.png')}
                    />
                    <Text style={styles.albumTitle}>{item.title}</Text>
                    <Text style={styles.albumArtist}>{item.artist}</Text>
                  </TouchableOpacity>
                )}
              />
              <Text style={styles.trackTitle}>Top Tracks</Text>
            </>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.topTrackList}
              onPress={() => navigation.navigate('Player')}
            >
              <Image
                style={styles.topTrackImage}
                source={require('../../assets/list1.png')}
              />
              <View style={styles.topTrackContent}>
                <Text style={[styles.albumTitle, styles.topTrackTitle]}>
                  Closer feat Halsey
                </Text>
                <Text style={styles.albumArtist}>
                  The Chainsmokers feat. Halsey
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
export default Home;
