import './App.css';
import {ReposContainer} from "./components/cardRepo";
import {SearchInput} from "./components/searchInput";
import {useDispatch} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/main/Main";

function App() {

    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="app">
                <Route path='/' component={Main}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
