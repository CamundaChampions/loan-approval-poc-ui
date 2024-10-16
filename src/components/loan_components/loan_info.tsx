import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    TERMS_IN_YEARS,
    LOAN_USAGE
} = LOAN_APPLICATION_FORM;

interface LoanInfo {
    loanApplicationId: string,
    amount: string,
    term: string,
    loanCategory: string,
    status: string,
    reason: string,
}

const LoanInfo = (props: LoanInfo) => {
    const { loanApplicationId, amount, term, loanCategory, status, reason } = props;
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>Loan Request Id</label>
                    </GridColumn>
                    <GridColumn>
                        {loanApplicationId}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>Current Status</label>
                    </GridColumn>
                    <GridColumn>
                        {status}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>Desired Loan Amount Rs.</label>
                    </GridColumn>
                    <GridColumn>
                        RS {amount}/-
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{TERMS_IN_YEARS}</label>
                    </GridColumn>
                    <GridColumn>
                        {term} Year(s)
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{LOAN_USAGE}</label>
                    </GridColumn>
                    <GridColumn>
                        {loanCategory}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanInfo;