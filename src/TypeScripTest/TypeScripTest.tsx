import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
}

const TypeScripTest: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      {/* <ViewName name={'what my name?'} */}
        {/* age = {10} /> */}
    </View>
  );
};

//Arrow function: Cú pháp viết ngắn gọn hơn cho việc định nghĩa function.
const add = (a: number, b:number) => a + b;

// Khai báo biến cục bộ sử dụng let
function example() {
  let x = 10;
  if (true) {
    let x = 20; // Khai báo biến x khác trong khối này
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}

// Khai báo hằng số sử dụng const
const PI = 3.14;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TypeScripTest;