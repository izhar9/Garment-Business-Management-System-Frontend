import { Badge, Container } from 'react-bootstrap'

const SecuritySection = () => {
    return (
        <section id="security" className="section-padding">
            <Container>
                <div className="security-box">

                    <div className="section-label">
                        BUILT WITH SECURITY IN MIND
                    </div>

                    <h2 className="section-title">
                        Your business data stays protected.
                    </h2>

                    <p className="section-description">
                        Authentication and authorization are designed around
                        modern application security practices with role-based
                        access control.
                    </p>

                    <div className="technology-list">
                        {[
                            "JWT Authentication",
                            "Role Based Access",
                            "Spring Security",
                        ].map((technology) => (
                            <Badge
                                key={technology}
                                className="technology-badge"
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SecuritySection