import './App.css';
import LoanHeader from './components/loan_header/loan_header';
import Routes from './routes/routes';

function App() {
  return (
    <>
      <LoanHeader />
      <main className='container'>
        <Routes />
      </main>
    </>
  );
}

export default App;
