import { googleLoginComponent, homeViewHolderId } from './home-view';

export function createHomeView()
{
    var gLoginComp = googleLoginComponent();
    $("#"+homeViewHolderId).append(gLoginComp);
}