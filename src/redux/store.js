import { createStore, combineReducers, applyMiddleware } from 'redux';
import error from './reducers/error';
import loading from './reducers/loading';
import currentStop from './reducers/stop';
import countVideo from './reducers/count-video';
import currentUpload from './reducers/upload-current';
import publications from './reducers/publications';
import currentItem from './reducers/item-current';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    loading,
    error,
    countVideo,
    currentStop,
    currentUpload,
    currentItem,
    publications
});

const rootReducer = (state, action) => {
    if (action.type === 'DEFAULT_STATE') {
      state = undefined;
    }
  
    return appReducer(state, action);
  }

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;