// RestaurantLanding.tsx
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
import styles from './LanguageSelectionStyles'; // Import the styles

interface LanguageButtonProps {
  title: string;
  onPress: () => void;
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

const LanguageSelection: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleLanguageSelect = (language: string) => {
    console.log(`Selected language: ${language}`);
    navigation.navigate('CategorySelection');
  };

  const handleSocialMediaPress = (platform: string) => {
    const links = {
      facebook: 'https://facebook.com/montanarestaurant',
      instagram: 'https://instagram.com/montanarestaurant',
      snapchat: 'https://snapchat.com/add/montanarestaurant',
    };
    Linking.openURL(links[platform as keyof typeof links]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/images/Icons/HomePage/homePage.jpg')}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}> Your Favorite Coffee Spot</Text>
          
          <View style={styles.languageButtonsRow}>
            <LanguageButton title="كوردي" onPress={() => handleLanguageSelect('kurdish')} />
            <LanguageButton title="عربي" onPress={() => handleLanguageSelect('arabic')} />
            <LanguageButton title="English" onPress={() => handleLanguageSelect('english')} />
          </View>

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity onPress={() => handleSocialMediaPress('facebook')}>
              <Image 
                source={require('../../assets/images/Icons/SocialMedia/1/facebook.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialMediaPress('instagram')}>
              <Image 
                source={require('../../assets/images/Icons/SocialMedia/1/instagram.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.location}>Zaxo, New Zaxo</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LanguageSelection;
