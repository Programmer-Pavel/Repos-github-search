import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCurrentRepo} from "./actions/repos";
import './repo.css';
import {Paper} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    },
    linkContainer: {
        display: 'flex'
    },
    stars: {
        display: 'flex',
        alignItems: 'center'
    },
    fontWeight: {
        fontWeight: 'bold'
    },
    lastCommit: {
        display: "flex",
        margin: '5px 0'
    },
    starIcon: {
        color: 'yellow'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(3),
            width: theme.spacing(100),
            height: theme.spacing(75),
        }
    }
}));

export const Repo = (props) => {
    const classes = useStyles();
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <button onClick={() => props.history.goBack()}>back</button>
                <div>
                    <div className="info">
                        <img className="image" src={repo.owner.avatar_url} alt=""/>
                        <div className="name">{repo.name}</div>
                    </div>
                    <div className={classes.stars}>
                        <div className={classes.fontWeight}>Количество звезд</div>
                        : <StarIcon className={classes.starIcon}/>
                        {repo.stargazers_count}
                    </div>
                    <div className={classes.lastCommit}>
                        <div className={classes.fontWeight}>Последний коммит</div>
                        : {repo.updated_at}
                    </div>
                    <div className={classes.linkContainer}>
                        <div className={classes.fontWeight}>Ссылка на репозиторий</div>
                        : <a className={classes.link} href={repo.html_url}>{repo.html_url}</a>
                    </div>
                </div>
            </Paper>
        </div>
    );
};
