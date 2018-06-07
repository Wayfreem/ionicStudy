import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    PipesModule,
    ComponentsModule,
  ],
  exports: [
    ComponentsModule,
    PipesModule,
  ]
})

export class SharedModule { }
