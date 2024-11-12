import React from 'react';
import MenuSection from './MenuSection';

const dessertsData = {
  crepes: {
    name: "Crepes",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Nutella Crepe", price: "$8", pictureUrl: require('./Dessert.jpg') },
      { id: 2, name: "Savory Crepe", price: "$9", pictureUrl: require('./Dessert.jpg') },
      { id: 3, name: "Savory Crepe", price: "$9", pictureUrl: require('./Dessert.jpg') },
      { id: 4, name: "Savory Crepe", price: "$9", pictureUrl: require('./Dessert.jpg') },
      { id: 5, name: "Savory Crepe", price: "$9", pictureUrl: require('./Dessert.jpg') },
    ],
  },
  waffles: {
    name: "Waffles",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Belgian Waffle", price: "$7", pictureUrl: require('./Dessert.jpg') },
    ],
  },
  kunafa: {
    name: "Kunafa",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Classic Kunafa", price: "$10", pictureUrl: require('./Dessert.jpg') },
    ],
  },
  fruitsAndIceCream: {
    name: "Fruits",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Fruit Salad", price: "$7", pictureUrl: require('./Dessert.jpg') },
    ],
  },
};

const DessertsMenu = () => (
  <MenuSection title="Desserts" sections={dessertsData} initialSection="crepes" />
);

export default DessertsMenu;
