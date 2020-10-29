import { createUseStyles } from 'react-jss';

import { Container, Row, Col } from 'react-bootstrap';

import TagsInput from './InputTags';

const useStyles = createUseStyles({
    title: {
        textTransform: "uppercase",
        color: "#8D8D8D",
        textAlign: "center",
        marginTop: "20px"
    },
    inputLabel: {
        display: "block",
        color: "#444444",
        fontWeight: "bold",
        marginTop: "25px"
    },
    inputText: {
        width: "100%",
        border: "1px solid #d6d8da",
        borderRadius: "5px",
        padding: "5px 15px",
    },
    radioLabel: {
        marginLeft: "5px",
        marginRight: "50px"
    }
});

function TeamInformation() {
    let classes = useStyles();

    const selectedTags = tags => {
        console.log(tags);
    };

    return (
        <section>
            <div className={classes.title}>
                <h6>Team Information</h6>
            </div>
            <Container fluid='md'>
                <Row>
                    <Col xs={12} md={6}>
                        <div className={classes.input}>
                            <label className={classes.inputLabel}>Team name</label>
                            <input className={classes.inputText} placeholder="Insert team name" type="text" />
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className={classes.input}>
                            <label className={classes.inputLabel}>Team website</label>
                            <input className={classes.inputText} placeholder="http://myteam.com" type="text" />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <div className={classes.input}>
                            <label className={classes.inputLabel}>Description</label>
                            <textarea rows="8" className={classes.inputText} placeholder="" type="textarea" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={classes.input}>
                            <label className={classes.inputLabel}>Team type</label>
                            <input type="radio" id="typereal" name="teamtype" value="real" defaultChecked/>
                            <label className={classes.radioLabel} htmlFor="typereal">Real</label>
                            <input type="radio" id="typefantasy" name="teamtype" value="fantasy" />
                            <label className={classes.radioLabel} htmlFor="typefantasy">Fantasy</label>
                        </div>
                        <div className={classes.input}>
                            <label className={classes.inputLabel}>Tags</label>
                            <TagsInput selectedTags={selectedTags} tags={[]} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default TeamInformation;
