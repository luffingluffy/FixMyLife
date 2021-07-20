import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CharacterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>CharacterScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button clicked')} />
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
