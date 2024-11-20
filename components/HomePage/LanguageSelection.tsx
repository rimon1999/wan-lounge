import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import navigation types
import styles from './LanguageSelectionStyles'; // Import the styles
import { useFonts } from 'expo-font'; // Import expo-font
import { StatusBar } from 'react-native';

interface LanguageButtonProps {
  title: string;
  onPress: () => void;
}

interface Props {
  navigation: StackNavigationProp<any, any>; // Replace `any` with your navigation type
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.languageButton}
    onPress={onPress}
    accessible={true}
    accessibilityLabel={`Select ${title} language`}
  >
    <Text style={styles.languageButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LanguageSelection: React.FC<Props> = ({ navigation }) => {
  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`);
    navigation.navigate('CategorySelection');
  };

  const handleSocialMediaPress = (platform: string) => {
    const links: { [key: string]: string } = {
      facebook: 'https://facebook.com/montanarestaurant',
      instagram: 'https://instagram.com/montanarestaurant',
    };
    Linking.openURL(links[platform]);
  };

  // Load the custom fonts from assets
  const [fontsLoaded] = useFonts({
    'Stash Regular': require('../../assets/fonts/stash/Stash Regular.otf'),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: '#FDEAC1', fontSize: 20 }}>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/Icons/HomePage/homePage.jpg')}
        resizeMode="cover" // Ensures image covers the full screen without distortion
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[styles.title, { fontFamily: 'Stash Regular' }]}>
            The Pure Taste of
          </Text>

          <View style={styles.languageButtonsRow}>
            <LanguageButton title="كوردي" onPress={() => handleLanguageSelect('kurdish')} />
            <LanguageButton title="عربي" onPress={() => handleLanguageSelect('arabic')} />
            <LanguageButton title="English" onPress={() => handleLanguageSelect('english')} />
          </View>

          <View style={styles.socialMediaContainer}>

            <TouchableOpacity onPress={() => handleSocialMediaPress('instagram')}>
              <Image
                source={require('../../assets/images/Icons/SocialMedia/1/instagram.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>

          {/* <Text style={styles.location}></Text> */}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LanguageSelection;
