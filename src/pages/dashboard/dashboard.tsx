import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { UserType } from '../../store/types';
import { getUserType } from '../../store/selectors';

const Dashboard = () => {

    let navigate = useNavigate();
    const userType = useSelector(getUserType);

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

    const loanData = [
        {
            srNo: 1,
            loanId: 3,
            amount: "10,00,000",
            term: 3,
            status: "PENDING_INFO_CORRECTION",
            loanReason: "Housing",
            buttonLabel: "View"
        }
    ]

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
                    isNonApplicantUser() &&
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
                                        loanData.map((loan) => (
                                            <TableRow>
                                                <TableCell>
                                                    {loan.srNo}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.loanId}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.amount}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.term}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.status}
                                                </TableCell>
                                                <TableCell>
                                                    {loan.loanReason}
                                                </TableCell>
                                                <TableCell className='center'>
                                                    <Button primary onClick={() => handleClick('view')}>
                                                        {loan.buttonLabel}
                                                    </Button>
                                                </TableCell>
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