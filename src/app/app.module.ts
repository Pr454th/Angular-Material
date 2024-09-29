import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormModelComponent } from './form-model/form-model.component';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { EditButtonRendererComponent } from './grid/edit-button-renderer.component';
import { GridComponent } from './grid/grid.component';
import { TableComponentComponent } from './table-component/table-component.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form-model', component: FormModelComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormModelComponent,
    HomeComponent,
    EditButtonRendererComponent,
    GridComponent,
    TableComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgGridModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatButton,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
