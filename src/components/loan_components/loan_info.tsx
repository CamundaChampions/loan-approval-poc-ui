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
                        <label>RS 5,000.00/-</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{TERMS_IN_YEARS}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>5</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{LOAN_USAGE}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>House Buying </label>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanInfo;