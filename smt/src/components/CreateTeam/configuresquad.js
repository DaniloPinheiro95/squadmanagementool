import React from 'react';

import { withStyles } from 'react-jss';

import { Container, Row, Col } from 'react-bootstrap';
import SearchPlayer from './searchplayers';

const styles = {
    title: {
        textTransform: "uppercase",
        color: "#8D8D8D",
        textAlign: "center",
        marginTop: "20px"
    },
    formContainer: {
        display: "flex",
        padding: "80px 100px",
        justifyContent: "space-between"
    },

    formColumns: {
        display: "inline-block",
        padding: "0px 47px",
    },
    inputLabel: {
        display: "inline-block",
        color: "#444444",
        fontWeight: "bold",
        marginTop: "25px",
        marginRight: "25px"
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
    },
    inputSelect: {
        border: "1px solid #d6d8da",
        borderRadius: "5px",
        padding: "5px 15px"
    },
    field: {
        width: "100%",
        height: "580px",
        backgroundImage: "url('/assets/field.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    player:{
        display: "block",
        borderRadius: "100%",
        backgroundColor: "rgba(255,255,255,0.3)",
        width: "80px",
        lineHeight: "80px",
        textAlign: "center",
        margin: "16px auto"
    },
    playerName: {
        fontSize: "25px",
        color: "#FFFFFF",
        fontWeight: "bold",
    }
};

withStyles(styles);

class ConfigureSquad extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            formationSelected: []
        };
    }

    changeFormation = (event) => {
        if(event.target.value === ""){
            this.setState({ formationSelected: [] });
        }

        if (event.target.value === "3 - 2 - 2 - 3") {
            this.setState({ formationSelected: [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13] });
        }

        if (event.target.value === "3 - 2 - 3 - 1") {
            this.setState({ formationSelected: [1, 2, 3, 4, 6, 7, 8, 9, 11, 13] });
        }

        if (event.target.value === "3 - 4 - 3") {
            this.setState({ formationSelected: [1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 13] });
        }

        if (event.target.value === "3 - 5 - 2") {
            this.setState({ formationSelected: [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13] });
        }

        if (event.target.value === "4 - 2 - 3 - 1") {
            this.setState({ formationSelected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13] });
        }

        if (event.target.value === "4 - 3 - 1 - 1") {
            this.setState({ formationSelected: [1, 2, 3, 5, 7, 8, 9, 10, 12, 13] });
        }

        if (event.target.value === "4 - 3 - 2") {
            this.setState({ formationSelected: [1, 2, 3, 5, 7, 8, 9, 10, 12, 13] });
        }

        if (event.target.value === "4 - 4 - 2") {
            this.setState({ formationSelected: [1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 13] });
        }

        if (event.target.value === "4 - 5 - 1") {
            this.setState({ formationSelected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13] });
        }

        if (event.target.value === "5 - 4 - 1") {
            this.setState({ formationSelected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13] });
        }
    }

    render(){
        const formations = [
            "3 - 2 - 2 - 3",
            "3 - 2 - 3 - 1",
            "3 - 4 - 3",
            "3 - 5 - 2",
            "4 - 2 - 3 - 1",
            "4 - 3 - 1 - 1",
            "4 - 3 - 2",
            "4 - 4 - 2",
            "4 - 5 - 1",
            "5 - 4 - 1"
        ];

        const {classes} = this.props;

        return (
            <section>
                <div className={classes.title}>
                    <h6>Configure Squad</h6>
                </div>
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className={classes.input}>
                                <label className={classes.inputLabel}>Formation</label>
                                <select className={classes.inputSelect} onChange={this.changeFormation}>
                                    <option value="">Selecione</option>
                                    {formations.map((item, index)=>(
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={classes.field}>
                                <Container>
                                    <Row>
                                        <Col>
                                            {this.state.formationSelected.includes(10) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(11) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(12) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {this.state.formationSelected.includes(7) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(8) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(9) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {this.state.formationSelected.includes(4) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(5) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(6) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {this.state.formationSelected.includes(1) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(2) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col>
                                            {this.state.formationSelected.includes(3) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col></Col>
                                        <Col xs={4}>
                                            {this.state.formationSelected.includes(13) ?
                                            <div className={classes.player}>
                                                <span className={classes.playerName}>+</span>
                                            </div>
                                            : ''}
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <SearchPlayer />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    };
}

export default withStyles(styles)(ConfigureSquad);
