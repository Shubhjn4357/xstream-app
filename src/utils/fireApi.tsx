import {GoogleAuthProvider, signOut, UserCredential, signInWithPopup } from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import toast from "react-simple-toasts";
import { auth } from "../firebase.config";
import { FireApistate } from "../interfaces/fireApi";

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
class firebaseAuthenticator {
  state: FireApistate
  constructor(){
    this.state = {
      user: null,
      error:null,
      loading:false
    };
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError= this.handleError.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleSuccess(userData:FirebaseUser|null|undefined) {
    this.state={
      ...this.state,
      user:userData ,
      loading:false,
    }
  }
  handleError(fireError:FirebaseError|boolean|null) {
    this.state={
      ...this.state,
      error:fireError ,
      loading:false
    }
  }
  handleLoad(state:boolean) {
    this.state={
      ...this.state,
      loading:state,
    }
  }
  useUser=()=>{
    this.handleLoad(true);
    const user = auth.currentUser;
    if (user !== null) {
       this.handleSuccess(user)
    }
    this.handleError(false)
    this.handleLoad(false)
    return this.state;
  }
    useGoogle=async()=>{
      this.handleLoad(true)
      try{
          const result =await signInWithPopup(auth, provider)
          // const result = await getRedirectResult(auth);
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result as UserCredential);
          const token = credential?.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result?.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          this.handleSuccess(user);
          toast("Welcome",{theme:"success"})
          
  }
  catch(error){
      // Handle Errors here.
      const err=error instanceof FirebaseError
      this.handleError(err);
      toast("Error Happend",{theme:"failure"})
      // ...
    }
    this.handleLoad(false)
    return this.state;
  }
  useLogOut=async()=>{
    this.handleLoad(true)
    try{
      const res=await signOut(auth)
      toast("Sign Out",{theme:"failure"})
      console.log(res)
      console.log("sign Out");
      }catch(error){
        const err=error instanceof FirebaseError
        this.handleError(err);
        toast("Error Happend",{theme:"failure"})
        // An error happened.
      }
      this.handleLoad(false)
      return this.state;
    }

}
const authenticator=new firebaseAuthenticator();
export default authenticator
