import{_ as e,c as n,o as t,d as o}from"./app.a0f52c8e.js";const m='{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[],"relativePath":"guide/FrontEnd/Nuxt/\u9879\u76EE\u642D\u5EFA\u8FC7\u7A0B.md"}',a={},i=o(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><div class="language-sh"><pre><code># \u4E24\u79CD\u65B9\u5F0F
# 1.nuxt \u811A\u624B\u67B6\u5DE5\u5177\uFF08create-nuxt-app\uFF09\u5B89\u88C5 
npx create-nuxt-app &lt;\u9879\u76EE\u540D\u79F0&gt;
yarn create nuxt-app &lt;\u9879\u76EE\u540D\u79F0&gt;
yarn create nuxt-app . (./)
# 2.vue \u811A\u624B\u67B6\u5DE5\u5177\u5B89\u88C5

</code></pre></div><p>\u5B89\u88C5\u8FC7\u7A0B</p><ol><li><p>Project name</p></li><li><p>Programming language\uFF1A\uFF08js ts\uFF09</p></li><li><p>Package manager: (Yarn Npm)</p></li><li><p>UI framework:</p></li><li><p>Nuxt.js modules:</p><div class="language-"><pre><code>Axios
PWA (Progressive Web App) --Project/PWA.md
Content @nustjs/content
@nustjs/content \u4E3B\u8981\u662F\u5C06content \u4E0B\u9762 Markdown\uFF0CJSON\uFF0CYAML\uFF0CCSV \u6587\u6863\u751F\u6210 MongoDB \u5F62\u5F0F\u7684API\uFF0C \u5185\u5BB9\u8D44\u6599\u5E93\u3002
</code></pre></div></li><li><p>Linting tools:</p><div class="language-js"><pre><code>ESlint
<span class="token comment">// ESLint \u662F\u5728 ECMAScript/JavaScript \u4EE3\u7801\u4E2D\u8BC6\u522B\u548C\u62A5\u544A\u6A21\u5F0F\u5339\u914D\u7684\u5DE5\u5177\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u4FDD\u8BC1\u4EE3\u7801\u7684\u4E00\u81F4\u6027\u548C\u907F\u514D\u9519\u8BEF\u3002</span>
Stylelint
<span class="token comment">// stylelint\u662F\u73B0\u5728\u6700\u5F3A\u5927\u7684css\u4EE3\u7801\u5BA1\u67E5\u5DE5\u5177\uFF0C\u7531PostCSS\u63D0\u4F9B\u6280\u672F\u652F\u6301\u3002</span>
Prettier
<span class="token comment">// Prettier\u662F\u6700\u8FD1\u5F88\u706B\u7684\u4E00\u4E2A\u4EE3\u7801\u7F8E\u5316\u5DE5\u5177 \u4EE3\u7801\u683C\u5F0F\u5316</span>
List staged files
<span class="token comment">// lint-staged \u662F\u4E00\u4E2A\u5728git\u6682\u5B58\u6587\u4EF6\u4E0A\u8FD0\u884Clinters\u7684\u5DE5\u5177</span>
Commitlint
<span class="token comment">// \u63D0\u4EA4\u4FE1\u606F\u89C4\u8303</span>

</code></pre></div></li><li><p>Testing fremework \u81EA\u52A8\u5316\u6D4B\u8BD5</p></li><li><p>Rendering mode:</p><div class="language-"><pre><code>&gt; Universal (SSR / SSG)
  SPA (Single Page App)
</code></pre></div></li><li><p>Deployment target:</p><div class="language-"><pre><code>&gt; Server (Node.js hosting)
  Static (Static/JA?Stack hosting)
</code></pre></div></li><li><p>Development tool</p><div class="language-"><pre><code>&gt; jsconfig.json (Recommended for VS Code if you&#39;re not using typescript)
  Semantic Pull Requests
  Dependabot(For auto-updating dependencies, GitHub only)

</code></pre></div></li><li><p>Continuous integration:</p><div class="language-"><pre><code>&gt; None
  GitHub Actions (GitHub only)
</code></pre></div></li><li><p>Version control system: Git</p></li></ol><p>\u540E\u7EED\u5B89\u88C5</p><div class="language-"><pre><code>less less-loader
eslint-config-airbnb-base // eslint
cross-env
@nuxtjs/style-resources // \u52A0\u8F7D\u9759\u6001\u8D44\u6E90
</code></pre></div><p>jsoncnfig.json</p><blockquote><p>\u901A\u8FC7jsconfig.json\u6587\u4EF6\u5B9A\u4E49\u4E00\u4E2AJavaScript\u9879\u76EE\u3002\u76EE\u5F55\u4E2D\u662F\u5426\u5B58\u5728\u6B64\u7C7B\u6587\u4EF6\u8868\u793A\u8BE5\u76EE\u5F55\u662FJavaScript\u9879\u76EE\u7684\u6839\u76EE\u5F55\u3002\u6587\u4EF6\u672C\u8EAB\u53EF\u4EE5\u9009\u62E9\u5217\u51FA\u5C5E\u4E8E\u9879\u76EE\u7684\u6587\u4EF6\uFF0C\u8981\u4ECE\u9879\u76EE\u4E2D\u6392\u9664\u7684\u6587\u4EF6\u4EE5\u53CA\u7F16\u8BD1\u5668\u9009\u9879\u3002</p></blockquote><p>.vscode -&gt; settings.json</p><div class="language-"><pre><code>{
    // \u4FDD\u5B58\u65F6eslint\u81EA\u52A8\u4FEE\u590D\u9519\u8BEF
    &quot;eslint.autoFixOnSave&quot;: true,
    &quot;editor.formatOnSave&quot;: true,
    &quot;eslint.validate&quot;: [
        &#39;javascript&#39;,
        &#39;javascriptreact&#39;,
        {
            &quot;language&quot;: &#39;vue&#39;,
            &quot;autoFix&quot;: true
        },
        {
            &quot;language&quot;: &#39;typescript&#39;,
            &quot;autoFix&quot;: true
        }
    ],
    &quot;files.autoSave&quot;: &quot;onWindowChange&quot;,
    &quot;editor.codeActionsOnSave&quot;: {
        &quot;source.fixAll.eslint&quot;: true
    },
    &quot;editor.wordWrap&quot;: &quot;wordWrapColumn&quot;,
    &quot;editor.wordWrapColumn&quot;: 150
}
</code></pre></div>`,10),s=[i];function r(p,l,c,u,d,g){return t(),n("div",null,s)}var _=e(a,[["render",r]]);export{m as __pageData,_ as default};
