import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/page_title/page_title';

const Dashboard = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/apply_loan')
    }

    return (
        <div>
            <PageTitle title='Dashboard' />
            <button onClick={handleClick} >Apply Loan</button>
        </div>
    )
}

export default Dashboard;