import { Outlet, useNavigate } from "react-router-dom";
import { toastConfig } from 'react-simple-toasts';
import { auth } from "./firebase.config";
import { useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import 'react-simple-toasts/dist/theme/dark.css';
import 'react-simple-toasts/dist/theme/light.css';
import 'react-simple-toasts/dist/theme/failure.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/warning.css';
import 'react-simple-toasts/dist/theme/sunset.css';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import '@mantine/core/styles.css';
import "./App.scss";

auth.languageCode = 'it';
toastConfig({
  theme: 'dark',
});
const App=()=>{
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/")
      }
    });
  },[navigate])
  return <Outlet></Outlet>
   
}
export default App;