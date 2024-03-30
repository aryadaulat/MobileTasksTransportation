import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';

type Props = {
  length: number;
  name: string;
  onFilter: (item: number) => void;
  onClose: () => void;
  search: string;
  onSearch: (item: string) => void;
  phase: boolean;
  backwardPress: () => void;
};

const HeaderFilter = (props: Props) => {
  const DATAS = [{title: 'Ascending'}, {title: 'Descending'}];
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={styles.boxHeader}>
          {props.phase && (
            <Ionicons
              name="chevron-back-outline"
              color="black"
              onPress={props.backwardPress}
              size={24}
              style={styles.iconBack}
            />
          )}
          <Text style={[styles.textHeader, styles.textLength]}>
            {props.length}
          </Text>
          <Text style={styles.textHeader}>{props.name}</Text>
        </View>
        <MaterialCommunityIcons
          name="close"
          color="black"
          size={24}
          onPress={props.onClose}
        />
      </View>
      {!props.phase && (
        <View style={styles.boxSearch}>
          <View style={styles.boxInput}>
            <Ionicons name="search" size={20} />
            <TextInput
              placeholder="Cari"
              value={props.search}
              onChangeText={item => props.onSearch(item)}
              placeholderTextColor={'white'}
              style={styles.textinput}
            />
          </View>
          <SelectDropdown
            data={DATAS}
            defaultValueByIndex={0}
            onSelect={(selectedItem, index) => {
              props.onFilter(index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.buttonDropdown}>
                  {selectedItem && (
                    <MaterialCommunityIcons name={selectedItem.icon} />
                  )}
                  <Text>
                    {(selectedItem && selectedItem.title) || 'Select Sort'}
                  </Text>
                  <MaterialCommunityIcons
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    style={styles.iconChevron}
                  />
                </View>
              );
            }}
            renderItem={item => {
              return (
                <View style={styles.renderDropdown}>
                  <Text>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HeaderFilter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    zIndex: 99,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    flex: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  iconBack: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  textHeader: {
    color: 'black',
    alignItems: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },
  buttonDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderDropdown: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLength: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 10,
  },
  boxSearch: {flexDirection: 'row', justifyContent: 'space-around'},
  boxInput: {flexDirection: 'row', alignItems: 'center'},
  iconChevron: {alignItems: 'center', justifyContent: 'center'},
  boxHeader: {flexDirection: 'row'},
  textinput: {
    color: 'white',
  },
});
