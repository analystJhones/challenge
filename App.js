import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import Description from './src/screen/Description';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#004dcf',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Resgate' }}/>
        <Stack.Screen name="Description" component={Description} options={{ title: 'Resgate' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;