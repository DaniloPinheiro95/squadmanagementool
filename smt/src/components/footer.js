import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    footer: {
        position: "relative",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "100%",
        color: "#333333",
        backgroundColor: "#E9E3E9"
    }
});

function Footer () {
    let classes = useStyles();

    return (
        <footer className={classes.footer}>
            <span>{new Date().getFullYear()} - All rights reserved</span>
        </footer>
    );
}

export default Footer;