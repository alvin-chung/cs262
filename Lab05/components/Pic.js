import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{Button, Text} from 'react-native-elements';

export default class Pic extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <View style={{ display: this.props.display }} >
          <Image style={styles.image} source={require('../assets/sam.png')} />
            <Text h1 style={{ textAlign: 'center', color: '#ea9b67'}} >
              {this.props.text}
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200, 
    width: 250, 
    marginLeft: 30
  },
});
