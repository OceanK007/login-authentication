import firebase from 'firebase';
import { createHTMLElement } from '../../js/service';

var googleLoginButton = createHTMLElement(
`<div>
    <div>

    </div>
    <div>
        <button id="google-login" class="btn btn-success">Login With Google</button>
        <button id="google-signout" class="btn btn-success">Signout</button>
    <div>
</div>`);

googleLoginButton.querySelector('#google-login').addEventListener('click', function() 
{
    googleLogin();
})
googleLoginButton.querySelector('#google-signout').addEventListener('click', function() 
{
    googleLogout();
})
$("body").append(googleLoginButton);

// ##################################################################### //

var provider = new firebase.auth.GoogleAuthProvider();

function googleLogin()
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

function googleLogout()
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