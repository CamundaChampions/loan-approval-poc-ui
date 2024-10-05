import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import loanSlice from './slice';

export const rootReducer = {
    loan: loanSlice
}

const middleware = () => {
    return (getDefaultMiddleware: any) => getDefaultMiddleware(
        {
            serializableCheck: false
        }
    ).concat(logger);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<any>();