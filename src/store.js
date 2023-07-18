// store.js

import { configureStore } from '@reduxjs/toolkit';
import seasonResultReducer from './components/DropDownMenu/store/DropDownStore';


export const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        seasonResult: seasonResultReducer,
    },
});