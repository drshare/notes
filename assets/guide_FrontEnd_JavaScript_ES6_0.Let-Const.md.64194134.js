import{_ as n,c as s,o as a,d as t}from"./app.a0f52c8e.js";const f='{"title":"Let \u3001Const \u3001Var","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF\u63D0\u5347(var \u7279\u6709\u7684)","slug":"\u53D8\u91CF\u63D0\u5347-var-\u7279\u6709\u7684"},{"level":2,"title":"\u6682\u65F6\u6027\u6B7B\u533A","slug":"\u6682\u65F6\u6027\u6B7B\u533A"}],"relativePath":"guide/FrontEnd/JavaScript/ES6/0.Let-Const.md"}',p={},o=t(`<h1 id="let-\u3001const-\u3001var" tabindex="-1">Let \u3001Const \u3001Var <a class="header-anchor" href="#let-\u3001const-\u3001var" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;"></th><th>let</th><th>const</th><th>var</th></tr></thead><tbody><tr><td style="text-align:left;">\u53D8\u91CF\u63D0\u5347</td><td>\u274C</td><td>\u274C</td><td>\u2705</td></tr><tr><td style="text-align:left;">\u6682\u65F6\u6027\u6B7B\u533A</td><td>\u2705</td><td>\u2705</td><td>\u274C</td></tr><tr><td style="text-align:left;">\u91CD\u590D\u58F0\u660E</td><td>\u2705</td><td></td><td>\u274C</td></tr></tbody></table><h2 id="\u53D8\u91CF\u63D0\u5347-var-\u7279\u6709\u7684" tabindex="-1">\u53D8\u91CF\u63D0\u5347(var \u7279\u6709\u7684) <a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347-var-\u7279\u6709\u7684" aria-hidden="true">#</a></h2><blockquote><p>\u73B0\u8C61\uFF1A \u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u4F7F\u7528\uFF0C\u503C\u4E3A<code>undefined</code>\u3002</p></blockquote><div class="language-js"><pre><code><span class="token comment">// var </span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// undefined \u5C0F\u7EA2 \u5C0F\u767D</span>

<span class="token comment">// let </span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Identifier &#39;name&#39; has already been declared</span>

<span class="token comment">// const</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Identifier &#39;name&#39; has already been declared</span>
</code></pre></div><h2 id="\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1">\u6682\u65F6\u6027\u6B7B\u533A <a class="header-anchor" href="#\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a></h2><blockquote><p>let const \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u7ED1\u5B9A\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5728\u5F53\u524D\u5757\u7EA7\u4F5C\u7528\u57DF\u5185 let/const \u58F0\u660E\u4E4B\u524D\u90FD\u662F\u6B7B\u533A\u3002</p><p>typeof \u7684\u7ED3\u679C\u662F ReferenceError</p><p>typeof \u6CA1\u6709\u58F0\u660E\u7684\u53D8\u91CF\u7ED3\u679C\u662F undefined</p></blockquote><div class="language-javascript"><pre><code><span class="token comment">// var</span>
<span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5C0F\u767D</span>

<span class="token comment">// let</span>
<span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: Cannot access &#39;name&#39; before initialization</span>

<span class="token comment">// const</span>
<span class="token keyword">var</span> name  <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: Cannot access &#39;name&#39; before initialization</span>
</code></pre></div>`,8),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
