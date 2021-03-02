import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCurrentRepo} from "./actions/repos";
import './repo.css';

export const Repo = (props) => {

    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()}>back</button>
            <div>
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
        </div>
    );
};
