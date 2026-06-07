import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Breadcrumb, BreadcrumbPart } from '@grumptech/ngx-basic-ui/breadcrumb';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Breadcrumb],
})
export class BreadcrumbPage {
  protected parts: BreadcrumbPart[] = [
    { label: 'Main', url: '/' },
    { label: 'Breadcrumb' },
  ];
}
