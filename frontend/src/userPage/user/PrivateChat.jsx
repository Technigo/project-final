import React, { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { io } from "socket.io-client"
import { getUserIdFromToken } from "../auth/authUtils"
import { apiRequest } from "../../utils/api"
import "../../css/privateChat.css"

const PrivateChat = () => {
  const { friendId } = useParams()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [socket, setSocket] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    const fetchMessages = async () => {
      try {
        const response = await apiRequest(
          "GET",
          `/private-chat/messages/${friendId}`,
          {
            Authorization: `Bearer ${token}`,
          }
        )
        const data = await response.json()
        if (data) {
          setMessages(data)
        }
      } catch (error) {
        console.error("Error fetching messages:", error)
      }
    }

    fetchMessages()
    const newSocket = io(process.env.REACT_APP_API_HOST, {
      transports: ["websocket"],
      auth: { token },
      path: "/api/socket.io",
    })

    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [friendId])

  useEffect(() => {
    if (!socket) return

    const handleIncomingMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    }

    socket.on("message", handleIncomingMessage)

    return () => {
      socket.off("message", handleIncomingMessage)
    }
  }, [socket])

  useEffect(() => {
    const handlePageReload = () => {
      window.location.reload()
    }

    window.addEventListener("popstate", handlePageReload)
    return () => {
      window.removeEventListener("popstate", handlePageReload)
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()

    try {
      const userId = getUserIdFromToken(localStorage.getItem("token"))
      socket.emit("sendMessage", {
        message: newMessage,
        userId: userId,
        receiverId: friendId,
      })
      setNewMessage("")
    } catch (error) {
      console.error("Failed to send message.", error)
    }
  }

  return (
    <div className="my-page-container" style={{ background: "White" }}>
      <div className="private-chat-container">
        <div className="private-msg">
          <ul>
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.userId ===
                  getUserIdFromToken(localStorage.getItem("token"))
                    ? "right"
                    : "left"
                }
              >
                <div className="message-priv">
                  <strong>{message.sender}: </strong> {message.text}
                </div>
              </li>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        <form className="private-form" onSubmit={sendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            style={{ borderBottom: "none" }}
          />
          <button className="fill-button privet"  type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default PrivateChat
