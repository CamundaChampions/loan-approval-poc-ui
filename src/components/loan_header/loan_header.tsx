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
            key: "applicant_1",
            text: "Applicant 1",
            value: "applicant_1"
        },
        {
            key: "applicant_2",
            text: "Applicant 2",
            value: "applicant_2"
        },
        {
            key: "financial_assessment_manager",
            text: "Financial Manager",
            value: "financial_assessment_manager"
        },
        {
            key: "risk_assessment_manager",
            text: "Manager Approval",
            value: "risk_assessment_manager"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(applicantsList[0]);
    const { user } = useSelector(getUser);

    useEffect(() => {
        dispatch(setUserType({
            userType: UserType.Applicant,
            user: applicantsList[0].text,
            userId: applicantsList[0].value
        }));
    }, [])

    const handleClick = () => {
        navigate('/dashboard');
    }

    const handleChange = (event: SyntheticEvent, data: any) => {
        // @ts-ignore
        const text: string = event?.target?.innerText;
        // @ts-ignore
        const value: string = data.value;
        setSelectedOption({ key: value, text, value });
        if (value.toLowerCase().includes('applicant')) {
            dispatch(setUserType({ userType: UserType.Applicant, user: text, userId: value }));
        } else {
            dispatch(setUserType({ userType: UserType.NonApplicant, user: text, userId: value }));
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
                                onChange={(e, data) => handleChange(e, data)}
                                name={'dropdown'}
                                value={selectedOption.key}
                                text={selectedOption.text}
                                options={applicantsList} /> : user
                        }
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanHeader;