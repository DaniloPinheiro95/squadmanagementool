import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        width: "100%",
        backgroundColor: "#ffffff",
    },
    title: {
        display: "block",
        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "15px",
        fontWeight: "bold",
    },
    content: {
        padding: "4px",
        borderRadius: "10px",
        backgroundColor: "#F7F3F7"
    }
});

function CardTopTeams(props) {
    let classes = useStyles();

    return (
        <div className={classes.card}>
            <span className={classes.title}>{props.title}</span>
            <div className={classes.content}>
                {props.children}
            </div>
            
        </div>
    );
}

export default CardTopTeams;