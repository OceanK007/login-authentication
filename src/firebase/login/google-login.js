import firebase from 'firebase';
import { createHTMLElement } from '../../js/service';

var provider = new firebase.auth.GoogleAuthProvider();

export function googleLogin()
{
    function newLoginHappened(user)
    {
        if(user)
        {
            userInfo(user);
        }
        else
        {
            //firebase.auth().signInWithRedirect(provider);
            firebase.auth().signInWithPopup(provider);
        }
    }

    firebase.auth().onAuthStateChanged(newLoginHappened);
}

function userInfo(user)
{
    console.log(user);
}

export function googleLogout()
{
    firebase.auth().signOut().then(function() 
    {
        console.log("Sign out successfully");
        // Sign-out successful.
    }).catch(function(error) 
    {
        // An error happened.
    });
}