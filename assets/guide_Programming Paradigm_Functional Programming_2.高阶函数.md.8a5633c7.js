import{_ as n,c as s,o as a,d as p}from"./app.a0f52c8e.js";const d='{"title":"\u9AD8\u9636\u51FD\u6570 --Higher-order function","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u89C1\u7684\u9AD8\u9636\u51FD\u6570","slug":"\u5E38\u89C1\u7684\u9AD8\u9636\u51FD\u6570"}],"relativePath":"guide/Programming Paradigm/Functional Programming/2.\u9AD8\u9636\u51FD\u6570.md"}',t={},o=p(`<h1 id="\u9AD8\u9636\u51FD\u6570-higher-order-function" tabindex="-1">\u9AD8\u9636\u51FD\u6570 --Higher-order function <a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570-higher-order-function" aria-hidden="true">#</a></h1><ul><li>\u53EF\u4EE5\u628A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u51FD\u6570</li><li>\u628A\u51FD\u6570\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u7ED3\u679C</li></ul><blockquote><p>\u4E2A\u4EBA\u7406\u89E3\uFF1A</p><p>\u9AD8\u9636\u51FD\u6570\u6570\u5B66\u6982\u5FF5\u4E2D\u7684\u9AD8\u9636\u51FD\u6570\uFF0C</p></blockquote><div class="language-js"><pre><code><span class="token comment">// \u9AD8\u9636\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span>

<span class="token function">forEach</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA1 3 5 7 9</span>
<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA [ 8, 10 ]</span>
</code></pre></div><p>\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">makeFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;Hello Function&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// const fn = makeFn()</span>
<span class="token comment">// fn()</span>

<span class="token comment">// makeFn()()</span>

<span class="token comment">// \u8F93\u51FA\u90FD\u662F Hello Function</span>


<span class="token keyword">function</span> <span class="token function">once</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

<span class="token comment">// \u53EA\u8F93\u51FA\u4E00\u4E2A \u652F\u4ED8\u4E86\uFF1A 5 \u5143</span>
</code></pre></div><p>\u4F7F\u7528\u9AD8\u9636\u51FD\u6570\u7684\u610F\u4E49</p><ul><li>\u62BD\u8C61\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5C4F\u853D\u7EC6\u8282\uFF0C \u53EA\u5173\u6CE8\u6211\u4EEC\u7684\u76EE\u6807</li><li>\u9AD8\u9636\u51FD\u6570\u662F\u7528\u6765\u62BD\u8C61\u901A\u7528\u95EE\u9898\u7684</li></ul><p>\u4F8B\u5982 \u4F7F\u7528forEach Filter \u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5FFD\u7565\u5FAA\u73AF\u7684\u7EC6\u8282</p><h2 id="\u5E38\u89C1\u7684\u9AD8\u9636\u51FD\u6570" tabindex="-1">\u5E38\u89C1\u7684\u9AD8\u9636\u51FD\u6570 <a class="header-anchor" href="#\u5E38\u89C1\u7684\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">makeFn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&#39;Hello Function&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// const fn = makeFn()</span>
<span class="token comment">// fn()</span>

<span class="token comment">// makeFn()()</span>

<span class="token comment">// \u8F93\u51FA\u90FD\u662F Hello Function</span>


<span class="token keyword">function</span> <span class="token function">once</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

<span class="token comment">// \u53EA\u8F93\u51FA\u4E00\u4E2A \u652F\u4ED8\u4E86\uFF1A 5 \u5143</span>

<span class="token comment">// Array.map</span>

<span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

arr <span class="token operator">=</span> <span class="token function">map</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token operator">*</span>v<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">// every </span>
<span class="token keyword">const</span> <span class="token function-variable function">every</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">every</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\uFF1A true</span>

<span class="token keyword">const</span> <span class="token function-variable function">some</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token function">some</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA\uFF1A false</span>
</code></pre></div>`,11),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var y=n(t,[["render",e]]);export{d as __pageData,y as default};
