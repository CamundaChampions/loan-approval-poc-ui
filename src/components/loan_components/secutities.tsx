import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    COLLATERAL_TYPE,
    BANK_NAME,
    ACCOUNT_NUMBER,
    BALANCE
} = LOAN_APPLICATION_FORM;

const Securities = () => {
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{COLLATERAL_TYPE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Type 1'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{BANK_NAME}</label>
                    </GridColumn>
                    <GridColumn>
                        {'HDFC Bank'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{ACCOUNT_NUMBER}</label>
                    </GridColumn>
                    <GridColumn>
                        {'3456 7856 7856 9087'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{BALANCE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'RS 5,000.00/-'}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Securities;