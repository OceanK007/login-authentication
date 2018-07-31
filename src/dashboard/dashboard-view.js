import { createHTMLElement } from '../js/service';
import { googleLogout } from '../firebase/login/google-login';

export const dashboardViewHolderId = 'container';

export function googleLogoutComponent()
{
    var googleLogoutButton = createHTMLElement(
    `<div>
        <div>
            <span>Welcome to dashboard</span>
        </div>
        <div>
            <button id="google-signout" class="btn btn-success">Signout</button>
        </div>        
    </div>`);

    googleLogoutButton.querySelector('#google-signout').addEventListener('click', function() 
    {
        googleLogout();
    })

    return googleLogoutButton;
}

