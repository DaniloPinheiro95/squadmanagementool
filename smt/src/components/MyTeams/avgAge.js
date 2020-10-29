import { Container, Row, Col } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import TeamAvgAgeData from '../../data/avgAge_data';

import CardTopTeams from './cardTopTeams';

import TeamAgeAvg from './teamAgeAvg';

const useStyles = createUseStyles({
    avgage: {
        margin: "15px",
        marginBottom: "30px"
    }
});

const ages = TeamAvgAgeData;
const lowestAgeAvg = ages.sort((a,b)=> a.avgAge - b.avgAge);
const highestAgeAvg = lowestAgeAvg.slice().reverse();

function AvgAge() {

    let classes = useStyles();

    return (
        <>
            <div className={classes.avgage}>
                <Container>
                    <Row>
                        <Col>
                            <CardTopTeams title="Highest avg age">
                                {highestAgeAvg.slice(0, 5).map((team, index) => 
                                <TeamAgeAvg key={index} {...team} />
                                )}
                            </CardTopTeams>
                        </Col>
                        <Col>
                            <CardTopTeams title="Lowest avg age">
                                {lowestAgeAvg.slice(0, 5).map((team, index) =>
                                <TeamAgeAvg key={index} {...team} />
                                )}
                            </CardTopTeams>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AvgAge;