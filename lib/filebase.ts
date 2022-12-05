import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO セキュアな情報なのでgithubにはあげない
const firebaseConfig = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  projectId: "xxxx",
  storageBucket: "xxxx",
  messagingSenderId: "xxxx",
  appId: "xxxx",
  measurementId: "xxxx",
};

var app = initializeApp(firebaseConfig);
export var auth = getAuth(app);
