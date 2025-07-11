
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

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