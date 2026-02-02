import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {QuillEditorComponent} from 'ngx-quill';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-text-editors',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, QuillEditorComponent, FormsModule],
    templateUrl: './text-editors.component.html',
    styles: ``
})
export class TextEditorsComponent {

    content: string = `
   <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
                            <p><br></p>
  <ul>
      <li>
          Fully responsive layout with a sleek and modern design.
      </li>
      <li>
          Multiple pre-built pages such as login, registration, dashboard, charts, tables, and
          more.
      </li>
      <li>
          Includes various components like modals, alerts, navigation menus, etc.
      </li>
      <li>
          Easy to customize and extend to suit your project’s needs.
      </li>
      <li>
          Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.
      </li>
  </ul>
  <p><br></p>
  <p>
      Inspinia Admin is the perfect choice for your next admin project. Get started today and
      create a stunning interface for your application.
  </p>
`

    content1 = `
 <h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3>
    <p><br></p>
    <ul>
        <li>
            Fully responsive layout with a sleek and modern design.
        </li>
        <li>
            Multiple pre-built pages such as login, registration, dashboard, charts, tables, and
            more.
        </li>
        <li>
            Includes various components like modals, alerts, navigation menus, etc.
        </li>
        <li>
            Easy to customize and extend to suit your project’s needs.
        </li>
        <li>
            Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.
        </li>
    </ul>
    <p><br></p>
    <p>
        Inspinia Admin is the perfect choice for your next admin project. Get started today and
        create a stunning interface for your application.
    </p>
`
    editorConfig= {
            toolbar: [
                [{ 'font': [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'super' }, { 'script': 'sub' }],
                [{ 'header': [false, 1, 2, 3, 4, 5, 6] }],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
            ]
    }

    bubbleEditorConfig= {
            toolbar: [
                ['bold', 'italic'],
                ['link'],
                [{ header: 1 }, { header: 2 }],
                ['blockquote'],
            ]
    }


}
