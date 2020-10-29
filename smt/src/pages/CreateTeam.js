import Header from '../components/header';
import Footer from '../components/footer';

import Card from '../components/card';
import TeamInformation from '../components/CreateTeam/teaminformation';
import ConfigureSquad from '../components/CreateTeam/configuresquad';
import { Container, Row, Col }from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    saveButtom: {
        width: "100%",
        marginTop: "20px",
        border: "1px solid #f2295b",
        borderRadius: "5px",
        backgroundColor: "#532d8c",
        color: "#ffffff",
        padding: "10px"
    }
});

function CreateTeam() {

    let classes = useStyles();

    return (
        <>
            <Header />
            <Row style={{marginLeft: "0", marginRight: "0"}}>
                <Card title="Create your team">
                    <form>
                        <TeamInformation />
                        <ConfigureSquad />
                        <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                    <button className={classes.saveButtom} type="submit">Save</button>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                </Card>
            </Row>
            <Footer />
        </>
    );
}

export default CreateTeam;