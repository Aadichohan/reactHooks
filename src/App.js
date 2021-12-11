import logo from './logo.svg';
import './App.css';
import Index from './useCallback/Index';
import Effect from './useEffect/Effect';
import Reducer from './UseReducer/Reducer';
import Memo from './useMemo/Memo';

function App() {
  return (
    <div className="App">
      <Index />
      <Effect />
      <Reducer />
      <Memo />
    </div>
  );
}

export default App;
