import{_ as se}from"./_plugin-vue_export-helper.c27b6911.js";import{o as k,c as _,a as v,F as N,s as ue,b as de,t as W,w as ee,d as ge,e as Z,f as ce,g as pe}from"./runtime-core.esm-bundler.8648bdd4.js";import{v as fe,a as he,w as ve}from"./runtime-dom.esm-bundler.e56d976e.js";/* empty css                       */var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J={},me={get exports(){return J},set exports(g){J=g}};(function(g){var u=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(c){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,f={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof A?new A(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,a){a=a||{};var s,n;switch(i.util.type(e)){case"Object":if(n=i.util.objId(e),a[n])return a[n];s={},a[n]=s;for(var l in e)e.hasOwnProperty(l)&&(s[l]=t(e[l],a));return s;case"Array":return n=i.util.objId(e),a[n]?a[n]:(s=[],a[n]=s,e.forEach(function(p,o){s[o]=t(p,a)}),s);default:return e}},getLanguage:function(t){for(;t;){var e=d.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(d,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var s="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(s))return!1;t=t.parentElement}return!!a}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(t,e){var a=i.util.clone(i.languages[t]);for(var s in e)a[s]=e[s];return a},insertBefore:function(t,e,a,s){s=s||i.languages;var n=s[t],l={};for(var p in n)if(n.hasOwnProperty(p)){if(p==e)for(var o in a)a.hasOwnProperty(o)&&(l[o]=a[o]);a.hasOwnProperty(p)||(l[p]=n[p])}var y=s[t];return s[t]=l,i.languages.DFS(i.languages,function(x,C){C===y&&x!=t&&(this[x]=l)}),l},DFS:function t(e,a,s,n){n=n||{};var l=i.util.objId;for(var p in e)if(e.hasOwnProperty(p)){a.call(e,p,e[p],s||p);var o=e[p],y=i.util.type(o);y==="Object"&&!n[l(o)]?(n[l(o)]=!0,t(o,a,null,n)):y==="Array"&&!n[l(o)]&&(n[l(o)]=!0,t(o,a,p,n))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var s={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),i.hooks.run("before-all-elements-highlight",s);for(var n=0,l;l=s.elements[n++];)i.highlightElement(l,e===!0,s.callback)},highlightElement:function(t,e,a){var s=i.util.getLanguage(t),n=i.languages[s];i.util.setLanguage(t,s);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(l,s);var p=t.textContent,o={element:t,language:s,grammar:n,code:p};function y(C){o.highlightedCode=C,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),a&&a.call(o.element)}if(i.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){i.hooks.run("complete",o),a&&a.call(o.element);return}if(i.hooks.run("before-highlight",o),!o.grammar){y(i.util.encode(o.code));return}if(e&&c.Worker){var x=new Worker(i.filename);x.onmessage=function(C){y(C.data)},x.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else y(i.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,a){var s={code:t,grammar:e,language:a};if(i.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=i.tokenize(s.code,s.grammar),i.hooks.run("after-tokenize",s),A.stringify(i.util.encode(s.tokens),s.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var s in a)e[s]=a[s];delete e.rest}var n=new H;return L(n,n.head,t),M(t,n,e,n.head,0),D(n)},hooks:{all:{},add:function(t,e){var a=i.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=i.hooks.all[t];if(!(!a||!a.length))for(var s=0,n;n=a[s++];)n(e)}},Token:A};c.Prism=i;function A(t,e,a,s){this.type=t,this.content=e,this.alias=a,this.length=(s||"").length|0}A.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var s="";return e.forEach(function(y){s+=t(y,a)}),s}var n={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(n.classes,l):n.classes.push(l)),i.hooks.run("wrap",n);var p="";for(var o in n.attributes)p+=" "+o+'="'+(n.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+p+">"+n.content+"</"+n.tag+">"};function $(t,e,a,s){t.lastIndex=e;var n=t.exec(a);if(n&&s&&n[1]){var l=n[1].length;n.index+=l,n[0]=n[0].slice(l)}return n}function M(t,e,a,s,n,l){for(var p in a)if(!(!a.hasOwnProperty(p)||!a[p])){var o=a[p];o=Array.isArray(o)?o:[o];for(var y=0;y<o.length;++y){if(l&&l.cause==p+","+y)return;var x=o[y],C=x.inside,X=!!x.lookbehind,Y=!!x.greedy,re=x.alias;if(Y&&!x.pattern.global){var ie=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,ie+"g")}for(var K=x.pattern||x,F=s.next,E=n;F!==e.tail&&!(l&&E>=l.reach);E+=F.value.length,F=F.next){var P=F.value;if(e.length>t.length)return;if(!(P instanceof A)){var V=1,S;if(Y){if(S=$(K,E,t,X),!S||S.index>=t.length)break;var O=S.index,oe=S.index+S[0].length,T=E;for(T+=F.value.length;O>=T;)F=F.next,T+=F.value.length;if(T-=F.value.length,E=T,F.value instanceof A)continue;for(var I=F;I!==e.tail&&(T<oe||typeof I.value=="string");I=I.next)V++,T+=I.value.length;V--,P=t.slice(E,T),S.index-=E}else if(S=$(K,0,P,X),!S)continue;var O=S.index,z=S[0],U=P.slice(0,O),Q=P.slice(O+z.length),q=E+P.length;l&&q>l.reach&&(l.reach=q);var R=F.prev;U&&(R=L(e,R,U),E+=U.length),B(e,R,V);var le=new A(p,C?i.tokenize(z,C):z,re,z);if(F=L(e,R,le),Q&&L(e,F,Q),V>1){var G={cause:p+","+y,reach:q};M(t,e,a,F.prev,E,G),l&&G.reach>l.reach&&(l.reach=G.reach)}}}}}}function H(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function L(t,e,a){var s=e.next,n={value:a,prev:e,next:s};return e.next=n,s.prev=n,t.length++,n}function B(t,e,a){for(var s=e.next,n=0;n<a&&s!==t.tail;n++)s=s.next;e.next=s,s.prev=e,t.length-=n}function D(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,s=e.code,n=e.immediateClose;c.postMessage(i.highlight(s,i.languages[a],a)),n&&c.close()},!1)),i;var b=i.util.currentScript();b&&(i.filename=b.src,b.hasAttribute("data-manual")&&(i.manual=!0));function m(){i.manual||i.highlightAll()}if(!i.manual){var w=document.readyState;w==="loading"||w==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return i}(u);g.exports&&(g.exports=r),typeof te<"u"&&(te.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(d,h){var f={};f["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[h]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};i["language-"+h]={pattern:/[\s\S]+/,inside:r.languages[h]};var A={};A[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:i},r.languages.insertBefore("markup","cdata",A)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(c,d){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:r.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(c){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var h=c.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",d=function(b,m){return"✖ Error "+b+" while fetching file: "+m},h="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",A="loading",$="loaded",M="failed",H="pre[data-src]:not(["+i+'="'+$+'"]):not(['+i+'="'+A+'"])';function L(b,m,w){var t=new XMLHttpRequest;t.open("GET",b,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?m(t.responseText):t.status>=400?w(d(t.status,t.statusText)):w(h))},t.send(null)}function B(b){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(m){var w=Number(m[1]),t=m[2],e=m[3];return t?e?[w,Number(e)]:[w,void 0]:[w,w]}}r.hooks.add("before-highlightall",function(b){b.selector+=", "+H}),r.hooks.add("before-sanity-check",function(b){var m=b.element;if(m.matches(H)){b.code="",m.setAttribute(i,A);var w=m.appendChild(document.createElement("CODE"));w.textContent=c;var t=m.getAttribute("data-src"),e=b.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=f[a]||a}r.util.setLanguage(w,e),r.util.setLanguage(m,e);var s=r.plugins.autoloader;s&&s.loadLanguages(e),L(t,function(n){m.setAttribute(i,$);var l=B(m.getAttribute("data-range"));if(l){var p=n.split(/\r\n?|\n/g),o=l[0],y=l[1]==null?p.length:l[1];o<0&&(o+=p.length),o=Math.max(0,Math.min(o-1,p.length)),y<0&&(y+=p.length),y=Math.max(0,Math.min(y,p.length)),n=p.slice(o,y).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(o+1))}w.textContent=n,r.highlightElement(w)},function(n){m.setAttribute(i,M),w.textContent=n})}}),r.plugins.fileHighlight={highlight:function(m){for(var w=(m||document).querySelectorAll(H),t=0,e;e=w[t++];)r.highlightElement(e)}};var D=!1;r.fileHighlight=function(){D||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),D=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(me);const ae=J,ye={data(){let g="(() => {console.log('Bookmarklet coming soon!')}()",u=ae.highlight(g,ae.languages.javascript,"javascript");return console.log(u),{content:u}}},be=v("link",{rel:"stylesheet",href:"/Passbirb/prism.css"},null,-1),we={style:{"background-color":"var(--md-surface-0)",padding:"2rem","border-radius":"1rem"}},xe=["innerHTML"];function Fe(g,u,r,c,d,h){return k(),_(N,null,[be,v("div",we,[v("pre",{innerHTML:d.content},null,8,xe)])],64)}const Ae=se(ye,[["render",Fe]]),ne="0.4.1";let j;window.Worker&&(j=new Worker("background.js"));function ke(g){localStorage.setItem("state",JSON.stringify({...g,version:ne}))}function _e(){let g=JSON.parse(localStorage.getItem("state"));return g?.version==ne?g:(localStorage.clear(),null)}function Se(g){let u=document.getElementById("messageToast");u.innerHTML=g,u.classList.remove("fade-in-out"),window.requestAnimationFrame(()=>{u.classList.add("fade-in-out")})}const Ee={created(){document.getElementById("main").onscroll=()=>{this.hasViewScrolled=!0}},data(){return{masterPassword:"",passwordVisible:!1,saltHistoryVisible:!1,saltHistory:[],salt:"",hashedPassword:"",darkMode:window.matchMedia("(prefers-color-scheme: dark)").matches,Codeblock:ue(Ae),hasViewScrolled:!1,passwordIndicatorVisible:!1,..._e()}},methods:{generate(){if(this.masterPassword.length==0||this.salt.length==0){this.hashedPassword="";return}j?(j.onmessage??=g=>{this.hashedPassword=g.data},j.postMessage([this.masterPassword,this.salt])):window.generatePassword(this.masterPassword,this.salt).then(g=>this.hashedPassword=g)},saveSalt(){this.saltHistory.unshift(this.salt),this.saltHistory=this.saltHistory.filter((g,u)=>this.saltHistory.indexOf(g)==u&&g!=""),this.saveAppState()},copyText(g){navigator.clipboard.writeText(g),Se("Copied to clipboard!")},getAppState(){return{saltHistory:this.saltHistory}},onDropdownUnfocused(g){this.saveSalt(),!(g?.relatedTarget&&Array.from(document.getElementsByClassName("dropdown")).some(u=>u.contains(g.relatedTarget)))&&(this.saltHistoryVisible=!1)},saveAppState(g=void 0){return ke(g||this.getAppState())}},computed:{passwordEntropy(){return window.zxcvbn(this.masterPassword).guesses_log10},passwordEntropyAsTime(){let g=this.passwordEntropy;const u=Object.entries({milliseconds:1,seconds:4,minutes:1.778,hours:1.778,days:1.38,months:1.483,years:1.079,"thousand years":3,"million years":3,"billion years":3,"trillion years":3,"quadrillion years":3,"quintillion years":3});let r=null;for(let c=0;c<u.length&&!(g<u[c][1]);c++)g-=u[c][1],r=u[c][0];return r?g>3?`${Math.floor(10**((g+18)%1))}e${Math.floor(g+18)} years`:(10**g).toFixed(1)+" "+r:"instantly"},historySearchResults(){return this.saltHistory.map((g,u)=>({value:g,idx:u})).filter(g=>g.value.toLowerCase().includes(this.salt.toLowerCase())).sort((g,u)=>g.value.toLowerCase().indexOf(this.salt.toLowerCase())>u.value.toLowerCase().indexOf(this.salt.toLowerCase())?1:g.value.toLowerCase().indexOf(this.salt.toLowerCase())<u.value.toLowerCase().indexOf(this.salt.toLowerCase())?-1:0)}}},Ce=v("div",{id:"messageToast"},null,-1),Te={class:"view main"},Le=v("h1",null,"Passbirb",-1),Pe={class:"textbox surface"},$e=["type"],He={key:0,class:"material-symbols-outlined svg"},Ie={key:1,class:"material-symbols-outlined svg"},Me={class:"dropdown surface"},De={class:"textbox"},Ve={key:0,class:"material-symbols-outlined svg"},Oe={key:1,class:"material-symbols-outlined svg"},ze={key:0,class:"dropdown-content"},Re={class:"dropdown-list"},je=["onClick"],Be=["onClick"],Ue=v("span",{class:"material-symbols-outlined svg"},"close",-1),qe=[Ue],Ge={key:1,style:{padding:"0.5rem"}},We={key:2,style:{padding:"0.5rem"}},Ze={key:0,class:"result"},Ne=v("span",{class:"material-symbols-outlined svg"},"content_copy",-1),Je=[Ne],Xe={key:1,class:"expand material-symbols-outlined svg"},Ye={class:"view"},Ke={class:"about"},Qe={class:"about-flex"},et=v("div",null,[v("h1",null,"About"),v("div",{style:{"text-align":"center"}}," This is a utility for managing website passwords without storing them in a file or database. Passbirb generates unique cryptographically-secure passwords on the fly without saving any information. ")],-1);function tt(g,u,r,c,d,h){return k(),_(N,null,[Ce,v("div",Te,[Le,v("div",{style:de({opacity:d.passwordIndicatorVisible?"100%":"0%"}),class:"indicator"},W(h.passwordEntropyAsTime),5),v("div",Pe,[ee(v("input",{onFocus:u[0]||(u[0]=f=>d.passwordIndicatorVisible=!0),onFocusout:u[1]||(u[1]=f=>d.passwordIndicatorVisible=!1),type:d.passwordVisible?"text":"password",onInput:u[2]||(u[2]=(...f)=>h.generate&&h.generate(...f)),"onUpdate:modelValue":u[3]||(u[3]=f=>d.masterPassword=f),placeholder:"Enter the master password"},null,40,$e),[[fe,d.masterPassword]]),v("button",{onClick:u[4]||(u[4]=f=>d.passwordVisible=!d.passwordVisible)},[d.passwordVisible?(k(),_("span",Ie,"visibility_off")):(k(),_("span",He,"visibility"))])]),v("div",Me,[v("div",De,[ee(v("input",{type:"text",onKeyup:u[5]||(u[5]=ve(f=>{h.saveSalt(),d.saltHistoryVisible=!1},["enter"])),onInput:u[6]||(u[6]=(...f)=>h.generate&&h.generate(...f)),"onUpdate:modelValue":u[7]||(u[7]=f=>d.salt=f),onFocus:u[8]||(u[8]=f=>d.saltHistoryVisible=!0),onFocusout:u[9]||(u[9]=(...f)=>h.onDropdownUnfocused&&h.onDropdownUnfocused(...f)),placeholder:"Enter a key (website name)"},null,544),[[he,d.salt]]),v("button",{onClick:u[10]||(u[10]=f=>d.saltHistoryVisible=!d.saltHistoryVisible)},[d.saltHistoryVisible?(k(),_("span",Oe,"arrow_drop_up")):(k(),_("span",Ve,"arrow_drop_down"))])]),d.saltHistoryVisible?(k(),_("div",ze,[h.historySearchResults.length>0?(k(!0),_(N,{key:0},ge(h.historySearchResults,f=>(k(),_("div",Re,[v("button",{onClick:i=>{d.salt=f.value,d.saltHistoryVisible=!1,h.generate(),h.saveSalt()}},W(f.value),9,je),v("button",{onClick:i=>{d.saltHistory.splice(f.idx,1),h.saveAppState()}},qe,8,Be)]))),256)):d.saltHistory.length>0?(k(),_("div",Ge," No results ")):(k(),_("div",We," No items to show in history "))])):Z("",!0)]),d.masterPassword.length>0&&d.salt.length>0?(k(),_("div",Ze,[v("div",null,W(d.hashedPassword),1),v("button",{onClick:u[11]||(u[11]=f=>{h.copyText(d.hashedPassword),h.saveSalt()})},Je)])):Z("",!0),d.hasViewScrolled?Z("",!0):(k(),_("span",Xe,"expand_more"))]),v("div",Ye,[v("div",Ke,[v("div",Qe,[et,(k(),ce(pe(d.Codeblock)))])])])],64)}const it=se(Ee,[["render",tt]]);export{it as default};
