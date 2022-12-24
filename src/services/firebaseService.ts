import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface FirebaseServiceType {
  auth: (
    email: string,
    password: string
  ) => Promise<FirebaseAuthTypes.UserCredential | Error>;
  signOut: () => Promise<
    | {
        loggedOut: boolean;
        error: null;
      }
    | {
        loggedOut: boolean;
        error: Error;
      }
  >;
}

export const firebaseService: FirebaseServiceType = {
  auth: (email, password) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        return error;
      });
  },
  signOut: () => {
    return auth()
      .signOut()
      .then(() => {
        return {
          loggedOut: true,
          error: null,
        };
      })
      .catch((error: Error) => {
        return {
          loggedOut: false,
          error,
        };
      });
  },
};
