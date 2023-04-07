import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';

function Confirm({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Confirm</Text>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.navigate('Result')}>
        <Text>Go Result</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Confirm;