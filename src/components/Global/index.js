/**
 * This file is used for registering global components. We import all global components into this file
 * then mount them onto Vue using a forEach and passing in the name and component. We then import this
 * in main.js BEFORE vue instantiation
 */

import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import LoadingAnimation from './LoadingAnimation.vue';

[
  LoadingAnimation,
].forEach((component) => Vue.component(component.name, component));
