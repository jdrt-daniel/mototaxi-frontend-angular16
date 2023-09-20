import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

import * as moment from 'moment';
import 'moment/locale/es';
moment().locale('es');

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent {
  user = {} as any;
  loading = false;
  id: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.getConductor(this.id);
    });
  }
  parseDate(date: string) {
    return moment(date).format('L');
  }

  async getConductor(id: number) {
    this.loading = true;
    try {
      this.loading = true;
      const { data: tarjeta } = await axios.get(
        `http://localhost:3000/api/tarjetas/${id}`
      );
      const { data: conductor } = await axios.get(
        `http://localhost:3000/api/tarjetas/${id}/conductor`
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
}
