import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ConfigFunc({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Config');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go back to screenA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
});
