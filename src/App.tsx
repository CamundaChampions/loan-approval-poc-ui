import './App.css';
import LoanHeader from './components/loan_header/loan_header';
import Routes from './routes/routes';

function App() {
  return (
    <>
      <LoanHeader />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
