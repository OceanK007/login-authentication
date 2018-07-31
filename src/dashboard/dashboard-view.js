import { createHTMLElement } from '../js/service';
import { gitLogout } from '../firebase/login/git-login';

export const dashboardViewHolderId = 'container';

export function gitLogoutComponent()
{
    var gitLogoutButton = createHTMLElement(
    `<div>
        <div>
            <span>Welcome to dashboard</span>
        </div>
        <div>
            <button id="git-signout" class="btn btn-success">Sign out</button>
        </div>        
    </div>`);

    gitLogoutButton.querySelector('#git-signout').addEventListener('click', function() 
    {
        gitLogout();
    })

    return gitLogoutButton;
}

