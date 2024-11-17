import React from 'react';
import { TouchableOpacity, Image, Dimensions, Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook for navigation functionality
import LanguageSelection from '../../components/HomePage/LanguageSelection';
import CategorySelection from '../../components/CategorySelection/CategorySelection';
import HookahMenu from '../../components/MenuSection/HookahMenu';
import ColdDrinksMenu from '../../components/MenuSection/ColdDrinksMenu';
import CoffeeMenu from '../../components/MenuSection/CoffeeMenu';
import DessertsMenu from '../../components/MenuSection/DessertsMenu';

const { width, height } = Dimensions.get('window');

// Define a threshold for tablet size (e.g., 600px screen width)
const isTablet = width >= 600;
const isWeb = Platform.OS === 'web'; // Detect if the platform is web

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="LanguageSelection"
      screenOptions={({ route }) => ({
        headerTitle: '', // Removes the title text from the header
        headerTransparent: true, // Makes the header background transparent
        headerTintColor: '#FDEAC1', // Sets the color of the back button
        headerLeft: () =>
          route.name === 'LanguageSelection' ? null : (
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require('../../assets/images/BackButton.png')}
                style={styles.backButton}
              />
            </TouchableOpacity>
          ),
        headerRight: () =>
          route.name === 'LanguageSelection' ? null : ( // Only show logo if not on LanguageSelection screen
            <Image
              source={require('../../assets/images/Logo.png')}
              style={styles.logo}
            />
          ),
      })}
    >
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
      <Stack.Screen name="CategorySelection" component={CategorySelection} />
      <Stack.Screen name="HookahMenu" component={HookahMenu} />
      <Stack.Screen name="ColdDrinksMenu" component={ColdDrinksMenu} />
      <Stack.Screen name="CoffeeMenu" component={CoffeeMenu} />
      <Stack.Screen name="DessertsMenu" component={DessertsMenu} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: isWeb ? '2%' : width * 0.01, // Ensure 2% margin for web (to avoid clipping)
    marginTop: isWeb ? '2%' : 0, // Ensure there's no overflow at the top on web
  },
  backButton: {
    width: isTablet ? width * 0.05 : Math.min(width * 0.09, 40), // Cap the width for smaller screens
    height: isTablet ? height * 0.06 : Math.min(height * 0.06, 40), // Cap the height for smaller screens
    marginTop: 0, // Reset marginTop for the back button to avoid pushing it out of view
  },
  logo: {
    width: isTablet ? width * 0.08 : Math.min(width * 0.12, 80), // Cap the width for smaller screens
    height: isTablet ? height * 0.06 : Math.min(height * 0.12, 80), // Cap the height for smaller screens
    marginRight: isWeb ? '2%' : width * 0.01, // Ensure 2% margin for web (avoiding clipping)
    marginTop: isWeb ? '2%' : isTablet ? -height * 0.01 : -height * 0.08, // Adjust marginTop for web to prevent overflow
    resizeMode: 'contain', // Ensure the logo scales correctly
  },
});

export default AppNavigator;
