import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 52fba3d1c4b699d072bde269a25092594fe68e24
import { HttpModule }    from '@angular/http';

import { ROUTES } from './routes'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkerSignupComponent } from './worker-signup/worker-signup.component';
import { WorkerLoginComponent } from './worker-login/worker-login.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { BusinessSignupComponent } from './business-signup/business-signup.component'

import { WorkerService } from './services/worker.service'
import { ProjectService } from './services/project.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkerSignupComponent,
    WorkerLoginComponent,
    ProjectCreateComponent,
    BusinessSignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [
    WorkerService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
