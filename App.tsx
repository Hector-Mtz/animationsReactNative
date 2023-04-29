
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';
import Animacion6 from './components/Animacion6';
import Animacion7 from './components/Animacion7';

/*
  API Animated
  - Es una API para crear animaciones con React Native
  - Son animaciones similares a las nativas
  - API poco documentada

  Metodos de esta API
  - Animated.timing() - Animacion basada en tiempo para que un elemento se mueva de un punto A a un punto B
  - Animated.decay() - La animacion inicia en cierta velocidad pero se va deteniendo. 
  - Animated.spring() - Se le conoce como un spring que detecta la velocidad para crear animaciones que llegan a un valor
    (toValue)
  - Animated.parrallel() - Se utiliza para una serie de animaciones donde todas se ejecutan en paralelo
  - 
*/ 

type SectionProps = PropsWithChildren<{
  title: string;
}>;

/*
    <Animacion1 />
    <Animacion2 />
    <Animacion3 /> 
    <Animacion4 /> 
    <Animacion5 />
    <Animacion6 />
*/

function App(): JSX.Element {
  return (
    <>
      <View style = {styles.contenido}>
         <Animacion7 />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
   contenido:{
    marginTop:100,
   }
});

export default App;
