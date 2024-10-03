import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn } from 'semantic-ui-react';

const Dashboard = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/apply_loan')
    }

    const loanData = [
        {
            srNo: 1,
            loanId: 3,
            amount: "10,00,000",
            term: 3,
            status: "PENDING_INFO_CORRECTION",
            loanReason: "Housing",
            buttonLabel: "Open"
        }
    ]

    return (
        <div>
            <PageTitle title='Dashboard' />
            <Grid columns={1}>
                <GridRow>
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
                </GridRow>
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
                                        Button
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
                                            <TableCell>
                                                <Button primary onClick={handleClick}>
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

            </Grid>

            {/* <Button onClick={handleClick} >Apply Loan</Button> */}
        </div>
    )
}

export default Dashboard;