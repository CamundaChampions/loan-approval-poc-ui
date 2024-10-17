import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { loanSummary, UserType } from '../../store/types';
import { getUser, getUserType } from '../../store/selectors';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../store/store';
import { setLoanApplicationId } from '../../store/slice';

const Dashboard = () => {

    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const userType = useSelector(getUserType);
    const { userId } = useSelector(getUser);
    const [loanSummaryList, setLoanSummaryList] = useState<loanSummary[]>([]);
    const [allowToCreateLoan, setAllowToCreateLoan] = useState<boolean>(false);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const handleClick = (action: string) => {
        switch (action) {
            case 'apply':
                navigate('/apply_loan');
                break;
            default:
                navigate('/view_loan');
                break;
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl}/loan`, {
            headers: {
                'user-id': userId
            }
        }).then((response) => {
            console.log(response);
            setLoanSummaryList(response?.data?.loanSummaryList || []);
            setAllowToCreateLoan(response?.data?.allowToCreateLoan);
        }).catch(response => {
            console.log(response);
        });
    }, [userId]);

    const handleRowClick = (loan: loanSummary) => {
        dispatch(setLoanApplicationId({ loanId: loan.loanApplicationId }));
        navigate('/view_loan');
    }

    return (
        <div>
            <PageTitle title='Dashboard' />
            <Grid columns={1}>
                {/* <GridRow>
                    <GridColumn>
                        <p>
                            Welcome to <em>Loan Approval Application</em>
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <p>
                            Loan Request Assigned to you.
                        </p>
                    </GridColumn>
                </GridRow> */}
                {
                    allowToCreateLoan &&
                    <GridRow columns={3}>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                            <Button primary className='width_100'
                                onClick={() => handleClick('apply')} >Apply Loan</Button>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                    </GridRow>
                }
                {
                    !!loanSummaryList.length &&
                    <GridRow>
                        <GridColumn>
                            <Table celled selectable>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderCell>
                                            Loan Request Id
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Loan Category
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Amount
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Status
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Loan Reason
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                        </TableHeaderCell>
                                    </TableRow>
                                </TableHeader>
                                <tbody>
                                    {
                                        loanSummaryList.map((loan) => (
                                            <TableRow onClick={() => handleRowClick(loan)}>
                                                <TableCell>
                                                    {loan.loanApplicationId}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.loanCategory}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.amount}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.status}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.reason}
                                                </TableCell>
                                                {/* <TableCell className='center'>
                                                    <Button primary onClick={() => handleClick('view')}>
                                                        {'View and Approve'}
                                                    </Button>
                                                </TableCell> */}
                                            </TableRow>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </GridColumn>
                    </GridRow>
                }
            </Grid>
            {/* <Button onClick={handleClick} >Apply Loan</Button> */}
        </div>
    )
}

export default Dashboard;