import { LitElement, html } from '../libs/lit-element/lit-element.js';
import {joinClassNames, ldsIsEmpty} from '../libs/ldswcutils/ldswcutils.js';

export default class Tabs extends LitElement {
	static get properties() {
		return {
			/**
			 * class name
			 */
			className: { type: String },
			/**
			 * Renders scoped variant
			 */
			scoped: { type: Boolean },
			/**
			 * Size modifier
			 */
			size: { type: String }, // ['medium', 'large']
		};
	}

	constructor() {
		super();
		this.className = null;
		this.scoped = false;
		this.size = null;
		this._mychildren = '';
		this.state = null;
	}

	createRenderRoot() {
		return this;
	}

	firstUpdate() {
		this.observer.disconnect();
	}

	firstUpdated() {
		super.firstUpdated();
		this._mychildren = Array.from(this.children);
	}

	_replaceSlots(node, elements) {
		if (node.nodeName=='SLOT' && node.name=='' && elements['unnamedslot']!=undefined) {
			node.replaceWith(elements['unnamedslot']);
		} else if (node.nodeName=='SLOT' && node.name!='' && elements[node.name]!=undefined) {
			if (node.name=='tablinks') {
				var numelems = elements[node.name].children.length;
				for (var it=0; it < numelems; it++) {
					node.parentNode.appendChild(elements[node.name].children[0]);
				}
				node.parentNode.removeChild(node);
			} else if (node.name=='tabpanels') {
					var numelems = elements[node.name].children.length;
					for (var it=0; it < numelems; it++) {
						node.parentNode.appendChild(elements[node.name].children[0]);
					}
					node.parentNode.removeChild(node);
			} else {
				node.replaceWith(elements[node.name]);
			}
			delete elements[node.name];
		}
		if (node.children != null && node.children!=undefined && Array.from(node.children)!=[]) {
			for (let subchild of node.children) {
				this._replaceSlots(subchild, elements);
			}
		}
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
							if (elemsidx.startsWith('tablinks')) {
								elemsidx = 'tablinks';
							}
							if (elemsidx.startsWith('tabpanels')) {
								elemsidx = 'tabpanels';
							}
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
				this._replaceSlots(child, elems);
			}
		});
		this.observer.observe(this, {
			childList: true,
		});
		var self=this;
		if (this.handleClick) {
			this.querySelectorAll(':scope > span > ldswc-tablink').forEach(function (wc) {
				wc.addEventListener('tabClicked', self.handleClick.bind(self), true);
			});
		}
	}

	handleClick(e) {
		let id = e;
		if (e && e.target) {
			id = e.target.id;
		}
		if (this.state === null) {
			var self = this;
			e.target.parentNode.querySelectorAll(':scope > ldswc-tablink').forEach(function (wc) {
				if (wc.isActive) {
					self.state = { activeTabs: [wc.id] };
				}
			});
		}
		if (!this.state.activeTabs.includes(id)) {
			this.state = { activeTabs: [id] };
			var self = this;
			e.target.parentNode.querySelectorAll(':scope > ldswc-tablink').forEach(function (wc) {
				wc.isActive = (self.state.activeTabs.indexOf(wc.id)!=-1);
				document.getElementById(wc.id+'_panel').isActive = wc.isActive;
			});
		}
	}

	render() {
		const hasSize = !ldsIsEmpty(this.size);
		const sldsClasses = [
			'slds-tabs_default',
			{ [`slds-tabs_${this.size}`]: hasSize },
			this.className
		];
		return html`
			<div class=${joinClassNames(sldsClasses)}>
			<ul class="slds-tabs_default__nav" role="tablist">
				<slot name="tablinks"></slot>
			</ul>
			<slot name="tabpanels"></slot>
			</div>
		`;
	}
}

customElements.define('ldswc-tabs', Tabs);
