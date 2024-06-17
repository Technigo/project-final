# Frontend part of Final Project

The ADHD Community Project is a web application designed to support and empower individuals with ADHD by providing a safe space and understanding community. Users can sign up as either a "Listener" or a "Seeker" to offer or receive support, respectively. The application includes features such as event listings, community guidelines, and user profiles.

## About the project

Developed using React for the frontend and Node.js with Express for the backend, the application integrates MongoDB for data storage and utilizes Passport.js with JWT for secure authentication. Key features include user authentication with roles (Listener and Seeker), event listings, and user profile management

Future enhancements include a live chat feature to facilitate real-time communication within the community

## Challenges

Handling Modal Popups:

Challenge: Managing the state and functionality of modal popups for login and signup forms.
Solution: Created a custom modal context using React's Context API to manage the display and state of modals. This centralized approach streamlined modal management, making it easier to maintain and extend the functionality.

API Integration:

Challenge: Integrating the frontend with the backend API and ensuring seamless data flow.
Solution: Developed a consistent API service layer to handle requests and responses between the frontend and backend. Implemented error handling and loading states to enhance user experience during data fetching operations.

Profile Management:

Challenge: Allowing users to view and update their profiles securely.
Solution: Implemented profile fetching and updating functionalities with secure token-based authentication. Ensured data validation and used React forms to allow users to edit their profiles, providing real-time feedback and updates.

## Link

https://adhd-connect.netlify.app
