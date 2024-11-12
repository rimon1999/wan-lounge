// CoffeeMenu.tsx
import React from 'react';
import MenuSection from './MenuSection';

const coffeeData = {
  hotCoffees: {
    name: "Hot Coffees",
    iconUrl: require('./images/SectionIcon.png'), // Add an icon for the section
    items: [
      { id: 1, name: "Espresso", price: "$3", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Cappuccino", price: "$4", pictureUrl: require('./Drink.jpg') },
      { id: 3, name: "Latte",  price: "$4.50", pictureUrl: require('./Drink.jpg') },
      { id: 4, name: "Americano", price: "$3.50", pictureUrl: require('./Drink.jpg') },
    ],
  },
  icedCoffees: {
    name: "Iced Coffees",
    iconUrl: require('./images/SectionIcon.png'), // Add an icon for the section
    items: [
      { id: 1, name: "Iced Coffee",  price: "$3.50", pictureUrl: require('./Drink.jpg') },
      { id: 2, name: "Iced Latte", price: "$4.50", pictureUrl: require('./Drink.jpg') },
    ],
  },
};

const CoffeeMenu = () => (
  <MenuSection title="Coffee Menu" sections={coffeeData} initialSection="hotCoffees" />
);

export default CoffeeMenu;
