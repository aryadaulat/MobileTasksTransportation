import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onClickFilter: () => void;
};
const FilterPosko = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonFilter} onPress={props.onClickFilter}>
        <MaterialCommunityIcons
          name="filter-variant"
          size={24}
          style={styles.icon}
        />
        <Text>Filter Peta</Text>
      </Pressable>
    </View>
  );
};

export default FilterPosko;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 26,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFilter: {
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
