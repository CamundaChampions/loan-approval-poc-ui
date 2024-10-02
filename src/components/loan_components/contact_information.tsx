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
                        <label>Raj</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{LAST_NAME}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Ravish</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{DOB}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>15/5/2010</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{MARITAL_STTAUS}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Single</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{EMAIL}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>john@gmail.com</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{PHONE}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>+91 9731103018</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{STREET_ADDRESS}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Electronic City</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{CITY}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Bengaluru</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{STATE}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>Karnataka</label>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label className='shadow_label'>{ZIP_CODE}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>560100</label>
                    </GridColumn>
                    <GridColumn>
                        <label className='shadow_label'>{COUNTRY}</label>
                    </GridColumn>
                    <GridColumn>
                        <label>India</label>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default ContactInformation;