import { Provider } from 'react-redux';
import './App.css';
import Routes from './routes/routes';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
