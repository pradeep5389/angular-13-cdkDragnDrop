import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling/scrolling-module';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { CdkDragDropNestedListsExample } from './app.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ListItemComponent, CdkDragDropNestedListsExample],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    ScrollingModule,
  ],
  entryComponents: [ListItemComponent, CdkDragDropNestedListsExample],
  providers: [],
  bootstrap: [CdkDragDropNestedListsExample],
})
export class AppModule {}