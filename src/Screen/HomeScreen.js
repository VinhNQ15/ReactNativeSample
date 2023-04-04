import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30, marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => navigation.navigate('HomeDetail')}>
        <Text>Go Home Detail</Text>
      </TouchableOpacity>

    </View>
  );
}

export default HomeScreen;