import{_ as e,c as t,o,d as a}from"./app.a0f52c8e.js";const v='{"title":"\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757","slug":"\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757"},{"level":2,"title":"\u4F7F\u7528Vue \u63D2\u4EF6","slug":"\u4F7F\u7528vue-\u63D2\u4EF6"},{"level":2,"title":"ES6 \u63D2\u4EF6","slug":"es6-\u63D2\u4EF6"},{"level":2,"title":"\u6CE8\u5165$root \u6216\u8005 context","slug":"\u6CE8\u5165-root-\u6216\u8005-context"},{"level":2,"title":"\u6CE8\u5165Vue \u5B9E\u4F8B","slug":"\u6CE8\u5165vue-\u5B9E\u4F8B"}],"relativePath":"guide/FrontEnd/Nuxt/8.Nuxt.js\u63D2\u4EF6.md"}',n={},i=a(`<p>Nuxt.js \u5141\u8BB8\u6211\u4EEC\u5728Vue.js\u5E94\u7528\u7A0B\u5E8F\u4E4B\u524D\u6267\u884Cjs\u63D2\u4EF6\u3002\u6211\u4EEC\u4F7F\u7528\u7B2C\u4E09\u65B9\u63D2\u4EF6\u548C\u81EA\u5DF1\u7684\u5E93\u7684\u65F6\u5019\u4F1A\u5F88\u65B9\u4FBF\u3002</p><blockquote><p>Vue.js\u7684\u751F\u547D\u5468\u671F\u5F53\u4E2D,\u53EA\u6709beforeCreate \u548C created \u4E24\u4E2A\u65B9\u6CD5\u4F1A\u7AD9\u5728 \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u88AB\u8C03\u7528 , \u5176\u4ED6\u7684\u751F\u547D\u5468\u671F\u90FD\u662F\u53EA\u80FD\u5728\u5BA2\u6237\u7AEF\u8C03\u7528</p></blockquote><h2 id="\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757" tabindex="-1">\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757 <a class="header-anchor" href="#\u4F7F\u7528\u7B2C\u4E09\u65B9\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u6211\u4EEC\u8981\u662F\u7528Axios \u505Ahttp\u8BF7\u6C42</p><p>\u9996\u5148\u8981\u5B89\u88C5npm\u5305 , \u7136\u540E\u5728\u9875\u9762\u8C03\u7528\u7684\u65F6\u5019</p><div class="language-"><pre><code>&lt;template&gt;
	&lt;div&gt;{{ title }}&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import axios from &#39;axios&#39;

export default{
    async asyncData {{ params }} {
		let { data } = await axios.get()  
    }
}
&lt;/script&gt;
</code></pre></div><h2 id="\u4F7F\u7528vue-\u63D2\u4EF6" tabindex="-1">\u4F7F\u7528Vue \u63D2\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528vue-\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u5047\u5982\u6211\u4EEC\u60F3\u4F7F\u7528 <a href="https://github.com/se-panfilov/vue-notifications" target="_blank" rel="noopener noreferrer">vue-notifications</a> \u663E\u793A\u5E94\u7528\u7684\u901A\u77E5\u4FE1\u606F\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u7A0B\u5E8F\u8FD0\u884C\u524D\u914D\u7F6E\u597D\u8FD9\u4E2A\u63D2\u4EF6\u3002</p><p>\u9996\u5148\u589E\u52A0\u6587\u4EF6 <code>plugins/vue-notifications.js</code>\uFF1A</p><div class="language-"><pre><code>import Vue from &#39;vue&#39;
import VueNotifications from &#39;vue-notifications&#39;

Vue.use(VueNotifications)
</code></pre></div><p>\u7136\u540E, \u5728 <code>nuxt.config.js</code> \u5185\u914D\u7F6E <code>plugins</code> \u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>module.exports = {
  plugins: [&#39;~/plugins/vue-notifications&#39;]
}
</code></pre></div><h2 id="es6-\u63D2\u4EF6" tabindex="-1">ES6 \u63D2\u4EF6 <a class="header-anchor" href="#es6-\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u5982\u679C\u63D2\u4EF6\u4F4D\u4E8E<code>node_modules</code>\u5E76\u5BFC\u51FA\u6A21\u5757\uFF0C\u9700\u8981\u5C06\u5176\u6DFB\u52A0\u5230<code>transpile</code>\u6784\u5EFA\u9009\u9879\uFF1A</p><div class="language-"><pre><code>module.exports = {
  build: {
    transpile: [&#39;vue-notifications&#39;]
  }
}
</code></pre></div><h2 id="\u6CE8\u5165-root-\u6216\u8005-context" tabindex="-1">\u6CE8\u5165$root \u6216\u8005 context <a class="header-anchor" href="#\u6CE8\u5165-root-\u6216\u8005-context" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u60A8\u5E0C\u671B\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u67D0\u4E2A\u51FD\u6570\u6216\u5C5E\u6027\u503C\uFF0C\u6B64\u65F6\uFF0C\u4F60\u9700\u8981\u5C06\u5B83\u4EEC\u6CE8\u5165\u5230Vue\u5B9E\u4F8B\uFF08\u5BA2\u6237\u7AEF\uFF09\uFF0Ccontext\uFF08\u670D\u52A1\u5668\u7AEF\uFF09\u751A\u81F3 store(Vuex)\u3002\u6309\u7167\u60EF\u4F8B\uFF0C\u65B0\u589E\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u540D\u4F7F\u7528<code>$</code>\u4F5C\u4E3A\u524D\u7F00</p><h2 id="\u6CE8\u5165vue-\u5B9E\u4F8B" tabindex="-1">\u6CE8\u5165Vue \u5B9E\u4F8B <a class="header-anchor" href="#\u6CE8\u5165vue-\u5B9E\u4F8B" aria-hidden="true">#</a></h2>`,18),r=[i];function s(d,c,l,u,p,h){return o(),t("div",null,r)}var f=e(n,[["render",s]]);export{v as __pageData,f as default};
