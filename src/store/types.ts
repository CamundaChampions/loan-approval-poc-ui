export enum UserType {
    Applicant = 'Applicant',
    NonApplicant = 'NonApplicant'
}

export interface LoanState {
    userType: string;
    user: string
}

export interface loanSummaryResponse {
    allowToCreateLoan: boolean,
    loanSummaryList: loanSummary[]
}

export interface loanSummary {
    loanApplicationId: string,
    loanType: string,
    statusCode: string,
    status: string,
    amount: string
}