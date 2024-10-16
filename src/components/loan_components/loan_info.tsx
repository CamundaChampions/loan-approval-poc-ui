import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    TERMS_IN_YEARS,
    LOAN_USAGE
} = LOAN_APPLICATION_FORM;

interface LoanInfo {
    amount: string,
    term: string,
    loanCategory: string
}

const LoanInfo = (props: LoanInfo) => {
    const { amount, term, loanCategory } = props;
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>Desired Loan Amount Rs.</label>
                    </GridColumn>
                    <GridColumn>
                        RS{amount}/-
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{TERMS_IN_YEARS}</label>
                    </GridColumn>
                    <GridColumn>
                        {term}
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