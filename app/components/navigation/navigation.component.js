'use strict'

import template from './navigation.html';
import './navigation.css';

export class NavigationComponent {
  static get $inject() {return []}

}

export const navigationConfig = {
  template: template,
  controller: NavigationComponent
}
