import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'player',
        loadComponent: () => import('./pages/player-page/player-page.component').then((c) => c.PlayerPageComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings-page/settings-page.component').then((c) => c.SettingsPageComponent)
    },
    {
        path: 'video-selection',
        loadComponent: () => import('./pages/video-selection-page/video-selection-page.component').then((c) => c.VideoSelectionPageComponent)
    },
    {
        path: '',
        redirectTo: 'player',
    }
];
