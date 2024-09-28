import PageTitle from '../page_title/page_title';
import SectionTitle from '../section_title/section_title';
import './loan_form.scss';
import config from '../configuration/lookup_configuration.json';
import { Formik, Form } from 'formik';
import { Input, Select, Radio, Checkbox, SubmitButton } from 'formik-semantic-ui-react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import * as Yup from 'yup';
import { useState } from 'react';

const LoanForm = () => {

    const initialValues = {
        loanAmount: '',
        terms: '',
        usage: '',
        collateralType: '',
        bankName: '',
        accountNumber: '',
        balance: '',
        firstName: '',
        lastName: '',
        dob: '',
        maritalStatus: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        livingYears: '',
        employerName: '',
        occupation: '',
        income: '',
        experiemce: '',
        institutionName: '',
        accountType: '',
        referenceAccountNumber: '',
        consent: false
    }

    const [isSubmitting, setisSubmitting] = useState(false);

    const validationSchema = Yup.object({
        loanAmount: Yup.string().required('*'),
    })

    const onSubmitForm = (values: any) => {
        console.log(JSON.stringify(values));
        setisSubmitting(true);
        setTimeout(() => {
            setisSubmitting(false);
        }, 1000);
    }

    return (
        <div className='container'>
            <PageTitle title='Loan Application Form' />
            <Formik initialValues={initialValues} onSubmit={onSubmitForm} >
                <Form>
                    <Grid columns={2}>
                        <GridRow>
                            <GridColumn>
                                <Input name='loanAmount' placeholder='Loan Amount' />
                            </GridColumn>
                            <GridColumn>
                                <Input name='terms' placeholder='Terms(In yrs)' />
                                {/* {touched.name && errors.name && <div>{errors.name}</div>} */}
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
                                    name='collateralType'
                                    placeholder='Collateral Type'
                                    options={config.collateralType}
                                />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='bankName'
                                    placeholder='Bank Name' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='accountNumber'
                                    placeholder='Account Number' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='balance'
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
                                    name='firstName'
                                    placeholder='First Name' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='lastName'
                                    placeholder='Last Name' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <label>DOB</label>
                                <Input
                                    name='dob'
                                    type='date'
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
                                    name='email'
                                    placeholder='E-mail' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='phone'
                                    placeholder='Phone' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={16}>
                                <label>Address</label>
                                <Input
                                    name='address'
                                    placeholder='Street Address' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='city'
                                    placeholder='City' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='state'
                                    placeholder='State / Province' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='zipCode'
                                    placeholder='Postal / Zip Code' />
                            </GridColumn>
                            <GridColumn>
                                <Select
                                    name='country'
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
                                    name='employer'
                                    placeholder='Present Employer' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='occupation'
                                    placeholder='Occupation' />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='income'
                                    placeholder='Gross monthly income' />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='experience'
                                    placeholder='Years of experience' />
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
                                    name='institutionName'
                                    placeholder='Institution Name' />
                            </GridColumn>
                            <GridColumn>
                                <Select
                                    name='accountType'
                                    placeholder='Account Type'
                                    options={config.collateralType}
                                />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='referenceAccountNumber'
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
                                <Checkbox name='consent' label={'YES'} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <SubmitButton loading={isSubmitting} primary>Send Application Now</SubmitButton>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Form>
            </Formik>
        </div>
    )
};

export default LoanForm;
