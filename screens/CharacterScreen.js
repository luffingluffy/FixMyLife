import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const CharacterScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>CharacterScreen</Text>
      <Button title="Logout" onPress={() => logout()} />
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
