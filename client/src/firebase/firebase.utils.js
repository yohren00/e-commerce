import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCBxzZjvH81EL3U_v-SmB7txF8zpZd_KB4",
    authDomain: "e-commerce-77931.firebaseapp.com",
    databaseURL: "https://e-commerce-77931.firebaseio.com",
    projectId: "e-commerce-77931",
    storageBucket: "e-commerce-77931.appspot.com",
    messagingSenderId: "491554364566",
    appId: "1:491554364566:web:c387f6a29e4ab5655ef6b7",
    measurementId: "G-423QSZTQJ5"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionName, objectToaAdd) => {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();
    objectToaAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollention = collections.docs.map(doc => {

        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollention.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;