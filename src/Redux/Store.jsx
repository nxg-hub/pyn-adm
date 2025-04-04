import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from './UserSlice';
import customerReducer from './CustomerSlice'

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'user',
    'customer'

  ], 
};

const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
 
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Create a persistor to persist the store
export const persistor = persistStore(store);
export default store;
