import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import type { RegisteredUser } from '../AppOwner'

interface StatCardProps {
  registeredUsers: RegisteredUser[];
  theme: string;
}

const StatCard:React.FC<StatCardProps> = ({registeredUsers, theme}) => {
    return (
        <Row className="g-3 mb-4">
            <Col md={4}>
                <Card className="owner-stat-card" style={
                    theme === "dark" ? {
                        background : "#151c2b",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                    }:
                    {
                        background : "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.1)"
                    }
                }>
                    <Card.Body>
                        <div className="stat-icon">
                            <i className="bi bi-people-fill" />
                        </div>

                        <div>
                            <p>Total Owners</p>
                            <h3>{registeredUsers.length}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="owner-stat-card" style={
                    theme === "dark" ? {
                        background : "#151c2b",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                    }:
                    {
                        background : "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.1)"
                    }
                }>
                    <Card.Body>
                        <div className="stat-icon active">
                            <i className="bi bi-person-check-fill" />
                        </div>

                        <div>
                            <p>Active Owners</p>
                            <h3>
                                {
                                registeredUsers.filter((item) => item.status === "Active")
                                    .length
                                }
                            </h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="owner-stat-card" style={
                    theme === "dark" ? {
                        background : "#151c2b",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                    }:
                    {
                        background : "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.1)"
                    }
                }>
                    <Card.Body>
                        <div className="stat-icon inactive">
                            <i className="bi bi-person-x-fill" />
                        </div>

                        <div>
                            <p>Inactive Owners</p>
                            <h3>
                                {
                                    registeredUsers.filter(
                                        (item) => item.status === "Inactive",
                                    ).length
                                }
                            </h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default StatCard