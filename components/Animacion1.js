import  React, {useState, useEffect} from 'react'
import {StyleSheet,Text, Animated} from 'react-native'

const Animacion1 = () => {

 //vamos a iniciar una nueva instancia de animated
  const [animacion] = useState(new Animated.Value(0)) 

  useEffect(() =>  //siempre para ejecutar una animacion se require un useEffect
  {
     Animated.timing( //timing hace que en determinado tiempo realice una animacion
        //se tiene que indicar que se va a animar que en este caso es la constante ed animacion
        animacion, {  //seguido de llamar lo que vamos a animar necesitamos mandarle tambien un objeto de configuracion
            //se le tiene que pasar 2 valores, el cuanto durara y a que valor llegara
            toValue:1,  //este es a que valor llegara
            duration:2000, //cantidad de tiempo en llegar
            useNativeDriver:false // driver que pide la animacion
        }
     ).start() //metodo para iniciar la animacion
  },[])

 //Se tiene que indicar a que elemento o componente se va a animar, por lo general
 //se tiene que agregar el componente de Animated para animar el componente
  return (
    <Animated.View style={{opacity:animacion}}>
       <Text style={styles.texto}>Animacion 1</Text>
    </Animated.View>

  )
}

const styles = StyleSheet.create({
    texto:
    {
        fontSize:30,
        textAlign:'center'
    }
})

export default Animacion1