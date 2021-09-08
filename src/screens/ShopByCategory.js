import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ProductButton from '../components/ProductButton';
import {categories, jewelleries} from '../data/dataArrays';

const ShopByCategory = props => {
  let {category, name} = props.route.params;

  const getJewelleries = () => {
    return jewelleries.filter(item => item.categoryId === category);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 14,
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 14}}>
        {name}
      </Text>
      <FlatList
        data={getJewelleries()}
        keyExtractor={item => `${item.title}`}
        numColumns={2}
        renderItem={({item}) => <ProductButton product={item} />}
      />
    </View>
  );
};

export default ShopByCategory;
