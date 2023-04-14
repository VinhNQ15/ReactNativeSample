import React, { useRef } from 'react';
import { View, Text, FlatList, Animated } from 'react-native';

function AccountScreen() {

  const HEADER_MAX_HEIGHT = 200;
  const HEADER_MIN_HEIGHT = 50;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
    { id: '3', title: 'Item 3' },
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  });

  // const headerOpacity = scrollY.interpolate({
  //   inputRange: [0, HEADER_SCROLL_DISTANCE],
  //   outputRange: [1, 0],
  //   extrapolate: 'clamp'
  // });

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);

  // const translateY = scrollY.interpolate({
  //   inputRange: [0, 200], // 100 là giá trị mà header sẽ biến mất
  //   outputRange: [1, 0], // header sẽ di chuyển lên trên khi scrollY từ 0 đến 100
  //   extrapolate: 'clamp',
  // });

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
    <View style={{ flex: 1, }}>
      <Animated.View style={{ height: headerHeight }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', backgroundColor:'blue' }}>Header</Text>
      </Animated.View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={onScroll}
        // scrollEventThrottle={16}
      />
    </View>
  );

}

export default AccountScreen;