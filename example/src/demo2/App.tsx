import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Button } from 'react-native';
import { screenComponents } from './__internal__/Components';
import {
  ScreenComponent,
  getComponentList,
  registerComponent,
  Stack,
  unregisterComponents,
} from './__internal__/Utils';
import { styleValues } from './__internal__/Css';

function HomeScreen(params: { navigation: any }) {
  return (
    <ScrollView>
      {getComponentList()
        .filter((component: ScreenComponent) => component.isNavigation)
        .map((component: ScreenComponent) => {
          console.log(`route: ${component.route}`);
          return (
            <View key={component.route} style={styleValues.scrollView}>
              <Button
                title={component.route}
                onPress={() => params.navigation?.navigate(component.route)}
              />
            </View>
          );
        })}
    </ScrollView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: 'React Native Chat SDK Test List',
          }}
        />
        {getComponentList().map((component: ScreenComponent) => {
          return (
            <Stack.Screen
              key={component.route}
              name={component.route}
              component={component.screen}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

unregisterComponents();
screenComponents.forEach((value: ScreenComponent) => {
  registerComponent(value);
});

export default App;
