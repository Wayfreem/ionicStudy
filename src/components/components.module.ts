import { NgModule } from '@angular/core';
import { AccordionListComponent } from './accordion-list/accordion-list';
import {IonicModule} from "ionic-angular";

@NgModule({
	declarations: [AccordionListComponent],
	imports: [IonicModule],
	exports: [AccordionListComponent]
})
export class ComponentsModule {}
