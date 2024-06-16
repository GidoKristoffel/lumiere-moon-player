import { Routes } from "@angular/router";
import { videoAvailableGuard } from "./core/guards/video-available/video-available.guard";
import { videoUnavailableGuard } from "./core/guards/video-unavailable/video-unavailable.guard";

export const routes: Routes = [
    {
        path: 'player',
        loadComponent: () => import('./pages/player-page/player-page.component').then((c) => c.PlayerPageComponent),
        canActivate: [videoAvailableGuard]
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings-page/settings-page.component').then((c) => c.SettingsPageComponent),
        canActivate: [videoAvailableGuard]
    },
    {
        path: 'video-selection',
        loadComponent: () => import('./pages/video-selection-page/video-selection-page.component').then((c) => c.VideoSelectionPageComponent),
        canActivate: [videoUnavailableGuard]
    },
    {
        path: '',
        redirectTo: 'player',
        pathMatch: "full"
    }
];
