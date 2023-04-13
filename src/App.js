
import { Provider } from 'react-redux';
import './App.css';
import Counter from './Component/Counter';
import store from './redux/count/store';

function App() {
  return (
<Provider store={store}>
   
    <div>
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
