import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { CdkDragDropNestedListsExample } from './app.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ListItemComponent, CdkDragDropNestedListsExample],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    MaterialModule,
  ],
  entryComponents: [ListItemComponent, CdkDragDropNestedListsExample],
  providers: [],
  bootstrap: [CdkDragDropNestedListsExample],
})
export class AppModule {}
