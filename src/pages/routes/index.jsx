import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Splash from '../splash';
import Youtube from '../Youtube';
import Radio from '../Radio';
import Notification from '../Notification';
import Player from '../player';
import Tv from '../Tv';
import { styles } from './styles';
const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.mainButtonTab} onPress={onPress}>
    <View style={styles.mainButtonTabView}>{children}</View>
  </TouchableOpacity>
);
function Tab() {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
        },

        activeTintColor: ' #F51E38',
        inactiveTintColor: '#DADADA',
      }}
    >
      <TabNavigator.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name='home'
                color={focused ? '#F51E38' : '#DADADA'}
                size={(25, 25)}
              />
              <Text style={{ color: focused ? '#F51E38' : '#DADADA' }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name='Tv'
        component={Tv}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name='tv'
                color={focused ? '#F51E38' : '#DADADA'}
                size={(25, 25)}
              />
              <Text style={{ color: focused ? '#F51E38' : '#DADADA' }}>TV</Text>
            </View>
          ),
        }}
      />

      <TabNavigator.Screen
        name='Youtube'
        component={Youtube}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name='logo-youtube' color='#fff' size={(25, 25)} />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <TabNavigator.Screen
        name='Notification'
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons
                name='notifications'
                color={focused ? '#F51E38' : '#DADADA'}
                size={(25, 25)}
              />
              <Text style={{ color: focused ? '#F51E38' : '#DADADA' }}>
                Notificatiob
              </Text>
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name='Radio'
        component={Radio}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons
                name='md-radio'
                color={focused ? '#F51E38' : '#DADADA'}
                size={(25, 25)}
              />
              <Text style={{ color: focused ? '#F51E38' : '#DADADA' }}>
                Radio
              </Text>
            </View>
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}
function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          title: 'Login',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#F51E38',
            boxShadow: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <StackNavigator.Screen name='Splash' component={Splash} />
        <StackNavigator.Screen name='Tab' component={Tab} />
        <StackNavigator.Screen name='Player' component={Player} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
