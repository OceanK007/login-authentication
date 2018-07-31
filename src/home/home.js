import { gitLoginComponent, homeViewHolderId } from './home-view';

export function createHomeView()
{
    var gLoginComp = gitLoginComponent();
    $("#"+homeViewHolderId).empty().append(gLoginComp);
}