import React from 'react';
import { ScrollView, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; // Adjust path if needed

const App: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <AppNavigator />
        </ScrollView>
    );
};

export default App;
