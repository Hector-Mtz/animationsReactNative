import  React, {useState, useEffect} from 'react'
import {StyleSheet,Text, Animated, View} from 'react-native'

const Animacion3 = () => 
{
  const [animacion] = useState(new Animated.Value(14)) 

  useEffect(() =>
  {
    Animated.timing(
      animacion, {
          toValue:40,
          duration:500,
          useNativeDriver:false
      }
    ).start()
  },[])


  //En este ejemplo se pasa de animar del view al text, porque hay ciertos componentes que se pueden animar
  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize:animacion}]}>
        Animacion 3
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:
    {
        fontSize:30,
        textAlign:'center'
    }
})

export default Animacion3