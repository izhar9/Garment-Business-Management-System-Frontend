import { Card, Col, Container, Row } from 'react-bootstrap'
import { features } from '../../LandingPageConstant/features'

const FeaturesSection = () => {
    return (
        <section id="features" className="section-padding">
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="section-label">
                            EVERYTHING IN ONE PLACE
                        </div>

                        <h2 className="section-title">
                            Everything your garment
                            <br />
                            business needs
                        </h2>

                        <p className="section-description">
                            Replace spreadsheets and manual calculations with one
                            centralized system for managing your complete garment
                            operation.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4 mt-4">
                    {features.map((feature) => (
                        <Col key={feature.title} md={6} lg={4}>
                            <Card className="feature-card">
                                <div className="feature-icon">
                                    <i className={`bi ${feature.icon}`} />
                                </div>

                                <Card.Body className="p-0">

                                    <Card.Title className="feature-title">
                                        {feature.title}
                                    </Card.Title>

                                    <Card.Text className="feature-description">
                                        {feature.description}
                                    </Card.Text>

                                    <a href="#!" className="feature-link">
                                        Learn more
                                        <i className="bi bi-arrow-right ms-2" />
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default FeaturesSection