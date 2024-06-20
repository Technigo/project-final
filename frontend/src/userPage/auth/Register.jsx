import React, { useState, useEffect, useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { getUserIdFromToken } from "../auth/authUtils"
import "../../css/log-reg.css"
import fillImg from "../../assets/klarfisk.jpg"
import { apiRequest } from "../../utils/api"

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const navigate = useNavigate()

  const usernameInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const profileImageInputRef = useRef(null)
  const registerButtonRef = useRef(null)

  const handleRegister = useCallback(async () => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    if (profileImage) {
      formData.append("profileImage", profileImage)
    }

    try {
      const response = await apiRequest("POST", "auth/register", {}, formData)

      if (response.status !== 201) {
        const responseData = await response.json()
        throw new Error(responseData.message || "Registration failed.")
      }

      const data = await response.json()
      const token = data.token
      localStorage.setItem("token", token)
      const loggedInUserId = getUserIdFromToken(token)
      onRegister(token)
      setRegistered(true)
      onRegister(loggedInUserId)
    } catch (error) {
      setError(error.message || "Registration failed.")
    } finally {
      setIsLoading(false)
    }
  }, [username, password, profileImage, onRegister])

  useEffect(() => {
    if (registered) {
      const timeout = setTimeout(() => {
        navigate("/home")
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [registered, navigate])

  useEffect(() => {
    setIsFormComplete(username !== "" && password !== "")
  }, [username, password])

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0])
  }

  const shortenFileName = (name, maxLength = 20) => {
    if (name.length <= maxLength) {
      return name
    }

    const parts = name.split("/")
    const shortenedName = `${parts[0].substring(0, maxLength - 3)}...`

    return shortenedName
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const focusNext = (currentRef, nextRef) => {
    if (currentRef.current && nextRef.current) {
      currentRef.current.blur()
      nextRef.current.focus()
    }
  }

  return (
    <div className="log-reg-container">
      <div className="fill-container">
        <div className="fill-in">
          <div className="fill-title">
            <h3>Register Now</h3>
          </div>
          <div className="log-reg-input">
            <div className="input-container">
              <i className="fas fa-user input-icon user-icon"></i>{" "}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                disabled={isLoading}
                ref={usernameInputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    focusNext(usernameInputRef, passwordInputRef)
                  }
                }}
              />
            </div>
            <div className="input-container">
              <i className="fas fa-lock input-icon password-icon"></i>{" "}
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={isLoading}
                ref={passwordInputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    focusNext(passwordInputRef, profileImageInputRef)
                  }
                }}
              />
              <button
                type="button"
                className="show-password-button"
                onClick={toggleShowPassword}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </button>
            </div>
          </div>
          <div className="input-container">
            <i className="fas fa-file-alt input-icon file-icon"></i>
            <div className="file-upload-container">
              <label htmlFor="fileInput" className="file-upload-label">
                select a profile picture:{" "}
                <span className="file-name">
                  {profileImage
                    ? shortenFileName(profileImage.name)
                    : "No picture chosen"}
                </span>
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="file-upload-input"
                hidden
                ref={profileImageInputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    focusNext(profileImageInputRef, registerButtonRef)
                  }
                }}
              />
            </div>
          </div>
          <div className="fill-img">
            <img src={fillImg} alt="User Icon" className="input-img" />
          </div>
          <button
            className="fill-button"
            onClick={handleRegister}
            disabled={isLoading || !isFormComplete}
            ref={registerButtonRef}
          >
            {isLoading
              ? "Loading..."
              : registered
              ? "You are now registered & logged in!"
              : "Register"}
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  )
}

export default Register
