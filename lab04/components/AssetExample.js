import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default class AssetExample extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      inputInfo: 'fish'
    }
  }

  changeInput=(val)=>{
    this.setState({inputInfo: val })
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.inputInfo}
          onChangeText={this.changeInput}
        />
        <Button
          title="Submit"
          onPress={()=> this.props.permission(this.state.inputInfo)
          }
        />
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
});
