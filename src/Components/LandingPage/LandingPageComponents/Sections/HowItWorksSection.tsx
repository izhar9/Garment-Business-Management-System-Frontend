import { Col, Container, Row } from "react-bootstrap"

const HowItWorksSection = () => {
    return (
        <section
            id="how-it-works"
            className="section-padding workflow-section"
        >
            <Container>
                <div className="text-center">
                    <div className="section-label">
                        SIMPLE WORKFLOW
                    </div>

                    <h2 className="section-title">
                        From production to profit
                    </h2>
                </div>

                <Row className="g-4 mt-5">
                    {[
                        {
                            number: "01",
                            title: "Add your team",
                            description:
                            "Create workers, cutting masters and other employees.",
                        },
                        {
                            number: "02",
                            title: "Record production",
                            description:
                            "Track garments produced by every employee.",
                        },
                        {
                            number: "03",
                            title: "Manage payments",
                            description:
                            "Calculate earnings and monitor pending payments.",
                        },
                        {
                            number: "04",
                            title: "Analyze business",
                            description:
                            "Understand expenses, profit and year-over-year growth.",
                        },
                    ].map((step) => (
                        <Col key={step.number} md={6} lg={3}>
                            <div className="workflow-card">
                                <div className="workflow-number">
                                    {step.number}
                                </div>

                                <h5>{step.title}</h5>

                                <p>{step.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default HowItWorksSection