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
import AdminReducer from '../features/Admin/reducers/AdminReducer';
import ChangeWS from '../features/User/reducers/UserReducer';
import InfoRoom from '../features/User/reducers/InfoRoom';
import ListRoom from '../features/User/reducers/ListRoom';
import Transfer from '../features/User/reducers/transfer';
import IdHospital from '../features/User/reducers/IdHospital'
import ListTransfer from '../features/User/reducers/ListTransfer';


const rootReducer = combineReducers({
    Auth: Auth,
    EditProfile: EditProfile,
    AdminReducer: AdminReducer,
    ChangeWS: ChangeWS,
    InfoRoom: InfoRoom,
    ListRoom: ListRoom,
    Transfer: Transfer,
    IdHospital:IdHospital,
    ListTransfer: ListTransfer,
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