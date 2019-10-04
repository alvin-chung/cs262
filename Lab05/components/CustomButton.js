import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{Button, Text} from 'react-native-elements';
import Pic from './Pic'

export default class CustomButton extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View >
          <Button style = {{ width: '100%', display: this.props.display}} 
          buttonStyle= {{backgroundColor: '#EA9B67'}}
          title= {this.props.text}
          onPress = {this.props.letShow}
          />
      </View>
    );
  }
}
