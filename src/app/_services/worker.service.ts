import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WorkerUser, WorkerUserCredentials } from '@app/models'
import { UserService } from '@app/_services/user.service'


@Injectable()
export class WorkerService extends UserService {
  private worker: WorkerUser;
  private storageKey = "beehive_worker_user";

  constructor(private http: Http) {
    super(http);
    this.loadWorkerUser()
  }

  signup(workerUser: WorkerUser): Promise<WorkerUser> {
    return this.http.post(`${this.baseUrl}/worker/signup`, JSON.stringify(workerUser), this.authOptions)
      .toPromise()
      .then(response => this.handleUserAuthentication(response.json().workerUser as WorkerUser))
      .catch(this.handleError);
  }

  login(workerUserCredentials: WorkerUserCredentials): Promise<WorkerUser> {
    return this.http.post(`${this.baseUrl}/worker/login`, JSON.stringify(workerUserCredentials), this.authOptions)
    .toPromise()
    .then(response => this.handleUserAuthentication(response.json().user as WorkerUser))
    .catch(this.handleError)
  }

  getCurrentUser(): WorkerUser {
    return this.worker;
  }

  private loadWorkerUser(): void {
    var workerObject = this.loadUserObject(this.storageKey);
    if (workerObject) {
      this.worker = <WorkerUser>workerObject;
    }
  }

  private handleUserAuthentication(worker: WorkerUser): WorkerUser {
    this.worker = worker;
    this.storeUserObject(this.storageKey, worker);
    return this.worker;
  }
}
