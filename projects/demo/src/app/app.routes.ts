import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainPage),
  },
  {
    path: 'breadcrumb',
    loadComponent: () =>
      import('./pages/breadcrumb/breadcrumb.component').then(
        (m) => m.BreadcrumbPage,
      ),
  },
  {
    path: 'code-editor',
    loadComponent: () =>
      import('./pages/code-editor/code-editor.component').then(
        (m) => m.CodeEditorPage,
      ),
  },
  {
    path: 'navigation',
    loadComponent: () =>
      import('./pages/navigation/navigation.component').then(
        (m) => m.NavigationTest,
      ),
  },
];
