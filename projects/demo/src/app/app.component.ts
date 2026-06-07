import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MenuItem, Navigation } from '@grumptech/ngx-basic-ui/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, MatToolbar, MatButton, Navigation],
})
export class AppComponent {
  protected menu: MenuItem[] = [
    { name: 'Breadcrumb', url: 'breadcrumb', children: [] },
    { name: 'Code editor', url: 'code-editor', children: [] },
    { name: 'Navigation', url: 'navigation', children: [] },
  ];
}
