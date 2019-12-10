import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  goto(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>fefe</Text>
        </View>
      </ScrollView>
    );
  }
}
