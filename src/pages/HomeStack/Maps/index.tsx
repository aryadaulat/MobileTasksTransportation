import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import '../../../components/ActionSheet/index';
import {
  FilterPosko,
  HeaderFilter,
  HeaderMaps,
  ShowMapsButton,
} from '.././../../components';
import {MapsType} from '../../../types/MapsTypes';

const MapPage = () => {
  const [showSearch, setshowSearch] = useState<boolean>(false);
  const [filterItem, setfilterItem] = useState<MapsType>();
  const [filterItemViewed, setfilterItemViewed] = useState<MapsType>();
  const [search, setSearch] = useState<string>('');
  const [showMapsButton, setshowMapsButton] = useState<boolean>(false);
  const [clearingPhase, setclearingPhase] = useState(false);
  const initialRegionMaps = {
    latitude: -6.175392,
    longitude: 106.827153,
    latitudeDelta: 0.01222,
    longitudeDelta: 0.01281,
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permissions',
          message: 'Location Permissions For Show User Location in Map',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const checkPermission = useCallback(async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (!granted) {
      requestLocationPermission();
    }
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  async function onClickFilter() {
    if (filterItemViewed) {
      setshowMapsButton(true);
      const payback = await SheetManager.show('ListPost-sheet', {
        payload: {data: filterItemViewed},
      });
      if (payback) {
        setshowMapsButton(false);
      }
    } else {
      const result = await SheetManager.show('FilterList-sheet');
      if (result) {
        const sorting = [...result.data];
        sorting.sort((a, b) => a.name.localeCompare(b.name));
        result.data = sorting;
        setfilterItem(result);
        setfilterItemViewed(result);
        setshowSearch(true);
        setshowMapsButton(true);
        const payback = await SheetManager.show('ListPost-sheet', {
          payload: {data: result},
        });
        if (payback) {
          setshowMapsButton(false);
        }
      } else {
        console.log('Nothing Change');
      }
    }
  }

  function onSorting(value: number) {
    if (value === 0 && filterItem) {
      const temp = {...filterItem};
      const sorting = [...filterItem.data];
      sorting.sort((a, b) => a.name.localeCompare(b.name));
      temp.data = sorting;
      setfilterItem(temp);
      setfilterItemViewed(temp);
    } else if (value === 1 && filterItem) {
      const temp = {...filterItem};
      const sorting = [...filterItem.data];
      sorting.sort((a, b) => b.name.localeCompare(a.name));
      temp.data = sorting;
      setfilterItem(temp);
      setfilterItemViewed(temp);
    }
    SheetManager.hide('ListPost-sheet');
    setshowMapsButton(false);
  }

  function closeFilter() {
    setfilterItem(undefined);
    setfilterItemViewed(undefined);
    setshowSearch(false);
    setclearingPhase(false);
    SheetManager.hide('ListPost-sheet');
  }

  function onSearch(value: string) {
    if (value && filterItem) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = {...filterItem};
      const temp = [...filterItem.data];
      const filtered = temp.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );
      newData.data = filtered;
      setfilterItemViewed(newData);
      setSearch(value);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setfilterItemViewed(filterItem);
      setSearch(value);
    }
    setshowMapsButton(false);
    SheetManager.hide('ListPost-sheet');
  }

  function onClickMaps() {
    setclearingPhase(true);
    setshowMapsButton(false);
    SheetManager.hide('ListPost-sheet');
  }

  return (
    <View style={styles.container}>
      <SheetProvider>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegionMaps}
          style={styles.container}
          // showsMyLocationButton={true}
          zoomEnabled={true}
          showsIndoors={true}
          showsTraffic={false}
          showsBuildings={true}
          showsUserLocation={true}
          // showsPointsOfInterest
          // showsMyLocationButton={true}
          showsCompass={true}
          // userInterfaceStyle="light"
          showsMyLocationButton={true}
          showsIndoorLevelPicker={true}
          showsPointsOfInterest={true}
          zoomControlEnabled={true}
          showsScale={true}
          mapPadding={
            showSearch
              ? {top: 150, right: 0, left: 0, bottom: 70}
              : {top: 50, right: 0, left: 0, bottom: 0}
          }>
          {filterItemViewed
            ? filterItemViewed.data.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.location.latitude,
                    longitude: marker.location.Longitude,
                  }}
                  title={marker.name}
                  description={marker.name}>
                  <Callout>
                    <View style={styles.viewMarker}>
                      <MaterialCommunityIcons
                        name={marker.icon ?? 'home'}
                        size={34}
                        color="black"
                      />
                      <View>
                        <Text style={styles.headerText}>{marker.name}</Text>
                        <View style={styles.boxOfficer}>
                          <Text>
                            {marker.officer_name ?? 'No Offiecer Name'}
                          </Text>
                          <Text style={styles.lineOfficer}>-</Text>
                          <Text>{marker.officer_rank ?? 'No Rank'}</Text>
                        </View>
                        <Text>{marker.name}</Text>
                        <View style={styles.boxPhone}>
                          <MaterialCommunityIcons name="phone" size={14} />
                          <Text style={styles.phoneNumber}>
                            {marker.phone_number}
                          </Text>
                        </View>
                        <View style={styles.markerButtonCall}>
                          <MaterialCommunityIcons
                            name="phone"
                            color={'blue'}
                            size={14}
                          />
                          <Text style={styles.called}>Hubungi</Text>
                        </View>
                      </View>
                    </View>
                  </Callout>
                </Marker>
              ))
            : null}
        </MapView>
      </SheetProvider>
      {showSearch ? (
        <HeaderFilter
          name={filterItem?.name ?? ''}
          length={filterItem?.data.length ?? 0}
          onFilter={item => onSorting(item)}
          onClose={closeFilter}
          search={search}
          onSearch={item => onSearch(item)}
          phase={clearingPhase}
          backwardPress={() => setclearingPhase(false)}
        />
      ) : (
        <HeaderMaps />
      )}
      {!clearingPhase && <FilterPosko onClickFilter={onClickFilter} />}
      {showSearch && showMapsButton && (
        <ShowMapsButton onClickShowMaps={onClickMaps} />
      )}
    </View>
  );
};

export default MapPage;

const styles = StyleSheet.create({
  viewMarker: {
    flexDirection: 'row',
    paddingTop: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
  },
  markerButtonCall: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {flex: 1},
  boxOfficer: {flexDirection: 'row'},
  lineOfficer: {marginHorizontal: 3},
  boxPhone: {flexDirection: 'row', alignItems: 'center'},
  phoneNumber: {marginLeft: 5},
  called: {color: 'blue', marginLeft: 5},
});
