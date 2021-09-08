import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const CategoryButton = props => {
  const {category, navigation} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('Shop by category', {
          category: category.id,
          name: category.name,
        })
      }>
      <Category>
        <ImageContainer>
          <Image
            source={{uri: category.photo_url}}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
        </ImageContainer>
        <CategoryName>{category.name}</CategoryName>
      </Category>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const Category = styled.View`
  align-content: center;
  align-items: center;
  margin: 0px 20px;
`;

const ImageContainer = styled.View`
  height: 82px;
  width: 82px;
  padding: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: white;
  border: 1px solid rgb(235, 235, 235);
`;

const CategoryName = styled.Text`
  color: white;
  margin: 5px 0px;
  font-size: 18px;
  font-weight: 900;
  font-family: fantasy;
`;
