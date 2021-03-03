import React, {useEffect, useState} from 'react';
import {SearchInput} from "../searchInput";
import {ReposContainer} from "../reposContainer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import './Main.css';
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: '30vh auto'
    },
}));

export const Main = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const isFetchError = useSelector(state => state.repos.isFetchError)

    const [searchValue, setSearchValue] = useState('')

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []

    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    return (
        <div>
            {isFetchError &&
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Произошла ошибка! — <strong>Пожалуйста, обновите страницу!</strong>
            </Alert>
            }

            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
            {!isFetching ?
                repos.map(repo => {
                    return <ReposContainer repo={repo}/>
                })
                : <div className={classes.root}>
                    <CircularProgress/>
                </div>
            }

            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}
                >{page}</span>)}
            </div>
        </div>
    );
};

