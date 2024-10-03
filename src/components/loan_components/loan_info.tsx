import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    TERMS_IN_YEARS,
    LOAN_USAGE
} = LOAN_APPLICATION_FORM;

const LoanInfo = () => {
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>Desired Loan Amount Rs.</label>
                    </GridColumn>
                    <GridColumn>
                        {'RS 5,000.00/-'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{TERMS_IN_YEARS}</label>
                    </GridColumn>
                    <GridColumn>
                        {'5'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{LOAN_USAGE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'House Buying '}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanInfo;