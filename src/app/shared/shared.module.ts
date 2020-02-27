// https://angular.io/guide/styleguide#shared-feature-module
import { NgModule } from '@angular/core';

import { AlertService } from "./alert/alert.service";

import { AlertComponent } from "./alert/alert.component";

@NgModule({
    declarations: [AlertComponent],
    providers: [AlertService],
    exports: [AlertComponent]
})

export class SharedModule { }