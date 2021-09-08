import React from 'react';
import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';
import CategoryButton from '../components/CategoryButton';
import {categories, jewelleries} from '../data/dataArrays';
import ProductButton from '../components/ProductButton';

const ShopScreen = props => {
  return (
    <View style={{backgroundColor: 'rgb(204, 134, 138)'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <React.Fragment>
            <CategoriesView>
              <Header>Shop by category</Header>
              <FlatList
                data={categories}
                keyExtractor={item => `${item.id}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <CategoryButton
                    category={item}
                    navigation={props.navigation}
                  />
                )}
              />
            </CategoriesView>
            <Header>Jewelleries</Header>
          </React.Fragment>
        )}
        nestedScrollEnabled={false}
        data={jewelleries}
        keyExtractor={item => `${item.title}`}
        renderItem={({item}) => <ProductButton product={item} />}
        numColumns={2}
      />
      <AllProductsView></AllProductsView>
    </View>
  );
};

export default ShopScreen;

const Header = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 10px;
  font-family: 'Times New Roman';
`;

const CategoriesView = styled.View``;

const AllProductsView = styled.View`
  flex: 1;
`;
