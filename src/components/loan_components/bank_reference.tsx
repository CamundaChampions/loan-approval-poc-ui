import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";
const {
    ACCOUNT_TYPE,
    ACCOUNT_NUMBER,
    INSTITUTION_NAME
} = LOAN_APPLICATION_FORM;
const BankReference = () => {
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{INSTITUTION_NAME}</label>
                    </GridColumn>
                    <GridColumn>
                        {'HDFC Bank'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{ACCOUNT_TYPE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Savings'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{ACCOUNT_NUMBER}</label>
                    </GridColumn>
                    <GridColumn>
                        {'7878 9898 8767 0900'}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default BankReference;