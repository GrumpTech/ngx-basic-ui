import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeEditor } from "@grumptech/ngx-basic-ui/code-editor";

@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeEditor],
})
export class CodeEditorPage {}
