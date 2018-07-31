import { createHTMLElement } from '../js/service';
import { googleLogin } from '../firebase/login/google-login';

export const homeViewHolderId = 'container';

export function googleLoginComponent()
{
    var googleLoginButton = createHTMLElement(
    `<div>
        <div>
            <button id="google-login" class="btn btn-success">Login With Google</button>
        </div>        
    </div>`);

    googleLoginButton.querySelector('#google-login').addEventListener('click', function() 
    {
        googleLogin();
    })

    return googleLoginButton;
}