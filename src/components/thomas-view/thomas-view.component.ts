import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import view from './thomas-view.template.html';
import style from './thomas-view.style.scss';
import '../shared-styles';

/*
 * Thomas E Wilson
 * Steps to create new component:
 * 1. Created this view by copying view1 directory in file explorer
 * 2. Rename the new directory to "sabien-view". Open directory, ensure files follow naming convention "sabien-view.component.ts" present in other component directories.
 * 3. Open "sabien-view.component.ts". Look at import statements. Ensure view and style are imported from the newly created files. 
 *   i. Check Component class name: (Convention: Start Capital, all words CapitalNextToEachOther) 
 *     E.g. In "sabien-view.component.ts" ==> export class SabienView extends PolymerElement {}
 *   ii. Check static get is() { return 'sabien-view'}
 *     - **IMPT** This is the custom element name, the new HTML element name refering to element <sabien-view></sabien-view>
 *     - After you define this element, you can use <sabien-view></sabien-view> anywhere in any HTML in this project.
 *   iii. Check last line for window.customElements.define(SabienView.is, SabienView)
 *     - Registers your element with the browser, so it can be built and referenced.
 *     - This is where your is() is called. This will always be window.customElements.define(ClassName.is, ClassName)
 * 4. To add your new Component to the main view, go to shell.template.html
 *   i. Find iron-selector; Copy <a name="thomas-view">...</a> to next line; Replace all "thomas-view" with your component name.
 *   ii. Find iron-pages; Copy <thomas-view...</thomas-view> to next line; Make this element selector yours, following the pattern as always. 
 *       (E.g. <sabien-view name="sabien-view"> </sabien-view>)
 *  
 * This may seem like a fair amount of changes. It will take you an hour to get through the first time, MAYBE. Once you go through
 * and change them all the first time, you will see the pattern of naming. 
 * 
 * After you finish, You are now qualified to make web components from nothing.
 *   1. Start with a bullshit template
 *   2. Go through the above process, replacing sabien-view with cabab-case-component-name.
 *     i. Use CTRL + SHIFT + L while your cursor is on a symbol to select all instances of that multi-cursor style, so as to rename all at once.
 *   3. Add other custom code that makes it cool
 *   4. HAVE MAGICAL POWERS
 * 
 * Rant Over. With Love.
 * T
 * 
 * 
**/

export class ThomasView extends PolymerElement {
  $: any;

  static get is() {
    return 'thomas-view';
  }

  static get template() {
    return html([`<style include="shared-styles">${style}</style>${view}`]);
  }
}
window.customElements.define(ThomasView.is, ThomasView);
