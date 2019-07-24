import { createStore, combineReducers, applyMiddleware } from 'redux';
import error from './reducers/error';
import loading from './reducers/loading';
import current from './reducers/stop';
import countVideo from './reducers/count-video';
import uploadCurrent from './reducers/upload-current';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    loading,
    error,
    current,
    countVideo,
    uploadCurrent
});

const rootReducer = (state, action) => {
    if (action.type === 'DEFAULT_STATE') {
      state = undefined;
    }
  
    return appReducer(state, action);
  }

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;