import { createStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import persistStore from 'redux-persist/es/persistStore';
import Auth from '../features/Auth/reducers/Auth';
import EditProfile from '../reducers/EditProfile';
import ListMessage from '../reducers/ListMessage';
import AdminReducer from '../features/Admin/reducers/AdminReducer';


const rootReducer = combineReducers({
    Auth: Auth,
    EditProfile: EditProfile,
    ListMessage: ListMessage,
    AdminReducer: AdminReducer,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
    let persister = persistStore(store)
    return { store, persistor: persister }
}