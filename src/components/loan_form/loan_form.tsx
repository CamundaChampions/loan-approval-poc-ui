import './loan_form.scss';
import { Grid, GridRow, GridColumn, Image, Input, Label, Select } from 'semantic-ui-react';

const LoanForm = () => {
    return (
        <div className='container'>
            <Grid columns={2}>
                <GridRow>
                    <GridColumn>
                        <div className='section-title'>Loan Application Form</div>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div>
                            Desired Loan Amount Rs.
                        </div>
                        <Input />
                    </GridColumn>
                    <GridColumn>
                        <div>
                            Terms(In yrs)
                        </div>
                        <Input />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className='section-title'>Securities</div>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Select
                            placeholder='Collateral Type'
                            options={
                                [
                                    { key: '1', value: '1', text: 'Type 1' },
                                    { key: '2', value: '2', text: 'Type 2' },
                                    { key: '3', value: '3', text: 'Type 3' },
                                ]
                            } />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Bank Name' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Account Number' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Balance' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className='section-title'>Contact Informaction</div>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='First Name' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Last Name' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='E-mail' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Phone' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Street Address' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='City' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='State / Province' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Postal / Zip Code' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Country' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <div className='section-title'>Employment Information</div>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Present Employer' />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Occupation' />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanForm;