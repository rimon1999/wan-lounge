import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HookahMenu: undefined;
  ColdDrinksMenu: undefined;
  CoffeeMenu: undefined;
  DessertsMenu: undefined;
};

type CategorySelectionProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

type RouteNames = keyof RootStackParamList;

type Category = {
  id: string;
  name: string;
  image: any;
  route: RouteNames;
};

const CategorySelection: React.FC<CategorySelectionProps> = ({ navigation }) => {
  const categories: Category[] = [
    {
      id: 'coffee',
      name: 'Coffee',
      image: require('../../assets/images/Coffee.jpg'),
      route: 'CoffeeMenu'
    },
    {
      id: 'coldDrinks',
      name: 'Cold Drinks',
      image: require('../../assets/images/Drinks.jpg'),
      route: 'ColdDrinksMenu'
    },
    {
      id: 'hookah',
      name: 'Hookah',
      image: require('../../assets/images/Hookah.jpg'),
      route: 'HookahMenu'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: require('../../assets/images/Desserts.jpg'),
      route: 'DessertsMenu'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Select Category</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            onPress={() => navigation.navigate(category.route)}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <View style={styles.overlay}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDEAC1',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%', // Width is 48% to fit two items per row with a small gap
    aspectRatio: 9 / 16, // Aspect ratio instead of fixed height
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 16,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#FDEAC1',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategorySelection;
