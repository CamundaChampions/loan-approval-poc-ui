export const formatAmount = (amount: string | number | null | undefined) => {

}

export const isDashboardPage = (path: string) => {
    if (path.indexOf('apply_loan') > -1 || path.indexOf('view_loan') > -1) {
        return false;
    }
    return true;
}

export const isApplicant = (value: string) => {
    if (value.toLowerCase().includes('applicant')) {
        return true;
    }
    return false;
}