import './App.css';
import {ReposContainer} from "./components/card";
import {SearchInput} from "./components/searchInput";

function App() {
    return (
        <div className="App">
            <SearchInput/>
            <ReposContainer/>
        </div>
    );
}

export default App;
