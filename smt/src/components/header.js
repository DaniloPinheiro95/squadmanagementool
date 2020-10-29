import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import User from "../data/User_data";

const useStyles = createUseStyles({
    header: {
        display: "flex",
        padding: "5px 2rem",
        backgroundImage: "linear-gradient(to left,#532d8c 0%,#f2295b 100%)",
        alignItems: "center",
        color: "#ffffff"
    },
    link:{
        textDecoration: "none",
        color: "#ffffff",
        "&:hover": {
            color: "#ffffff",
            textDecoration: "none"
        }
    },
    logo:{
        width: "40px",
        marginRight: "20px"
    },
    name: {
        fontWeight: "bold",
        fontSize: "18px",
        '@media (max-width: 448px)': {
            display: "none"
        }
    },
    user:{
        display: "inline-block",
        marginLeft: "auto"
    },
    no_profile_photo:{
        display: "inline-block",
        backgroundImage: "url('/assets/noprofilephoto.svg')",
        backgroundRepeat: "noreapeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "40px",
        lineHeight: "40px",
        textAlign: "center",

        marginLeft: "5px",
        color: "#777777",
        fontWeight: "bold"
    }
});

function Header () {
    let classes = useStyles();

    return (
        <header className={classes.header}>
            <Link className={classes.link} to="/"><img className={classes.logo} src="/assets/venturus_logo.png" alt="Logo Venturus"></img>
            <span className={classes.name}>Squad Management Tool</span></Link>
            <div className={classes.user}>
            <span>{User.userName}</span>
                <div className={classes.no_profile_photo}>{User.initials}</div>
            </div>
            
        </header>
    );
}

export default Header;