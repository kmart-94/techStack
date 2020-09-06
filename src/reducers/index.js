import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
//this index file will become a commons file for
//all my other reducers to be generated form

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibrary: SelectionReducer
});
