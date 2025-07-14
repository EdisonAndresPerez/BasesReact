
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { Password } from "@mui/icons-material";

const googleProvider = new GoogleAuthProvider();

export const singWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { email, displayName, photoURL } = result.user;
        console.log({ email, displayName, photoURL });
        return {
            ok: true,
            email,
            displayName,
            photoURL,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
            errorCode,
        };
    }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });
        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}