import FilterList from './FilterList';
import {SheetDefinition, registerSheet} from 'react-native-actions-sheet';
import ListPost from './ListPost';
import {MapsType} from '../../types/MapsTypes';

registerSheet('FilterList-sheet', FilterList);
registerSheet('ListPost-sheet', ListPost);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'FilterList-sheet': SheetDefinition<{
      returnValue: MapsType;
    }>;
    'ListPost-sheet': SheetDefinition<{
      payload: {
        data: MapsType;
      };
    }>;
  }
}

export {};
