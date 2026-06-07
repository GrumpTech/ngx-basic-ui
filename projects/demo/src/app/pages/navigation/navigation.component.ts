import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem, Navigation } from '@grumptech/ngx-basic-ui/navigation';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navigation],
})
export class NavigationTest {
  protected menu: MenuItem[] = [
    { name: 'Test', children: [] },
    {
      name: 'Test2',
      url: '/',
      children: [
        { name: 'Child1', children: [] },
        {
          name: 'Child2',
          url: '/',
          children: [
            { name: 'Grandchild', children: [] },
            { name: 'Grandchild2', url: '/', children: [] },
          ],
        },
      ],
    },
    { name: 'Navigation', url: '/navigation', children: [] },
  ];
}
