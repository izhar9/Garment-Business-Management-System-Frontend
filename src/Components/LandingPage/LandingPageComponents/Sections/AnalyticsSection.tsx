import { Badge, Col, Container, Row } from "react-bootstrap"

const AnalyticsSection = () => {
    return (
        <section id="analytics" className="section-padding">
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={6}>
                        <div className="section-label">
                            BUSINESS INTELLIGENCE
                        </div>

                        <h2 className="section-title">
                            Know exactly how your
                            <br />
                            business is performing.
                        </h2>

                        <p className="section-description">
                            Stop relying on guesswork. Get a clear picture of
                            production, revenue, expenses, worker payments and
                            profitability.
                        </p>

                        <div className="analytics-list">

                            {[
                                "Compare current year with previous year",
                                "Track production trends",
                                "Monitor total expenses",
                                "Analyze employee performance",
                                "Identify pending worker payments",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="analytics-list-item"
                                >
                                    <i className="bi bi-check-circle-fill" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="analytics-card">
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <small>Revenue Growth</small>
                                    <h3>₹48.2L</h3>
                                </div>

                                <Badge bg="success" className="positive-badge">
                                    +34.2%
                                </Badge>
                            </div>

                            <div className="line-chart">
                                <svg
                                    viewBox="0 0 600 220"
                                    preserveAspectRatio="none"
                                >

                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        points="
                                            0,190
                                            70,170
                                            130,180
                                            190,140
                                            250,150
                                            310,105
                                            370,120
                                            430,75
                                            500,90
                                            600,30
                                        "
                                    />
                                </svg>
                            </div>

                            <div className="chart-months">
                                <span>Jan</span>
                                <span>Mar</span>
                                <span>May</span>
                                <span>Jul</span>
                                <span>Sep</span>
                                <span>Dec</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AnalyticsSection