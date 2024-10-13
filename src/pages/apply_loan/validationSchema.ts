import * as Yup from 'yup';
import { COMMON } from "../../components/constants/constants";

export const validationSchema = Yup.object({
    amount: Yup.string().required(COMMON.REQUIRED),
    term: Yup.string().required(COMMON.REQUIRED)
});

export const initialValues = {
    amount: '',
    term: '',
    loanCategory: '',
    collateralType: '',
    bankName: '',
    accountNumber: '',
    balance: '',
    firstName: '',
    lastName: '',
    dob: '',
    maritalStatus: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    livingYears: '',
    employerName: '',
    occupation: '',
    income: '',
    experiemce: '',
    institutionName: '',
    accountType: '',
    referenceAccountNumber: '',
    consent: false,
    comments: ''
}