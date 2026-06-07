import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {}
