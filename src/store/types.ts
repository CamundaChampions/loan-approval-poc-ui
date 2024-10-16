export enum UserType {
    Applicant = 'Applicant',
    NonApplicant = 'NonApplicant'
}

export interface LoanState {
    userType: string;
    user: string;
    loanApplicationId: string;
}

export interface loanSummaryResponse {
    allowToCreateLoan: boolean,
    loanSummaryList: loanSummary[]
}

export interface loanSummaryData extends loanSummary {
    possibleAction: string[],
    
}

export interface loanSummary {
    loanApplicationId: string,
    loanType: string,
    statusCode: string,
    status: string,
    reason: string,
    amount: string,
    term: string
}