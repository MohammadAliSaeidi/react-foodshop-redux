import './App.css';
import Home from "./pages/Home";
import {Provider} from 'react-redux'
import store from "./redux/store";
import './styles'
import HeroSection from "./pages/Home/HeroSection";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
                <HeroSection />
            </div>
        </Provider>
    );
}

export default App;
