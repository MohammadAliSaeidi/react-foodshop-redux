import './App.css';
import HomePage from "./pages/Home";
import {Provider} from 'react-redux'
import store from "./redux/store";
import './styles'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HomePage/>
            </div>
        </Provider>
    );
}

export default App;
