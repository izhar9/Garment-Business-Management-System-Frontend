import { Button, Container } from 'react-bootstrap'

const CtaSection = () => {
    return (
        <section className="cta-section">
            <Container>
                <div className="cta-box">
                    <h2>
                        Ready to take control of
                    <br />
                        your garment business?
                    </h2>

                    <p>
                        Manage workers, production, payments and business
                        performance from one place.
                    </p>

                    <Button className="cta-button">
                        Get Started
                        <i className="bi bi-arrow-right ms-2" />
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default CtaSection