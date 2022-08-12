import{_ as a,c as n,o as s,d as t}from"./app.a0f52c8e.js";const h='{"title":"PM2 \u542F\u52A8\u4E00\u4E2A\u5E94\u7528","description":"","frontmatter":{},"headers":[],"relativePath":"guide/FrontEnd/PM2/2.\u542F\u52A8\u4E00\u4E2A\u5E94\u7528.md"}',e={},o=t(`<h1 id="pm2-\u542F\u52A8\u4E00\u4E2A\u5E94\u7528" tabindex="-1">PM2 \u542F\u52A8\u4E00\u4E2A\u5E94\u7528 <a class="header-anchor" href="#pm2-\u542F\u52A8\u4E00\u4E2A\u5E94\u7528" aria-hidden="true">#</a></h1><div class="language-shell"><pre><code>pm2 start app.js		
<span class="token comment"># \u542F\u52A8\u547D\u4EE4\u53C2\u6570</span>
<span class="token comment"># Specify an app name</span>
--name <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>

<span class="token comment"># Watch and Restart app when files change</span>
--watch

<span class="token comment"># Set memory threshold(\u9608\u503C) for app reload</span>
--max-memory-restart <span class="token operator">&lt;</span>200MB<span class="token operator">&gt;</span>

<span class="token comment"># Specify log file</span>
--log <span class="token operator">&lt;</span>log_path<span class="token operator">&gt;</span>

<span class="token comment"># Pass extra(\u989D\u5916\u7684) arguments to the script</span>
-- arg1 arg2 arg3

<span class="token comment"># Delay between automatic(\u81EA\u52A8) restarts</span>
--restart-delay <span class="token operator">&lt;</span>delay <span class="token keyword">in</span> ms<span class="token operator">&gt;</span>

<span class="token comment"># Prefix logs with time</span>
--time

<span class="token comment"># Do not auto restart app</span>
--no-autorestart

<span class="token comment"># Specify cron for forced(\u5F3A\u5236) restart</span>
--cron <span class="token operator">&lt;</span>cron_pattern<span class="token operator">&gt;</span>

<span class="token comment"># Attach to(\u9644\u5C5E\uFF0C\u9644\u52A0) application log</span>
--no-daemon
</code></pre></div>`,2),p=[o];function r(c,l,m,_,i,d){return s(),n("div",null,p)}var g=a(e,[["render",r]]);export{h as __pageData,g as default};
