import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Determine scaling factors based on screen size
const scale = width / 375; // A base width of 375 is typical for smaller phones (like iPhone 6)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    paddingTop: 20, // Ensure padding from top
  },
  content: {
    flexGrow: 1, // Ensure content stretches to fill the screen
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%', // Ensure content spans full width
  },
  title: {
    fontSize: width * 0.08, // Responsive font size for title
    color: '#FDEAC1',
    marginTop: height * 0.15, // Reduced marginTop for less space at the top
    marginBottom: height * 0.3, // Reduced marginBottom for less space below the title
    textAlign: 'center',
    fontFamily: 'DancingScript_700Bold',
  },
  languageContainer: {
    width: '90%',
    maxWidth: 300,
    paddingHorizontal: 20,
    marginBottom: 60,  // Increased marginBottom to push the next section down
    marginTop: 40,  // Reduced marginTop to push container further down
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButtonsRow: {
    width: '80%',
    alignSelf: 'center',
    marginTop: height * 0.07,  // Adjusted marginTop for more space between title and buttons
  },
  languageButton: {
    backgroundColor: '#FDEAC1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: width * 0.6,
  },
  languageButtonText: {
    textAlign: 'center',
    fontSize: width * 0.04, // Responsive font size for buttons
    color: '#000',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,  // Increased marginBottom to add more space
  },
  socialIcon: {
    width: width * 0.1,
    height: height * 0.055,
  },
});

export default styles;
