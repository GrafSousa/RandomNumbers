import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numAleatorio = Math.random();

  numAleatorio = Math.floor(numAleatorio * 10);
  alert(numAleatorio);
}

const App =() => {

  return (
    <View>
      <Text>Gerador de números randômicos !!!</Text>
      <Button 
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};
 
AppRegistry.registerComponent('app1', () =>  App);