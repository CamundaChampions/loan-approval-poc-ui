import './apply_loan.scss';
import { Formik, Form } from 'formik';
import { Input, Select, Radio, Checkbox, SubmitButton } from 'formik-semantic-ui-react';
import { Grid, GridRow, GridColumn, TextArea } from 'semantic-ui-react';
import * as Yup from 'yup';
import { useState } from 'react';
import PageTitle from '../../components/page_title/page_title';
import SectionTitle from '../../components/section_title/section_title';
import config from '../../components/configuration/lookup_configuration.json';
import { COMMON, LOAN_APPLICATION_FORM } from '../../components/constants/constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getUser, getUserType } from '../../store/selectors';

const {
    TERMS_IN_YEARS,
    LOAN_USAGE,
    ACCOUNT_NUMBER,
    ADDRESS,
    BALANCE,
    BANK_NAME,
    CITY,
    COLLATERAL_TYPE,
    CONTACT_INFORMATION,
    COUNTRY,
    DOB,
    EMAIL,
    FIRST_NAME,
    LAST_NAME,
    LOAN_APPLICATION_FORM_TITLE,
    MARITAL_STTAUS,
    PHONE,
    SECURITIES,
    STATE,
    STREET_ADDRESS,
    ZIP_CODE,
    LOAN_AMOUNT,
    CONCENT_MESSAGE,
    SEND_BTN,
    CONCENT,
    ACCOUNT_TYPE,
    BANK_REFERENCE,
    EMPLOYMENT_INFORMATION,
    EXPERIENCE,
    INCOME,
    INSTITUTION_NAME,
    OCCUPATION,
    PRESENT_EMPLOYER
} = LOAN_APPLICATION_FORM;

const ApplyLoan = () => {

    const user = useSelector(getUser);
    const navigate = useNavigate();
    const initialValues = {
        amount: '',
        term: '',
        loanCategory: '',
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
        consent: false,
        comments: ''
    }

    const [isSubmitting, setisSubmitting] = useState(false);

    const validationSchema = Yup.object({
        loanAmount: Yup.string().required('*'),
    })

    const onSubmitForm = (values: any) => {
        console.log(JSON.stringify(values));
        setisSubmitting(true);
        const { loanCategory, amount, term, comments, reason } = values;
        axios.post("http://localhost:9090/api/v1/loan", {
            loanCategory,
            amount,
            term,
            comments,
            reason
        }, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            callback(response);
        }).catch(response => {
            callback(response);
        });
    }

    const callback = (response: any) => {
        console.log(response);
        setisSubmitting(false);
        navigate('/dashboard');
    }

    return (
        <div className='loan-form'>
            <PageTitle title={LOAN_APPLICATION_FORM_TITLE} />
            <Formik initialValues={initialValues} onSubmit={onSubmitForm} >
                <Form>
                    <Grid columns={2}>
                        <GridRow>
                            <GridColumn>
                                <Input name='amount' placeholder={LOAN_AMOUNT} />
                            </GridColumn>
                            <GridColumn>
                                <Input name='term' placeholder={TERMS_IN_YEARS} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={12}>
                                <label>{LOAN_USAGE}</label>
                                {
                                    config.category.map(item => (
                                        <Radio
                                            key={item.value}
                                            name='loanCategory'
                                            label={item.label}
                                            value={item.value}
                                        />
                                    ))
                                }
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <SectionTitle title={SECURITIES} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Select
                                    name='collateralType'
                                    placeholder={COLLATERAL_TYPE}
                                    options={config.collateralType}
                                />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='bankName'
                                    placeholder={BANK_NAME} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='accountNumber'
                                    placeholder={ACCOUNT_NUMBER} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='balance'
                                    placeholder={BALANCE} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <SectionTitle title={CONTACT_INFORMATION} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='firstName'
                                    placeholder={FIRST_NAME} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='lastName'
                                    placeholder={LAST_NAME} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <label>{DOB}</label>
                                <Input
                                    name='dob'
                                    type='date'
                                />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Select
                                    name='maritalStatus'
                                    placeholder={MARITAL_STTAUS}
                                    options={config.maritalStatus}
                                />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='email'
                                    placeholder={EMAIL} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='phone'
                                    placeholder={PHONE} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={16}>
                                <label>{ADDRESS}</label>
                                <Input
                                    name='address'
                                    placeholder={STREET_ADDRESS} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='city'
                                    placeholder={CITY} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='state'
                                    placeholder={STATE} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='zipCode'
                                    placeholder={ZIP_CODE} />
                            </GridColumn>
                            <GridColumn>
                                <Select
                                    name='country'
                                    placeholder={COUNTRY}
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
                                <SectionTitle title={EMPLOYMENT_INFORMATION} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='employer'
                                    placeholder={PRESENT_EMPLOYER} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='occupation'
                                    placeholder={OCCUPATION} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Input
                                    name='income'
                                    placeholder={INCOME} />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='experience'
                                    placeholder={EXPERIENCE} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <SectionTitle title={BANK_REFERENCE} />
                            </GridColumn>
                        </GridRow>
                        <GridRow columns={3}>
                            <GridColumn>
                                <Input
                                    name='institutionName'
                                    placeholder={INSTITUTION_NAME} />
                            </GridColumn>
                            <GridColumn>
                                <Select
                                    name='accountType'
                                    placeholder={ACCOUNT_TYPE}
                                    options={config.collateralType}
                                />
                            </GridColumn>
                            <GridColumn>
                                <Input
                                    name='referenceAccountNumber'
                                    placeholder={ACCOUNT_NUMBER} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <SectionTitle title={CONCENT} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={16}>
                                <div>{CONCENT_MESSAGE}</div>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <Checkbox name='consent' label={COMMON.YES} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={16}>
                                <TextArea
                                    name='comments'
                                    placeholder={'Comments here..'} />
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={16} textAlign='center'>
                                <SubmitButton loading={isSubmitting} primary>{SEND_BTN}</SubmitButton>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Form>
            </Formik>
        </div>
    )
};

export default ApplyLoan;