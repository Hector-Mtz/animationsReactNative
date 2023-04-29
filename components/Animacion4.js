import React, {useState, useEffect} from 'react'
import {StyleSheet,Text, Animated, View} from 'react-native'

const Animacion4 = () => {
    //Interpolate sirve para rotacion desde 0 hasta los 360 grados
    const [animacion] = useState(new Animated.Value(0)) // comenzamos en 0 para ir a 360

    useEffect(() =>
    {
      Animated.timing(
        animacion, {
            toValue:360, //el valor llegara a 360
            duration:500,
            useNativeDriver:false
        }
      ).start()
    },[])

    //Creamos interpolacion, no se escriben todos los valores solo con definir la interpolacion
    //ya que con esto se genera un ragno de valores y este se encargara automaticamente de asignar los valores
    const interpolacion = animacion.interpolate({
        inputRange:[0,360],  //valores de entreada del rango y a donde ira (de 0 a 360)
        outputRange:['0deg', '360deg'] //valores de salida iran de 0 a 360 grados
    })

    //RECOMENDAION
    //Generar un objeto de estilos para asignarlos
    const estiloAnimacion = 
    {
        transform:[{
            rotate:interpolacion //va a rotar con los valores de interpolacion
        }]
    }
  
  return ( 
     <View>
        <Animated.View style={[styles.texto, estiloAnimacion]}></Animated.View>
     </View>
  )
}

const styles = StyleSheet.create({
    texto:
    {
        fontSize:30,
        textAlign:'center',
        width:100,
        height:100,
        backgroundColor:'cornflowerblue'
    }
})

export default Animacion4