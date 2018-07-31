import { dashboardViewHolderId, gitLogoutComponent } from './dashboard-view';

export function createDashboardView()
{
    var gLogoutComp = gitLogoutComponent();
    $("#"+dashboardViewHolderId).empty().append(gLogoutComp);
}