import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0'
    },
    media: {
        height: 140,
    },
    link: {
        textDecoration: 'none'
    },
    stars: {
        display: 'flex',
        alignItems: 'center'
    },
    fontWeight: {
        fontWeight: 'bold'
    },
    lastCommit: {
        display: "flex"
    },
    starIcon: {
        color: 'yellow'
    }
});

export const ReposContainer = (props) => {

    const repo = props.repo
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    <a className={classes.link} href={repo.html_url}>
                        <div className={classes.name}>{repo.name}</div>
                    </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <div className={classes.stars}>
                        <div className={classes.fontWeight}>Количество звезд</div>
                        : <StarIcon className={classes.starIcon}/>
                        {repo.stargazers_count}
                    </div>
                    <div className={classes.lastCommit}>
                        <div className={classes.fontWeight}>Последний коммит</div>
                        : {repo.updated_at}
                    </div>
                </Typography>
            </CardContent>
        </Card>
    );
}