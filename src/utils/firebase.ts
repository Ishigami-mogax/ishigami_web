import {
    Auth,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"
import {onAuthStateChanged} from "@firebase/auth"
import axios from "axios"
import {Analytics} from "@firebase/analytics"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

let auth: Auth
let analytics: Analytics

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile')
googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email")

export const firebaseSetup = () => {
    const app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    analytics = getAnalytics(app)

    onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            const token = await user.getIdToken(false)

            // console.log(token)

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            await axios.post(process.env.REACT_APP_API_URL + '/register', {
                id: user.uid,
                email: user.email
            })

        } else {
            // console.log("No User")
        }
    })
}

const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider)
    } catch (err: any) {
        alert(err.message)
    }
}

const logInWithEmailAndPassword = async (email: any, password: any) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
        console.error(err)
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async (email: any, password: any) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
        console.error(err)
        alert(err.message)
    }
}

const sendPasswordReset = async (email: any) => {
    try {
        await sendPasswordResetEmail(auth, email)
        alert("Password reset link sent!")
    } catch (err: any) {
        console.error(err)
        alert(err.message)
    }
}

const logout = async () => {
    await signOut(auth)
    document.location = '/login'
}

export {
    auth,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}
