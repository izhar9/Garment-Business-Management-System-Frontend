import { useActionState } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "./Login.css";

type LoginState = {
  usernameError: string;
  passwordError: string;
  error: string;
  success: string;
};

const initialState: LoginState = {
  usernameError: "",
  passwordError: "",
  error: "",
  success: "",
};

const loginAction = async (
  _previousState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  // Field validation
  if (!username) {
    return {
      ...initialState,
      usernameError: "Username is required",
    };
  }

  if (!password) {
    return {
      ...initialState,
      passwordError: "Password is required",
    };
  }

  try {
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    
    if (!response.ok) {
      return {
        ...initialState,
        error: "Invalid username or password",
      };
    }

    const data = await response.json();

    console.log("Login response:", data);

    return {
      ...initialState,
      success: "Login successful",
    };
  } catch (error) {
    console.error("Login error:", error);

    return {
      ...initialState,
      error: "Unable to connect to server. Please try again.",
    };
  }
};

const Login = () => {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <div className="login-page">
      <Container fluid className="login-container">
        <Row className="justify-content-center align-items-center min-vh-100 g-0">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={5}
            xxl={4}
          >
            <div className="login-card">

              {/* Logo / Brand */}
              <div className="text-center mb-4">
                <div className="login-logo">
                  GM
                </div>

                <h2 className="login-title">
                  Garment Management
                </h2>

                <p className="login-subtitle">
                  Manage your garment business smarter
                </p>
              </div>

              {/* Error */}
              {state.error && (
                <Alert
                  variant="danger"
                  className="login-alert"
                >
                  {state.error}
                </Alert>
              )}

              {/* Success */}
              {state.success && (
                <Alert
                  variant="success"
                  className="login-alert"
                >
                  {state.success}
                </Alert>
              )}

              <Form action={formAction} noValidate>

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
                    isInvalid={!!state.usernameError}
                  />

                  {state.usernameError && (
                    <Form.Control.Feedback type="invalid">
                      {state.usernameError}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>
                      Password
                    </Form.Label>

                    <button
                      type="button"
                      className="forgot-password"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="login-input"
                    isInvalid={!!state.passwordError}
                  />

                  {state.passwordError && (
                    <Form.Control.Feedback type="invalid">
                      {state.passwordError}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                {/* Submit */}
                <Button
                  type="submit"
                  className="login-button w-100"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      />

                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Form>

              {/* Footer */}
              <div className="login-footer">
                <span>
                  Don't have an account?
                </span>

                <button
                  type="button"
                  className="register-link"
                >
                  Create account
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;