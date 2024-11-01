import {UserProvider} from "./component/usercontextPractice/UserContext";
import UpdateUser from "./component/usercontextPractice/UpdateUser";
import UserProfile from "./component/usercontextPractice/UserProfile";


export default function App() {
  return (
  <UserProvider>
    <UserProfile />
    <UpdateUser />
  </UserProvider>
  );
}