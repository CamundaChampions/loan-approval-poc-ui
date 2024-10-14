import { createSlice } from '@reduxjs/toolkit';
import { LoanState } from './types';

const initialState: LoanState = {
    userType: '',
    user: ''
}

const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setUserType(state, action: { payload: {user: string|any} }) {
            state.user = action.payload.user;
        }
    }
});

export const {
    setUserType
} = loanSlice.actions;

export default loanSlice.reducer;