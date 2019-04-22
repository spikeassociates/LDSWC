/*!
  Copyright (c) 2019 Joe Bordes
  Licensed under the MIT License (MIT), see
  https://github.com/spikeassociates/ldswc
*/

'use strict';

import cx from '../classnames/classnames.js';
import { html } from '../lit-html/lit-html.js';

export * from './theme.js';

export function getRestOfAttribs(allAttribs, controlledAttribs) {
	let attrs = [];
	let ctrled = Object.keys(controlledAttribs).map(k => k.toLowerCase());
	Array.prototype.forEach.call(allAttribs, attr => {
		if (ctrled.indexOf(attr.name)==-1){
			attrs.push(attr.name + '=' + attr.value +'');
		}
	});
	return attrs.join(' ');
}

export function joinClassNames(classes) {
	return cx(classes);
}

export function iconClass(icon) {
	return icon.replace(/_/g, '-');
}

export function getAssistive(assist) {
	return html`<span class="slds-assistive-text">${assist}</span>`;
}

export function applyDecorators(flavor, infix = null) {
	if (!flavor) return null;
	const prefix = !infix ? 'slds-' : `slds-${infix}_`;
	return Array.isArray(flavor) ? flavor.map(f => `${prefix}${f}`) : `${prefix}${flavor}`;
}
