import { Component } from '@angular/core';
import { JokesModel } from '../jokes-model.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth-service.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  jokeList: JokesModel[] = [];

  constructor(
    private routesService: Router,
    private authService: AuthenticationService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.loadJokes();
  }

  async loadJokes() {
    try {
      const jokesResponse = await this.testService.retrieveJokes().toPromise();
      if (jokesResponse) {
        this.jokeList = jokesResponse;
      }
    } catch (error) {
      console.error('Error while fetching jokes:', error);
    }
  }

  async signOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.routesService.navigate(['/login']);
  }
}