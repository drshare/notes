import{_ as n,c as a,o as s,d as t}from"./app.a0f52c8e.js";const _='{"title":"\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95ED\u5305\u7684\u672C\u8D28","slug":"\u95ED\u5305\u7684\u672C\u8D28"},{"level":2,"title":"\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F","slug":"\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F"}],"relativePath":"guide/Programming Paradigm/Functional Programming/3.\u95ED\u5305.md"}',p={},o=t(`<h1 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h1><ul><li>\u95ED\u5305\uFF08Closure\uFF09\uFF1A\u51FD\u6570\u548C\u5176\u5468\u56F4\u7684\u72B6\u6001\uFF08\u6B64\u6CD5\u73AF\u5883\uFF09\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\u5F62\u6210\u95ED\u5305\u3002</li><li>\u53EF\u4EE5\u5728\u53E6\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E2D\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u7684\u5185\u90E8\u51FD\u6570\u5E76\u8BBF\u95EE\u8BE5\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E2D\u7684\u6210\u5458\u3002</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">once</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> pay <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u652F\u4ED8\u4E86\uFF1A </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>money<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u5143</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">pay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token function">pay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token function">pay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token function">pay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment">// \u6B63\u5E38\u60C5\u51B5\u4E0B\u8F7D \u7B2C\u4E00\u6B21\u8C03\u7528pay \u7ED3\u675F\u4EE5\u540E\uFF0Cflag \u53D8\u91CF\u4F1A\u88AB\u56DE\u6536\u3002</span>
<span class="token comment">// \u4F46\u662F\u7531\u4E8Epay \u5F15\u7528\u4E86one \u5F53\u4E2Dflag \u53D8\u91CF\uFF0C\u6240\u4EE5 flag\u6CA1\u6709\u88AB\u56DE\u6536\u3002</span>
</code></pre></div><h2 id="\u95ED\u5305\u7684\u672C\u8D28" tabindex="-1">\u95ED\u5305\u7684\u672C\u8D28 <a class="header-anchor" href="#\u95ED\u5305\u7684\u672C\u8D28" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u5728\u6267\u884C\u7684\u65F6\u5019\u4F1A\u88AB\u653E\u5230\u6267\u884C\u6808\u4E0A\u5F53\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u4F1A\u4ECE\u6267\u884C\u6808\u4E0A\u79FB\u9664\uFF0C \u4F46\u662F\u5806\u4E0A\u4F5C\u7528\u57DF\u6210\u5458\u5E94\u4E3A\u88AB\u5916\u90E8\u5F15\u7528\u4E0D\u80FD\u91CA\u653E\u3002\u56E0\u6B64\u5185\u90E8\u51FD\u6570\u4F9D\u7136\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u7684\u6210\u5458\u3002</p><h2 id="\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1">\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2>`,6),e=[o];function c(l,u,i,k,r,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{_ as __pageData,m as default};
