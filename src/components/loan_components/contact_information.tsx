import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import { LOAN_APPLICATION_FORM } from "../constants/constants";

const {
    FIRST_NAME,
    LAST_NAME,
    DOB,
    MARITAL_STTAUS,
    EMAIL,
    PHONE,
    STATE,
    CITY,
    ZIP_CODE,
    COUNTRY,
    STREET_ADDRESS
} = LOAN_APPLICATION_FORM;

const ContactInformation = () => {
    return (
        <div className='accordion_content' >
            <Grid columns={4}>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{FIRST_NAME}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Raj'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{LAST_NAME}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Ravish'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{DOB}</label>
                    </GridColumn>
                    <GridColumn>
                        {'15/5/2010'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{MARITAL_STTAUS}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Single'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{EMAIL}</label>
                    </GridColumn>
                    <GridColumn>
                        {'john@gmail.com'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{PHONE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'+91 9731103018'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{STREET_ADDRESS}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Electronic City'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{CITY}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Bengaluru'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{STATE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'Karnataka'}
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{ZIP_CODE}</label>
                    </GridColumn>
                    <GridColumn>
                        {'560100'}
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{COUNTRY}</label>
                    </GridColumn>
                    <GridColumn>
                        {'India'}
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default ContactInformation;