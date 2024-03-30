import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../hooks/reduxHooks';
import {MapsType} from '../../types/MapsTypes';
import BaseSize from '../../theme/size';

const FilterList: React.FC<SheetProps<'FilterList-sheet'>> = props => {
  const poskoList = useAppSelector(state => state.mapsState.mapsMarker);

  async function onClickPosko(data: MapsType) {
    SheetManager.hide(props.sheetId, {
      payload: data,
    });
  }

  function renderItem(item: MapsType) {
    return (
      <TouchableOpacity
        onPress={() => onClickPosko(item)}
        style={styles.renderItem}>
        <MaterialCommunityIcons name="home" size={24} color="black" />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <ActionSheet
      id={props.sheetId as string}
      isModal={true}
      statusBarTranslucent
      gestureEnabled={false}
      useBottomSafeAreaPadding
      closable={false}
      backgroundInteractionEnabled={true}>
      <View style={styles.container}>
        <View style={styles.headerFilter}>
          <Text>Pilih Filter</Text>
          <MaterialCommunityIcons
            name="close"
            size={24}
            onPress={() => SheetManager.hide(props.sheetId)}
          />
        </View>
        <View style={styles.containerFlex}>
          <FlashList
            data={poskoList}
            renderItem={({item}) => renderItem(item)}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
            keyExtractor={item => item.name}
            // style={{paddingBottom: 20}}
            contentContainerStyle={styles.flashListContainer}
            estimatedItemSize={200}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

export default FilterList;

const styles = StyleSheet.create({
  flashListContainer: {
    paddingVertical: 10,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: BaseSize.halfHeight,
  },
  headerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
  },
  containerFlex: {flex: 1},
});
