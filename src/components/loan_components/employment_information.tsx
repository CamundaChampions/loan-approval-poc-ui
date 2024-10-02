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
                        <label>Genpact LNC</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{OCCUPATION}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Developer</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{INCOME}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Rs 2,000.00/-</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{EXPERIENCE}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>10</label>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default EmploymentInformation;