import template from './technical-test.component.html';
import controller from './technical-test.controller';
import './technical-test.component.scss';

export const TechnicalTestComponent = {
  bindings: {
    exampleVariable: '=',
  },
  template,
  controller
};
