import './view_loan.scss';
import { SyntheticEvent, useEffect, useState } from 'react';
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon,
    Grid,
    GridRow,
    GridColumn,
    Button,
} from 'semantic-ui-react'
import PageTitle from '../../components/page_title/page_title';
import { LOAN_APPLICATION_FORM } from '../../components/constants/constants';
import Securities from '../../components/loan_components/secutities';
import ContactInformation from '../../components/loan_components/contact_information';
import EmploymentInformation from '../../components/loan_components/employment_information';
import LoanInfo from '../../components/loan_components/loan_info';
import BankReference from '../../components/loan_components/bank_reference';
import { useSelector } from 'react-redux';
import { getLoanId, getUser } from '../../store/selectors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loanSummary } from '../../store/types';

const {
    CONTACT_INFORMATION,
    LOAN_APPLICATION_FORM_TITLE,
    SECURITIES,
    EMPLOYMENT_INFORMATION,
    BANK_REFERENCE
} = LOAN_APPLICATION_FORM
const ViewLoan = () => {

    let navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(-1);
    const loanId = useSelector(getLoanId);
    const user = useSelector(getUser);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [loanSummary, setLoanSummary] = useState<loanSummary>();

    useEffect(() => {
        if (!loanId) {
            navigate('/dashboard');
        }

        // api call for getting data
        axios.post(`${baseUrl}/getdata`, {
            loanApplicationId: loanId
        }, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            console.log(response);
            setLoanSummary(response?.data);
        }).catch(response => {
            console.log(response);
        });
    }, []);

    const handleClick = (e: SyntheticEvent, titleProps: any) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    // cancal loan
    const cancelLoan = () => {
        axios.post(`${baseUrl}/postdata`, {
            loanApplicationId: loanId
        }, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            console.log(response);
            console.log('Your loan application cancelled!');
        }).catch(response => {
            console.log(response);
        });
    }

    return (
        <div>
            <PageTitle title={LOAN_APPLICATION_FORM_TITLE} />
            <div className='viewloan' >
                {
                    loanSummary &&
                    <LoanInfo
                        amount={loanSummary?.amount}
                        loanCategory={loanSummary.amount}
                        term={loanSummary?.term} />
                }
                {/* <Accordion>
                    <AccordionTitle
                        active={activeIndex === 0}
                        index={0}
                        onClick={handleClick}
                    >
                        <Icon size='big' name='dropdown' />
                        <span className='view_title'>{SECURITIES}</span>
                    </AccordionTitle>
                    <AccordionContent active={activeIndex === 0}>
                        <Securities />
                    </AccordionContent>
                    <AccordionTitle
                        active={activeIndex === 1}
                        index={1}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className='view_title'>{CONTACT_INFORMATION}</span>
                    </AccordionTitle>
                    <AccordionContent active={activeIndex === 1}>
                        <ContactInformation />
                    </AccordionContent>
                    <AccordionTitle
                        active={activeIndex === 2}
                        index={2}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className='view_title'>{EMPLOYMENT_INFORMATION}</span>
                    </AccordionTitle>
                    <AccordionContent active={activeIndex === 2}>
                        <EmploymentInformation />
                    </AccordionContent>
                    <AccordionTitle
                        active={activeIndex === 3}
                        index={3}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className='view_title'>{BANK_REFERENCE}</span>
                    </AccordionTitle>
                    <AccordionContent active={activeIndex === 3}>
                        <BankReference />
                    </AccordionContent>
                    <AccordionTitle
                        active={activeIndex === 4}
                        index={4}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        <span className='view_title'>Loan Application Tracker</span>
                    </AccordionTitle>
                    <AccordionContent active={activeIndex === 4}>
                        <div className='accordion_content' >
                            <Grid columns={4}>
                                <GridRow>
                                    <GridColumn>
                                        <label className='shadow_label'>Status</label>
                                    </GridColumn>
                                    <GridColumn>
                                        <label>Submitted / Under Process</label>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </div>
                    </AccordionContent>
                </Accordion> */}
                <Grid>
                    <GridRow columns={3}>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                            <Button primary className='width_100'
                                onClick={cancelLoan} >Cancel Loan</Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        </div>
    )
}

export default ViewLoan;