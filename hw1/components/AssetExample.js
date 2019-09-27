import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      var1: Number(''),
      var2: Number(''),
      operator: '',
      total: '',
      currentV: '',
      clearTotal: ''
    }
  }

// first variable
  firstVar = (variable) => { 
    this.setState({var1: this.state.currentV + variable})
  }

// second variable
  secondVar = (variable) => {
    this.setState({var2:this.state.currentV + variable})
  }

// stores variable
  storeVar = (variable) => {
    this.setState({currentV:this.state.currentV + variable})
    if(this.state.operator === ''){
      this.firstVar(variable)
    } else{
      this.secondVar(variable)
    }
  }

// operator / allows replacing operator
  replaceOperator = (currentOperator) => {
    this.setState({currentV:""})
    this.setState({operator: currentOperator})
    this.setState({equation:this.state.equation + currentOperator})
  }

// clearing total
  clear = () => {
    this.setState({currentV:this.state.clearTotal})
    this.setState({var1:this.state.clearTotal})
    this.setState({var2:this.state.clearTotal})
    this.setState({operator:this.state.clearTotal})
  }

// calculation
  calculate = () => {
    let result
    if(this.state.operator === "+"){
      result = Number(this.state.var1) + Number(this.state.var2)
    } 
    else if(this.state.operator === "-"){
      result = Number(this.state.var1) - Number(this.state.var2)
    } 
    else if(this.state.operator === "/"){
      result = Number(this.state.var1) / Number(this.state.var2)
    } 
    else if(this.state.operator === "x"){
      result = Number(this.state.var1) * Number(this.state.var2)
    } 
    this.setState({currentV: result})
    this.setState({var1: result})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#E0E0E0', height: 60, marginBottom: 5, width: 200}}> 
          <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10}}>
            {this.state.currentV}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button style={styles.buttonDesign} title = '1'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("1")}/>
          <Button style={styles.buttonDesign} title = '2'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("2")}/>
          <Button style={styles.buttonDesign} title = '3'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("3")}/>
          <Button style={styles.buttonDesign} title = '/'
                  buttonStyle = {{backgroundColor: '#808080'}}
                  onPress={()=> this.replaceOperator("/")}/>
        </View>
        
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button style={styles.buttonDesign} title = '4'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("4")}/>
          <Button style={styles.buttonDesign} title = '5'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("5")}/>
          <Button style={styles.buttonDesign} title = '6'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("6")}/>
          <Button style={styles.buttonDesign} title = 'X'
                  buttonStyle = {{backgroundColor: '#808080'}}
                  onPress={()=> this.replaceOperator("x")}/>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button style={styles.buttonDesign} title = '7'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("7")}/>
          <Button style={styles.buttonDesign} title = '8'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("8")}/>
          <Button style={styles.buttonDesign} title = '9'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("9")}/>
          <Button style={styles.buttonDesign} title = '-'
                  buttonStyle = {{backgroundColor: '#808080'}}
                  onPress={()=> this.replaceOperator("-")}/>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button style={{width: 93, margin: 5}} title = '0'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar("0")}/>
          <Button style={styles.buttonDesign} title = '.'
                  buttonStyle= {{backgroundColor: '#C0C0C0'}}
                  onPress={()=> this.storeVar(".")}/>
          <Button style={styles.buttonDesign} title = '+'
                  buttonStyle = {{backgroundColor: '#808080'}}
                  onPress={()=> this.replaceOperator("+")}/>
        </View>

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Button style={{width: 93, marginTop: 5}} title = 'C'
                  buttonStyle={{backgroundColor: '#808080'}}
                  onPress={()=> this.clear()}/>
          <Button style={{width: 93, marginLeft: 10, marginTop: 5}} title = '='
                  buttonStyle={{backgroundColor: '#808080'}}
                  onPress={()=> this.calculate()}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  buttonDesign: {
    margin: 5,
    width: 42
  }
});
