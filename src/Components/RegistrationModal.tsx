import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'

interface RegistrationModalProps {
    showRegisterModal: boolean;
    handleCloseRegisterModal: () => void;
    handleRegistration: () => void
    isPending: boolean
    formValues: {
        username: string;
        email: string;
        mobileNo: string;
        password: string;
        confirmPassword: string;
    };

    setFormValues: React.Dispatch<
        React.SetStateAction<{
            username: string;
            email: string;
            mobileNo: string;
            password: string;
            confirmPassword: string;
        }>
    >;

    formValueError : {
        usernameError: string,
        emailError: string,
        mobileNoError: string,
        passwordError: string,
        confirmPasswordError: string,
        error: string,
        success: string,
    };
    theme: string
}
const RegistrationModal: React.FC<RegistrationModalProps> = ({
    showRegisterModal,
    handleCloseRegisterModal,
    isPending,
    formValues,
    setFormValues,
    formValueError,
    handleRegistration,
    theme
}) => {
    return (
        <Modal
            show={showRegisterModal}
            onHide={handleCloseRegisterModal}
            size='lg'
              contentClassName="registration-modal"
        >
            <Modal.Header closeButton
                style={
                    theme === "dark" ? {
                        background : "#151c2b",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#ffffff"
                    }:
                    {
                        background : "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.1)"
                    }
                }
            >
                <Modal.Title>
                    <i className="bi bi-person-plus-fill me-2" />
                    Register Owner
                </Modal.Title>
            </Modal.Header>

            <Form noValidate>
                <Modal.Body
                    style={
                        theme === "dark" ? {
                            background : "#151c2b",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#ffffff"
                        }:
                        {
                            background : "#ffffff",
                            border: "1px solid rgba(15, 23, 42, 0.1)"
                        }
                    }
                >
                    {/* Error */}
                    {formValueError.error && (
                        <Alert
                            variant="danger"
                            className="login-alert"
                        >
                            {formValueError.error}
                        </Alert>
                    )}

                        {/* Username */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Username
                            </Form.Label>

                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Enter your username"
                                className="login-input"
                                value={formValues.username}
                                onChange={(e) =>
                                    setFormValues((prev) => ({
                                        ...prev,
                                        username: e.target.value,
                                    }))
                                }
                                isInvalid={!!formValueError.usernameError}
                                readOnly={isPending}
                            />

                            {formValueError.usernameError && (
                                <Form.Control.Feedback type="invalid">
                                    {formValueError.usernameError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Email
                            </Form.Label>

                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="login-input"
                                value={formValues.email}
                                onChange={(e) =>
                                    setFormValues((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                                isInvalid={!!formValueError.emailError}
                                readOnly={isPending}
                            />

                            {formValueError.emailError && (
                                <Form.Control.Feedback type="invalid">
                                    {formValueError.emailError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        {/* Mobile No */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Mobile No.
                            </Form.Label>

                            <Form.Control
                                name="mobileNo"
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="login-input"
                                value={formValues.mobileNo}
                                onChange={(e) =>
                                    setFormValues((prev) => ({
                                        ...prev,
                                        mobileNo: e.target.value,
                                    }))
                                }
                                isInvalid={!!formValueError.mobileNoError}
                                readOnly={isPending}
                            />

                            {formValueError.mobileNoError && (
                                <Form.Control.Feedback type="invalid">
                                    {formValueError.mobileNoError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        {/* Password */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Password
                            </Form.Label>

                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="login-input"
                                value={formValues.password}
                                onChange={(e) =>
                                    setFormValues((prev) => ({
                                        ...prev,
                                        password: e.target.value,
                                    }))
                                }
                                isInvalid={!!formValueError.passwordError}
                                readOnly={isPending}
                            />

                            {formValueError.passwordError && (
                                <Form.Control.Feedback type="invalid">
                                    {formValueError.passwordError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        {/* Confirm Password */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Confirm Password
                            </Form.Label>

                            <Form.Control
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="login-input"
                                value={formValues.confirmPassword}
                                onChange={(e) =>
                                    setFormValues((prev) => ({
                                        ...prev,
                                        confirmPassword: e.target.value,
                                    }))
                                }
                                isInvalid={!!formValueError.confirmPasswordError}
                                readOnly={isPending}
                            />

                            {formValueError.confirmPasswordError && (
                                <Form.Control.Feedback type="invalid">
                                    {formValueError.confirmPasswordError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                </Modal.Body>

                <Modal.Footer
                    style={
                    theme === "dark" ? {
                        background : "#151c2b",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#ffffff"
                    }:
                    {
                        background : "#ffffff",
                        border: "1px solid rgba(15, 23, 42, 0.1)"
                    }
                }
                >
                    <Button
                        variant="secondary"
                        onClick={handleCloseRegisterModal}
                    >
                        Cancel
                    </Button>

                    <button
                        className="register-owner-btn"
                        disabled={isPending}
                        onClick={handleRegistration}
                    >
                        {isPending ? (
                            <>
                            <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                            />

                            Registering...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default RegistrationModal