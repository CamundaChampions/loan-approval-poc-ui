import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/apply_loan')
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleClick} >Apply Loan</button>
        </div>
    )
}

export default Dashboard;