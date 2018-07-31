import { createHomeView } from '../home/home';
import { createDashboardView } from '../dashboard/dashboard';
import { userLoginStatusCheck } from '../firebase/login/git-login';

export function createComponents(url)
{
    switch(url)
    {
        case 'home':
            createHomeView();            
            break;
        case 'dashboard':
            createDashboardView();
            break;
    }
}

function init()
{
    createComponents('home');
    userLoginStatusCheck();
}

window.onload = init;