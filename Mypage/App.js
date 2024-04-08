import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <Image source={{uri: 'https://w7.pngwing.com/pngs/134/40/png-transparent-graphics-cartoon-drawing-man-thinking-cartoon-hand-photography-business-man.png'}} style={styles.logo}/>
     <br></br>
     <Text style={styles.textoo}>Bryan Beckham de Alencar de Souza</Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Dados Pessoais:</Text>
     <br></br>
     <Text style={styles.textoDados}>Idade: 16 anos </Text>
     <br></br>
     <br></br>
     <Text style={styles.subtexto}>Formação: </Text>
     <br></br>
     <Text style={styles.textoDados}>Estou no Segundo ano do ensino médio, e cursando Técnico em Desenvolvimento de Sistemas no Senai </Text>
     <br></br>
     <br></br>
     <Text style={styles.contato}>Contato</Text>
     <Button title="Github" onPress={() => Linking.openURL('https://github.com/bryanbeckham06')}/>

      <StatusBar style="auto" />
    </View>
    
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b98e0',
    alignItems: 'center',
    letterSpacing: 5,
  },
  logo:{
    width: 150,
    height: 150,
  },
   textoo: {
      color: 'rgb(176,196,222)',
      fontSize: 50,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    subtexto: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 5,
      gap: 50,
      textAlign: 'center',
    },
    textoDados: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 5,
    },
    contato: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 5,
    }

});
