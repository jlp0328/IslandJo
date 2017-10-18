'use strict'

import template from './about.html';
import './about.css';

export class AboutComponent {
  static get $inject() {return []}

}

export const aboutConfig = {
  template: template,
  controller: AboutComponent
}
