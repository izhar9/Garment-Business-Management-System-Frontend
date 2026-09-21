import { Col, Container, Row } from 'react-bootstrap'
import EmployeeMetric from '../EmployeeMetric'

const EmployeeSection = () => {
    return (
        <section className="employee-section section-padding">
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={6}>
                        <div className="employee-preview">
                            <div className="employee-profile">

                                <div className="employee-avatar">
                                    AK
                                </div>

                                <div>
                                    <h6>Ahmed Khan</h6>
                                    <small>Tailor • Employee</small>
                                </div>
                            </div>

                            <Row className="g-3 mt-2">

                                <EmployeeMetric
                                    title="This Month"
                                    value="186"
                                    subtitle="garments"
                                />

                                <EmployeeMetric
                                    title="Earned"
                                    value="₹18,600"
                                />

                                <EmployeeMetric
                                    title="Paid"
                                    value="₹15,000"
                                    success
                                />

                                <EmployeeMetric
                                    title="Pending"
                                    value="₹3,600"
                                    warning
                                />
                            </Row>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="section-label">
                            EMPLOYEE EXPERIENCE
                        </div>

                        <h2 className="section-title">
                            Give your workers visibility
                            into their own performance.
                        </h2>

                        <p className="section-description">
                            Employees don't need access to the owner's financial
                            dashboard. They get a focused view of their own
                            production, earnings, payments and performance.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EmployeeSection