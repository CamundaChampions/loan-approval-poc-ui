import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    PRESENT_EMPLOYER,
    OCCUPATION,
    INCOME,
    EXPERIENCE
} = LOAN_APPLICATION_FORM;

const EmploymentInformation = () => {
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{PRESENT_EMPLOYER}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Genpact LNC'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{OCCUPATION}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Developer'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{INCOME}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Rs 2,000.00/-'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{EXPERIENCE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'10'}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default EmploymentInformation;