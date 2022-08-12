import{_ as e,c as n,o,d as t}from"./app.a0f52c8e.js";const m='{"title":"\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"Nuxt.js \u6A21\u5757\u5217\u8868","slug":"nuxt-js-\u6A21\u5757\u5217\u8868"},{"level":2,"title":"\u57FA\u672C\u6A21\u5757","slug":"\u57FA\u672C\u6A21\u5757"},{"level":2,"title":"\u5F02\u6B65\u6A21\u5757","slug":"\u5F02\u6B65\u6A21\u5757"},{"level":3,"title":"\u4F7F\u7528 async/await","slug":"\u4F7F\u7528-async-await"},{"level":3,"title":"\u8FD4\u56DE Promise","slug":"\u8FD4\u56DE-promise"},{"level":3,"title":"\u4F7F\u7528\u56DE\u8C03","slug":"\u4F7F\u7528\u56DE\u8C03"},{"level":2,"title":"\u5E38\u89C1\u6A21\u5757","slug":"\u5E38\u89C1\u6A21\u5757"},{"level":3,"title":"\u4F18\u5148\u7EA7\u6700\u9AD8\u9009\u9879","slug":"\u4F18\u5148\u7EA7\u6700\u9AD8\u9009\u9879"},{"level":3,"title":"\u63D0\u4F9B\u63D2\u4EF6","slug":"\u63D0\u4F9B\u63D2\u4EF6"},{"level":3,"title":"\u6A21\u677F\u63D2\u4EF6","slug":"\u6A21\u677F\u63D2\u4EF6"},{"level":3,"title":"\u6DFB\u52A0CSS\u5E93","slug":"\u6DFB\u52A0css\u5E93"},{"level":3,"title":"Emit assets","slug":"emit-assets"},{"level":3,"title":"\u6CE8\u518C\u81EA\u5B9A\u4E49 loaders","slug":"\u6CE8\u518C\u81EA\u5B9A\u4E49-loaders"},{"level":2,"title":"\u5728\u6307\u5B9A\u94A9\u5B50\u4E0A\u8FD0\u884C\u4EFB\u52A1","slug":"\u5728\u6307\u5B9A\u94A9\u5B50\u4E0A\u8FD0\u884C\u4EFB\u52A1"},{"level":2,"title":"Module package commands","slug":"module-package-commands"}],"relativePath":"guide/FrontEnd/Nuxt/9.Nuxt.js\u6A21\u5757.md"}',a={},r=t(`<h1 id="\u6A21\u5757" tabindex="-1">\u6A21\u5757 <a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a></h1><blockquote><p>\u6A21\u5757\u662FNuxt.js\u6269\u5C55\uFF0C\u53EF\u4EE5\u6269\u5C55\u5176\u6838\u5FC3\u529F\u80FD\u5E76\u6DFB\u52A0\u65E0\u9650\u7684\u96C6\u6210\u3002</p></blockquote><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5728\u4F7F\u7528Nuxt\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u60A8\u5F88\u5FEB\u5C31\u4F1A\u53D1\u73B0\u6846\u67B6\u7684\u6838\u5FC3\u529F\u80FD\u8FD8\u4E0D\u591F\u3002 Nuxt\u53EF\u4EE5\u4F7F\u7528\u914D\u7F6E\u9009\u9879\u548C\u63D2\u4EF6\u8FDB\u884C\u6269\u5C55\uFF0C\u4F46\u662F\u5728\u591A\u4E2A\u9879\u76EE\u4E2D\u7EF4\u62A4\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u662F\u7E41\u7410\u3001\u91CD\u590D\u548C\u8017\u65F6\u7684\u3002 \u53E6\u4E00\u65B9\u9762\uFF0C\u5F00\u7BB1\u5373\u7528\u652F\u6301\u6BCF\u4E2A\u9879\u76EE\u7684\u9700\u6C42\u5C06\u4F7FNuxt\u975E\u5E38\u590D\u6742\u4E14\u96BE\u4EE5\u4F7F\u7528\u3002</p><p>\u8FD9\u5C31\u662FNuxt\u63D0\u4F9B\u66F4\u9AD8\u9636<strong>\u6A21\u5757\u7CFB\u7EDF</strong>\u7684\u539F\u56E0\uFF0C\u53EF\u4EE5\u8F7B\u677E\u6269\u5C55\u6838\u5FC3\u3002 \u6A21\u5757\u53EA\u662F\u5728\u5F15\u5BFCNuxt\u65F6\u6309\u987A\u5E8F\u8C03\u7528\u7684<strong>\u51FD\u6570</strong>\u3002 \u6846\u67B6\u5728\u52A0\u8F7D\u4E4B\u524D\u7B49\u5F85\u6BCF\u4E2A\u6A21\u5757\u5B8C\u6210\u3002 \u5982\u6B64\uFF0C\u6A21\u5757\u51E0\u4E4E\u53EF\u4EE5\u81EA\u5B9A\u4E49Nuxt\u7684\u4EFB\u4F55\u5730\u65B9\u3002 \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u529F\u80FD\u5F3A\u5927\u7684 <a href="https://github.com/nuxt-contrib/hookable" target="_blank" rel="noopener noreferrer">Hookable</a> Nuxt.js\u7CFB\u7EDF\u6765\u5B8C\u6210\u7279\u5B9A\u4E8B\u4EF6\u7684\u4EFB\u52A1\u3002</p><p>\u6700\u91CD\u8981\u7684\u662F, Nuxt\u6A21\u5757\u53EF\u4EE5\u5408\u5E76\u5230npm\u5305\u4E2D\u3002 \u8FD9\u4F7F\u5F97\u5B83\u4EEC\u6613\u4E8E\u8DE8\u9879\u76EE\u5F00\u53D1\u91CD\u7528\u5E76\u4E0ENuxt\u793E\u533A\u5171\u4EAB, \u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u9AD8\u8D28\u91CF\u7684Nuxt\u9644\u52A0\u7EC4\u4EF6\u751F\u6001\u7CFB\u7EDF\u3002</p><p>\u5982\u679C\u4F60\uFF1A</p><ul><li>\u662F<strong>\u4F18\u79C0\u56E2\u961F</strong>\u7684\u6210\u5458\uFF0C\u9700\u8981\u5FEB\u901F\u5F15\u5BFC\u65B0\u9879\u76EE\u3002</li><li>\u538C\u5026\u4E86\u4E3A\u96C6\u6210Google Analytics\u7B49\u5E38\u89C1\u4EFB\u52A1\u91CD\u65B0\u9020\u8F6E\u5B50\u3002</li><li>\u662F\u4E00\u4E2A\u4F18\u79C0\u7684<strong>\u5F00\u6E90</strong>\u7231\u597D\u8005\uFF0C\u5E0C\u671B\u8F7B\u677E\u4E0E\u793E\u533A\u5206\u4EAB\u60A8\u7684\u5DE5\u4F5C\u3002</li><li>\u662F\u4E00\u5BB6\u91CD\u89C6<strong>\u8D28\u91CF</strong>\u548C<strong>\u53EF\u91CD\u7528\u6027</strong>\u7684<strong>\u4F01\u4E1A</strong>\u516C\u53F8\u7684\u6210\u5458\u3002</li><li>\u901A\u5E38\u662F\u5728\u77ED\u671F\u9650\u5185\u5B8C\u6210\uFF0C\u6CA1\u6709\u65F6\u95F4\u6DF1\u5165\u4E86\u89E3\u6BCF\u4E2A\u65B0\u5E93\u6216\u96C6\u6210\u7684\u7EC6\u8282\u3002</li><li>\u538C\u5026\u4E86\u5904\u7406\u5BF9\u4F4E\u7EA7\u63A5\u53E3\u7684\u91CD\u5927\u6539\u53D8\uFF0C\u5E76\u4E14\u9700\u8981\u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\u7684\u4E1C\u897F\u3002</li></ul><h2 id="nuxt-js-\u6A21\u5757\u5217\u8868" tabindex="-1">Nuxt.js \u6A21\u5757\u5217\u8868 <a class="header-anchor" href="#nuxt-js-\u6A21\u5757\u5217\u8868" aria-hidden="true">#</a></h2><p>Nuxt.js \u56E2\u961F\u63D0\u4F9B <strong>\u5B98\u65B9</strong> \u6A21\u5757:</p><ul><li><a href="https://http.nuxtjs.org/" target="_blank" rel="noopener noreferrer">@nuxt/http</a>: \u57FA\u4E8E<a href="https://github.com/sindresorhus/ky-universal" target="_blank" rel="noopener noreferrer">ky-universal</a>\u7684\u8F7B\u91CF\u7EA7\u548C\u901A\u7528\u7684HTTP\u8BF7\u6C42</li><li><a href="https://axios.nuxtjs.org/" target="_blank" rel="noopener noreferrer">@nuxtjs/axios</a>: \u5B89\u5168\u548C\u4F7F\u7528\u7B80\u5355Axios\u4E0ENuxt.js\u96C6\u6210\u7528\u6765\u8BF7\u6C42HTTP</li><li><a href="https://pwa.nuxtjs.org/" target="_blank" rel="noopener noreferrer">@nuxtjs/pwa</a>: \u4F7F\u7528\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u66F4\u65B0\u4E14\u7A33\u5B9A\u7684PWA\u89E3\u51B3\u65B9\u6848\u6765\u589E\u5F3ANuxt</li><li><a href="https://auth.nuxtjs.org/" target="_blank" rel="noopener noreferrer">@nuxtjs/auth</a>: Nuxt.js\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E0D\u540C\u7684\u65B9\u6848\u548C\u9A8C\u8BC1\u7B56\u7565</li></ul><p>Nuxt.js\u793E\u533A\u5236\u4F5C\u7684\u6A21\u5757\u5217\u8868\u53EF\u5728 <a href="https://github.com/topics/nuxt-module" target="_blank" rel="noopener noreferrer">https://github.com/topics/nuxt-module</a> \u4E2D\u67E5\u8BE2</p><h2 id="\u57FA\u672C\u6A21\u5757" tabindex="-1">\u57FA\u672C\u6A21\u5757 <a class="header-anchor" href="#\u57FA\u672C\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u6A21\u5757\u53EA\u662F\u7B80\u5355\u7684\u529F\u80FD\u3002\u5B83\u4EEC\u53EF\u4EE5\u6253\u5305\u4E3A<code>npm</code>\u6A21\u5757\u6216\u76F4\u63A5\u5305\u542B\u5728\u9879\u76EE\u6E90\u4EE3\u7801\u4E2D\u3002</p><p><strong>modules/simple.js</strong></p><div class="language-"><pre><code>export default function SimpleModule (moduleOptions) {
  // Write your code here
}

// REQUIRED if publishing as an npm package
// module.exports.meta = require(&#39;./package.json&#39;)
</code></pre></div><p><strong><code>moduleOptions</code></strong></p><p>\u8FD9\u662F\u7528\u6237\u4F7F\u7528<code>modules</code>\u6570\u7EC4\u4F20\u9012\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u5B9A\u5236\u5B83\u7684\u884C\u4E3A\u3002</p><p><strong><code>this.options</code></strong></p><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64\u5C5E\u6027\u76F4\u63A5\u8BBF\u95EENuxt\u9009\u9879\u3002\u8FD9\u662F<code>nuxt.config.js</code>\uFF0C\u5176\u4E2D\u5305\u542B\u6240\u6709\u9ED8\u8BA4\u9009\u9879\uFF0C\u53EF\u7528\u4E8E\u6A21\u5757\u4E4B\u95F4\u7684\u5171\u4EAB\u9009\u9879\u3002</p><p><strong><code>this.nuxt</code></strong></p><p>\u8FD9\u662F\u5BF9\u5F53\u524DNuxt\u5B9E\u4F8B\u7684\u5F15\u7528\u3002 \u8BF7\u53C2\u8003 <a href="https://www.nuxtjs.cn/api/internals-nuxt" target="_blank" rel="noopener noreferrer">Nuxt class docs for available methods</a>.</p><p><strong><code>this</code></strong></p><p>modules\u4E2D\u7684context, \u8BF7\u53C2\u8003 <a href="https://www.nuxtjs.cn/api/internals-module-container" target="_blank" rel="noopener noreferrer">ModuleContainer</a> \u6765\u67E5\u770B\u53EF\u7528\u7684\u65B9\u6CD5\u3002</p><p><strong><code>module.exports.meta</code></strong></p><p>\u5982\u679C\u8981\u5C06\u6A21\u5757\u53D1\u5E03\u4E3Anpm\u5305\uFF0C\u5219<strong>\u9700\u8981</strong>\u914D\u7F6E\u6B64\u9009\u9879\u3002Nuxt\u5185\u90E8\u4F7F\u7528<code>meta</code>\u6765\u66F4\u597D\u5730\u5904\u7406\u60A8\u7684\u5305\u3002</p><p><strong>nuxt.config.js</strong></p><div class="language-"><pre><code>export default {
  modules: [
    // Simple usage
    &#39;~/modules/simple&#39;

    // Passing options
      [&#39;~/modules/simple&#39;, { token: &#39;123&#39; }]
  ]
}
</code></pre></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u544A\u8BC9Nuxt\u4E3A\u9879\u76EE\u52A0\u8F7D\u4E00\u4E9B\u7279\u5B9A\u6A21\u5757\uFF0C\u5E76\u5C06\u53EF\u9009\u53C2\u6570\u4F5C\u4E3A\u9009\u9879\u3002 \u8BF7\u53C2\u8003 <a href="https://www.nuxtjs.cn/api/configuration-modules" target="_blank" rel="noopener noreferrer">\u6A21\u5757\u914D\u7F6E</a> \u6587\u6863\u6765\u67E5\u770B\u66F4\u591A!</p><h2 id="\u5F02\u6B65\u6A21\u5757" tabindex="-1">\u5F02\u6B65\u6A21\u5757 <a class="header-anchor" href="#\u5F02\u6B65\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u5E76\u975E\u6240\u6709\u6A21\u5757\u90FD\u4F1A\u540C\u6B65\u5B8C\u6210\u6240\u6709\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1A\u60A8\u53EF\u80FD\u5E0C\u671B\u5F00\u53D1\u4E00\u4E2A\u9700\u8981\u83B7\u53D6\u67D0\u4E9BAPI\u6216\u6267\u884C\u5F02\u6B65IO\u7684\u6A21\u5757\u3002\u4E3A\u6B64\uFF0CNuxt\u652F\u6301\u5728\u5F02\u6B65\u6A21\u5757\u4E2D\u8FD4\u56DEPromise\u6216\u8C03\u7528\u56DE\u8C03\u3002</p><h3 id="\u4F7F\u7528-async-await" tabindex="-1">\u4F7F\u7528 async/await <a class="header-anchor" href="#\u4F7F\u7528-async-await" aria-hidden="true">#</a></h3><p>\u8BF7\u6CE8\u610F\uFF0C\u4EC5\u5728Node.js &gt; 7.2\u4E2D\u652F\u6301\u4F7F\u7528<code>async</code> / <code>await</code>\u3002 \u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u662F\u6A21\u5757\u5F00\u53D1\u4EBA\u5458\uFF0C\u81F3\u5C11\u8981\u8B66\u544A\u7528\u6237\u4F7F\u7528\u5B83\u4EEC\u65F6Node.js\u7248\u672C\u4E0D\u80FD\u4F4E\u4E8E7.2\u3002 \u5BF9\u4E8E\u5927\u91CF\u5F02\u6B65\u6A21\u5757\u6216\u66F4\u597D\u7684\u4F20\u7EDF\u652F\u6301\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528bundler\u5C06\u5176\u8F6C\u6362\u4E3A\u517C\u5BB9\u8F83\u65E7\u7684Node.js\u7248\u672C\u6216Promise\u65B9\u6CD5\u3002</p><div class="language-"><pre><code>import fse from &#39;fs-extra&#39;

export default async function asyncModule () {
  // You can do async works here using \`async\`/\`await\`
  const pages = await fse.readJson(&#39;./pages.json&#39;)
}
</code></pre></div><h3 id="\u8FD4\u56DE-promise" tabindex="-1">\u8FD4\u56DE Promise <a class="header-anchor" href="#\u8FD4\u56DE-promise" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import axios from &#39;axios&#39;

export default function asyncModule () {
  return axios.get(&#39;https://jsonplaceholder.typicode.com/users&#39;)
    .then(res =&gt; res.data.map(user =&gt; &#39;/users/&#39; + user.username))
    .then((routes) =&gt; {
      // Do something by extending Nuxt routes
    })
}
</code></pre></div><h3 id="\u4F7F\u7528\u56DE\u8C03" tabindex="-1">\u4F7F\u7528\u56DE\u8C03 <a class="header-anchor" href="#\u4F7F\u7528\u56DE\u8C03" aria-hidden="true">#</a></h3><div class="language-"><pre><code>import axios from &#39;axios&#39;

export default function asyncModule (callback) {
  axios.get(&#39;https://jsonplaceholder.typicode.com/users&#39;)
    .then(res =&gt; res.data.map(user =&gt; &#39;/users/&#39; + user.username))
    .then((routes) =&gt; {
      callback()
    })
}
</code></pre></div><h2 id="\u5E38\u89C1\u6A21\u5757" tabindex="-1">\u5E38\u89C1\u6A21\u5757 <a class="header-anchor" href="#\u5E38\u89C1\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="\u4F18\u5148\u7EA7\u6700\u9AD8\u9009\u9879" tabindex="-1">\u4F18\u5148\u7EA7\u6700\u9AD8\u9009\u9879 <a class="header-anchor" href="#\u4F18\u5148\u7EA7\u6700\u9AD8\u9009\u9879" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u5728<code>nuxt.config.js</code>\u4E2D\u6CE8\u518C\u6A21\u5757\u65F6\u53EF\u4EE5\u4F7F\u7528\u9876\u7EA7\u9009\u9879\u66F4\u65B9\u4FBF\uFF0C\u8FD9\u5141\u8BB8\u6211\u4EEC\u7EC4\u5408\u591A\u4E2A\u9009\u9879\u6E90\u3002</p><p><strong>nuxt.config.js</strong></p><div class="language-"><pre><code>export default {
  modules: [
    [&#39;@nuxtjs/axios&#39;, { anotherOption: true }]
  ],

  // axios module is aware of this by using \`this.options.axios\`
  axios: {
    option1,
    option2
  }
}
</code></pre></div><p><strong>module.js</strong></p><div class="language-"><pre><code>export default function (moduleOptions) {
  const options = Object.assign({}, this.options.axios, moduleOptions)
  // ...
}
</code></pre></div><h3 id="\u63D0\u4F9B\u63D2\u4EF6" tabindex="-1">\u63D0\u4F9B\u63D2\u4EF6 <a class="header-anchor" href="#\u63D0\u4F9B\u63D2\u4EF6" aria-hidden="true">#</a></h3><p>\u901A\u5E38\uFF0C\u6A21\u5757\u5728\u6DFB\u52A0\u65F6\u9700\u63D0\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A\u63D2\u4EF6\u3002 \u4F8B\u5982\uFF1A<a href="https://bootstrap-vue.js.org/" target="_blank" rel="noopener noreferrer">bootstrap-vue</a> \u6A21\u5757\u9700\u8981\u5C06\u81EA\u5DF1\u6CE8\u518C\u5230<code>Vue</code>\u4E2D\u3002 \u4E3A\u6B64\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>this.addPlugin</code> \u65B9\u6CD5\u3002</p><p><strong>plugin.js</strong></p><div class="language-"><pre><code>import Vue from &#39;vue&#39;
import BootstrapVue from &#39;bootstrap-vue/dist/bootstrap-vue.esm&#39;

Vue.use(BootstrapVue)
</code></pre></div><p><strong>module.js</strong></p><div class="language-"><pre><code>import path from &#39;path&#39;

export default function nuxtBootstrapVue (moduleOptions) {
  // Register \`plugin.js\` template
  this.addPlugin(path.resolve(__dirname, &#39;plugin.js&#39;))
}
</code></pre></div><h3 id="\u6A21\u677F\u63D2\u4EF6" tabindex="-1">\u6A21\u677F\u63D2\u4EF6 <a class="header-anchor" href="#\u6A21\u677F\u63D2\u4EF6" aria-hidden="true">#</a></h3><p>\u5DF2\u6CE8\u518C\u7684\u6A21\u677F\u548C\u63D2\u4EF6\u53EF\u4EE5\u5229\u7528<a href="https://lodash.com/docs/4.17.4#template" target="_blank" rel="noopener noreferrer">lodash templates</a>\u6A21\u677F\u6709\u6761\u4EF6\u5730\u66F4\u6539\u5DF2\u6CE8\u518C\u63D2\u4EF6\u7684\u8F93\u51FA\u3002</p><p><strong>plugin.js</strong></p><div class="language-"><pre><code>// Set Google Analytics UA
ga(&#39;create&#39;, &#39;&lt;%= options.ua %&gt;&#39;, &#39;auto&#39;)

&lt;% if (options.debug) { %&gt;
// Dev only code
&lt;% } %&gt;
</code></pre></div><p><strong>module.js</strong></p><div class="language-"><pre><code>import path from &#39;path&#39;

export default function nuxtBootstrapVue (moduleOptions) {
  // Register \`plugin.js\` template
  this.addPlugin({
    src: path.resolve(__dirname, &#39;plugin.js&#39;),
    options: {
      // Nuxt will replace \`options.ua\` with \`123\` when copying plugin to project
      ua: 123,

      // conditional parts with dev will be stripped from plugin code on production builds
      debug: this.options.dev
    }
  })
}
</code></pre></div><h3 id="\u6DFB\u52A0css\u5E93" tabindex="-1">\u6DFB\u52A0CSS\u5E93 <a class="header-anchor" href="#\u6DFB\u52A0css\u5E93" aria-hidden="true">#</a></h3><p>\u8003\u8651\u662F\u5426\u5B58\u5728CSS\u5E93\u4EE5\u907F\u514D\u91CD\u590D\uFF0C\u5E76\u6DFB\u52A0<strong>\u4E00\u4E2A\u9009\u9879</strong>\u6765\u7981\u7528\u6A21\u5757\u4E2D\u7684CSS\u5E93\u3002\u8BF7\u53C2\u89C1\u4E0B\u9762\u7684\u793A\u4F8B\u3002</p><p><strong>module.js</strong></p><div class="language-"><pre><code>export default function (moduleOptions) {
  if (moduleOptions.fontAwesome !== false) {
    // Add Font Awesome
    this.options.css.push(&#39;font-awesome/css/font-awesome.css&#39;)
  }
}
</code></pre></div><h3 id="emit-assets" tabindex="-1">Emit assets <a class="header-anchor" href="#emit-assets" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u6CE8\u518Cwebpack\u63D2\u4EF6\u7528\u6765\u5728\u6784\u5EFA\u671F\u95F4\u53D1\u51FA\u8D44\u6E90\u3002</p><p><strong>module.js</strong></p><div class="language-"><pre><code>export default function (moduleOptions) {
  const info = &#39;Built by awesome module - 1.3 alpha on &#39; + Date.now()

  this.options.build.plugins.push({
    apply (compiler) {
      compiler.plugin(&#39;emit&#39;, (compilation, cb) =&gt; {
        // This will generate \`.nuxt/dist/info.txt&#39; with contents of info variable.
        // Source can be buffer too
        compilation.assets[&#39;info.txt&#39;] = { source: () =&gt; info, size: () =&gt; info.length }

        cb()
      })
    }
  })
}
</code></pre></div><h3 id="\u6CE8\u518C\u81EA\u5B9A\u4E49-loaders" tabindex="-1">\u6CE8\u518C\u81EA\u5B9A\u4E49 loaders <a class="header-anchor" href="#\u6CE8\u518C\u81EA\u5B9A\u4E49-loaders" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>this.extendBuild</code>\u5728<code>nuxt.config.js</code>\u4E2D\u6267\u884C\u4E0E<code>build.extend</code>\u76F8\u540C\u7684\u64CD\u4F5C\u3002</p><p><strong>module.js</strong></p><div class="language-"><pre><code>export default function (moduleOptions) {
    this.extendBuild((config, { isClient, isServer }) =&gt; {
      // \`.foo\` Loader
      config.module.rules.push({
        test: /\\.foo$/,
        use: [...]
      })

      // Customize existing loaders
      // Refer to source code for Nuxt internals:
      // https://github.com/nuxt/nuxt.js/tree/dev/packages/builder/src/webpack/base.js
      const barLoader = config.module.rules.find(rule =&gt; rule.loader === &#39;bar-loader&#39;)
  })
}
</code></pre></div><h2 id="\u5728\u6307\u5B9A\u94A9\u5B50\u4E0A\u8FD0\u884C\u4EFB\u52A1" tabindex="-1">\u5728\u6307\u5B9A\u94A9\u5B50\u4E0A\u8FD0\u884C\u4EFB\u52A1 <a class="header-anchor" href="#\u5728\u6307\u5B9A\u94A9\u5B50\u4E0A\u8FD0\u884C\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u60A8\u7684\u6A21\u5757\u53EF\u80FD\u53EA\u9700\u8981\u5728\u7279\u5B9A\u6761\u4EF6\u4E0B\u6267\u884C\u64CD\u4F5C\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u5728Nuxt\u521D\u59CB\u5316\u671F\u95F4\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5F3A\u5927\u7684<a href="https://github.com/webpack/tapable" target="_blank" rel="noopener noreferrer">Tapable</a>\u63D2\u4EF6\u6765\u6267\u884C\u7279\u5B9A\u4E8B\u4EF6\u7684\u4EFB\u52A1\u3002Nuxt\u5C06\u7B49\u5F85\u94A9\u5B50\u8FD4\u56DE<code>Promise</code>\u6216\u88AB\u5B9A\u4E49\u4E3A<code>async</code>(\u5F02\u6B65)\u3002</p><div class="language-"><pre><code>export default function () {
  // Add hook for modules
  this.nuxt.hook(&#39;module&#39;, (moduleContainer) =&gt; {
    // This will be called when all modules finished loading
  })

  // Add hook for renderer
  this.nuxt.hook(&#39;renderer&#39;, (renderer) =&gt; {
    // This will be called when renderer was created
  })

  // Add hook for build
  this.nuxt.hook(&#39;build&#39;, async (builder) =&gt; {
    // This will be called once when builder created

    // We can even register internal hooks here
    builder.hook(&#39;compile&#39;, ({ compiler }) =&gt; {
      // This will be run just before webpack compiler starts
    })
  })

  // Add hook for generate
  this.nuxt.hook(&#39;generate&#39;, async (generator) =&gt; {
    // This will be called when a Nuxt generate starts
  })
}
</code></pre></div><h2 id="module-package-commands" tabindex="-1">Module package commands <a class="header-anchor" href="#module-package-commands" aria-hidden="true">#</a></h2><p><strong>\u5B9E\u9A8C\u6027\u7684</strong></p><p>\u4ECE<code>v2.4.0</code> \u5F00\u59CB\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7Nuxt\u6A21\u5757\u7684\u5305(package)\u6DFB\u52A0\u81EA\u5B9A\u4E49nuxt\u547D\u4EE4\u3002\u4E3A\u6B64\uFF0C\u60A8\u5FC5\u987B<code>NuxtCommand</code>\u5728\u5B9A\u4E49\u547D\u4EE4\u65F6\u9075\u5FAAAPI\u89C4\u5219\u3002\u5047\u8BBE\u653E\u7F6E\u7684\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B<code>my-module/bin/command.js</code>\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-"><pre><code>#!/usr/bin/env node

const consola = require(&#39;consola&#39;)
const { NuxtCommand } = require(&#39;@nuxt/cli&#39;)

NuxtCommand.run({
  name: &#39;command&#39;,
  description: &#39;My Module Command&#39;,
  usage: &#39;command &lt;foobar&gt;&#39;,
  options: {
    foobar: {
      alias: &#39;fb&#39;,
      type: &#39;string&#39;,
      description: &#39;Simple test string&#39;
    }
  },
  run (cmd) {
    consola.info(cmd.argv)
  }
})
</code></pre></div><p>\u8FD9\u91CC\u6709\u4E00\u4E9B\u503C\u5F97\u6CE8\u610F\u7684\u4E8B\u60C5\u3002\u9996\u5148\uFF0C\u6CE8\u610F\u8C03\u7528<code>/usr/bin/env</code>\u6765\u68C0\u7D22Node\u53EF\u6267\u884C\u6587\u4EF6\u3002\u53E6\u8BF7\u6CE8\u610F\uFF0CES\u6A21\u5757\u8BED\u6CD5\u4E0D\u80FD\u7528\u4E8E\u547D\u4EE4\uFF0C\u9664\u975E\u60A8\u624B\u52A8\u5408\u5E76<a href="https://github.com/standard-things/esm" target="_blank" rel="noopener noreferrer"><code>esm</code></a>\u5230\u4EE3\u7801\u4E2D\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u60A8\u5C06\u6CE8\u610F\u5230\u5982\u4F55\u4F7F\u7528<code>NuxtCommand.run()</code>\u6307\u5B9A\u547D\u4EE4\u7684\u8BBE\u7F6E\u548C\u884C\u4E3A\u3002\u5B9A\u4E49\u9009\u9879<code>options</code>\uFF0C\u901A\u8FC7\u89E3\u6790<a href="https://github.com/substack/minimist" target="_blank" rel="noopener noreferrer"><code>minimist</code></a>\u3002\u89E3\u6790\u53C2\u6570\u540E\uFF0C<code>run()\`\`\u5C06\u4F7F\u7528</code>NuxtCommand\`\u5B9E\u4F8B\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u81EA\u52A8\u8C03\u7528\u3002</p><p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C<code>cmd.argv</code>\u7528\u4E8E\u68C0\u7D22\u89E3\u6790\u7684\u547D\u4EE4\u884C\u53C2\u6570\u3002\u6709\u66F4\u591A\u7684\u65B9\u6CD5\u548C\u5C5E\u6027<code>NuxtCommand</code> --\u5C06\u63D0\u4F9B\u6709\u5173\u5B83\u4EEC\u7684\u6587\u6863\uFF0C\u56E0\u4E3A\u6B64\u529F\u80FD\u5C06\u8FDB\u4E00\u6B65\u6D4B\u8BD5\u548C\u6539\u8FDB\u3002</p><p>\u8981\u4F7F\u60A8\u7684\u547D\u4EE4\u53EF\u4EE5\u901A\u8FC7Nuxt CLI\u8BC6\u522B<code>bin</code>\uFF0C\u8BF7\u4F7F\u7528<code>nuxt-module</code>\u7EA6\u5B9A\u5C06\u5176\u5217\u5728<code>package.json</code>\u7684\u90E8\u5206\u4E0B\uFF0C\u8BE5\u7EA6\u5B9Amodule\u4E0E\u60A8\u7684\u5305\u540D\u79F0\u76F8\u5173\u3002\u4F7F\u7528\u6B64\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E<code>argv</code>\u9700\u8981\u8FDB\u4E00\u6B65\u89E3\u6790\u66F4\u591A<code>subcommands</code>\u547D\u4EE4\u3002</p><div class="language-"><pre><code>{
  &quot;bin&quot;: {
    &quot;nuxt-foobar&quot;: &quot;./bin/command.js&quot;
  }
}
</code></pre></div><p>\u4E00\u65E6\u5B89\u88C5\u4E86\u8F6F\u4EF6\u5305(\u901A\u8FC7NPM\u6216Yarn)\uFF0C\u60A8\u5C31\u53EF\u4EE5<code>nuxt foobar ...</code>\u5728\u547D\u4EE4\u884C\u4E0A\u6267\u884C\u3002</p><p>modules\u6709\u8BB8\u591A\u94A9\u5B50\u548C\u53EF\u80FD\u6027\u3002\u8BF7\u53C2\u8003 <a href="https://www.nuxtjs.cn/api/internals" target="_blank" rel="noopener noreferrer">Nuxt Internals</a> \u4E86\u89E3\u6709\u5173Nuxt\u5185\u90E8API\u7684\u66F4\u591A\u4FE1\u606F\u3002</p>`,83),s=[r];function d(i,l,u,c,p,h){return o(),n("div",null,s)}var x=e(a,[["render",d]]);export{m as __pageData,x as default};
