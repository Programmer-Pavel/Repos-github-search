import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import {getRepos} from "./actions/repos";
import {setCurrentPage} from "../reducers/reposReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        marginLeft: theme.spacing(3),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export const SearchInput = ({setSearchValue, searchValue}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const searchHandler = (e) => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue))
    }

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Repos"
                inputProps={{'aria-label': 'search repos'}}
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
            <IconButton onClick={() => searchHandler()} className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}