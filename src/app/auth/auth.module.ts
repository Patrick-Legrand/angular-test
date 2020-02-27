import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthService } from "./auth.service"
import { AuthGuard } from "./auth.guard"
import { JwtInterceptor } from './jwt.interceptor'
import { ErrorInterceptor } from './error.interceptor'

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AuthService,
        AuthGuard
    ]
})

export class AuthModule { }