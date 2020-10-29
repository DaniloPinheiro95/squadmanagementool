import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "14px",
        "& ~ &": {
            marginTop: "3px"
        }
    },
    avg: {
        fontWeight: "bold"
    }
});

function TeamAgeAvg(props) {
    let classes = useStyles();

    return (
        <div className={classes.card}>
            <span>{props.teamName}</span>
            <span className={classes.avg}>{props.avgAge.toFixed(1)}</span>
        </div>
    );
}

export default TeamAgeAvg;