import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const HeaderComponent = () => {
  return (
    <Header
      centerComponent={{ text: 'MY APP', style: { color: '#fff' } }}
      leftComponent={{text: 'Back', style: { color: '#fff' }}}
      rightComponent={{text: 'Menu', style: { color: '#fff' }}}
      backgroundColor='#4f9deb'
    />
  );
};

const styles = StyleSheet.create({});

export default HeaderComponent;