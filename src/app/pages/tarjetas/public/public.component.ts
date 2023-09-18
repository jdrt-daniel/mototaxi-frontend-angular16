import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

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

  async getConductor(id: number) {
    this.loading = true;
    try {
      this.loading = true;
      const { data } = await axios.get(
        `http://localhost:3000/api/conductores/${id}`
      );
      this.user = data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
}
