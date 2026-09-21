import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import MetricCard from '../MetricCard'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-glow" />
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={6}>
                        <Badge className="hero-badge">
                            <span className="status-dot" />
                            Built for modern garment businesses
                        </Badge>

                        <h1 className="hero-title">
                            Run your garment
                            <span> business smarter.</span>
                        </h1>

                        <p className="hero-description">
                            Track production, manage workers, monitor payments,
                            control expenses and understand your business growth —
                            all from one powerful platform.
                        </p>

                        <div className="hero-buttons">
                            <Button className="primary-btn hero-primary-btn">
                                Start Managing
                                <i className="bi bi-arrow-right ms-2" />
                            </Button>

                            <Button className="secondary-btn">
                                <i className="bi bi-grid me-2" />
                                Explore Dashboard
                            </Button>
                        </div>

                        <div className="hero-features">
                            <span>
                                <i className="bi bi-check-circle-fill" />
                                Production tracking
                            </span>

                            <span>
                                <i className="bi bi-check-circle-fill" />
                                Payment tracking
                            </span>

                            <span>
                                <i className="bi bi-check-circle-fill" />
                                Analytics
                            </span>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="dashboard-preview">
                            <div className="dashboard-header">
                                <div>
                                    <small>Business Overview</small>
                                    <h5>Dashboard</h5>
                                </div>

                                <Badge bg="success" className="growth-badge">
                                    <i className="bi bi-arrow-up" />
                                    18.4%
                                </Badge>
                            </div>

                            <Row className="g-3">
                                <Col xs={6}>
                                    <MetricCard
                                        title="Revenue"
                                        value="₹4.82L"
                                        subtitle="+12.8% this month"
                                        positive
                                    />
                                </Col>

                                <Col xs={6}>
                                    <MetricCard
                                        title="Production"
                                        value="1,248"
                                        subtitle="+8.4% this month"
                                        positive
                                    />
                                </Col>

                                <Col xs={6}>
                                    <MetricCard
                                        title="Expenses"
                                        value="₹1.72L"
                                        subtitle="This month"
                                    />
                                </Col>

                                <Col xs={6}>
                                    <MetricCard
                                        title="Net Profit"
                                        value="₹3.10L"
                                        subtitle="+21.3%"
                                        positive
                                        highlight
                                    />
                                </Col>
                            </Row>

                            <div className="chart-card">
                                <div className="chart-header">
                                    <div>
                                        <small>Monthly Production</small>
                                        <h6>1,248 garments</h6>
                                    </div>

                                    <select className="chart-select">
                                        <option>2026</option>
                                        <option>2025</option>
                                    </select>
                                </div>

                                <div className="bar-chart">

                                    {[45, 65, 55, 80, 70, 90, 75, 100, 85, 95, 110, 125].map(
                                        (height, index) => (
                                            <div
                                                key={index}
                                                className="chart-bar"
                                                style={{ height: `${height}px` }}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection