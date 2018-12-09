import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from './http.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
  providers: [HttpService]
})
export class UpdatesComponent implements OnInit {
  languages = ['ru', 'en'];
  selectedLang: string;

  @ViewChild('updatesForm') updatesForm: NgForm;

  constructor(private updatesApi: HttpService) { }

  ngOnInit() {
  }

  sendUpdates() {
    if (!this.selectedLang) { return; }
    const title = this.updatesForm.form.get('title').value;
    const info = this.updatesForm.form.get('info').value;
    console.log('title ', title);
    console.log('info ', info);
    console.log('lang ', this.selectedLang);
    const message = `${title}\n${info}`;
    this.updatesApi.sendUpdates({ message, lang: this.selectedLang }).subscribe(res => {
      console.log('res updates', res);
    }, error => console.log('error upd ', error.message));
  }
}
