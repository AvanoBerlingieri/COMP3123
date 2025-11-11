import logo from './logo.svg';
import './App.css';
import './components/UserForm'
import UserForm from "./components/UserForm";
import UserSignupForm from "./components/UserSignupForm";

function App() {
  return (
      <div>
      <h1>Welcome to react form examples</h1>
        {/*<UserForm />*/}
          <UserSignupForm />

      </div>
  );
}

export default App;
