(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,,,function(n,e,t){"use strict";var o=t(0),i=t.n(o),r=t(2),a=t.n(r),s=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();var c=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,i.a.PureComponent),s(e,[{key:"componentDidMount",value:function(){a.a.highlightAll()}},{key:"componentDidUpdate",value:function(){a.a.highlightAll()}},{key:"render",value:function(){var n=this.props,e=n.slides,t=n.currentIndex,o=n.className,r=void 0===o?void 0:o,a=n.lazyload,s=void 0===a||a;return i.a.createElement("article",{className:r},e.map(function(n,e){return i.a.createElement("section",{key:e,className:n.meta.className,"data-bespoke-backdrop":n.meta.background,"data-bespoke-fx-direction":n.meta.fx.direction,"data-bespoke-fx-transition":n.meta.fx.transition,dangerouslySetInnerHTML:{__html:t>=e-5&&t<=e+5||!s?n.context:"<div />"}})}))}}]),e}();e.a=c},,,,,,,,,,,,,,,,,,function(n,e,t){"use strict";t.r(e);var o=t(0),i=t.n(o),r=t(20),a=t.n(r),s=t(19),c=t.n(s),l=function(n){var e=n.displayed,t=void 0===e||e;return i.a.createElement("div",{className:t?"page-loader":"page-loader-fadeout"},i.a.createElement(c.a,{type:"bars"}))},d=t(3),u=function(){return location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common"},p=function(n){var e={fx:{direction:"",transition:""},note:"",sectionTitle:"",className:"",shouldReplace:!1,background:"default"};if(void 0===n)return e;var t=n.match(/<!-- direction: (.+) -->/);e.fx.direction=t?t[1]:"horizontal";var o=n.match(/<!-- transition: (.+) -->/);e.fx.transition=o?o[1]:"none";var i=n.match(/<!-- background: (.+) -->/);e.background=i?i[1]:"default";var r=n.match(/<!-- sectionTitle: (.+) -->/);r&&(e.background="section-title",e.className="section-title",e.sectionTitle=r[1]);var a=n.match(/<!-- note[\s\S]*-->/g);return e.note=a?a[0].replace(/<!-- note/g,"").replace(/-->/g,""):"",n.match(/<!-- contents -->/)&&(e.shouldReplace=!0),e},f=t(18),h=t.n(f);var m=t(17),g=t.n(m),x=t(16),v=t.n(x),b=t(15),y=t.n(b),w=t(14),k=t.n(w),S=t(13),E=t.n(S),O=t(12),_=t.n(O),T=t(11),j=t.n(T),C=t(10),I=t.n(C),L=t(9),N=t.n(L),P=t(8),F=t.n(P);t(74);var z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[k()(),y()(),E()(),_()(),j()(),I()(),N()(),F()()];return g.a.from("article",[n()].concat(t,[v()()],function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(e.map(function(n){return n()}))))},A=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},B=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();var D=function(n){function e(n){var o=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));r.changeLoaderState=function(){window.onload=function(){setTimeout(function(){return r.setState({loader:!1})},500)}},r.goTo=function(n){window.slide.bespoke.slide(n)},r.onSetSidebarOpen=function(n){r.setState({opened:n})},r.setupBespoke=function(){window.slide={},window.slide.bespoke=z(r.props.theme)},r.getContent=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{displayed:r.state.loader}),r.content?i.a.createElement(o.content,{slides:r.slides,loadedBespoke:!r.state.loader}):i.a.createElement(d.a,{slides:r.slides,currentIndex:r.state.slideInfo.index}))},r.state={loaded:!1,opened:!1,loader:!0,SidebarComponent:null,slideInfo:{total:0,index:location.hash.slice(1)||0,current:"0"}},r.slides=[],r.contentsList=[],r.setupBespokeFlag=!1,n.slides.forEach(function(n,e){var t=p(n);r.slides.push({meta:t,context:n}),""!==t.sectionTitle&&r.contentsList.push({title:t.sectionTitle,index:e+1})}),0!==r.contentsList.length&&r.slides.forEach(function(n,e){var t,o,a;n.meta.shouldReplace&&(r.slides[e].context=(t=n.context,o=r.contentsList,a=i.a.createElement("ul",{className:"contents"},o.map(function(n,e){return i.a.createElement("li",{key:e},i.a.createElement("a",{href:"#"+n.index},n.title))})),t.replace(/<!-- contents -->/,h()(a))))});var a=u();return"view"===a?t.e(2).then(t.bind(null,98)).then(function(n){r.content=n.default,r.setState({loaded:!0}),r.setupBespokeFlag=!0,r.changeLoaderState()}):"host"===a?t.e(1).then(t.bind(null,97)).then(function(n){r.content=n.default,r.setState({loaded:!0}),r.setupBespokeFlag=!0,r.changeLoaderState()}):r.changeLoaderState(),r}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,i.a.Component),B(e,[{key:"componentDidMount",value:function(){var n=this;"common"===u()&&this.setupBespoke(),t.e(0).then(t.bind(null,96)).then(function(e){var t=e.default;n.setState({SidebarComponent:t});var o=window.slide.bespoke.slide()+1;n.setState({slideInfo:{total:(""+n.slides.length).padStart(2,"0"),index:o,current:(""+o).padStart(2,"0")}}),window.slide.bespoke.on("activate",function(){var e=window.slide.bespoke.slide()+1;n.setState({slideInfo:A({},n.state.slideInfo,{index:e,current:(""+e).padStart(2,"0")})})})})}},{key:"UNSAFE_componentWillUpdate",value:function(){this.setupBespokeFlag&&(this.setupBespoke(),this.setupBespokeFlag=!1)}},{key:"render",value:function(){var n=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,this.state.SidebarComponent?i.a.createElement(this.state.SidebarComponent,{goTo:this.goTo,opened:this.state.opened,contents:this.contentsList,onSetOpen:this.onSetSidebarOpen,slideInfo:this.state.slideInfo}):null,i.a.createElement("i",{style:{width:50},className:"btn-sidebar fa fa-bars",onClick:function(){return n.onSetSidebarOpen(!0)}})),this.getContent())}}]),e}(),U=function(){var n=document.createElement("div");return n.id="root",document.body.appendChild(n),n},R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];a.a.render(i.a.createElement(D,{theme:e,slides:n}),U())},M=function(n){return{id:(e=n).id,slides:e.keys().sort().map(function(n){return e(n)})};var e};t(70),t(66),t(63);var J=function(){document.addEventListener("click",function(n){if("A"===n.target.tagName){if(n.target.host===location.host||""===n.target.href)return;n.preventDefault(),window.open(n.target.href,"_blank")}})},H=void 0;try{H=t(60)}catch(n){console.error(n)}var W=M(t(57));if(void 0===H)throw new Error("Could not find theme");R(W.slides,H),J()},,,function(n,e,t){},function(n,e,t){var o=t(24);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){if("/Users/about_hiroppy/Programming/fusuma/samples/fx/style.css".match(/\+*.css$/i))try{t(25)}catch(n){console.error(n)}},function(n,e){n.exports='\x3c!-- direction: vertical --\x3e\n\x3c!-- transition: flip --\x3e\n\x3c!-- background: end --\x3e\n<h1 id="the-end">The End</h1>\n<p>Enjoy😆</p>\n<p><br /></p>\n<ul>\n<li>CLI: <a href="https://github.com/hiroppy/fusuma">https://github.com/hiroppy/fusuma</a></li>\n<li>Sample: <a href="https://github.com/hiroppy/fusuma-sample">https://github.com/hiroppy/fusuma-sample</a></li>\n<li>Slides: <a href="https://github.com/hiroppy/slides">https://github.com/hiroppy/slides</a></li>\n</ul>\n'},function(n,e){n.exports='\x3c!-- transition: slide --\x3e\n<h2 id="slide">slide</h2>\n<pre><code class="lang-md">&lt;!-- transition: slide --&gt;\n\n## slide\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: sides --\x3e\n<h2 id="sides">sides</h2>\n<pre><code class="lang-md">&lt;!-- transition: sides --&gt;\n\n## sides\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: carousel --\x3e\n<h2 id="carousel">carousel</h2>\n<pre><code class="lang-md">&lt;!-- transition: carousel --&gt;\n\n## carousel\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: cube --\x3e\n<h2 id="cube">cube</h2>\n<pre><code class="lang-md">&lt;!-- transition: cube --&gt;\n\n## cube\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: room --\x3e\n<h2 id="room">room</h2>\n<pre><code class="lang-md">&lt;!-- transition: room --&gt;\n\n## room\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: unfold --\x3e\n<h2 id="unfold">unfold</h2>\n<pre><code class="lang-md">&lt;!-- transition: unfold --&gt;\n\n## unfold\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: fold --\x3e\n<h2 id="fold">fold</h2>\n<pre><code class="lang-md">&lt;!-- transition: fold --&gt;\n\n## fold\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: pull --\x3e\n<h2 id="pull">pull</h2>\n<pre><code class="lang-md">&lt;!-- transition: pull --&gt;\n\n## pull\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: push --\x3e\n<h2 id="push">push</h2>\n<pre><code class="lang-md">&lt;!-- transition: push --&gt;\n\n## push\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: newspaper --\x3e\n<h2 id="newspaper">newspaper</h2>\n<pre><code class="lang-md">&lt;!-- transition: newspaper --&gt;\n\n## newspaper\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: fall --\x3e\n<h2 id="fall">fall</h2>\n<pre><code class="lang-md">&lt;!-- transition: fall --&gt;\n\n## fall\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: flip --\x3e\n<h2 id="flip">flip</h2>\n<pre><code class="lang-md">&lt;!-- transition: flip --&gt;\n\n## flip\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: glue --\x3e\n<h2 id="glue">glue</h2>\n<pre><code class="lang-md">&lt;!-- transition: glue --&gt;\n\n## glue\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: scale-down-up --\x3e\n<h2 id="scale-down-up">scale-down-up</h2>\n<pre><code class="lang-md">&lt;!-- transition: scale-down-up --&gt;\n\n## scale-down-up\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: scale-up-up --\x3e\n<h2 id="scale-up-up">scale-up-up</h2>\n<pre><code class="lang-md">&lt;!-- transition: scale-up-up --&gt;\n\n## scale-up-up\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: move-out-scale-up --\x3e\n<h2 id="move-out-scale-up">move-out-scale-up</h2>\n<pre><code class="lang-md">&lt;!-- transition: move-out-scale-up --&gt;\n\n## move-out-scale-up\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: scale-down-out-move-in --\x3e\n<h2 id="scale-down-out-move-in">scale-down-out-move-in</h2>\n<pre><code class="lang-md">&lt;!-- transition: scale-down-out-move-in --&gt;\n\n## scale-down-out-move-in\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: move-different-easing --\x3e\n<h2 id="move-different-easing">move-different-easing</h2>\n<pre><code class="lang-md">&lt;!-- transition: move-different-easing --&gt;\n\n## move-different-easing\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: move-both-fade --\x3e\n<h2 id="move-both-fade">move-both-fade</h2>\n<pre><code class="lang-md">&lt;!-- transition: move-both-fade --&gt;\n\n## move-both-fade\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: move-fade --\x3e\n<h2 id="move-fade">move-fade</h2>\n<pre><code class="lang-md">&lt;!-- transition: move-fade --&gt;\n\n## move-fade\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- transition: move --\x3e\n<h2 id="move">move</h2>\n<pre><code class="lang-md">&lt;!-- transition: move --&gt;\n\n## move\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- sectionTitle: Transition --\x3e\n<h2 id="transition">Transition</h2>\n'},function(n,e){n.exports='\x3c!-- direction: vertical --\x3e\n<h2 id="vertical">vertical</h2>\n<pre><code class="lang-md">&lt;!-- direction: vertical --&gt;\n\n## vertical\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- direction: horizontal --\x3e\n<h2 id="horizontal">horizontal</h2>\n<p><code>horizontal</code> is default value.</p>\n<pre><code class="lang-md">&lt;!-- direction: horizontal --&gt;\n\n## horizontal\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- sectionTitle: Direction --\x3e\n<h2 id="direction">Direction</h2>\n'},function(n,e){n.exports='\x3c!-- direction: vertical --\x3e\n\x3c!-- transition: room --\x3e\n<p>In order to do animation,<br>it is necessary to write <code>direction</code> and <code>transition</code> individually.</p>\n<p><br /></p>\n<pre><code class="lang-md">&lt;!-- direction: vertical --&gt;\n\n&lt;!-- transition: room --&gt;\n\nIn order to do animation,  \nit is necessary to write `direction` and `transition` individually.\n</code></pre>\n'},function(n,e){n.exports='\x3c!-- sectionTitle: Syntax --\x3e\n<h2 id="syntax">Syntax</h2>\n'},function(n,e){n.exports='\x3c!-- background: contents --\x3e\n<h2 id="contents">Contents</h2>\n\x3c!-- contents --\x3e\n'},function(n,e){n.exports='\x3c!-- background: title --\x3e\n<h1 id="animation">Animation</h1>\n<p><br /></p>\n<p><a href="https://github.com/hiroppy/fusuma">https://github.com/hiroppy/fusuma</a></p>\n'},function(n,e,t){var o={"./0-title.md":56,"./01-content.md":55,"./02-syntax/0-title.md":54,"./02-syntax/01-description.md":53,"./03-direction/0-title.md":52,"./03-direction/01-horizontal.md":51,"./03-direction/02-vertical.md":50,"./04-transition/0-title.md":49,"./04-transition/01-move.md":48,"./04-transition/02-move-fade.md":47,"./04-transition/03-move-both-fade.md":46,"./04-transition/04-move-different-easing.md":45,"./04-transition/05-scale-down-out-move-in.md":44,"./04-transition/06-move-out-scale-up.md":43,"./04-transition/07-scale-up-up.md":42,"./04-transition/08-scale-down-up.md":41,"./04-transition/09-glue.md":40,"./04-transition/10-flip.md":39,"./04-transition/11-fall.md":38,"./04-transition/12-newspaper.md":37,"./04-transition/13-push.md":36,"./04-transition/14-pull.md":35,"./04-transition/15-fold.md":34,"./04-transition/16-unfold.md":33,"./04-transition/17-room.md":32,"./04-transition/18-cube.md":31,"./04-transition/19-carousel.md":30,"./04-transition/20-sides.md":29,"./04-transition/21-slide.md":28,"./05-end.md":27};function i(n){var e=r(n);return t(e)}function r(n){var e=o[n];if(!(e+1)){var t=new Error('Cannot find module "'+n+'".');throw t.code="MODULE_NOT_FOUND",t}return e}i.keys=function(){return Object.keys(o)},i.resolve=r,n.exports=i,i.id=57},,,,,,,,,,,,function(n,e,t){},function(n,e,t){var o=t(69);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},,,,,,,,,,,,,,,,function(n,e,t){t(21),n.exports=t(26)}],[[86,3,4]]]);