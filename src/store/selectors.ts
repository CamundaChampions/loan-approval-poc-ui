import { RootState } from "./store";

export const getUserType = (state: RootState) => {
    return state.loan.userType;
}