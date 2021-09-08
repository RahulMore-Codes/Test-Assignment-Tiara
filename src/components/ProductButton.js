import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

const ProductButton = props => {
  const {product} = props;
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Card>
        <Image
          source={{uri: product.photo_url}}
          style={{
            height: 120,
            width: width / 2 - 20,
            alignSelf: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <ProductDetailView>
          <Price>₹{product.price}</Price>
          <Name>{product.title}</Name>
        </ProductDetailView>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductButton;

const Card = styled.View`
  width: ${width / 2 - 20}px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(166, 108, 111);
  align-items: center;
`;

const ProductDetailView = styled.View`
  flex: 1;
  align-items: center;
  padding: 5px 5px;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: white;
`;
const Name = styled.Text`
  font-size: 16px;
  color: white;
`;
