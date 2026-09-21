import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { stats } from '../../LandingPageConstant/stats'

const StatsSection = () => {
    return (
        <section className="stats-section">
            <Container>
                <Row>
                    {stats.map((stat) => (
                        <Col
                            key={stat.label}
                            xs={6}
                            md={3}
                            className="stat-column"
                        >
                            <div className="stat-value">
                                {stat.value}
                            </div>

                            <div className="stat-label">
                                {stat.label}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default StatsSection