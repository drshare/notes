import{_ as n,c as a,o as e,d as s}from"./app.a0f52c8e.js";const k='{"title":"Cargo","description":"","frontmatter":{},"headers":[{"level":2,"title":"cargo \u662F\u4EC0\u4E48","slug":"cargo-\u662F\u4EC0\u4E48"},{"level":2,"title":"cargo \u529F\u80FD","slug":"cargo-\u529F\u80FD"},{"level":2,"title":"cargo \u9879\u76EE\u76EE\u5F55\u7ED3\u6784","slug":"cargo-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784"}],"relativePath":"guide/BackEnd/Rust/2.Cargo.md"}',o={},t=s(`<h1 id="cargo" tabindex="-1">Cargo <a class="header-anchor" href="#cargo" aria-hidden="true">#</a></h1><p><a href="https://doc.rust-lang.org/cargo/" target="_blank" rel="noopener noreferrer">Cargo \u6587\u6863</a></p><h2 id="cargo-\u662F\u4EC0\u4E48" tabindex="-1">cargo \u662F\u4EC0\u4E48 <a class="header-anchor" href="#cargo-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>cargo \u662F rust \u7684\u6784\u5EFA\u7CFB\u7EDF \u548C \u5305\u7BA1\u7406\u5668</p><h2 id="cargo-\u529F\u80FD" tabindex="-1">cargo \u529F\u80FD <a class="header-anchor" href="#cargo-\u529F\u80FD" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># 1. \u521B\u5EFA\u9879\u76EE</span>
cargo new <span class="token operator">&lt;</span>projectName<span class="token operator">&gt;</span>

<span class="token comment"># 2. \u6784\u5EFA\u9879\u76EE</span>
cargo build

<span class="token comment"># 3. \u76F4\u63A5\u8FD0\u884C\u9879\u76EE</span>
cargo run

<span class="token comment"># 4. \u6784\u5EFA\u9879\u76EE\u6587\u6863</span>
cargo doc

<span class="token comment"># 5. \u53D1\u5E03</span>
cargo publish

<span class="token comment"># 6. \u5FEB\u901F\u68C0\u67E5\u4EE3\u7801\u786E\u4FDD\u5176\u53EF\u4EE5\u7F16\u8BD1</span>
cargo check
</code></pre></div><h2 id="cargo-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1">cargo \u9879\u76EE\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#cargo-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><pre><code>demo // \u9879\u76EE\u540D\u79F0
    \u2502  .gitignore
    \u2502  Cargo.lock // \u8BB0\u5F55\u9879\u76EE\u4F9D\u8D56\u7684\u5B9E\u9645\u7248\u672C
    \u2502  Cargo.toml // \u9879\u76EE\u914D\u7F6E\u6587\u4EF6 \u7C7B\u4F3C\u4E8E package.json
    \u2502
    \u251C\u2500src
    \u2502      main.rs // \u9879\u76EE\u5165\u53E3\u6587\u4EF6
    \u2502
    \u2514\u2500target
        \u2502  .rustc_info.json
        \u2502  CACHEDIR.TAG
        \u2502
        \u2514\u2500debug
            \u2502  .cargo-lock
            \u2502  demo.d
            \u2502  demo.exe
            \u2502  demo.pdb
            \u2502
            \u251C\u2500.fingerprint
            \u2502  \u2514\u2500demo-bdb0610617eb265e
            \u2502          bin-demo
            \u2502          bin-demo.json
            \u2502          dep-bin-demo
            \u2502          invoked.timestamp
            \u2502
            \u251C\u2500build
            \u251C\u2500deps
            \u2502      demo.d
            \u2502      demo.exe
            \u2502      demo.pdb
            \u2502
            \u251C\u2500examples
            \u2514\u2500incremental
                \u2514\u2500demo-3coj41ezsqnzl
                    \u2502  s-gbvs2cgnt2-so9v7c.lock
                    \u2502
                    \u2514\u2500s-gbvs2cgnt2-so9v7c-cb4w5o7qrg87
                            24h25i8tgn73nljy.o
                            3553qv1184te52in.o
                            4vaiepfnjixj9jqd.o
                            51qvss68xmm9jov9.o
                            52svu1nmh1jo3yuo.o
                            813adt1s9e87nwe.o
                            dep-graph.bin
                            j9v8s145jperud0.o
                            query-cache.bin
                            work-products.bin
                            y9vdsdmouviowy3.o
</code></pre></div><div class="language-toml"><pre><code><span class="token comment"># Cargo.toml</span>
<span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;hello_cargo&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.0&quot;</span>
<span class="token key property">edition</span> <span class="token punctuation">=</span> <span class="token string">&quot;2021&quot;</span> <span class="token comment"># rust \u7248\u672C\u63A7\u5236</span>

<span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>
</code></pre></div>`,9),c=[t];function r(p,d,l,i,g,u){return e(),a("div",null,c)}var h=n(o,[["render",r]]);export{k as __pageData,h as default};
