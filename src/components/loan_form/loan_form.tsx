import PageTitle from '../page_title/page_title';
import SectionTitle from '../section_title/section_title';
import './loan_form.scss';
import { Grid, GridRow, GridColumn, Input, Select, Radio, Checkbox } from 'semantic-ui-react';
import config from '../configuration/lookup_configuration.json';

const LoanForm = () => {
    return (
        <div className='container'>
            <PageTitle title='Loan Application Form' />
            <Grid columns={2}>
                <GridRow>
                    <GridColumn>
                        <Input placeholder='Loan Amount' />
                    </GridColumn>
                    <GridColumn>
                        <Input placeholder='Terms(In yrs)' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={12}>
                        <label>Loan will be used for</label>
                        {
                            config.loanUsage.map(item => (
                                <Radio
                                    name='usage'
                                    label={item.label}
                                    value={item.value}
                                />
                            ))
                        }
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <SectionTitle title='Securities' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Select
                            placeholder='Collateral Type'
                            options={config.collateralType}
                        />
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
                        <SectionTitle title='Contact Informaction' />
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
                        <label>DOB</label>
                        <Input type='date'
                        />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <label>Marital Status</label>
                        {
                            config.maritalStatus.map(item => (
                                <Radio
                                    name='maritalStatus'
                                    label={item.label}
                                    value={item.value}
                                />
                            ))
                        }
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
                        <label>Address</label>
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
                        <Select
                            placeholder='Country'
                            options={config.country}
                        />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={12}>
                        <label>How long have you lived in your given address?</label>
                        <Radio name='livingYears' label={'0-1 Year'} value={'1'} />
                        <Radio name='livingYears' label={'1-2 Years'} value={'2'} />
                        <Radio name='livingYears' label={'3-4 Years'} value={'4'} />
                        <Radio name='livingYears' label={'5+ Years'} value={'5'} />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <SectionTitle title='Employment Information' />
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
                <GridRow>
                    <GridColumn>
                        <Input
                            placeholder='Gross monthly income' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={12}>
                        <label>Years of experience</label>
                        <Radio name='experience' label={'0-1 Year'} value={'1'} />
                        <Radio name='experience' label={'1-2 Years'} value={'2'} />
                        <Radio name='experience' label={'3-4 Years'} value={'4'} />
                        <Radio name='experience' label={'5+ Years'} value={'5'} />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <SectionTitle title='Bank References' />
                    </GridColumn>
                </GridRow>
                <GridRow columns={3}>
                    <GridColumn>
                        <Input
                            placeholder='Institution Name' />
                    </GridColumn>
                    <GridColumn>
                        <Select
                            placeholder='Account Type'
                            options={config.collateralType}
                        />
                    </GridColumn>
                    <GridColumn>
                        <Input
                            placeholder='Account Number' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <SectionTitle title='Consent' />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width={16}>
                        <div>I hereby agree that the information given is true, accurate and complete as of the date of this application submission.</div>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Checkbox label={'YES'} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanForm;