import Header from '../components/header';
import Footer from '../components/footer';
import { Col, Row } from "react-bootstrap";
import Card from "../components/card";
import AvgAge from "../components/MyTeams/avgAge";
import FieldCard from "../components/MyTeams/fieldCard";
import MyTeamsContent from "../components/MyTeams/myteamscontent";

function MyTeams() {
    return (
        <>
            <Header />
            <Row style={{ marginLeft: "0", marginRight: "0" }}>
                <Col xs={12} md={6}>
                    <Row>
                        <Card title="My teams" link="/time/criar">
                            <MyTeamsContent />
                        </Card>
                    </Row>
                </Col>

                <Col xs={12} md={6}>
                    <Row>
                        <Card title="Top 5">
                            <AvgAge />
                        </Card>
                    </Row>
                    <Row>
                        <FieldCard />
                    </Row>
                </Col>
            </Row>
            <Footer />
        </>
    );
}

export default MyTeams;
