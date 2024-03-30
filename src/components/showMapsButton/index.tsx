import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onClickShowMaps: () => void;
};

const ShowMapsButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonMap} onPress={props.onClickShowMaps}>
        <MaterialCommunityIcons name="map" size={24} style={styles.icon} />
        <Text>Lihat Peta</Text>
      </Pressable>
    </View>
  );
};

export default ShowMapsButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 26,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  },
  buttonMap: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
