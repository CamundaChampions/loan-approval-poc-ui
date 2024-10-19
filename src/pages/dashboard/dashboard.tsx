import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';
import { Table, TableHeader, TableRow, TableHeaderCell, TableCell, Button, Grid, GridRow, GridColumn, Checkbox } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { UserType, loanSummary, loanSummaryResponse } from '../../store/types';
import { getUser, getUserType } from '../../store/selectors';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../store/store';
import { setLoanApplicationId } from '../../store/slice';

const dashboardResponseInitialValue: loanSummaryResponse = {
    allowToCreateLoan: false,
    loanSummaryList:[]
};

const Dashboard = () => {

    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const userType = useSelector(getUserType);
    const user = useSelector(getUser);
    const [includeClosedApplication, setIncludeClosedApplication] = useState(false);
    const [loanSummaryResponse, setLoanSummaryResponse] = useState<loanSummaryResponse>(dashboardResponseInitialValue);
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

    const handleIncludeClosedApplication = () => {

    }

    const handleRowClick = (loan: loanSummary) => {
        dispatch(setLoanApplicationId({ loanId: loan.loanApplicationId }));
        navigate('/view_loan');
    }
    
  const fetchApplicationList = () => {
    axios
      .get(`${baseUrl}/loan`, {
        params: {
            includeclosedapplication: true
        },
        headers: {
          "user-id": user,
        },
      })
      .then((response) => {
        console.log(response);
        setLoanSummaryResponse(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    fetchApplicationList();
  }, [user]);


    return (
      <div>
        <PageTitle title="Dashboard" />
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
          {loanSummaryResponse.allowToCreateLoan && (
            <GridRow columns={4}>
              <GridColumn>
                <Checkbox
                  name="consent"
                  label="include Closed Application"
                  onChange={handleIncludeClosedApplication}
                />
              </GridColumn>
              <GridColumn></GridColumn>
              <GridColumn></GridColumn>
              <GridColumn>
                <Button
                  primary
                  className="width_100"
                  onClick={() => handleClick("apply")}
                >
                  Click to Apply Loan
                </Button>
              </GridColumn>
            </GridRow>
          )}

          <GridRow>
            <GridColumn>
              <Table celled selectable>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Loan Request Id</TableHeaderCell>
                    <TableHeaderCell>Loan Category</TableHeaderCell>
                    <TableHeaderCell>Amount</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Loan Reason</TableHeaderCell>
                    <TableHeaderCell></TableHeaderCell>
                  </TableRow>
                </TableHeader>
                <tbody>
                  {loanSummaryResponse?.loanSummaryList.map((loan) => (
                    <TableRow onClick={() => handleRowClick(loan)}>
                      <TableCell>{loan.loanApplicationId}</TableCell>
                      <TableCell>{loan.loanType}</TableCell>
                      <TableCell>{loan.amount}</TableCell>
                      <TableCell>{loan.status}</TableCell>
                      <TableCell>{loan.reason}</TableCell>
                      <TableCell className="center">
                        <Button primary onClick={() => handleClick("view")}>
                          View and Approve
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </GridColumn>
          </GridRow>
        </Grid>
        {/* <Button onClick={handleClick} >Apply Loan</Button> */}
      </div>
    );
}

export default Dashboard;