export enum UserType {
    Applicant = 'Applicant',
    NonApplicant = 'NonApplicant'
}

export interface LoanState {
    userType: string;
    user: string
}

export interface loanSummary {
    loanApplicationId: string,
    amount: string,
    statusCode: string,
    term: string
}