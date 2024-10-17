export enum UserType {
    Applicant = 'Applicant',
    NonApplicant = 'NonApplicant'
}

export interface LoanState {
    userType: string;
    user: string;
    userId: string;
    loanApplicationId: string;
}

export interface loanSummary {
    loanApplicationId: string;
    amount: string;
    statusCode: string;
    status: string;
    term: string;
    loanCategory?: string;
    reason: string;
}