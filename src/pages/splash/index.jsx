import React, { useRef } from 'react';
import {
  Text,
  View,
  FlatList,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
function Splash({ navigation }) {
  const { width, height } = Dimensions.get('window');
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;
  const scrollStyled = {
    justifyContent: 'center',
    alignItems: 'center',
  };
  const data = [
    {
      id: 1,
      title: 'Listening and watching anytime, anywhere',
      content:
        'The artists we represent are one of the most successful in Romania and also were a huge breakthrough.',
    },
    {
      id: 2,
      title: 'Listening ',
      content: 'The artists we in Romania and also were a huge breakthrough.',
    },
  ];
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      contentContainerStyle={scrollStyled}
    >
      <View style={[{ width, height }, styles.centered]}>
        <Image
          source={require('../../assets/tj.png')}
          style={[styles.imageSlide, styles.smallImage]}
        />
        <Text style={styles.title}>
          Listening and watching anytime, anywhere
        </Text>
        <Text style={styles.description}>
          The artists we represent are one of the most successful in Romania and
          also were a huge breakthrough.
        </Text>
      </View>
      <View style={[{ width, height }, styles.centered]}>
        <Image
          source={require('../../assets/head.png')}
          style={[styles.imageSlide, styles.smallImage]}
        />
        <Text style={styles.title}>
          Listening and watching anytime, anywhere
        </Text>
        <Text style={styles.description}>
          The artists we represent are one of the most successful in Romania and
          also were a huge breakthrough.
        </Text>
      </View>
      <View style={[{ width, height }, styles.centered]}>
        <Image
          source={require('../../assets/dj.png')}
          style={[styles.imageSlide, styles.smallImage]}
        />
        <Text style={styles.title}>
          Listening and watching anytime, anywhere
        </Text>
        <Text style={styles.description}>
          The artists we represent are one of the most successful in Romania and
          also were a huge breakthrough.
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <Text style={styles.acessLink}>
              Vamos ouvir Proxíma geração de Música
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
}
export default Splash;
