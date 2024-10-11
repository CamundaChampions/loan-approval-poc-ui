import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { loanSummary, UserType } from '../../store/types';
import { getUser, getUserType } from '../../store/selectors';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {

    let navigate = useNavigate();
    const userType = useSelector(getUserType);
    const user = useSelector(getUser);
    const [loanSummaryList, setLoanSummaryList] = useState<loanSummary[]>([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const handleClick = (action: string) => {
        switch (action) {
            case 'apply':
                navigate('/apply_loan');
                break;
            default:
                navigate('/view_loan')
                break;
        }
    }

    useEffect(() => {
        axios.get(`${baseUrl}/getdata`, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            console.log(response);
            setLoanSummaryList(response?.data?.loanSummaryList || []);
        }).catch(response => {
            console.log(response);
        });
    }, [user]);

    const isNonApplicantUser = () => userType === UserType.NonApplicant;

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
                    !isNonApplicantUser() &&
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
                            <Table celled>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderCell>
                                            Sr. No.
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Loan ID
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Amount
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            Term
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
                                            <TableRow>
                                                <TableCell>
                                                    {''}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.loanApplicationId}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.amount}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.term}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.statusCode}
                                                </TableCell>
                                                <TableCell>
                                                    {''}
                                                </TableCell>
                                                {/* <TableCell className='center'>
                                                    <Button primary onClick={() => handleClick('view')}>
                                                        {loan.buttonLabel}
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