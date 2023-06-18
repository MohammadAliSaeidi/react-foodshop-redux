import './App.css';
import Home from "./pages/Home";
import {Provider} from 'react-redux'
import store from "./redux/store";
import './styles'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
