import { createSlice } from '@reduxjs/toolkit';
import { LoanState } from './types';

const initialState: LoanState = {
    userType: '',
    user: '',
    loanApplicationId: ''
}

const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setUserType(state, action: { payload: {userType: string, user: string} }) {
            state.userType = action.payload.userType;
            state.user = action.payload.user;
        },
        setLoanApplicationId(state, action: { payload: {loanId: string} }) {
            state.loanApplicationId = action.payload.loanId;
        }
    }
});

export const {
    setUserType,
    setLoanApplicationId
} = loanSlice.actions;

export default loanSlice.reducer;