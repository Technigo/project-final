import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { LogoutButton } from "../components/LogoutButton";
import LikedMuseums from "../components/LikedMuseums";
import { UserReviews } from "../components/UserReviews";
import { SuggestedMuseums } from "../components/SuggestedMuseums";

//features that should be displayed here: liked museums, written comments, purchased tickets...

//Authorize with access token from /user-page

export const UserPage = () => {
  const { authState, logout } = useContext(AuthContext);
  const { isAuthenticated, accessToken } = authState;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [likedMuseumsData, setLikedMuseumsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    };
    fetch(`https://museek-2ejb.onrender.com/favorites`, options)
      .then((response) => response.json())
      .then((response) => setLikedMuseumsData(response.likedMuseums));
  }, []);

  useEffect(() => {
    const fetchUserPage = async () => {
      try {
        const response = await fetch(
          "https://museek-2ejb.onrender.com/user-page",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user page");
        }

        const responseBody = await response.json();
        setUser(responseBody.user);
        setLoading(false);
      } catch (error) {
        console.error(error);
        logout();
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      setLoading(true);
      fetchUserPage();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, accessToken, logout]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (!isAuthenticated) {
    return (
      <UserContainer>
        <p>You are not authorized to view this page. Please log in.</p>
        <AuthLink to={"/login"}>Log in </AuthLink> or
        <AuthLink to={"/register"}> sign up</AuthLink>
      </UserContainer>
    );
  }

  return (
    <div>
      <UserContainer>
        <WelcomeMessage>
          Welcome to your personal page, {user === undefined ? "" : user.name}
        </WelcomeMessage>
        <FeatureList>
          <LikedMuseums likedMuseumsData={likedMuseumsData} />
          <FeatureItem>
            <UserReviews />
          </FeatureItem>
          <SuggestedMuseums likedMuseumsData={likedMuseumsData} />
        </FeatureList>
        <LogoutButton />
      </UserContainer>
    </div>
  );
};

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 20px 20px;
`;

const WelcomeMessage = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  width: 50%;
`;

const FeatureItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #666;
`;

const AuthLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 5px;
`;

const Loading = styled.div`
  color: #333;
  font-size: 1.2em;
`;
