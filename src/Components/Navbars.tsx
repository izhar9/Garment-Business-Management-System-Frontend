import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Navbars = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("garment-theme");

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("garment-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    };
  return (
        <Navbar
            expand="lg"
            fixed="top"
            className="landing-navbar"
        >
            <Container>

                <Navbar.Brand href="#" className="brand">

                    <div className="brand-icon">
                        <i className="bi bi-scissors" />
                    </div>

                    <div>
                        <div className="brand-name">
                            Garment<span>Pro</span>
                        </div>

                        <div className="brand-subtitle">
                            BUSINESS MANAGEMENT
                        </div>
                    </div>

                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="main-navbar"
                    className="navbar-dark"
                />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="mx-auto navbar-links">

                        <Nav.Link href="#features">
                            Features
                        </Nav.Link>
                        <Nav.Link href="#analytics">
                            Analytics
                        </Nav.Link>
                        <Nav.Link href="#how-it-works">
                            How It Works
                        </Nav.Link>
                        <Nav.Link href="#security">
                            Security
                        </Nav.Link>
                    </Nav>

                    <div className="navbar-actions">
                        {/* Theme Toggle */}
                        <button
                            type="button"
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <i
                                className={`bi ${
                                    theme === "dark"
                                    ? "bi-sun-fill"
                                    : "bi-moon-fill"
                                }`}
                            />
                        </button>

                        <Link to={'/login'}>
                            <Button
                                variant="link"
                                className="login-btn"
                            >
                                Login
                            </Button>
                        </Link>

                        <Button className="primary-btn">
                            Get Started
                        </Button>

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navbars