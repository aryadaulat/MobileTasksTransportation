import {createSlice} from '@reduxjs/toolkit';
import {MapsType} from '../../../types/MapsTypes';

export interface MapsState {
  mapsMarker: MapsType[];
}

const initialState: MapsState = {
  mapsMarker: [
    {
      name: 'Posko 1',
      type: 'posko1',
      icon: 'home',
      data: [
        {
          id: 1,
          name: 'Monas',
          icon: 'home',
          location: {
            latitude: -6.175392,
            Longitude: 106.827153,
          },
          officer_name: 'monas',
          officer_rank: '1',
          phone_number: '081231512312',
        },
        {
          id: 2,
          name: 'Pool Damri',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 3,
          name: 'Pool Damri2',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 4,
          name: 'Pool Damri3',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 5,
          name: 'Pool Damri4',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 6,
          name: 'Pool Damri5',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 7,
          name: 'Pool Damri6',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 8,
          name: 'Pool Damri7',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 9,
          name: 'Pool Damri8',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 10,
          name: 'Pool Damri9',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
      ],
    },
    {
      name: 'Posko 2',
      type: 'posko2',
      icon: 'home',
      data: [
        {
          id: 1,
          name: 'Monas',
          icon: 'home',
          location: {
            latitude: -6.175392,
            Longitude: 106.827153,
          },
          officer_name: 'monas',
          officer_rank: '1',
          phone_number: '081231512312',
        },
        {
          id: 2,
          name: 'Pool Damri',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 3,
          name: 'Pool Damri2',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 4,
          name: 'Pool Damri3',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 5,
          name: 'Pool Damri4',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 6,
          name: 'Pool Damri5',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 7,
          name: 'Pool Damri6',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 8,
          name: 'Pool Damri7',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 9,
          name: 'Pool Damri8',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 10,
          name: 'Pool Damri9',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
      ],
    },
    {
      name: 'Posko 3',
      type: 'posko3',
      icon: 'home',
      data: [
        {
          id: 1,
          name: 'Monas',
          icon: 'home',
          location: {
            latitude: -6.175392,
            Longitude: 106.827153,
          },
          officer_name: 'monas',
          officer_rank: '1',
          phone_number: '081231512312',
        },
        {
          id: 2,
          name: 'Pool Damri',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 3,
          name: 'Pool Damri2',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 4,
          name: 'Pool Damri3',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 5,
          name: 'Pool Damri4',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 6,
          name: 'Pool Damri5',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 7,
          name: 'Pool Damri6',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 8,
          name: 'Pool Damri7',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 9,
          name: 'Pool Damri8',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 10,
          name: 'Pool Damri9',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
      ],
    },
    {
      name: 'Posko 4',
      type: 'posko4',
      icon: 'home',
      data: [
        {
          id: 1,
          name: 'Monas',
          icon: 'home',
          location: {
            latitude: -6.175392,
            Longitude: 106.827153,
          },
          officer_name: 'monas',
          officer_rank: '1',
          phone_number: '081231512312',
        },
        {
          id: 2,
          name: 'Pool Damri',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 3,
          name: 'Pool Damri2',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 4,
          name: 'Pool Damri3',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 5,
          name: 'Pool Damri4',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 6,
          name: 'Pool Damri5',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 7,
          name: 'Pool Damri6',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 8,
          name: 'Pool Damri7',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 9,
          name: 'Pool Damri8',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 10,
          name: 'Pool Damri9',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
      ],
    },
    {
      name: 'Posko 5',
      type: 'posko5',
      icon: 'home',
      data: [
        {
          id: 1,
          name: 'Monas',
          icon: 'home',
          location: {
            latitude: -6.175392,
            Longitude: 106.827153,
          },
          officer_name: 'monas',
          officer_rank: '1',
          phone_number: '081231512312',
        },
        {
          id: 2,
          name: 'Pool Damri',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 3,
          name: 'Pool Damri2',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 4,
          name: 'Pool Damri3',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 5,
          name: 'Pool Damri4',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 6,
          name: 'Pool Damri5',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 7,
          name: 'Pool Damri6',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 8,
          name: 'Pool Damri7',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 9,
          name: 'Pool Damri8',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
        {
          id: 10,
          name: 'Pool Damri9',
          icon: 'home',
          location: {
            latitude: -6.176614,
            Longitude: 106.830202,
          },
          officer_name: 'damrigambir',
          officer_rank: '2',
          phone_number: '081231512312',
        },
      ],
    },
  ],
};

export const mapsSlice = createSlice({
  name: 'mapsState',
  initialState: initialState,
  reducers: {
    clearMarker: state => {
      state.mapsMarker = [];
    },
  },
});

export const {clearMarker} = mapsSlice.actions;
