import { dashboardViewHolderId, googleLogoutComponent } from './dashboard-view';

export function createDashboardView()
{
    var gLogoutComp = googleLogoutComponent();
    $("#"+dashboardViewHolderId).append(gLogoutComp);
}