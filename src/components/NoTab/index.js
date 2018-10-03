/**
 * A Sample React native App : Author : Jesus Verma
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import styles from '../../styles/index';

export default class NoTabComponent extends Component{
  
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail</Text>
        <Button
          title="Go to Dash"
          onPress={() => this.props.navigation.navigate('NoTab')}
        />
      </View>
    );
  }
}
