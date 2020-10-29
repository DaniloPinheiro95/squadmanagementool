import { Col, Container, Row } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import PickedPlayers from '../../data/pickedPlayers_data';

const useStyles = createUseStyles({
    field: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "13px",
        margin: "0 2rem",
        height: "300px",
        backgroundImage: "url('/assets/myTeamsField.png')",
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    title: {
        color: "#ffffff",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "center"
    },
    halffield: {
        textAlign: "center",
        paddingTop: "40px"
    },
    player: {
        display: "block"
    },
    playerphoto: {
        display: "inline-block",
        backgroundColor: "#ffffff",
        width: "130px",
        lineHeight: "130px",
        fontSize: "40px",
        textAlign: "center",
        margin: "20px auto",
        color: "#777777",
        fontWeight: "bold",
        borderRadius: "100%",

        "@media (max-width: 505px)": {
            width: "90px",
            lineHeight: "90px",
            margin: "0 auto"
        },
        "@media (min-width: 768px) and (max-width: 1008px)": {
            width: "90px",
            lineHeight: "90px",
            margin: "10px auto"
        }
    },
    percent: {
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "left",
        marginTop: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        width: "60px",
        borderBottom: "2px solid #ffffff",
        color: "#ffffff",
    },
    most: {
        border: "3px dashed #c24fbc",
        boxShadow: "0 0 10px 3px #532d8c"
    },
    less: {
        color: "#cccccc"
    }
});

function FieldCard() {
    let classes = useStyles();

    return (
        <div className={classes.field}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.halffield}>
                            <span className={classes.title}>Most picked player</span>
                            <div className={classes.player}>
                                <div className={`${classes.playerphoto} ${classes.most}`}>{PickedPlayers.mostPicked.initials}</div>
                                <div className={classes.percent}>{PickedPlayers.mostPicked.percent}</div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.halffield}>
                            <span className={`${classes.title} ${classes.less}`}>Less picked player</span>
                            <div>
                                <div className={classes.playerphoto}>{PickedPlayers.lessPicked.initials}</div>
                                <div className={classes.percent}>{PickedPlayers.lessPicked.percent}</div>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>           
        </div>
    );
}

export default FieldCard;