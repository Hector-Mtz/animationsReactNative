import React, {useEffect, useState} from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const Animacion6 = () => {
    //Componente para ver secuencias de animaciones

    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(-50))

    useEffect(()=> 
    {
      Animated.loop(
        Animated.sequence([  //se le pasar un arreglo para englobar todas las animaciones y 
                          //se vayan ejecutando una tras otra
           Animated.timing(animacion2,{
               toValue:-30,
               duration:0,
               useNativeDriver:false
           }),
           
           Animated.timing(animacion1,{
               useNativeDriver:false,
               toValue:60,
               duration:500
           }),
           Animated.timing(animacion2,{
               useNativeDriver:false,
               toValue:30,
               duration:500
           }),
           Animated.timing(animacion1,{
               useNativeDriver:false,
               toValue:0,
               duration:500
           }),
           Animated.timing(animacion2,{
               useNativeDriver:false,
               toValue:-30,
               duration:500
           })
         ])
      ).start()
    },[])

   const estiloAnimacion = {
     transform:[
        {translateY: animacion1},
        {translateX:animacion2}
     ]
   }

  return (
    <View style = {{alignItems: 'center'}} >
        <Animated.View style={[styles.caja, estiloAnimacion]}>

        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
   caja:
   {
     width:10, 
     height:10,
     backgroundColor:'cornflowerblue'
   }
})

export default Animacion6