import { LitElement } from '../lit-element/lit-element.js';

export default class LDSWCElement extends LitElement {

	constructor() {
		super();
		this._mychildren = '';
	}

	createRenderRoot() {
		return this; // lightDOM
	}

	firstUpdate() {
		this.observer.disconnect();
	}

	firstUpdated() {
		super.firstUpdated();
		this._mychildren = Array.from(this.children);
	}

	connectedCallback() {
		super.connectedCallback();
		this.observer = new MutationObserver((mutations) => {
			this.observer.disconnect();
			var elems = {};
			var elemsidx = '';
			mutations.forEach((mutation) => {
				mutation.removedNodes.forEach((node) => {
					if (node.nodeType !== Node.COMMENT_NODE ) {
						if (node.slot != undefined) {
							elemsidx = (node.slot=='' ? 'unnamedslot' : node.slot);
							if (node.slot=='' && elems['unnamedslot']==undefined) {
								elems['unnamedslot'] = document.createElement('span');
							}
							if (elems[elemsidx] == undefined) {
								elems[elemsidx] = null;
							}
							if (elems[elemsidx]==null) {
								elems[elemsidx] = node;
							} else {
								elems[elemsidx].appendChild(node);
							}
						}
					}
				});
			});
			for (let child of this._mychildren) {
				if (child.nodeName=='SLOT' && child.name=='' && elems['unnamedslot']!=undefined) {
					child.replaceWith(elems['unnamedslot']);
				} else if (child.nodeName=='SLOT' && child.name!='' && elems[child.name]!=undefined) {
					child.replaceWith(elems[child.name]);
				}
				for (let subchild of child.children) {
					if (subchild.nodeName=='SLOT' && subchild.name=='' && elems['unnamedslot']!=undefined) {
						subchild.replaceWith(elems['unnamedslot']);
					} else if (subchild.nodeName=='SLOT' && subchild.name!='' && elems[subchild.name]!=undefined) {
						subchild.replaceWith(elems[subchild.name]);
					}
				}
			}
		});
		this.observer.observe(this, {
			childList: true,
		});
	}
}