import React from 'react';
import MenuSection from './MenuSection';

const drinksData = {
  mocktails: {
    name: "Mocktails",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Tropical Mocktail", price: "$7", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Virgin Mojito", price: "$6", pictureUrl: require('./Drink.jpg') },
    ],
  },
  juices: {
    name: "Juices",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Fresh Orange Juice", price: "$4", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Mixed Fruit Juice", price: "$5", pictureUrl: require('./Drink.jpg') },
    ],
  },
  naturalCocktails: {
    name: "Natural Cocktails",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Mint Lemonade", price: "$6", pictureUrl: require('./Drink.jpg') },
    ],
  },
  smoothies: {
    name: "Smoothies",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Berry Blast Smoothie", price: "$8", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Banana Peanut Butter Smoothie", price: "$7", pictureUrl: require('./Drink.jpg') },
    ],
  },
  milkshakes: {
    name: "Milkshakes",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Chocolate Milkshake", price: "$6", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Vanilla Milkshake", price: "$5", pictureUrl: require('./Drink.jpg') },
    ],
  },
  mojitos: {
    name: "Mojitos",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Classic Mojito", price: "$8", pictureUrl: require('./Drink.jpg') },
    ],
  },
  
};

const ColdDrinksMenu = () => (
  <MenuSection title="Lounge Drinks" sections={drinksData} initialSection="mocktails" />
);

export default ColdDrinksMenu;
