import{_ as e,c as t,o,d as n}from"./app.a0f52c8e.js";const x='{"title":"Vuex \u72B6\u6001\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u72B6\u6001\u6811","slug":"\u4F7F\u7528\u72B6\u6001\u6811"},{"level":3,"title":"\u666E\u901A\u65B9\u5F0F","slug":"\u666E\u901A\u65B9\u5F0F"},{"level":3,"title":"\u6A21\u5757\u6587\u4EF6","slug":"\u6A21\u5757\u6587\u4EF6"},{"level":3,"title":"\u63D2\u4EF6","slug":"\u63D2\u4EF6"},{"level":2,"title":"fetch \u65B9\u6CD5","slug":"fetch-\u65B9\u6CD5"},{"level":2,"title":"nuxtServerInit \u65B9\u6CD5","slug":"nuxtserverinit-\u65B9\u6CD5"},{"level":2,"title":"Vuex \u4E25\u683C\u6A21\u5F0F","slug":"vuex-\u4E25\u683C\u6A21\u5F0F"},{"level":3,"title":"Module Mode","slug":"module-mode"},{"level":3,"title":"\u7ECF\u5178\u6A21\u5F0F","slug":"\u7ECF\u5178\u6A21\u5F0F"}],"relativePath":"guide/FrontEnd/Nuxt/10.Nuxt.jsVuex\u72B6\u6001\u6811.md"}',d={},s=n(`<h1 id="vuex-\u72B6\u6001\u6811" tabindex="-1">Vuex \u72B6\u6001\u6811 <a class="header-anchor" href="#vuex-\u72B6\u6001\u6811" aria-hidden="true">#</a></h1><blockquote><p>\u5BF9\u4E8E\u6BCF\u4E2A\u5927\u9879\u76EE\u6765\u8BF4\uFF0C\u4F7F\u7528\u72B6\u6001\u6811 (store) \u7BA1\u7406\u72B6\u6001 (state) \u5341\u5206\u6709\u5FC5\u8981\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48 Nuxt.js \u5185\u6838\u5B9E\u73B0\u4E86 <a href="https://github.com/vuejs/vuex" target="_blank" rel="noopener noreferrer">Vuex</a>\u3002</p></blockquote><h2 id="\u4F7F\u7528\u72B6\u6001\u6811" tabindex="-1">\u4F7F\u7528\u72B6\u6001\u6811 <a class="header-anchor" href="#\u4F7F\u7528\u72B6\u6001\u6811" aria-hidden="true">#</a></h2><p>Nuxt.js \u4F1A\u5C1D\u8BD5\u627E\u5230src\u76EE\u5F55\uFF08\u9ED8\u8BA4\u662F\u5E94\u7528\u6839\u76EE\u5F55\uFF09\u4E0B\u7684 <code>store</code> \u76EE\u5F55\uFF0C\u5982\u679C\u8BE5\u76EE\u5F55\u5B58\u5728\uFF0C\u5B83\u5C06\u505A\u4EE5\u4E0B\u7684\u4E8B\u60C5\uFF1A</p><ol><li>\u5F15\u7528 <code>vuex</code> \u6A21\u5757</li><li>\u5C06 <code>vuex</code> \u6A21\u5757 \u52A0\u5230 vendors \u6784\u5EFA\u914D\u7F6E\u4E2D\u53BB</li><li>\u8BBE\u7F6E <code>Vue</code> \u6839\u5B9E\u4F8B\u7684 <code>store</code> \u914D\u7F6E\u9879</li></ol><p>Nuxt.js \u652F\u6301\u4E24\u79CD\u4F7F\u7528 <code>store</code> \u7684\u65B9\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u62E9\u4E00\u4F7F\u7528\uFF1A</p><ul><li><strong>\u6A21\u5757\u65B9\u5F0F\uFF1A</strong> <code>store</code> \u76EE\u5F55\u4E0B\u7684\u6BCF\u4E2A <code>.js</code> \u6587\u4EF6\u4F1A\u88AB\u8F6C\u6362\u6210\u4E3A\u72B6\u6001\u6811<a href="http://vuex.vuejs.org/en/modules.html" target="_blank" rel="noopener noreferrer">\u6307\u5B9A\u547D\u540D\u7684\u5B50\u6A21\u5757</a> \uFF08\u5F53\u7136\uFF0C<code>index</code> \u662F\u6839\u6A21\u5757\uFF09</li><li><strong>Classic(\u4E0D\u5EFA\u8BAE\u4F7F\u7528)\uFF1A</strong> <code>store/index.js</code>\u8FD4\u56DE\u521B\u5EFAVuex.Store\u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002</li></ul><p>\u65E0\u8BBA\u4F7F\u7528\u90A3\u79CD\u6A21\u5F0F\uFF0C\u60A8\u7684<code>state</code>\u7684\u503C\u5E94\u8BE5<strong>\u59CB\u7EC8\u662F</strong><code>function</code>\uFF0C\u4E3A\u4E86\u907F\u514D\u8FD4\u56DE\u5F15\u7528\u7C7B\u578B\uFF0C\u4F1A\u5BFC\u81F4\u591A\u4E2A\u5B9E\u4F8B\u76F8\u4E92\u5F71\u54CD\u3002</p><h3 id="\u666E\u901A\u65B9\u5F0F" tabindex="-1">\u666E\u901A\u65B9\u5F0F <a class="header-anchor" href="#\u666E\u901A\u65B9\u5F0F" aria-hidden="true">#</a></h3><blockquote><p>Nuxt.js\u5141\u8BB8\u60A8\u62E5\u6709\u4E00\u4E2A <code>store</code> \u76EE\u5F55\uFF0C\u5176\u4E2D\u5305\u542B\u4E0E\u6A21\u5757\u5BF9\u5E94\u7684\u6BCF\u4E2A\u6587\u4EF6\u3002</p></blockquote><p>\u9996\u5148\uFF0C\u53EA\u9700\u5C06\u72B6\u6001\u5BFC\u51FA\u4E3A <em>\u51FD\u6570</em>\uFF0C\u5C06\u53D8\u91CF\u548C\u64CD\u4F5C\u4F5C\u4E3A <code>store/index.js</code> \u4E2D\u7684\u5BF9\u8C61\u5BFC\u51FA\uFF1A</p><div class="language-"><pre><code>export const state = () =&gt; ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
</code></pre></div><p>\u7136\u540E\uFF0C\u60A8\u53EF\u4EE5\u62E5\u6709 <code>store/todos.js</code> \u6587\u4EF6\uFF1A</p><div class="language-"><pre><code>export const state = () =&gt; ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
</code></pre></div><p>Vuex\u5C06\u5982\u4E0B\u521B\u5EFA\uFF1A</p><div class="language-"><pre><code>new Vuex.Store({
  state: () =&gt; ({
    counter: 0
  }),
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      namespaced: true,
      state: () =&gt; ({
        list: []
      }),
      mutations: {
        add (state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove (state, { todo }) {
          state.list.splice(state.list.indexOf(todo), 1)
        },
        toggle (state, { todo }) {
          todo.done = !todo.done
        }
      }
    }
  }
})
</code></pre></div><p>\u5728\u60A8\u7684 <code>pages/todos.vue</code> \u4E2D\uFF0C\u4F7F\u7528 <code>todos</code> \u6A21\u5757\uFF1A</p><div class="language-"><pre><code>&lt;template&gt;
  &lt;ul&gt;
    &lt;li v-for=&quot;todo in todos&quot;&gt;
      &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @change=&quot;toggle(todo)&quot;&gt;
      &lt;span :class=&quot;{ done: todo.done }&quot;&gt;{{ todo.text }}&lt;/span&gt;
    &lt;/li&gt;
    &lt;li&gt;&lt;input placeholder=&quot;What needs to be done?&quot; @keyup.enter=&quot;addTodo&quot;&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
import { mapMutations } from &#39;vuex&#39;

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit(&#39;todos/add&#39;, e.target.value)
      e.target.value = &#39;&#39;
    },
    ...mapMutations({
      toggle: &#39;todos/toggle&#39;
    })
  }
}
&lt;/script&gt;

&lt;style&gt;
.done {
  text-decoration: line-through;
}
&lt;/style&gt;
</code></pre></div><blockquote><p>\u6A21\u5757\u65B9\u6CD5\u4E5F\u9002\u7528\u4E8E\u9876\u7EA7\u5B9A\u4E49\uFF0C\u800C\u65E0\u9700\u5728 <code>store</code> \u76EE\u5F55\u4E2D\u5B9E\u73B0\u5B50\u76EE\u5F55</p></blockquote><p>\u793A\u4F8B\uFF1A\u60A8\u521B\u5EFA\u6587\u4EF6 <code>store/state.js</code> \u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9</p><div class="language-"><pre><code>export default () =&gt; ({
  counter: 0
})
</code></pre></div><p>\u76F8\u5E94\u7684\u53EF\u4EE5\u5728\u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0 <code>store/mutations.js</code></p><div class="language-"><pre><code>export default {
  increment (state) {
    state.counter++
  }
}
</code></pre></div><h3 id="\u6A21\u5757\u6587\u4EF6" tabindex="-1">\u6A21\u5757\u6587\u4EF6 <a class="header-anchor" href="#\u6A21\u5757\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u60A8\u53EF\u4EE5\u5C06\u6A21\u5757\u6587\u4EF6\u5206\u89E3\u4E3A\u5355\u72EC\u7684\u6587\u4EF6\uFF1A<code>state.js</code>,<code>actions.js</code>,<code>mutations.js</code>\u548C<code>getters.js</code>\u3002\u5982\u679C\u60A8\u4F7F\u7528<code>index.js</code>\u6765\u7EF4\u62A4<code>state</code>,<code>getters</code>,<code>actions</code>\u548C<code>mutations</code>\uFF0C\u540C\u65F6\u5177\u6709\u5355\u4E2A\u5355\u72EC\u7684\u64CD\u4F5C\u6587\u4EF6\uFF0C\u90A3\u4E48\u4ECD\u7136\u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u8BE5\u6587\u4EF6\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528\u62C6\u5206\u6587\u4EF6\u6A21\u5757\u65F6\uFF0C\u5FC5\u987B\u8BB0\u4F4F\u4F7F\u7528<strong>\u7BAD\u5934\u51FD\u6570\u529F\u80FD</strong>\uFF0C <code>this</code> \u5728\u8BCD\u6CD5\u4E0A\u53EF\u7528\u3002\u8BCD\u6CD5\u8303\u56F4<code>this</code>\u610F\u5473\u7740\u5B83\u603B\u662F\u6307\u5411\u5F15\u7528<strong>\u7BAD\u5934\u51FD\u6570</strong>\u7684\u6240\u6709\u8005\u3002\u5982\u679C\u672A\u5305\u542B<strong>\u7BAD\u5934\u51FD\u6570</strong>\uFF0C\u90A3\u4E48<code>this</code>\u5C06\u662F\u672A\u5B9A\u4E49\u7684(<code>undefined</code>)\u3002\u89E3\u51B3\u65B9\u6848\u662F\u4F7F\u7528 &quot;normal&quot; \u529F\u80FD\uFF0C\u8BE5\u529F\u80FD\u4F1A\u5C06<code>this</code>\u6307\u5411\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528\u3002</p></blockquote><h3 id="\u63D2\u4EF6" tabindex="-1">\u63D2\u4EF6 <a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a></h3><p>\u60A8\u53EF\u4EE5\u5C06\u5176\u4ED6\u63D2\u4EF6\u6DFB\u52A0\u5230store\uFF08\u5728\u6A21\u5757\u6A21\u5F0F\u4E0B\uFF09\uFF0C\u5C06\u5176\u653E\u5165<code>store/index.js</code>\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-"><pre><code>import myPlugin from &#39;myPlugin&#39;

export const plugins = [ myPlugin ]

export const state = () =&gt; ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
</code></pre></div><p>\u6709\u5173\u63D2\u4EF6\u7684\u66F4\u591A\u4FE1\u606F: <a href="https://vuex.vuejs.org/en/plugins.html" target="_blank" rel="noopener noreferrer">Vuex \u6587\u6863</a>.</p><h2 id="fetch-\u65B9\u6CD5" tabindex="-1">fetch \u65B9\u6CD5 <a class="header-anchor" href="#fetch-\u65B9\u6CD5" aria-hidden="true">#</a></h2><blockquote><p>fetch \u65B9\u6CD5\u4F1A\u5728\u6E32\u67D3\u9875\u9762\u524D\u88AB\u8C03\u7528\uFF0C\u4F5C\u7528\u662F\u586B\u5145\u72B6\u6001\u6811 (store) \u6570\u636E\uFF0C\u4E0E asyncData \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\u5B83\u4E0D\u4F1A\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u6570\u636E\u3002</p></blockquote><p>\u5173\u4E8E <code>fetch</code> \u65B9\u6CD5\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 <a href="https://www.nuxtjs.cn/api/pages-fetch" target="_blank" rel="noopener noreferrer">\u9875\u9762 fetch \u65B9\u6CD5API</a>\u3002</p><h2 id="nuxtserverinit-\u65B9\u6CD5" tabindex="-1">nuxtServerInit \u65B9\u6CD5 <a class="header-anchor" href="#nuxtserverinit-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5982\u679C\u5728\u72B6\u6001\u6811\u4E2D\u6307\u5B9A\u4E86 <code>nuxtServerInit</code> \u65B9\u6CD5\uFF0CNuxt.js \u8C03\u7528\u5B83\u7684\u65F6\u5019\u4F1A\u5C06\u9875\u9762\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F5C\u4E3A\u7B2C2\u4E2A\u53C2\u6570\u4F20\u7ED9\u5B83\uFF08\u670D\u52A1\u7AEF\u8C03\u7528\u65F6\u624D\u4F1A\u9171\u7D2B\u54DF\uFF09\u3002\u5F53\u6211\u4EEC\u60F3\u5C06\u670D\u52A1\u7AEF\u7684\u4E00\u4E9B\u6570\u636E\u4F20\u5230\u5BA2\u6237\u7AEF\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u7070\u5E38\u597D\u7528\u7684\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u6211\u4EEC\u670D\u52A1\u7AEF\u7684\u4F1A\u8BDD\u72B6\u6001\u6811\u91CC\u53EF\u4EE5\u901A\u8FC7 <code>req.session.user</code> \u6765\u8BBF\u95EE\u5F53\u524D\u767B\u5F55\u7684\u7528\u6237\u3002\u5C06\u8BE5\u767B\u5F55\u7528\u6237\u4FE1\u606F\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7684\u72B6\u6001\u6811\uFF0C\u6211\u4EEC\u53EA\u9700\u66F4\u65B0 <code>store/index.js</code> \u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>actions: {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit(&#39;user&#39;, req.session.user)
    }
  }
}
</code></pre></div><blockquote><p>\u5982\u679C\u4F60\u4F7F\u7528_\u72B6\u6001\u6811\u6A21\u5757\u5316_\u7684\u6A21\u5F0F\uFF0C\u53EA\u6709\u4E3B\u6A21\u5757\uFF08\u5373 <code>store/index.js</code>\uFF09\u9002\u7528\u8BBE\u7F6E\u8BE5\u65B9\u6CD5\uFF08\u5176\u4ED6\u6A21\u5757\u8BBE\u7F6E\u4E86\u4E5F\u4E0D\u4F1A\u88AB\u8C03\u7528\uFF09\u3002</p></blockquote><p>\u8FD9\u65F6<a href="https://www.nuxtjs.cn/api/context" target="_blank" rel="noopener noreferrer">context</a>\u88AB\u8D4B\u4E88<code>nuxtServerInit</code>\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5B83\u4E0E<code>asyncData</code>\u6216<code>fetch</code>\u65B9\u6CD5\u76F8\u540C\u3002</p><p><code>nuxtServerInit</code> \u65B9\u6CD5\u63A5\u6536\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u548C <code>fetch</code> \u7684\u4E00\u6837\uFF0C\u4F46\u4E0D\u5305\u62EC <code>context.redirect()</code> \u548C <code>context.error()</code>\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u5F02\u6B65<code>nuxtServerInit</code>\u64CD\u4F5C\u5FC5\u987B\u8FD4\u56DEPromise\u6765\u901A\u77E5<code>nuxt</code>\u670D\u52A1\u5668\u7B49\u5F85\u5B83\u4EEC\u3002</p></blockquote><div class="language-"><pre><code>actions: {
  async nuxtServerInit({ dispatch }) {
    await dispatch(&#39;core/load&#39;)
  }
}
</code></pre></div><h2 id="vuex-\u4E25\u683C\u6A21\u5F0F" tabindex="-1">Vuex \u4E25\u683C\u6A21\u5F0F <a class="header-anchor" href="#vuex-\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u542F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u5728\u751F\u4EA7\u6A21\u5F0F\u4E0B\u5173\u95ED\u6A21\u5F0F\u3002\u8981\u5728dev\u4E2D\u7981\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u8BF7\u9075\u5FAA\u4EE5\u4E0B\u793A\u4F8B\u3002</p><h3 id="module-mode" tabindex="-1">Module Mode <a class="header-anchor" href="#module-mode" aria-hidden="true">#</a></h3><div class="language-"><pre><code>export const strict = false
</code></pre></div><h3 id="\u7ECF\u5178\u6A21\u5F0F" tabindex="-1">\u7ECF\u5178\u6A21\u5F0F <a class="header-anchor" href="#\u7ECF\u5178\u6A21\u5F0F" aria-hidden="true">#</a></h3><blockquote><p>\u6B64\u529F\u80FD\u5DF2\u7ECF\u5F03\u7528\uFF0C\u5C06\u5728Nuxt 3\u4E2D\u5220\u9664\u3002</p></blockquote><p>\u8981\u4F7F\u7528\u7ECF\u5178\u6A21\u5F0F\u521B\u5EFAVuex\uFF0C\u6211\u4EEC\u5E94\u8BE5\u521B\u5EFA<code>store/index.js</code>\u5230\u5904\u8FD4\u56DEVuex\u5B9E\u4F8B\u7684\u65B9\u6CD5\u7684\u6587\u4EF6\uFF1A</p><div class="language-"><pre><code>import Vuex from &#39;vuex&#39;

const createStore = () =&gt; {
  return new Vuex.Store({
    strict: false,
    state: () =&gt; ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
</code></pre></div><blockquote><p>\u6211\u4EEC\u4E0D\u9700\u8981\u5B89\u88C5\uFF0C\u56E0\u4E3AVuex\u7531Nuxt.js\u63D0\u4F9B\u3002</p></blockquote><p>\u6211\u4EEC\u73B0\u5728\u53EF\u4EE5\u5728\u6211\u4EEC\u7684\u7EC4\u4EF6\u4E2D\u4F7F\u7528<code>this.$store</code>\uFF1A</p><div class="language-"><pre><code>&lt;template&gt;
  &lt;button @click=&quot;$store.commit(&#39;increment&#39;)&quot;&gt;{{ $store.state.counter }}&lt;/button&gt;
&lt;/template&gt;
</code></pre></div>`,53),c=[s];function r(a,i,l,u,p,h){return o(),t("div",null,c)}var v=e(d,[["render",r]]);export{x as __pageData,v as default};
