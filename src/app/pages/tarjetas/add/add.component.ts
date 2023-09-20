import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/es';
moment().locale('es');
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  user = {} as any;
  host = 'http://localhost:4200/tarjeta/';
  loading = false;

  async ngOnInit() {
    this.getConductor();
  }

  async getConductor() {
    this.loading = true;
    try {
      this.loading = true;
      const { data: tarjeta } = await axios.get(
        'http://localhost:3000/api/tarjetas/12'
      );
      const { data: conductor } = await axios.get(
        `http://localhost:3000/api/tarjetas/12/conductor`
      );
      this.user = {
        ...conductor,
        tarjeta,
      };
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  parseDate(date: string) {
    return moment(date).format('L');
  }
}
