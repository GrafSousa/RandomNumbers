var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

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