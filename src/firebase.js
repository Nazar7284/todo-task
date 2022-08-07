import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const app = initializeApp({
    apiKey: "AIzaSyDX9vC8eBi1LbDitqMSGFUX633RpepvAU8",
    authDomain: "todo-task-3c616.firebaseapp.com",
    projectId: "todo-task-3c616",
    storageBucket: "todo-task-3c616.appspot.com",
    messagingSenderId: "604633163764",
    appId: "1:604633163764:web:638cd895ba65deada6fba1",
    measurementId: "G-H8S1EE660T"
});

const auth = getAuth(app);
const db = getDatabase(app);

const GoogleProvider = new GoogleAuthProvider();

let email, imageUrl, name, userId = '';


function signupWithGoogle() {
    signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            console.log(result)
            email = result.user.email;
            imageUrl = result.user.photoURL;
            name = result.user.displayName;
            userId = result.user.uid;
        }).catch((error) => {
            console.log(error.message)
        });
    set(ref(db, 'Users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

// let taskId = Date.now();

// function addTask(title, body) {
//     console.log('1')
//     set(ref(db, 'Task/' + userId + taskId), {
//         title: title,
//         body: body
//     });
// }

export { signupWithGoogle }