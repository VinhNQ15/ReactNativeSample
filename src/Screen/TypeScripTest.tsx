import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewName from './Component/ViewName';

interface Props {
  name: string;
}

const TypeScripTest: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <ViewName name={'what my name?'}
        age = {10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TypeScripTest;