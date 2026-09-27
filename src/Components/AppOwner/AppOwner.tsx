import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
} from "react-bootstrap";

import { useAppSelector } from "../../app/hooks";

import "./AppOwner.css";
import StatCard from "./AppOwnerComponents/StatCard";
import TableCard from "./AppOwnerComponents/TableCard";
import RegistrationModal from "../RegistrationModal";

export interface RegisteredUser {
  id: string;
  username: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const AppOwner = () => {
  const user = useAppSelector((state) => state.auth);

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("garment-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return "dark";
  });

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });
  
  const [formValueError, setFormValueError] = useState({
    usernameError: "",
    emailError: "",
    mobileNoError: "",
    passwordError: "",
    confirmPasswordError: "",
    error: "",
    success: "",
  });

  const [isPending, setIsPending] = useState<boolean>(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("garment-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  // Temporary data.
  // Later this should come from your Spring Boot API.
  const [registeredUsers] = useState<RegisteredUser[]>([
    {
      id: "1",
      username: "Izhar123sd",
      email: "izharsad@gmail.com",
      role: "APP_OWNER",
      status: "Active",
    },
    {
      id: "2",
      username: "Ahmed123",
      email: "ahmed@gmail.com",
      role: "APP_OWNER",
      status: "Active",
    },
    {
      id: "3",
      username: "RahulGarments",
      email: "rahul@gmail.com",
      role: "APP_OWNER",
      status: "Inactive",
    },
  ]);

  const handleRegistration = async () => {
    // Clear previous errors
    setFormValueError({
      usernameError: "",
      emailError: "",
      mobileNoError: "",
      passwordError: "",
      confirmPasswordError: "",
      error: "",
      success: "",
    });

    // Field validation
    if (!formValues.username.trim()) {
      setFormValueError((prev) => ({
        ...prev,
        usernameError: "Username is required",
      }));
      return;
    }

    if (!formValues.email.trim()) {
      setFormValueError((prev) => ({
        ...prev,
        emailError: "Email is required",
      }));
      return;
    }

    if (!formValues.mobileNo.trim()) {
      setFormValueError((prev) => ({
        ...prev,
        mobileNoError: "Mobile No. is required",
      }));
      return;
    }

    if (!formValues.password) {
      setFormValueError((prev) => ({
        ...prev,
        passwordError: "Password is required",
      }));
      return;
    }

    if (!formValues.confirmPassword) {
      setFormValueError((prev) => ({
        ...prev,
        confirmPasswordError: "Confirm password is required",
      }));
      return;
    }

    if (formValues.confirmPassword !== formValues.password) {
      setFormValueError((prev) => ({
        ...prev,
        confirmPasswordError: "Password is not same",
      }));
      return;
    }
    setIsPending(true)
    try {
      const response = await fetch(
        "http://localhost:8080/api/owners",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.accessToken}`,
          },
          body: JSON.stringify({
            username: formValues.username,
            password: formValues.password,
            mobileNo: formValues.mobileNo,
            email: formValues.email,
          }),
        }
      );
          
      if (!response.ok) {
        let errorMessage = "Unable to register owner.";

        try {
          const errorData = await response.json();
          errorMessage = errorData?.message || errorMessage;
        } catch(e) {
          console.log("e ", e)
        }

        setFormValueError((prev) => ({
          ...prev,
          error: errorMessage,
        }));

        return;
      }

      const data = await response.json();

      console.log("Registration response:", data);

      setFormValueError((prev) => ({
        ...prev,
        success: "Registration successful",
      }));

      // Reset form after successful registration
      setFormValues({
        username: "",
        email: "",
        mobileNo: "",
        password: "",
        confirmPassword: "",
      });

      setShowRegisterModal(false);

    } catch (error) {
      console.error("Registration error:", error);

      setFormValueError((prev) => ({
        ...prev,
        error: "Unable to connect to server. Please try again.",
      }));
    } finally {
      setIsPending(false);
    }
  }

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
    setFormValueError({
      usernameError: "",
      emailError: "",
      mobileNoError: "",
      passwordError: "",
      confirmPasswordError: "",
      error: "",
      success: "",
    })
    setFormValues({
      username: "",
      email: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="app-owner-page">
        <Container fluid className="app-owner-container">
            {/* Header */}
            <Row className="align-items-center mb-4">
                <Col>
                    <div className="owner-heading">
                        <h2>
                            Welcome, <span>{user?.user?.username}</span>
                        </h2>

                        <p>
                            Manage registered business owners from your administration
                            panel.
                        </p>
                    </div>
                </Col>

                <Col xs="auto" className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="theme-toggle me-2"
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                    >
                      <i
                        className={`bi ${
                        theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"
                        }`}
                      />
                    </button>
                    <button
                      className="register-owner-btn"
                      onClick={() => setShowRegisterModal(true)}
                    >
                      <i className="bi bi-person-plus-fill me-2" />
                      Register Owner
                    </button>
                </Col>
            </Row>

            {/* Stats */}
            <StatCard registeredUsers = {registeredUsers} theme = {theme}/>

            {/* Users Table */}
            <TableCard registeredUsers = {registeredUsers} theme = {theme}/>

        </Container>

      {/* Register Owner Modal */}
      <RegistrationModal 
        showRegisterModal = {showRegisterModal}
        handleCloseRegisterModal = {handleCloseRegisterModal}
        handleRegistration = {handleRegistration}
        isPending = {isPending}
        formValues={formValues}
        setFormValues={setFormValues}
        formValueError = {formValueError}
        theme = {theme}
      />
    </div>
  );
};

export default AppOwner;
