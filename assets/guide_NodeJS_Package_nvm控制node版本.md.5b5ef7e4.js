import{_ as n,c as e,o as a,d as t}from"./app.a0f52c8e.js";const p='{"title":"1. nvm\u662F\u4EC0\u4E48??","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. nvm\u662F\u4EC0\u4E48??","slug":"_1-nvm\u662F\u4EC0\u4E48"},{"level":2,"title":"2.nvm \u4E0B\u8F7D\u5B89\u88C5","slug":"_2-nvm-\u4E0B\u8F7D\u5B89\u88C5"},{"level":2,"title":"3.nvm\u7684\u57FA\u672C\u4F7F\u7528","slug":"_3-nvm\u7684\u57FA\u672C\u4F7F\u7528"}],"relativePath":"guide/NodeJS/Package/nvm\u63A7\u5236node\u7248\u672C.md"}',s={},o=t(`<h2 id="_1-nvm\u662F\u4EC0\u4E48" tabindex="-1">1. nvm\u662F\u4EC0\u4E48?? <a class="header-anchor" href="#_1-nvm\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>nvm -- node.js version management , \u7B80\u5355\u7684\u8BF4\u5C31\u662Fnode.js\u7248\u672C\u7BA1\u7406\u5DE5\u5177\u3002\u901A\u8FC7\u5B83\u53EF\u4EE5\u5B89\u88C5\u5207\u6362\u4E0D\u540C\u7684node.js \u4E0D\u540C\u7684\u7248\u672C\u3002</p><h2 id="_2-nvm-\u4E0B\u8F7D\u5B89\u88C5" tabindex="-1">2.nvm \u4E0B\u8F7D\u5B89\u88C5 <a class="header-anchor" href="#_2-nvm-\u4E0B\u8F7D\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u4E0B\u8F7D</li></ol><p>github\u641C\u7D22nvm windows, \u76EE\u524D\u6700\u65B0\u7248\u672C\u662F1.7.1</p><p>\u65B0\u624B \u5EFA\u8BAE\u4E0B\u8F7D nvm-setup.zip \u89E3\u538B\u4E4B\u540E\u662F\u4E00\u4E2Aexe \u6587\u4EF6</p><p>\u9AD8\u624B \u968F\u4FBF\u4E0B\u8F7D , \u4E0D\u540C\u7684\u662F nvm-noisntall \u662F\u7EFF\u8272\u7248\u672C\u4F46\u662F\u9700\u8981\u81EA\u5DF1\u914D\u7F6E ,nvm-setup \u76F4\u63A5\u5B89\u88C5\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u5B89\u88C5\u8FC7\u7A0B \u4E0B\u4E00\u6B65 -&gt; \u9009\u62E9\u5B89\u88C5\u8DEF\u5F84 -&gt; \u9009\u62E9\u5DF2\u7ECF\u5B58\u5728\u7684node.js\u7684\u5B89\u88C5\u8DEF\u5F84 -&gt; \u63A5\u4E0B\u6765\u5C31\u662F\u4E0B\u4E00\u6B65\u4E0B\u4E00\u6B65\u5373\u53EF\u3002</p><p>\u6253\u5F00 cmd \u8F93\u5165nvm \u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F</p><h2 id="_3-nvm\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1">3.nvm\u7684\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#_3-nvm\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><h4 id="_1-\u5B89\u88C5-\u7BA1\u7406node-js" tabindex="-1">1.\u5B89\u88C5/\u7BA1\u7406node.js <a class="header-anchor" href="#_1-\u5B89\u88C5-\u7BA1\u7406node-js" aria-hidden="true">#</a></h4><div class="language-"><pre><code>// 1.\u67E5\u770B\u672C\u5730\u5B89\u88C5\u7684\u6240\u54DF\u5076node.js\u7248\u672C

nvm list [available] (\u53EF\u9009\u53C2\u6570)

nvm ls 

// 2. \u5B89\u88C5\u67D0\u4E00\u4E2A\u7248\u672C\u7684node.js

// arch \u53EF\u9009\u5B89\u88C5 x86 \u8FD8\u662F x64  version \u5C31\u662F\u7248\u672C\u53F7

nvm install &lt;version&gt; [arch] 

// 3.\u4F7F\u7528\u7279\u5B9A\u7684\u7248\u672C 

nvm use &lt;version&gt; [arch]

// 4.\u5378\u8F7D

nvm uninstall &lt;version&gt;

// 5. \u663E\u793Anode.js x86 \u8FD8\u662F x64

nvm arch

// 6. node.js \u7248\u672C\u7BA1\u7406\u5F00\u542F\u548C\u5173\u95ED

nvm on    nvm off

// 7.\u8BBE\u7F6Enode.js \u955C\u50CF  \u9ED8\u8BA4\u662F https://nodejs.org/dist/

nvm node_mirror [url]  

//  8.\u8BBE\u7F6E npm \u955C\u50CF \u4E0D\u5199\u662F\u9ED8\u8BA4\u7684

nvm npm_mirror [url]

// 9.\u8BBE\u7F6E\u5B58\u50A8\u4E0D\u540C\u7248\u672C\u7684node.js \u7684\u76EE\u5F55\u672A\u8BBE\u7F6E \u9ED8\u8BA4\u662F\u4F7F\u7528\u5F53\u524D\u76EE\u5F55

nvm root [path]

// \u663E\u793A nvm \u7248\u672C 

nvm --version
</code></pre></div>`,12),r=[o];function d(i,v,m,l,_,h){return a(),e("div",null,r)}var u=n(s,[["render",d]]);export{p as __pageData,u as default};
