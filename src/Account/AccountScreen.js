import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Animated, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ScrollView } from 'react-native-gesture-handler';
import IMAGE from '../Component/Image';

function AccountScreen() {

  const HEADER_MAX_HEIGHT = 100;
  const HEADER_MIN_HEIGHT = 0;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 3' },
    { id: '5', title: 'Item 3' },
    { id: '6', title: 'Item 3' },
    { id: '34', title: 'Item 3' },
    { id: '35', title: 'Item 3' },
    { id: '36', title: 'Item 3' },
    { id: '17', title: 'Item 1' },
    { id: '8', title: 'Item 2' },
    { id: '9', title: 'Item 3' },
    { id: '134', title: 'Item 3' },
    { id: '33', title: 'Item 3' },
    { id: '11', title: 'Item 1' },
    { id: '22', title: 'Item 2' },
    { id: '3435', title: 'Item 3' },
    { id: '31', title: 'Item 3' },
    { id: '32', title: 'Item 3' },
    { id: '13', title: 'Item 1' },
    { id: '24', title: 'Item 2' },
    { id: '39', title: 'Item 3' },
    { id: '223', title: 'Item 3' },
    { id: '3424', title: 'Item 3' },
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    console.log(y);
  };

  const headerOpacity = scrollY.interpolate({
    inputRange: [100, 150],
    outputRange: [0.4, 1],
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [100, 150],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const renderItem = ({ item, index }) => (
    <Text style={{
      backgroundColor: index % 2 === 0 ? 'green' : 'black',
      padding: 5,
      margin: 10,
      borderRadius: 5,
      height: 50,
      color: 'white'
    }}>{item.title}</Text>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>

      <Image
        style={{ position: 'absolute', width: '100%' }}
        source={IMAGE.BG_HEADER} >
      </Image>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ScrollView style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { listener: handleScroll, useNativeDriver: false }
        )}>

        <FlatList
          style={{}}
          data={DATA}
          renderItem={renderItem}
          horizontal={true}
          initialNumToRender={3} />

        {DATA.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity }]}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>Thay đổi chiều cao của header</Text>
      </Animated.View>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white'
  },
  header: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'green'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  img: {
    width: '100%',
    height: '40%',
    resizeMode: 'stretch',
    position: 'absolute',
  },
});
export default AccountScreen;