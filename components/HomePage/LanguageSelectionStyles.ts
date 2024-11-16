// LanguageSelectionStyles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.2,
    marginBottom: 20,
    marginTop: -40, // Move up slightly
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.06, // Responsive font size
    color: '#FDEAC1',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  languageContainer: {
    width: '90%',
    maxWidth: 300,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Adjust to center content
    alignItems: 'center', // Center the content
  },
  languageButtonsRow: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: '#FDEAC1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  languageButtonText: {
    textAlign: 'center',
    fontSize: width * 0.04, // Responsive font size
    color: '#000',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialIcon: {
    marginHorizontal: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  location: {
    color: '#FDEAC1',
    fontSize: width * 0.04, // Responsive font size
    textAlign: 'center',
  },
});

export default styles;
