import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-content">
                    <div>
                        <div className="brand-name">
                            Garment<span>Pro</span>
                        </div>

                        <p>
                            Garment business management made simple.
                        </p>
                    </div>

                    <div>
                        © 2026 GarmentPro. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer