import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
  output,
  signal,
  inject,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { debounceTime } from 'rxjs';

// CdkTextareaAutosize can be removed once `field-sizing: content;` is fully supported.
@Component({
  selector: 'b-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CdkTextareaAutosize],
})
export class CodeEditor implements OnInit, OnChanges {
  readonly data = input.required<string>();
  readonly disabled = input(false);
  readonly formatter = input<(data: string) => string>();
  readonly validator = input<
    (data: string) => {
      valid: boolean;
      message: string;
    }
  >();
  readonly validChange = output<string>();
  protected readonly warningMessage = signal('');
  protected readonly formControl = new FormControl('', { nonNullable: true });
  protected readonly id: string;
  private static counter = 0;
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.id = `b-code-editor_${++CodeEditor.counter}`;
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200))
      .subscribe((value) => {
        const validator = this.validator();
        if (!validator) {
          return;
        }
        const result = validator(value);
        if (!result.valid) {
          this.warningMessage.set(result.message);
          console.warn(result.message);
        } else {
          this.validChange.emit(value);
          this.warningMessage.set('');
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      const formatter = this.formatter();
      this.formControl.setValue(
        formatter
          ? formatter(changes.data.currentValue)
          : changes.data.currentValue,
      );
    }
    if (changes.disabled) {
      changes.disabled.currentValue
        ? this.formControl.disable()
        : this.formControl.enable();
    }
  }

  getData(): string {
    return this.formControl.value;
  }
}
