import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ActionButton from './ActionButton';

//Drawer contents
const DrawerContent = ({navigation}) => {
  return (
    <View>
      <DrawerHeader>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
          Welcome!
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <BtnLoginToContinue>
            <Text>Login to continue</Text>
          </BtnLoginToContinue>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Create an account
          </Text>
        </TouchableOpacity>
      </DrawerHeader>
      <Actions>
        <ActionButton iconNameLeft="home" text="Home" />
        <ActionButton iconNameLeft="store" text="Shop" />
        <ActionButton iconNameLeft="info" text="About Us" />
        <ActionButton iconNameLeft="settings" text="Settings" />
      </Actions>
    </View>
  );
};

export default DrawerContent;

const DrawerHeader = styled.View`
  height: 150px;
  background-color: rgb(204, 134, 138);
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 10px;
`;

const BtnLoginToContinue = styled.View`
  background-color: white;
  padding: 10px 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Actions = styled.View`
  align-items: flex-start;
  padding: 10px 10px;
`;
