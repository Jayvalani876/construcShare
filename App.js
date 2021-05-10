import React from 'react';
import { useFonts } from 'expo-font';
import {Provider} from 'react-redux';
import {reduxStore} from 'helpers/store';
import {NavContainer} from 'src/navigation/NavigationContainer';

export default function App() {
  const [loaded] = useFonts({
    sofia: require('./assets/fonts/SofiaProRegular.ttf'),
    sofiaBold: require('./assets/fonts/SofiaProBold.ttf'),
    sofiaLight: require('./assets/fonts/SofiaProLight.ttf'),
    sofiaMedium: require('./assets/fonts/SofiaProMedium.otf'),
  });

  if (!loaded) {
    return null;  
  }
 
  return (<Provider store={reduxStore}>
     <NavContainer />
     </Provider>);
}

