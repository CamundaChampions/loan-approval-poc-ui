import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { UserType, loanSummaryResponse } from '../../store/types';
import { getUser, getUserType } from '../../store/selectors';
import { useEffect, useState } from 'react';
import axios from 'axios';

const dashboardResponseInitialValue: loanSummaryResponse = {
    allowToCreateLoan: false,
    loanSummaryList:[]
};

const Dashboard = () => {

    let navigate = useNavigate();
    const userType = useSelector(getUserType);
    const user = useSelector(getUser);
    const [loanSummaryResponse, setLoanSummaryResponse] = useState<loanSummaryResponse>(dashboardResponseInitialValue);
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
        axios.get(`${baseUrl}/loan`, {
            headers: {
                'user-id': user
            }
        }).then((response) => {
            console.log(response);
            setLoanSummaryResponse(response.data)
        }).catch(response => {
            console.log(response);
        });
    }, [user]);

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
                    loanSummaryResponse.allowToCreateLoan &&
                    <GridRow columns={4}>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                        </GridColumn>
                        <GridColumn>
                            <Button primary className='width_100'
                                onClick={() => handleClick('apply')} >Click to Apply Loan</Button>
                        </GridColumn>
                        
                    </GridRow>
                }
            
                    <GridRow>
                        <GridColumn>
                            <Table celled>
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
                                        loanSummaryResponse?.loanSummaryList.map((loan) => (
                                            <TableRow>
                                                <TableCell>
                                                    {loan.loanApplicationId}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.loanType}
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
                                                <TableCell className='center'>
                                                    <Button primary onClick={() => handleClick('view')}>
                                                        View and Approve
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </GridColumn>
                    </GridRow>
                
            </Grid>
            {/* <Button onClick={handleClick} >Apply Loan</Button> */}
        </div>
    )
}

export default Dashboard;