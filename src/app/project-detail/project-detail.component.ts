import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '@app/services/project.service';

import { Project } from '@app/models';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styles: []
})
export class ProjectDetailComponent {
    project: Project;

    constructor(private projectService: ProjectService,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.project = this.projectService.initializeProject();
        this.activatedRoute.params.subscribe((params: Params) => {
            let projectId = params['id'];
            this.projectService.getProject(projectId).then(project => this.project = project)
        });
    }
}