import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'player',
        loadComponent: () => import('./pages/player-page/player-page.component').then((c) => c.PlayerPageComponent)
    },
    {
        path: '',
        redirectTo: 'player',
    }
];
