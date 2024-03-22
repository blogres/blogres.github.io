import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as o,b as s,d as p,w as i,a as l,e as r}from"./app-DXPUtFHE.js";const c={},d=s("h3",{id:"sudo-设置普通用户具有root权限",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sudo-设置普通用户具有root权限"},[s("span",null,"sudo 设置普通用户具有root权限")])],-1),u=l(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>1．添加 user1 用户，并对其设置密码。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># useradd user1</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># passwd user1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2．修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/sudoers</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 /etc/sudoers 文件，找到下面一行(91 行)，在 root 下面添加一行，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Allow root to run any commands anywhere</span>
root <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL
user1 <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者配置成采用 sudo 命令时，不需要输入密码</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## Allow root to run any commands anywhere</span>
root <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL
user1 <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> NOPASSWD:ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完毕，现在可以用 user1 帐号登录，然后用命令 sudo ，即可获得 root 权限进行<br> 操作。</p>`,15);function m(h,b){const a=e("RouteLink");return t(),o("div",null,[d,s("ul",null,[s("li",null,[p(a,{to:"/linux/basis/command.html#%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86"},{default:i(()=>[r("返回命令大全列表")]),_:1})])]),u])}const k=n(c,[["render",m],["__file","sudo.html.vue"]]),L=JSON.parse('{"path":"/linux/basis/commands/sudo.html","title":"sudo","lang":"zh-CN","frontmatter":{"title":"sudo","article":false,"timeline":false,"description":"sudo 设置普通用户具有root权限 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： 1．添加 user1 用户，并对其设置密码。 2．修改配置文件 修改 /etc/sudoers 文件，找到下面一行(91 行)，在 root 下面添加一行，如下所示： 或者配置成采用 sudo 命令时，不需要输...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/sudo.html"}],["meta",{"property":"og:title","content":"sudo"}],["meta",{"property":"og:description","content":"sudo 设置普通用户具有root权限 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： 1．添加 user1 用户，并对其设置密码。 2．修改配置文件 修改 /etc/sudoers 文件，找到下面一行(91 行)，在 root 下面添加一行，如下所示： 或者配置成采用 sudo 命令时，不需要输..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"sudo\\",\\"description\\":\\"sudo 设置普通用户具有root权限 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： 1．添加 user1 用户，并对其设置密码。 2．修改配置文件 修改 /etc/sudoers 文件，找到下面一行(91 行)，在 root 下面添加一行，如下所示： 或者配置成采用 sudo 命令时，不需要输...\\"}"]]},"headers":[{"level":3,"title":"sudo 设置普通用户具有root权限","slug":"sudo-设置普通用户具有root权限","link":"#sudo-设置普通用户具有root权限","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":0.66,"words":197},"filePathRelative":"linux/basis/commands/sudo.md","localizedDate":"2024年1月29日","excerpt":"<h3>sudo 设置普通用户具有root权限</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：</p>\\n<p>⑥、语法：</p>\\n<p>1．添加 user1 用户，并对其设置密码。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@admin ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># useradd user1</span>\\n<span class=\\"token punctuation\\">[</span>root@admin ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># passwd user1234</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,L as data};
