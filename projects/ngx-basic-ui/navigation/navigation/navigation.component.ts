import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
  input,
} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from '../models';

interface FlatMenuItem {
  name: string;
  url?: string;
  level: number;
}

@Component({
  selector: 'b-navigation',
  templateUrl: 'navigation.component.html',
  styleUrl: 'navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule, RouterLink, RouterLinkActive],
})
export class Navigation implements OnChanges {
  readonly urlPrefix = input('');
  readonly relativeTo = input<ActivatedRoute | null>();
  readonly menu = input<MenuItem[]>([]);
  menuItems: FlatMenuItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.menu) {
      this.menuItems = this.toFlatMenuItemsRecursive(this.menu());
    }
  }

  private toFlatMenuItemsRecursive(
    items: MenuItem[],
    level = 0,
  ): FlatMenuItem[] {
    return items.flatMap((i) => {
      const item = i.url
        ? { name: i.name, url: i.url, level }
        : { name: i.name, level };
      const children = this.toFlatMenuItemsRecursive(i.children, level + 1);
      return [item].concat(children);
    });
  }
}
