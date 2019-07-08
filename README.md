# Lightning Design System lit-element Web Components (LDSWC)

`LDSWC` provides [lit-element](https://lit-element.polymer-project.org) web components for the [Salesforce Lightning Design System](http://lightningdesignsystem.com/).

## Usage

`LDSWC` exports components as ES class modules. You can consume these via `import` or script/modules loading

``` html
<script type="module" src="./include/ldswc/Icon/Icon.js"></script>
<script type="module" src="./include/ldswc/Icon/ScoreIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/StrengthIcon.js"></script>
<script type="module" src="./include/ldswc/Icon/EqIcon.js"></script>
<script type="module" src="./include/ldswc/Spinner/index.js"></script>

<span class="slds-icon_container slds-icon-standard-user">
<ldswc-iconsvg assetPath="include/LD/assets/icons/" sprite="standard" icon="account" id="anyid" data-kkk="any data"></ldswc-iconsvg>
</span>
<ldswc-icon assetPath="include/LD/assets/icons/" sprite="standard" icon="search" background="true" title="an icon"></ldswc-icon>
<ldswc-scoreicon title="myscore" score="negative"></ldswc-scoreicon>
<ldswc-strengthicon title="mystrength" strength="-3" animated></ldswc-strengthicon>
<ldswc-strengthicon title="mystrength" strength="2"></ldswc-strengthicon>
<ldswc-eqicon title="equalizer" animated></ldswc-eqicon>
<ldswc-spinner title="container" size="large" delayed></ldswc-spinner>
```

We are currently working in a [coreBOS extension](https://corebos.org) where we learn and test the components. You can find the extension in the coreBOS directory.

## Participate

 - [Gitter Chat](https://gitter.im/LDSWC)
