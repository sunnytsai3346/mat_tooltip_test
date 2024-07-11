import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TooltipExample1ComponentComponent } from './tooltip-example1-component/tooltip-example1-component.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipExample2ComponentComponent } from './tooltip-example2-component/tooltip-example2-component.component';
import { TooltipExample3ComponentComponent } from './tooltip-example3-component/tooltip-example3-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TooltipExample1ComponentComponent,
    TooltipExample2ComponentComponent,
    TooltipExample3ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
