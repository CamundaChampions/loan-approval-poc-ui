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
import { loanSummary, loanSummaryData } from '../../store/types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {
    CONTACT_INFORMATION,
    LOAN_APPLICATION_SUMMARY,
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
    const [loanSummary, setLoanSummary] = useState<loanSummaryData>();

    useEffect(() => {
        if (!loanId) {
            navigate('/dashboard');
        }

        // api call for getting data
        axios.get(`${baseUrl}/loan/${loanId}`, {
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

    const goToDashboard = () => {
        toast("Navigating to dashboard!")
        navigate('/dashboard');
    }

    const acknowledgeCorrection = () => {
        axios.post(`${baseUrl}/loan/${loanId}/acknowledge`
            , {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            console.log(response);
            console.log('Your loan application {}!', 'action');
            navigate('/dashboard');
        }).catch(response => {
            console.log(response);
        });
    }

    // cancal loan
    const approveOrRejectLoanRequest = (action: string) => {
        axios.post(`${baseUrl}/loan/${loanId}/action/${action}`
            ,{comments: 'test'}, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            toast("Wow so easy!")
            console.log(response);
            console.log('Your loan application {}!', action);
            navigate('/dashboard');
        }).catch(response => {
            console.log(response);
        });
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
            <Grid>
                    <GridRow columns={2}>
                        <GridColumn width={12}>
                            <PageTitle title={LOAN_APPLICATION_SUMMARY} />
                        </GridColumn>
                        <GridColumn width={4}>
                                <Button primary className='width_100'
                                onClick={goToDashboard}  >Go back to Dashboard</Button>
                        </GridColumn>
                    </GridRow>
                    </Grid>
            
            
            <div className='viewloan' >
                {
                    loanSummary &&
                    <LoanInfo
                    loanApplicationId={loanSummary.loanApplicationId}
                        amount={loanSummary?.amount}
                        loanCategory={loanSummary.amount}
                        term={loanSummary?.term}
                        status={loanSummary.status}
                        reason={loanSummary.reason} />
                }
                
                
            <Grid>
                    <GridRow columns={6}>
                        <GridColumn>
                            { loanSummary?.possibleActivities?.includes('CAN_CANCEL') && 
                            <Button primary className='width_100'
                                onClick={cancelLoan} >Cancel Loan</Button>
                            }
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                            { loanSummary?.possibleActivities?.includes('CAN_APPROVEORREJECT') && 
                            <Button primary className='width_100'
                                onClick={() => approveOrRejectLoanRequest('REJECT')} >Reject</Button>
                            }
                        </GridColumn>
                        <GridColumn>
                            { loanSummary?.possibleActivities?.includes('CAN_APPROVEORREJECT') && 
                            <Button primary className='width_100'
                                onClick={() => approveOrRejectLoanRequest('APPROVE')}  >Approve</Button>
                            }

                            { loanSummary?.possibleActivities?.includes('CAN_ACKNOWLEDGE_CORRECTION') && 
                            <Button primary className='width_100'
                                onClick={acknowledgeCorrection}  >Acknowledge Correction</Button>
                            }
                        </GridColumn>
                    </GridRow>
                </Grid>

            </div>
        </div>
    )
}

export default ViewLoan;