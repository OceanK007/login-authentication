import { createHomeView } from '../home/home';
import { createDashboardView } from '../dashboard/dashboard';
import '../firebase/firebase-config';

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

window.onload = createComponents('home');