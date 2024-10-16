import './apply_loan.scss';
import { Formik } from 'formik';
import { Form, Input, Select, Radio, Checkbox, SubmitButton, TextArea } from 'formik-semantic-ui-react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { useState } from 'react';
import PageTitle from '../../components/page_title/page_title';
import SectionTitle from '../../components/section_title/section_title';
import config from '../../components/configuration/lookup_configuration.json';
import { COMMON, LOAN_APPLICATION_FORM } from '../../components/constants/constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';
import ValidationMsg from '../../components/validation/message';
import { initialValues, validationSchema } from './validationSchema';

const {
    TERMS_IN_YEARS,
    LOAN_USAGE,
    LOAN_APPLICATION_FORM_TITLE,
    LOAN_AMOUNT,
    CONCENT_MESSAGE,
    SEND_BTN,
    CONCENT,
    REASON
} = LOAN_APPLICATION_FORM;

const ApplyLoan = () => {

    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const user = useSelector(getUser);
    const navigate = useNavigate();
    const [isSubmitting, setisSubmitting] = useState(false);

    const onSubmitForm = (values: any) => {
        console.log(JSON.stringify(values));
        setisSubmitting(true);
        const { loanCategory, amount, term, comments, reason } = values;
        axios.post(`${baseUrl}/loan`, {
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
        setisSubmitting(false);
        navigate('/dashboard');
    }

    const handleScroll = (errors: any) => {
        const firstErrorField = Object.keys(errors)[0];
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='loan-form'>
            <PageTitle title={LOAN_APPLICATION_FORM_TITLE} />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitForm}>
                {({ errors, touched }) => (
                    <Form>
                        <Grid columns={2}>
                            <GridRow>
                                <GridColumn>
                                    <label>{LOAN_AMOUNT}</label>
                                    <Input name='amount' placeholder={LOAN_AMOUNT} />
                                    {
                                        touched.amount && errors.amount ? <ValidationMsg message={errors.amount} /> : null
                                    }
                                </GridColumn>
                                <GridColumn>
                                    <label>{TERMS_IN_YEARS}</label>
                                    <Input name='term' placeholder={TERMS_IN_YEARS} />
                                    {
                                        touched.term && errors.term ? <ValidationMsg message={errors.term} /> : null
                                    }
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
                            {/* <GridRow>
                                <GridColumn>
                                    <SectionTitle title={SECURITIES} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{COLLATERAL_TYPE}</label>
                                    <Select
                                        name='collateralType'
                                        placeholder={COLLATERAL_TYPE}
                                        options={config.collateralType}
                                    />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{BANK_NAME}</label>
                                    <Input
                                        name='bankName'
                                        placeholder={BANK_NAME} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{ACCOUNT_NUMBER}</label>
                                    <Input
                                        name='accountNumber'
                                        placeholder={ACCOUNT_NUMBER} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{BALANCE}</label>
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
                                    <label>{FIRST_NAME}</label>
                                    <Input
                                        name='firstName'
                                        placeholder={FIRST_NAME} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{LAST_NAME}</label>
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
                                    <label>{MARITAL_STTAUS}</label>
                                    <Select
                                        name='maritalStatus'
                                        placeholder={MARITAL_STTAUS}
                                        options={config.maritalStatus}
                                    />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{EMAIL}</label>
                                    <Input
                                        name='email'
                                        placeholder={EMAIL} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{PHONE}</label>
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
                                    <label>{CITY}</label>
                                    <Input
                                        name='city'
                                        placeholder={CITY} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{STATE}</label>
                                    <Input
                                        name='state'
                                        placeholder={STATE} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{ZIP_CODE}</label>
                                    <Input
                                        name='zipCode'
                                        placeholder={ZIP_CODE} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{COUNTRY}</label>
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
                                    <label>{PRESENT_EMPLOYER}</label>
                                    <Input
                                        name='employer'
                                        placeholder={PRESENT_EMPLOYER} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{OCCUPATION}</label>
                                    <Input
                                        name='occupation'
                                        placeholder={OCCUPATION} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{INCOME}</label>
                                    <Input
                                        name='income'
                                        placeholder={INCOME} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{EXPERIENCE}</label>
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
                                    <label>{INSTITUTION_NAME}</label>
                                    <Input
                                        name='institutionName'
                                        placeholder={INSTITUTION_NAME} />
                                </GridColumn>
                                <GridColumn>
                                    <label>{ACCOUNT_TYPE}</label>
                                    <Select
                                        name='accountType'
                                        placeholder={ACCOUNT_TYPE}
                                        options={config.collateralType}
                                    />
                                </GridColumn>
                                <GridColumn>
                                    <label>{ACCOUNT_NUMBER}</label>
                                    <Input
                                        name='referenceAccountNumber'
                                        placeholder={ACCOUNT_NUMBER} />
                                </GridColumn>
                            </GridRow> */}
                            <GridRow>
                                <GridColumn width={16}>
                                    <label>{REASON}</label>
                                    <Input
                                        name='reason'
                                        placeholder={REASON} />
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
                                    <SubmitButton
                                        onClick={() => handleScroll(errors)}
                                        loading={isSubmitting}
                                        primary>{SEND_BTN}
                                    </SubmitButton>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default ApplyLoan;