import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderMaps = () => {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          style={styles.menuButton}
          name={'menu'}
          size={24}
          color={'white'}
        />
      </View>
      <View>
        <Text style={styles.textHeader}>Header</Text>
      </View>
      <View>
        <MaterialCommunityIcons
          style={styles.bellIcon}
          name={'bell-outline'}
          size={24}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default HeaderMaps;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'darkblue',
    zIndex: 99,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {color: 'white'},
});
