import Logo from '../../assets/img/genpact_logo.png';
import { Grid, GridRow, GridColumn, Image, Header, Dropdown } from 'semantic-ui-react';
import './loan_header.scss';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { setUserType } from '../../store/slice';
import { UserType } from '../../store/types';
import { isDashboardPage } from '../../helper/helper';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';

const LoanHeader = () => {

    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const applicantsList = [
        {
            key: "Applicant 1",
            text: "Applicant 1",
            value: "Applicant 1"
        },
        {
            key: "Applicant 2",
            text: "Applicant 2",
            value: "Applicant 2"
        },
        {
            key: "Financial Manager",
            text: "Financial Manager",
            value: "Financial Manager"
        },
        {
            key: "Manager Approval",
            text: "Manager Approval",
            value: "Manager Approval"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(applicantsList[0].value);
    const user = useSelector(getUser);

    useEffect(() => {
        dispatch(setUserType({ userType: UserType.Applicant, user: applicantsList[0].value }));
    }, [])

    const handleClick = () => {
        navigate('/dashboard');
    }

    const handleChange = (event: SyntheticEvent) => {
        // @ts-ignore
        const value: string = event?.target?.innerText;
        setSelectedOption(value);
        if (value.includes('Applicant')) {
            dispatch(setUserType({ userType: UserType.Applicant, user: value }));
        } else {
            dispatch(setUserType({ userType: UserType.NonApplicant, user: value }));
        }
    };

    const _isDashboardPage = () => {
        return isDashboardPage(window.location.href);
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
                        {
                            _isDashboardPage() ? <Dropdown
                                onChange={handleChange}
                                name={'dropdown'}
                                value={selectedOption}
                                options={applicantsList} /> : user
                        }
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanHeader;