import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbPart } from '../models';

@Component({
  selector: 'b-breadcrumb',
  templateUrl: 'breadcrumb.component.html',
  styleUrl: 'breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class Breadcrumb {
  readonly urlPrefix = input('');
  readonly relativeTo = input<ActivatedRoute | null>();
  readonly parts = input<BreadcrumbPart[]>([]);

  protected trackFn(
    part: { label: string; url?: string },
    index: number,
  ): string {
    return `${part.label}-${part.url ? `,${part.url}` : ''}-${index}`;
  }
}
