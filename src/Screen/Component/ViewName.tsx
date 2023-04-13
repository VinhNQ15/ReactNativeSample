import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
  age?: number;
}

const ViewName: React.FC<Props> = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, {name}!</Text>
      <Text>Tôi năm nay {age} tuổi</Text>
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

export default ViewName;