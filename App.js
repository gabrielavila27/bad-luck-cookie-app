import React, {useState} from 'react';
import { View, 
         SafeAreaView, 
         StatusBar, 
         Text, 
         TouchableOpacity,
         Image,
         StyleSheet
        } from 'react-native';

export default function biscoitoSorte() {
  const[img, setImg] = useState(require('./src/images/biscoito.png'))
  const[frase, setFrase] = useState('Bem vindo ao biscoito do azar!')

  let fraseDesmotivacional = ["A derrota de hoje foi ruim, mas a de amanhã será bem pior!",

  "Se a persistência não funcionar de primeira, tente desistir... talvez não seja pra você mesmo!",
  
  "De longe você parecia feio, de perto você parece que está de longe.",
  
  "Na hora certa, tudo vai dar errado.",
  
  "É por isso que na hora de apresentar o trabalho você só segurava a cartolina.",
  
  "Se alguém quiser me derrubar hoje, vai ter que me ajudar a levantar primeiro, porque eu já estou no chão.",
  
  "Relaxe, está tudo absolutamente fora do seu controle."]
  
  function quebrarBiscoito(){
    let random = Math.floor(Math.random()*fraseDesmotivacional.length)// Número inteiro aleatório
    setImg(require('./src/images/biscoitoAberto.png'))
    setFrase('"' + fraseDesmotivacional[random]+ '"')

  }

  function resetarBiscoito(){
    setFrase('Bem vindo ao biscoito do azar!');
    setImg(require('./src/images/biscoito.png'));
  }



 return (
   <SafeAreaView style = {styles.container}>

    <StatusBar style = {styles.statBar}/>

    <Image style = {styles.image} source = {img}/>

    <Text style = {styles.texto}>
      {frase}
    </Text>

    <TouchableOpacity style = {styles.btn} onPress={ quebrarBiscoito} >
      <Text style = {styles.btnText}>
        Quebrar biscoito
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.btn} onPress = {resetarBiscoito}>
      <Text style = {styles.btnText}>
        Resetar biscoito
      </Text>
    </TouchableOpacity>


   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    resizeMode: 'contain', 
    width: '70%',
    height: '50%'

  },
  texto: {
    fontSize: 22,
    color: '#dd7b22',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginVertical:'3%',
    marginHorizontal: '3%'

  },

  btn: {
    width: '70%',
    height: '8%',
    borderWidth: 1,
    borderColor: '#dd8a22',
    borderRadius: 100,
    margin: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});