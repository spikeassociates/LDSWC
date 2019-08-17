/**
 * @license
 * Copyright (c) 2019 Spike Associates. All rights reserved.
 * This code may only be used under the MIT style license
 */
import { AttributePart, directive } from '../lit-html/lit-html.js';
/**
 * For AttributeParts, sets the attributes passed in as an object
 */
export const addProps = directive((props) => (part) => {
	if (props !== undefined && part instanceof AttributePart) {
		for (var key in props) {
			part.committer.element.setAttribute(key, props[key]);
		}
	}
});