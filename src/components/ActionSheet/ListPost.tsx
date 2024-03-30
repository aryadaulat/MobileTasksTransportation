import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlashList} from '@shopify/flash-list';
import {PublicFacility} from '../../types/MapsTypes';
import BaseSize from '../../theme/size';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListPost: React.FC<SheetProps<'ListPost-sheet'>> = props => {
  function renderItem(item: PublicFacility) {
    return (
      <View style={styles.renderItem}>
        <MaterialCommunityIcons
          name={item.icon ?? 'home'}
          size={34}
          color="black"
        />
        <View>
          <Text style={styles.headerText}>{item.name}</Text>
          <View style={styles.boxOfficer}>
            <Text>{item.officer_name ?? 'No Offiecer Name'}</Text>
            <Text style={styles.lineText}>-</Text>
            <Text>{item.officer_rank ?? 'No Rank'}</Text>
          </View>
          <Text>{item.name}</Text>
          <View style={styles.boxPhone}>
            <MaterialCommunityIcons name="phone" size={14} />
            <Text style={styles.textPhone}>{item.phone_number}</Text>
          </View>
          <View style={styles.boxCP}>
            <MaterialCommunityIcons name="phone" color={'blue'} size={18} />
            <Text style={styles.textCP}>Hubungi</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <ActionSheet
      id={props.sheetId as string}
      statusBarTranslucent
      closable={true}
      isModal={false}
      backgroundInteractionEnabled={true}
      keyboardHandlerEnabled={false}
      containerStyle={styles.contentSheet}>
      <View style={styles.container}>
        <Pressable
          style={styles.buttonClose}
          onPress={() => SheetManager.hide('ListPost-sheet', {payload: true})}>
          <Ionicons name="remove-outline" size={30} />
        </Pressable>
        <View style={styles.viewListed}>
          <FlashList
            data={props.payload?.data.data}
            renderItem={({item}) => renderItem(item)}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
            keyExtractor={item => item.name}
            // style={{paddingBottom: 20}}
            contentContainerStyle={styles.contentList}
            estimatedItemSize={200}
          />
        </View>
      </View>
    </ActionSheet>
  );
};

export default ListPost;

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  renderItem: {
    flexDirection: 'row',
    paddingTop: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
  },
  boxOfficer: {flexDirection: 'row'},
  lineText: {marginHorizontal: 3},
  boxPhone: {flexDirection: 'row', alignItems: 'center'},
  textPhone: {marginLeft: 5},
  boxCP: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: 'center',
    marginVertical: 10,
  },
  contentSheet: {
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: BaseSize.halfHeight,
  },
  textCP: {color: 'blue', marginLeft: 5, fontSize: 18},
  buttonClose: {justifyContent: 'center', alignItems: 'center'},
  viewListed: {flex: 1},
  contentList: {
    paddingVertical: 10,
  },
});
