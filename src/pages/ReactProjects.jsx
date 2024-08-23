import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import DukanApp from "../assets/images/dukaan-app.png";
import PasswordGenerator from "../assets/images/password-generator.png";
import QuizAppImg from "../assets/images/quiz.png";
import FoodOrderApp from "../assets/images/food-order-app.png";
import CookingFoodApp from "../assets/images/cooking-food.png";
import CurrencyConvertor from "../assets/images/CurrencyConvertor.png";
import ShoppingCart from "../assets/images/shopping-cart.png";
import MyCart from "../assets/images/my-cart.png";
import ProjectMgmt from "../assets/images/project-mgmt.png";
import MovieApp from "../assets/images/movie-app.png";
import MovieSearchApp from "../assets/images/movie-search-app.png";
import LoginApp from "../assets/images/Login.png";
import FakeStoreApi from "../assets/images/fake-store-api.png";
import appLoginFirebase from "../assets/images/app-login-firebase.png";
import ReactReduxMUIScreen from "../assets/images/react-redux-mui-screen.png";
import ReduxToolkitUserApp from "../assets/images/redux-toolkit-user-app.png";
import DashboardLayout from "../assets/images/dashboad-assignment.png";
import NewsLayout from "../assets/images/news-layout.png";

const cardsData = [
  {
    title: "News Application",
    image: NewsLayout,
    description:
      "A React-based news application that displays the latest headlines using the GNews API, featuring infinite scrolling and date range filtering. The app is responsive, with support for browsing current news articles only due to API limitations.",
    link: "https://findvinu.github.io/news-react-app/",
    github: "https://github.com/findvinu/news-react-app",
  },
  {
    title: "Dashboad Layout",
    image: DashboardLayout,
    description:
      "Create a responsive layout in React JS that closely mirrors the provided UI design, focusing on the overall appearance and mobile responsiveness. Customization of colors, images, and fonts is allowed in Material UI.",
    link: "https://findvinu.github.io/dashboad-assignment/",
    github: "https://github.com/findvinu/dashboad-assignment",
  },
  {
    title: "React User Management App",
    image: ReduxToolkitUserApp,
    description:
      "The React User Management App is a web application designed to manage a list of users. It allows users to view a list of existing users, add new users, update user details, and delete users. The application leverages Redux Toolkit for state management and React Router for navigation between different views.",
    link: "https://findvinu.github.io/react-user-management-app/",
    github: "https://github.com/findvinu/react-user-management-app",
  },
  {
    title: "React Redux MUI",
    image: ReactReduxMUIScreen,
    description:
      "In this application, I've created a data.json file in the public folder and used the Fetch API to handle network requests. I utilized Material UI components for the user interface, implemented the React Toolkit store for state management.",
    link: "https://findvinu.github.io/react-redux-mui/",
    github: "https://github.com/findvinu/react-redux-mui",
  },
  {
    title: "App Login Firebase",
    image: appLoginFirebase,
    description:
      "In this application, I've employed Firebase's Fetch API to handle network requests, utilized Tailwind CSS for styling the user interface, implemented the React Toolkit store for state management, and leveraged Material UI to design the layout of the user interface.",
    link: "https://findvinu.github.io/app-login-firebase/",
    github: "https://github.com/findvinu/app-login-firebase",
  },
  {
    title: "Fake Store Api",
    image: FakeStoreApi,
    description:
      "In this application, I've utilized the Fetch API to make network requests, employed utility functions for various tasks, implemented custom hooks to streamline data fetching from APIs, and utilized Material UI for creating the user interface layout.",
    link: "https://findvinu.github.io/fake-store-api/",
    github: "https://github.com/findvinu/fake-store-api",
  },
  {
    title: "Dukaan App React Layout",
    image: DukanApp,
    description:
      "In this React app layout, decompose it into smaller UI components and employ built-in useEffect, useState, and useCallback hooks for managing state and side effects.",
    link: "https://findvinu.github.io/dukaan-app/",
    github: "https://github.com/findvinu/dukaan-app",
  },
  {
    title: "Currency Convertor",
    image: CurrencyConvertor,
    description:
      "In this currency converter, establish a custom hook utilizing the Context API, along with useState and useEffect. Additionally, leverage the useId built-in hook.",
    link: "https://findvinu.github.io/Currency-convertor/",
    github: "https://github.com/findvinu/Currency-convertor",
  },
  {
    title: "Password Generator",
    image: PasswordGenerator,
    description:
      "In this Password Generator, implement useCallback, useState, useEffect, useRef, and enable password copying after generation.",
    link: "https://findvinu.github.io/password-generator/",
    github: "https://github.com/findvinu/password-generator",
  },
  {
    title: "My Cart",
    image: MyCart,
    description:
      "In this My Cart application built with React Toolkit, divide it into smaller UI components and utilize built-in hooks such as useEffect, useSelector, and useDispatch to create Redux slices.",
    link: "https://findvinu.github.io/react-redux-advance/",
    github: "https://github.com/findvinu/react-redux-advance",
  },
  {
    title: "Food Delivered",
    image: FoodOrderApp,
    description:
      "In this Food Delivery application, employ useState, Context API, createPortal, and useReducer Hooks.",
    link: "https://findvinu.github.io/food-order-app/",
    github: "https://github.com/findvinu/food-order-app",
  },
  {
    title: "Quiz App",
    image: QuizAppImg,
    description:
      "In this Quiz application, incorporate useState, useCallback, useRef, and useEffect hooks.",
    link: "https://findvinu.github.io/quiz-app/",
    github: "https://github.com/findvinu/quiz-app",
  },
  {
    title: "Cooking Food",
    image: CookingFoodApp,
    description:
      "In this Cooking App, we employ the useState, useEffect, createContext, and uuid hooks for various functionalities.",
    link: "https://findvinu.github.io/cooking-food/",
    github: "https://github.com/findvinu/cooking-food",
  },
  {
    title: "Shopping Cart",
    image: ShoppingCart,
    description:
      "In this Shopping Cart application, incorporate the Context API for state management.",
    link: "https://findvinu.github.io/shopping-cart/",
    github: "https://github.com/findvinu/shopping-cart",
  },
  {
    title: "Project/Task Management",
    image: ProjectMgmt,
    description:
      "In this Task/Management app, integrate features to add and remove projects and tasks using React forms. Utilize the useState and forwardRef hooks for state management and accessing child component refs.",
    link: "https://findvinu.github.io/project-mgmt/",
    github: "https://github.com/findvinu/project-mgmt",
  },
  {
    title: "Movie App",
    image: MovieApp,
    description:
      "In this movie application, retrieve and send data to an API, manage responses and errors, and employ the useState, useEffect, and useCallback hooks for state management and asynchronous operations.",
    link: "https://findvinu.github.io/movie-app/",
    github: "https://github.com/findvinu/movie-app",
  },
  {
    title: "Movie Search App",
    image: MovieSearchApp,
    description:
      "In this Movie Search App, incorporate routing functionality and fetch data from an API. Utilize the useNavigate and useParams hooks to navigate between routes and retrieve parameters from the URL.",
    link: "https://findvinu.github.io/",
    github: "https://github.com/findvinu/movie-search-app",
  },
  {
    title: "Login App",
    image: LoginApp,
    description:
      "In this Login App, utilize Redux-Toolkit for state management and the useSelector hook to access the Redux store.",
    link: "https://findvinu.github.io/React-Redux/",
    github: "https://github.com/findvinu/React-Redux",
  },
];
const ReactProjects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={3}>
        React Projects
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {cardsData.map((cardData) => (
          <Grid item xs={12} sm={6} lg={3} key={cardData.title}>
            <CardLayout
              title={cardData.title}
              image={cardData.image}
              description={cardData.description}
              link={cardData.link}
              github={cardData.github}
              innerLink
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReactProjects;
