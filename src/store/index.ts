<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";

import api from "../services/api";

import cartReducer from "./reducers/cart";
=======
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import api from '../services/api'
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2

export const store = configureStore({
  reducer: {
    cart: cartReducer,
<<<<<<< HEAD
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
=======
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
