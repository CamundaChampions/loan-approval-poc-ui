export enum UserType {
    Applicant = 'Applicant',
    NonApplicant = 'NonApplicant'
}

export interface LoanState {
    userType: string;
}