import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  dashboardData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
      this.dashboardData = response.slice(0, 4); // Displaying only first 4 rows
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  }
}
