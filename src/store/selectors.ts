import { RootState } from "./store";

export const getUserType = (state: RootState) => {
    return state.loan.userType;
}

export const getUser = (state: RootState) => {
    return state.loan.user;
}

export const getLoanId = (state: RootState) => {
    return state.loan.loanApplicationId;
}