import Logo from '../../assets/img/genpact_logo.png';
import { Grid, GridRow, GridColumn, Image, Header, Dropdown } from 'semantic-ui-react';
import './loan_header.scss';
import { useNavigate } from 'react-router-dom';


const LoanHeader = () => {

    let navigate = useNavigate();
    const applicantsList = [
        {
            key: "Applicant_1",
            text: "Applicant_1",
            value: "Applicant_1"
        },
        {
            key: "Applicant_2",
            text: "Applicant_2",
            value: "Applicant_2"
        },
        {
            key: "Applicant_3",
            text: "Applicant_3",
            value: "Applicant_3"
        }
    ]

    const handleClick = () => {
        navigate('/dashboard')
    }

    return (
        <div className='header'>
            <Grid columns={3}>
                <GridRow>
                    <GridColumn>
                        <Image onClick={handleClick} className='gen_logo' src={Logo} alt={'Genpact Logo'} size='small' />
                    </GridColumn>
                    <GridColumn className='header_heading'>
                        <Header as='h1'>Camunda POC</Header>
                    </GridColumn>
                    <GridColumn className='applicant_dropdown'>
                        <Dropdown placeholder='Applicant' options={applicantsList} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanHeader;