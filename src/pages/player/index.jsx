import React from 'react';
import { styles } from './styles';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ProgressBarAndroidComponent,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Player() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/outstreet.png')}
        style={styles.heroImage}
      />
      <View style={styles.playerBody}>
        <View style={styles.avatarBody}>
          <Image
            source={require('../../assets/avatar.png')}
            style={styles.avatarImage}
          />
          <Text style={styles.titleMusic}>Sucker</Text>
          <Text style={styles.artist}>Jonas Brothers</Text>
        </View>
        <View style={styles.iconOptions}>
          <TouchableOpacity>
            <Ionicons name='menu-outline' size={(25, 25)} color='#AAA' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='md-download-outline' size={(25, 25)} color='#AAA' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='reload' size={(25, 25)} color='#AAA' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='ios-volume-high-outline'
              size={(25, 25)}
              color='#AAA'
            />
          </TouchableOpacity>
        </View>
        <View></View>
        <View style={styles.viewControl}>
          <TouchableOpacity>
            <Ionicons name='play-back-outline' size={(25, 25)} color='#AAA' />
          </TouchableOpacity>
          <View style={styles.stopButton}>
            <View style={styles.stopCentralButton}>
              <Ionicons name='pause' size={(25, 25)} color='#ffffff' />
            </View>
          </View>
          <Ionicons name='play-forward-outline' size={(25, 25)} color='#AAA' />
        </View>
      </View>
    </View>
  );
}
export default Player;
