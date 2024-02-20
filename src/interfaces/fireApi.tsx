import { FirebaseError } from "firebase/app";
import { User as FirebaseUser } from "firebase/auth";
export type FireApistate={
    user:FirebaseUser |null|undefined,
    error:FirebaseError|null|boolean,
    loading:boolean,
  };