import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicInputsComponent } from './assignment/dynamic-inputs/dynamic-inputs.component';
import { DynamicSectionsComponent } from './assignment/dynamic-sections/dynamic-sections.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,
    DynamicSectionsComponent,
    DynamicInputsComponent,
  ],
})
export class AppModule {}
