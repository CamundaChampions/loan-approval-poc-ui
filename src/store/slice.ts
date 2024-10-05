import { createSlice } from '@reduxjs/toolkit';
import { LoanState } from './types';

const initialState: LoanState = {
    userType: ''
}

const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setUserType(state, action: { payload: string }) {
            state.userType = action.payload;
        }
    }
});

export const {
    setUserType
} = loanSlice.actions;

export default loanSlice.reducer;