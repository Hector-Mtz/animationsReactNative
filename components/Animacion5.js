import React, {useState} from 'react'
import {StyleSheet,Text, View, TouchableWithoutFeedback, Animated} from 'react-native'

const Animacion5 = () => {
    //TouchableWithoutFeedback contiene solo los metodos de onPressIn y OnPressOut
  
    //Como usaremos las funciones del touchable no es necesario tener useEffect ya que
    //con estas le indicaremos cuando iniciar y cuando terminar la animacion
    //a diferencia del useEffect que en cierto tiempo le indicabamos
    
    const [animacion] = useState (new Animated.Value(1)) //valor inicial1
    
    const presionarBtn = () => 
    {
        //no se le pasara duration porque spring se encargara de esa parte
        Animated.spring(animacion,{ //le pasamos lo que va a animar y el objeto de config
            toValue:.8, //valor al que llega la animcacion una vez que finaliza
            useNativeDriver:false
        }).start()  
    }

    const soltarBtn = () => 
    {
        Animated.spring(animacion,{ //le pasamos lo que va a animar y el objeto de config
            toValue:1, //valor al que llega la animcacion una vez que finaliza
            friction: 4, //controla el rebote de la animacion, entre menos mas rebotara
            tension:60, //controla la suavidad del movimiento 
            useNativeDriver:false
        }).start()  
    }

    //Declaramos un objeto de confiuracion para animar la popiedad
    const estiloAnimacion = {
       transform:[
        {
            scale:animacion
        }
       ]
    }
  return (
   <View style = {styles.contenedor}>
    <TouchableWithoutFeedback onPressIn={() => presionarBtn()} onPressOut={() => soltarBtn()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
            <Text style={styles.text}>Iniciar Sesión</Text>
        </Animated.View>
    </TouchableWithoutFeedback>
   </View>
  )
}

const styles = StyleSheet.create({
   contenedor:
   {
      alignItems:'center'
   },
   text:
   {
     color:'white',
     fontWeight:'bold',
     textTransform: 'uppercase',
     fontSize:28
   },
   btn:
   {
      backgroundColor:'cornflowerblue',
      width:280,
      height:80,
      justifyContent:'center',
      alignItems:'center'
   }
})

export default Animacion5