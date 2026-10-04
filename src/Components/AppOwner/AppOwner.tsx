import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import "./AppOwner.css";
import StatCard from "./AppOwnerComponents/StatCard";
import TableCard from "./AppOwnerComponents/TableCard";
import RegistrationModal from "../RegistrationModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

export interface RegisteredUser {
  id: string;
  username: string;
  email: string;
  role: string;
  active: boolean,
  createdAt: string,
  mobileNo: string,
}

const AppOwner = () => {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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

  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([]);

  useEffect(() => {
    const findUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/users/owners",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user?.accessToken}`,
            }
          }
        )
        const data = await response.json();
        setRegisteredUsers(data)
      }catch (error) {
        console.log("Error >>", error)
      }
    }

    findUsers();
  },[user])

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

      const data = await response.text();

      console.log("Registration response:", data);

      setFormValueError((prev) => ({
        ...prev,
        success: "Registration successful",
      }));

      const now = new Date();
      const date = now.toISOString()
        .replace("T", " ")
        .replace("Z", "");

      setRegisteredUsers(prev => [
        ...prev,
        {
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : "1",
          username: formValues.username,
          email: formValues.email,
          role: "OWNER",
          active: true,
          createdAt: date,
          mobileNo: formValues.mobileNo,
        }
      ])
      // Reset form after successful registration
      setFormValues({
        username: "",
        email: "",
        mobileNo: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        handleCloseRegisterModal();
      }, 2000);

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

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  
  return (
    <div className="app-owner-page">
      <Container fluid className="app-owner-container px-4">
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
            <Button
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-2" />
              Logout
            </Button>
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
