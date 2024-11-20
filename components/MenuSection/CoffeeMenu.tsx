// CoffeeMenu.tsx
import React from 'react';
import MenuSection from './MenuSection';

const coffeeData = {
  hotCoffees: {
    name: "Hot Coffees",
    iconUrl: require('../../assets/images/Icons/Coffee/HotCoffee2.png'),
    items: [
      { id: 1, name: "Espresso", price: "$3", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Cappuccino", price: "$4", pictureUrl: require('./Drink.jpg') },
      { id: 3, name: "Latte",  price: "$4.50", pictureUrl: require('./Drink.jpg') },
      { id: 4, name: "Americano", price: "$3.50", pictureUrl: require('./Drink.jpg') },
      { id: 5, name: "Americano", price: "$3.50", pictureUrl: require('./Drink.jpg') }

    ],
  },
  icedCoffees: {
    name: "Iced Coffees",
    iconUrl: require('./images/SectionIcon.png'), // Add an icon for the section
    items: [
      { id: 1, name: "Iced Coffee",  price: "$3.50", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Iced Latte", price: "$4.50", pictureUrl: require('./Drink.jpg') },
      { id: 3, name: "Iced Latte", price: "$4.50", pictureUrl: require('./Drink.jpg') },
    ],
  },
  hotDrinks:{
name: "Hot Drinks",
iconUrl: require('./images/SectionIcon.png'),
items:[
  { id: 1, name: "Hot Drinks",  price: "$3.50", pictureUrl: require('./Drink.jpg') },
  { id: 2, name: "Hot Drinks", price: "$4.50", pictureUrl: require('./Drink.jpg') },
  { id: 3, name: "Hot Drinks", price: "$4.50", pictureUrl: require('./Drink.jpg') },
]
  }
};

const CoffeeMenu = () => (
  <MenuSection title="Coffee Menu" sections={coffeeData} initialSection="hotCoffees" />
);

export default CoffeeMenu;
