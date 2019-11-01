import * as React from 'react';
import { 
  Text, 
  ScrollView, 
  StyleSheet, 
  Image, 
  Button, 
  Layout, 
  Alert } from 'react-native';
import { Input } from 'react-native-elements';

export default class AssetExample extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userInput: '',
      rhyme: [],
    };
  }

  findRhyme=()=>{
   let word = this.state.userInput.split(' ').slice(-1).pop()
   console.log(word)
    fetch('https://api.datamuse.com/words?rel_rhy='+word)
    .then((response)=>response.json())
    .then((responseJson)=>{
      var deepCopy = Object.assign([], this.state.rhyme)
      for (let i = 0; i <= 20; i++){
      deepCopy.push(responseJson[i].word)
      this.setState({ rhyme: deepCopy })
      }
    })
    .catch((error)=>{
      console.error(error);
    });
  }

  SampleFunction=(item)=>{
    Alert.alert(item);
  }

  reset=()=>{
    this.setState({ rhyme: [] })
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Input 
          value={this.state.userInput} 
          onChangeText={text=>this.setState({ userInput: text })} 
        />
        <Button 
          title="Click Me" 
          onPress={()=>this.findRhyme()} 
        />
        <Button 
          title="Reset" 
          onPress={()=>this.reset()} 
        />
        {this.state.rhyme.map((item, key)=>(
          <Text 
            key={ key } 
            style={{ height: 50, fontSize: 25 }} 
            onPress={ this.SampleFunction.bind(this, item) }>
            { item } 
          </Text>
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 500,
    padding: 30,
    backgroundColor: 'white',
  },
});
