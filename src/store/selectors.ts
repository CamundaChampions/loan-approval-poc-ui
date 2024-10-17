import { RootState } from "./store";

export const getUserType = (state: RootState) => {
    return state.loan.userType;
}

export const getUser = (state: RootState) => {
    return {
        user: state.loan.user,
        userId: state.loan.userId
    }
}

export const getLoanId = (state: RootState) => {
    return state.loan.loanApplicationId;
}