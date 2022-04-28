import {NgModule} from'@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule, MatCardModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule, MatCardModule],
})
export class CustomMaterialModule { }