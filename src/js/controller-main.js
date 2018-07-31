import { createHomeView } from '../home/home';
import { createDashboardView } from '../dashboard/dashboard';

function createComponents(url)
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

window.onload = createComponents('home');