import "firebase/auth"
import firebase from "firebase/app"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCX7KL9Zf8UP0XWK01gwRnyhPuLOq_UONs",
    authDomain: "test-b830c.firebaseapp.com",
    databaseURL: "https://test-b830c.firebaseio.com",
    projectId: "test-b830c",
    storageBucket: "test-b830c.appspot.com",
    messagingSenderId: "594028390440",
    appId: "1:594028390440:web:49b7610990c2ca57f0ed1d"
})

export const auth = app.auth()
export default app