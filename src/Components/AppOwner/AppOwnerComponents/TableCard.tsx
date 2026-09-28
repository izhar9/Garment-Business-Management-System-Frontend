import React from 'react'
import { Badge, Button, Card, Table } from 'react-bootstrap'
import type { RegisteredUser } from '../AppOwner';

interface TableCardProps {
  registeredUsers: RegisteredUser[];
  theme: string;
}

const TableCard: React.FC<TableCardProps>  = ({registeredUsers, theme}) => {
    return (
        <Card className="owner-table-card"
            style={
                theme === "dark" ? {
                    background : "#151c2b",
                    border: "1px solid rgba(255, 255, 255, 0.08)"
                }:
                {
                    background : "#ffffff",
                    border: "1px solid rgba(15, 23, 42, 0.1)"
                }
            }
        >
            <Card.Body className="p-0">
                <div className="table-header">
                    <div>
                        <h5>Registered Users</h5>
                        <p>List of all registered business owners</p>
                    </div>

                    <Badge bg='transparent' className="user-count-badge">
                        {registeredUsers.length} Users
                    </Badge>
                </div>

                <div className="table-responsive">
                    <Table hover responsive className="owner-table mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {registeredUsers.length > 0 ? (
                                registeredUsers.map((registeredUser, index) => (
                                <tr key={registeredUser.id}>
                                    <td>{index + 1}</td>

                                    <td>
                                    <div className="user-info">
                                        <div className="user-avatar">
                                            {registeredUser.username.charAt(0).toUpperCase()}
                                        </div>

                                        <div>
                                            <strong>{registeredUser.username}</strong>
                                            <small>ID: {registeredUser.id}</small>
                                        </div>
                                    </div>
                                    </td>

                                    <td>{registeredUser.email}</td>

                                    <td>
                                        <Badge bg='transparent' className="role-badge">
                                            {registeredUser.role}
                                        </Badge>
                                    </td>

                                    <td>
                                        <Badge
                                            className={
                                            registeredUser.active === true
                                                ? "status-badge active"
                                                : "status-badge inactive"
                                            }
                                        >
                                            <span className="status-dot" />
                                            {registeredUser.active ? "Active" : "InActive"}
                                        </Badge>
                                    </td>

                                    <td className="text-end">

                                        <Button
                                            variant="link"
                                            className="action-btn"
                                            title="Edit user"
                                        >
                                            <i className="bi bi-pencil-square" />
                                        </Button>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan={6} className="empty-table">
                                    <i className="bi bi-people" />

                                    <p>No registered users found.</p>
                                </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TableCard