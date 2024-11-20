import React from 'react';
import MenuSection from './MenuSection';

const hookahData = {
  classic: {
    name: "Classic Hookah",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Double Apple", price: "$15", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Mint", price: "$15", pictureUrl: require('./Hookah.jpg') },
    ],
  },
  special: {
    name: "Wan Special Hookah",
    iconUrl: require('./images/SectionIcon.png'), // Add the icon
    items: [
      { id: 1, name: "Spicy Mango", price: "$22", pictureUrl: require('./Hookah.jpg') },
      { id: 2, name: "Cinnamon Apple", price: "$22", pictureUrl: require('./Hookah.jpg') },
    ],
  },
};

const HookahMenu = () => (
  <MenuSection title="Hookah Menu" sections={hookahData} initialSection="classic" />
);

export default HookahMenu;
