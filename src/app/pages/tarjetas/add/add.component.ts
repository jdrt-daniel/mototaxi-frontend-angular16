import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  user = {} as any;
  host = 'http://localhost:4200/conductor/';
  loading = false;

  async ngOnInit() {
    this.getConductor();
  }

  async getConductor() {
    this.loading = true;
    try {
      this.loading = true;
      const { data } = await axios.get(
        'http://localhost:3000/api/conductores/39'
      );
      this.user = data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
