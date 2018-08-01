import { createHTMLElement } from '../js/service';
import { gitLogin } from '../firebase/login/git-login';

export const homeViewHolderId = 'container';

export function gitLoginComponent()
{
    var gitLoginButton = createHTMLElement(
    `<div>
        <div>
            <button id="git-login" class="btn btn-success" disabled>Login With Git</button>
        </div>        
    </div>`);

    gitLoginButton.querySelector('#git-login').addEventListener('click', function() 
    {
        gitLogin();
    })

    return gitLoginButton;
}