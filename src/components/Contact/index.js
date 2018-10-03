/**
 * A Sample React native App : Author : Jesus Verma
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../../styles/index';

export default class Contact extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Contact Us
        </Text>
      </View>
    );
  }
}
