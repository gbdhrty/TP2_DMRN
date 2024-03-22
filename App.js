import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProductsPage } from './screens/ProductsPage';
import { ProductInfoPage } from './screens/ProductInfoPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View 
      style={{ 
        flex: 1, 
        marginTop: StatusBar.currentHeight 
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={ProductsPage} 
            options={{ 
              headerTitle: 'Nossos Produtos', 
              headerTitleAlign: 'center',
            }} 
          />
          <Stack.Screen 
            name="ProductInfo" 
            component={ProductInfoPage} 
            options={{ 
              headerTitle: '', 
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}