
import React from 'react';
import {
  Alert,
  StyleSheet,
  View
} from 'react-native';
import Button from './Button';

export default class App extends React.Component {
  handleButtonPress() {
    Alert.alert('Alert', 'You clicked this button!');
  }

  render() {
    return(
      <View style={styles.container}>
        <Button style={styles.button}>
          Default button
        </Button>
        <Button success style={styles.button}
        onPress={this.handleButtonPress}>
          Success button
        </Button>
        <Button info style={styles.button}
          onPress={this.handleButtonPress}>
          Info button
        </Button>
        <Button danger rounded style={styles.button}
        onPress={this.handleButtonPress}>
          Rounded button
        </Button>
        <Button big style={styles.button}
        onPress={this.handleButtonPress}>
          Big button
        </Button>
        <Button small style={styles.button}
        onPress={this.handleButtonPress}>
          Small
        </Button>
        <Button ugly rounded style={styles.button}
        onPress={this.handleButtonPress}>
          Ugly
        </Button>
        <Button pink style={styles.button}
        onPress={this.handleButtonPress}>
          Pink
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  button: {
    margin: 10,
  },
});
