import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    card: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "13px",
        margin: "2rem 2rem"
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "80px",
        padding: "20px 30px",
        color: "#532D8C",
        fontWeight: "bold",
        fontSize: "20px",
        borderBottom: "1px solid #F7F3F7"
    },
    saveButtom: {
        width: "400px",
        marginTop: "20px",
        border: "1px solid #f2295b",
        borderRadius: "5px",
        backgroundColor: "#532d8c",
        color: "#ffffff",
        padding: "10px"
    },
    buttomAddTeam: {
        padding: "15px 14px",
        borderRadius: "13px",
        backgroundImage: "linear-gradient(to left,#532d8c 0%,#f2295b 100%)",
        width: "40px",
        height: "40px",
        fontSize: "25px",
        fontFamily:"fangsong",
        lineHeight: "10px",
        display: "inline-block",
        color: "white"
    }
});

function Card(props) {
    let classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.title}>
                <span>{props.title}</span>
                {props.link ?
                <Link to={props.link}>
                    <div className={classes.buttomAddTeam}>
                        +
                </div>
                </Link>
                : ''}
            </div>
            {props.children}
        </div>
    );
}

export default Card;