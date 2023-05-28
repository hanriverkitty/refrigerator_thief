import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./assets/page/background.png')} // 앱 이미지의 경로로 수정해야 합니다
          style={{ width: 200, height: 200 }}
        />
        <Button
          title="Go to Main Screen"
          onPress={() => this.props.navigation.navigate('MainScreen')}
        />
      </View>
    );
  }
}