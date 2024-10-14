import Logo from '../../assets/img/genpact_logo.png';
import { Grid, GridRow, GridColumn, Image, Header, Dropdown, DropdownProps } from 'semantic-ui-react';
import './loan_header.scss';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { setUserType } from '../../store/slice';
import { UserType } from '../../store/types';

const LoanHeader = () => {

    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const applicantsList = [
        {
            key: "applicant_1",
            text: "Applicant 1",
            value: "Applicant 1"
        },
        {
            key: "applicant_2",
            text: "Applicant 2",
            value: "Applicant 2"
        },
        {
            key: "financial_assessment_manager",
            text: "Financial Manager",
            value: "Financial Manager"
        },
        {
            key: "risk_assessment_manager",
            text: "Manager Approval",
            value: "Manager Approval"
        }
    ];
    const [selectedOption, setSelectedOption] = useState(applicantsList[0].value);
    useEffect(() => {
        dispatch(setUserType({ user: applicantsList[0].key }));
    }, [])

    const handleClick = () => {
        navigate('/dashboard');
    }

    const handleChange = (event: SyntheticEvent, data: DropdownProps) => {
        // @ts-ignore
        const selectedValue: string = applicantsList.filter( value => value.text === data.value).at(0)?.value;

        const selectedUser: string|any = applicantsList.filter( value => value.text === data.value).at(0)?.key;

        setSelectedOption(selectedValue);
        dispatch(setUserType({ user: selectedUser }));
    };

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
                        <Dropdown
                            onChange={handleChange}
                            name={'dropdown'}
                            value={selectedOption}
                            options={applicantsList} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default LoanHeader;