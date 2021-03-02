import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Repo} from "./components/repo";
import React from "react";

function App() {

    return (
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/repo' component={Repo}/>
                        <Redirect to='/'/>
                    </Switch>
                </BrowserRouter>
            </div>
    );
}

export default App;
