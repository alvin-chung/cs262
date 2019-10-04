import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{Button, Text} from 'react-native-elements';
import Pic from './Pic'
import CustomButtom from './CustomButton'

export default class AssetExample extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      showPicture: 'none',
      showButton: ''
    }
  }

  letShow = () =>{
    this.setState({showPicture: '', showButton: 'none'})
  }
 
  render() {
    return (
      <View style={styles.container}>
          <CustomButtom
          text= "CLICK for a surprise"
          letShow = {this.letShow}
          display= {this.state.showButton}
          />
            <Pic text= "Happy Birthday" display={this.state.showPicture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFECBC',
  },
});
