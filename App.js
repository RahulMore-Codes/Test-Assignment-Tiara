import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ShopScreen from './src/screens/ShopScreen';
import SearchResultScreen from './src/screens/ShopByCategory';
import DrawerContent from './src/components/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image, TouchableOpacity, View} from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Shop" drawerContent={DrawerContent}>
        <Drawer.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitle: () => {
              return (
                <Image
                  source={require('./src/assets/images/logo.png')}
                  style={{alignSelf: 'center', height: 50, width: 240}}
                />
              );
            },
            headerRight: () => {
              return (
                <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{paddingRight: 5}}>
                    <Icon name="search" size={28} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Icon name="shopping-cart" size={28} />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Drawer.Screen name="Shop by category" component={SearchResultScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
