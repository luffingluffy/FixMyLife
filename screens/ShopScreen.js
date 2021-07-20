import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ShopScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button clicked')} />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
