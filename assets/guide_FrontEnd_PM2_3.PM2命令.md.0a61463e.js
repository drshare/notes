import{_ as s,c as n,o as e,d as a}from"./app.a0f52c8e.js";const g='{"title":"PM2\u547D\u4EE4","description":"","frontmatter":{},"headers":[],"relativePath":"guide/FrontEnd/PM2/3.PM2\u547D\u4EE4.md"}',p={},t=a(`<h1 id="pm2\u547D\u4EE4" tabindex="-1">PM2\u547D\u4EE4 <a class="header-anchor" href="#pm2\u547D\u4EE4" aria-hidden="true">#</a></h1><div class="language-shell"><pre><code>pm2 start app_name
pm2 restart app_name
pm2 relaod app_name
pm2 stop app_name
pm2 delete app_name

<span class="token comment"># app_name \u53EF\u4EE5\u66FF\u6362\u6210 all id</span>

pm2 list <span class="token operator">|</span> <span class="token function">ls</span> <span class="token operator">|</span> status 
pm2 log
pm2 logs --lines <span class="token number">200</span>

<span class="token comment">#\u5B9E\u65F6\u4EEA\u8868\u677F</span>
pm2 monit

<span class="token comment"># \u57FA\u4E8EWeb\u7684\u4EEA\u8868\u677F\uFF0C\u5E26\u6709\u8BCA\u65AD\u7CFB\u7EDF\u7684\u8DE8\u670D\u52A1\u5668</span>
pm2 plus

<span class="token comment"># \u96C6\u7FA4\u6A21\u5F0F </span>
<span class="token comment"># \u5BF9\u4E8ENode.js\u5E94\u7528\u7A0B\u5E8F\uFF0CPM2\u5305\u62EC\u4E00\u4E2A\u81EA\u52A8\u8D1F\u8F7D\u5E73\u8861\u5668\uFF0C\u5B83\u5C06\u5728\u6BCF\u4E2A\u884D\u751F\u8FDB\u7A0B\u4E4B\u95F4\u5171\u4EAB\u6240\u6709HTTP [s] / Websocket / TCP / UDP\u8FDE\u63A5\u3002</span>
pm2 start app.js -i max

<span class="token comment"># \u751F\u6001\u7CFB\u7EDF\u6587\u4EF6</span>
<span class="token comment"># \u60A8\u4E5F\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u79F0\u4E3A\u751F\u6001\u7CFB\u7EDF\u6587\u4EF6\uFF0C\u4EE5\u7BA1\u7406\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\u3002\u751F\u6210\u751F\u6001\u7CFB\u7EDF\u6587\u4EF6</span>
 pm2 ecosystem
 
 
</code></pre></div><p>\u5B98\u7F51\u5907\u5FD8\u5355</p><div class="language-"><pre><code># Fork mode
pm2 start app.js --name my-api # Name process

# Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.
pm2 scale app +3             # Scales \`app\` up by 3 workers
pm2 scale app 2              # Scales \`app\` up or down to 2 workers total

# Listing

pm2 list               # Display all processes status
pm2 jlist              # Print process list in raw JSON
pm2 prettylist         # Print process list in beautified JSON

pm2 describe 0         # Display all informations about a specific process

pm2 monit              # Monitor all processes

# Logs

pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs

# Actions

pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes

pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id

pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

# Misc

pm2 reset &lt;process&gt;    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
</code></pre></div>`,4),o=[t];function l(m,r,i,c,d,_){return e(),n("div",null,o)}var f=s(p,[["render",l]]);export{g as __pageData,f as default};
