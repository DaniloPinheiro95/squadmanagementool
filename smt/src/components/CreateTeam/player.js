import { createUseStyles } from 'react-jss';

import { Container, Row, Col } from 'react-bootstrap';

const useStyles = createUseStyles({
    playerCard: {
        border: "2px dashed #d6d8da",
        padding: "15px 10px",
        marginTop: "20px",
        backgroundImage: "linear-gradient(to bottom,#ffffff 0%,#d6d8da 250%)"
    },
    label: {
        fontWeight: "bold"
    },
    campo:{
        color: "#f2295b",
        marginLeft: "10px"
    }
});

function Player(props) {
    let classes = useStyles();

    return (
        <>
            <div className={classes.playerCard}>
                <Container>
                    <Row>
                        <Col>
                            <label className={classes.label}>Name:</label>
                            <span className={classes.campo}>{props.player_name}</span>
                        </Col>
                        <Col>
                            <label className={classes.label}>Age:</label>
                            <span className={classes.campo}>{props.age}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label className={classes.label}>Nationality:</label>
                            <span className={classes.campo}>{props.birth_country}</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Player;