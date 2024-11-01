import Footer from "./component/Footer";
import HandlingList from "./component/HandlingList";
import Header from "./component/Header"
import JSXRules from "./component/JSXRules";
import Main from "./component/Main";
import Person from "./component/Person";
import Counter from "./component/statePractice/Counter";
import Todo from "./component/statePractice/Todo";
import BasicEffect from "./component/useEffect/BasicEffect";
import CounterEffect from "./component/useEffect/CounterEffect";
import FetchDataEffect from "./component/useEffect/FetchDataEffect";
import {UserProvider} from "./component/usercontextPractice/UserContext";
import UpdateUser from "./component/usercontextPractice/UpdateUser";
import UserContext from "./component/usercontextPractice/UserContext";
import UserProfile from "./component/usercontextPractice/UserProfile";
import Welcome from "./component/Welcome";
import { FcBullish } from "react-icons/fc";

export default function App() {
  return (
  <UserProvider>
    <UserProfile />
    <UpdateUser />
  </UserProvider>
  );
}