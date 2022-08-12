import{_ as e,c as a,o as n,d as r}from"./app.a0f52c8e.js";const b='{"title":"\u4EC0\u4E48\u662F\u63A5\u53E3?","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F\u63A5\u53E3?","slug":"\u4EC0\u4E48\u662F\u63A5\u53E3"},{"level":2,"title":"\u63A5\u53E3\u6709\u4EC0\u4E48\u4F5C\u7528?","slug":"\u63A5\u53E3\u6709\u4EC0\u4E48\u4F5C\u7528"},{"level":3,"title":"\u63A5\u53E3\u7684\u5C5E\u6027","slug":"\u63A5\u53E3\u7684\u5C5E\u6027"}],"relativePath":"guide/FrontEnd/TypeScript/4.\u63A5\u53E3.md"}',t={},d=r(`<h2 id="\u4EC0\u4E48\u662F\u63A5\u53E3" tabindex="-1">\u4EC0\u4E48\u662F\u63A5\u53E3? <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u63A5\u53E3" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u7684\u8BF4\u63A5\u53E3\u5C31\u662F\u89C4\u5B9A\u4E00\u4E9B\u4E8B, \u5728\u540E\u53F0\u4E2D\u63A5\u53E3\u6307\u7684\u662F\u53CC\u65B9\u89C4\u5B9A\u7684api \u5728TS\u4E2D\u63A5\u53E3\u4E00\u822C\u6307\u53D8\u91CF\u62E5\u6709\u4EC0\u4E48\u4E1C\u897F\u3002</p><h2 id="\u63A5\u53E3\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1">\u63A5\u53E3\u6709\u4EC0\u4E48\u4F5C\u7528? <a class="header-anchor" href="#\u63A5\u53E3\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u4E3E\u4E2A\u4F8B\u5B50\u8BF4\u660E</p><div class="language-"><pre><code>interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: &quot;Size 10 Object&quot;};
printLabel(myObj);
</code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u6211\u4EEC\u4E0D\u96BE\u770B\u51FA, \u5728Ts\u4E2D\u63A5\u53E3\u53EF\u4EE5\u505A\u5C5E\u6027\u7C7B\u578B\u7684\u89C4\u5B9A</p><h3 id="\u63A5\u53E3\u7684\u5C5E\u6027" tabindex="-1">\u63A5\u53E3\u7684\u5C5E\u6027 <a class="header-anchor" href="#\u63A5\u53E3\u7684\u5C5E\u6027" aria-hidden="true">#</a></h3><h4 id="\u53EF\u9009\u5C5E\u6027" tabindex="-1">\u53EF\u9009\u5C5E\u6027 <a class="header-anchor" href="#\u53EF\u9009\u5C5E\u6027" aria-hidden="true">#</a></h4><div class="language-"><pre><code>// \u53EF\u9009\u5C5E\u6027\u7684\u540D\u5B57\u540E\u9762 + ?
interface config {
  color?: string;
  width?: number;
}
</code></pre></div><h4 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1">\u53EA\u8BFB\u5C5E\u6027 <a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a></h4><p>\u4E00\u4E9B\u5BF9\u8C61\u5C5E\u6027\u53EA\u80FD\u5728\u5BF9\u8C61\u521A\u521A\u521B\u5EFA\u7684\u65F6\u5019\u4FEE\u6539\u5176\u503C\u3002 \u4F60\u53EF\u4EE5\u5728\u5C5E\u6027\u540D\u524D\u7528 <code>readonly</code>\u6765\u6307\u5B9A\u53EA\u8BFB\u5C5E\u6027:</p><div class="language-"><pre><code>// \u53EA\u8BFB\u5C5E\u6027\u7684\u524D\u9762 + readonly
interface Point {
    readonly x: number;
    readonly y: number;
}
</code></pre></div><p>\u5728ts \u4E2D \u6211\u4EEC\u4F7F\u7528interface \u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3</p>`,13),l=[d];function i(c,o,s,h,p,_){return n(),a("div",null,l)}var f=e(t,[["render",i]]);export{b as __pageData,f as default};
