import { NgModule } from '@angular/core';

import { MomentPipe } from './moment.pipe';

export const pipes = [
  MomentPipe
];

@NgModule({
  declarations:[pipes],
  exports: [pipes]
})

export class PipesModule { }
