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
    REASON,
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
                        <Grid columns={6}>
                        <GridRow>
                                <GridColumn>
                                    <label>{LOAN_USAGE}:</label>
                                    
                                </GridColumn>
                                <GridColumn>
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
                                    <label>{LOAN_AMOUNT}:</label>
                                    
                                </GridColumn>
                                <GridColumn>
                                <Input name='amount' placeholder={LOAN_AMOUNT} />
                                    {
                                        touched.amount && errors.amount ? <ValidationMsg message={errors.amount} /> : null
                                    }
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <label>{TERMS_IN_YEARS}:</label>
                                    
                                </GridColumn>
                                <GridColumn>
                                <GridColumn width={12}>
                                    <Radio name='term' label={'1 Year'} value={'1'} />
                                    <Radio name='term' label={'2 Years'} value={'2'} />
                                    <Radio name='term' label={'4 Years'} value={'4'} />
                                    <Radio name='term' label={'5 Years'} value={'5'} />
                                </GridColumn>
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                            <GridColumn>
                                    <label>{REASON}:</label>
                                    
                                </GridColumn>
                                <GridColumn  width={10}>
                                <Input name='reason' placeholder={REASON} />
                                    {
                                        touched.reason && errors.reason ? <ValidationMsg message={errors.reason} /> : null
                                    }
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <SectionTitle title={CONCENT} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn width={16}>
                                <Checkbox name='consent' label={CONCENT_MESSAGE} />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn width={16}>
                                    <TextArea
                                        name='comments'
                                        
                                        placeholder={'Comments here..'} 
                                        />
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn width={16} textAlign='center'>
                                    {/* <SubmitButton loading={isSubmitting} primary>{SEND_BTN}</SubmitButton> */}
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