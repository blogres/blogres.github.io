import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as t,b as s,e as n,d as a,a as o}from"./app-DXPUtFHE.js";const c={},p=s("p",null,"Linux安装Redis",-1),d=s("h1",{id:"redis",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#redis"},[s("span",null,"Redis")])],-1),u=s("p",null,"参考文献：",-1),m={href:"https://www.cnblogs.com/heqiuyong/p/10463334.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/qq_42476834/article/details/106033330",target:"_blank",rel:"noopener noreferrer"},v=s("h2",{id:"第一步-下载redis安装包",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#第一步-下载redis安装包"},[s("span",null,"第一步：下载redis安装包")])],-1),k={href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://download.redis.io/releases/redis-6.2.4.tar.gz",target:"_blank",rel:"noopener noreferrer"},g=o(`<div class="language-ABAP line-numbers-mode" data-ext="ABAP" data-title="ABAP"><pre class="language-ABAP"><code>5.0.0-14
6.0.0-16
6.2.0-7
7.0.0-4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二步-解压压缩包" tabindex="-1"><a class="header-anchor" href="#第二步-解压压缩包"><span>第二步：解压压缩包</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#赋予权限</span>
<span class="token function">chmod</span> +x redis-6.2.4.tar.gz
<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.4.tar.gz <span class="token parameter variable">-C</span> /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三步-yum安装gcc依赖" tabindex="-1"><a class="header-anchor" href="#第三步-yum安装gcc依赖"><span>第三步：yum安装gcc依赖</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第四步-跳转到redis解压目录下" tabindex="-1"><a class="header-anchor" href="#第四步-跳转到redis解压目录下"><span>第四步：跳转到redis解压目录下</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin soft<span class="token punctuation">]</span><span class="token comment"># cd /usr/local/redis-6.2.4/</span>
<span class="token punctuation">[</span>root@admin redis-6.2.4<span class="token punctuation">]</span><span class="token comment"># ls -al</span>
-rw-rw-r--   <span class="token number">1</span> root root <span class="token number">28118</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> 00-RELEASENOTES
-rw-rw-r--   <span class="token number">1</span> root root    <span class="token number">51</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> BUGS
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">5026</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> CONDUCT
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">3384</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> CONTRIBUTING
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">1487</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> COPYING
drwxrwxr-x   <span class="token number">7</span> root root   <span class="token number">145</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> deps
drwxrwxr-x   <span class="token number">4</span> root root    <span class="token number">45</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> .github
-rw-rw-r--   <span class="token number">1</span> root root   <span class="token number">483</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> .gitignore
-rw-rw-r--   <span class="token number">1</span> root root    <span class="token number">11</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> INSTALL
-rw-rw-r--   <span class="token number">1</span> root root   <span class="token number">151</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> Makefile
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">6888</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> MANIFESTO
-rw-rw-r--   <span class="token number">1</span> root root <span class="token number">21567</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> README.md
-rw-rw-r--   <span class="token number">1</span> root root <span class="token number">93724</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> redis.conf
-rwxrwxr-x   <span class="token number">1</span> root root   <span class="token number">275</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> runtest
-rwxrwxr-x   <span class="token number">1</span> root root   <span class="token number">279</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> runtest-cluster
-rwxrwxr-x   <span class="token number">1</span> root root  <span class="token number">1046</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> runtest-moduleapi
-rwxrwxr-x   <span class="token number">1</span> root root   <span class="token number">281</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> runtest-sentinel
-rw-rw-r--   <span class="token number">1</span> root root <span class="token number">13768</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> sentinel.conf
drwxrwxr-x   <span class="token number">3</span> root root  <span class="token number">4096</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> src
drwxrwxr-x  <span class="token number">11</span> root root   <span class="token number">182</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> tests
-rw-rw-r--   <span class="token number">1</span> root root  <span class="token number">3055</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> TLS.md
drwxrwxr-x   <span class="token number">9</span> root root  <span class="token number">4096</span> <span class="token number">6</span>月   <span class="token number">1</span> <span class="token number">2021</span> utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第五步-编译安装" tabindex="-1"><a class="header-anchor" href="#第五步-编译安装"><span>第五步：编译安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin redis-6.2.4<span class="token punctuation">]</span><span class="token comment"># make MALLOC=libc</span>
<span class="token builtin class-name">cd</span> src <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> all
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 进入目录“/usr/local/redis-6.2.4/src”
    CC Makefile.dep
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 离开目录“/usr/local/redis-6.2.4/src”
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 进入目录“/usr/local/redis-6.2.4/src”
***省略***
    CC cli_common.o
    LINK redis-cli
    CC redis-benchmark.o
    LINK redis-benchmark
    INSTALL redis-check-rdb
    INSTALL redis-check-aof

Hint: It<span class="token string">&#39;s a good idea to run &#39;</span><span class="token function">make</span> test&#39; <span class="token punctuation">;</span><span class="token punctuation">)</span>

make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 离开目录“/usr/local/redis-6.2.4/src”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第六步、安装并指定安装目录" tabindex="-1"><a class="header-anchor" href="#第六步、安装并指定安装目录"><span>第六步、安装并指定安装目录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin redis-6.2.4<span class="token punctuation">]</span><span class="token comment"># make install PREFIX=/usr/local/redis-6.2.4</span>
<span class="token builtin class-name">cd</span> src <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 进入目录“/usr/local/redis-6.2.4/src”
    CC Makefile.dep
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 离开目录“/usr/local/redis-6.2.4/src”
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 进入目录“/usr/local/redis-6.2.4/src”

Hint: It<span class="token string">&#39;s a good idea to run &#39;</span><span class="token function">make</span> test&#39; <span class="token punctuation">;</span><span class="token punctuation">)</span>

    INSTALL redis-server
    INSTALL redis-benchmark
    INSTALL redis-cli
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: 离开目录“/usr/local/redis-6.2.4/src”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第七步、启动服务" tabindex="-1"><a class="header-anchor" href="#第七步、启动服务"><span>第七步、启动服务</span></a></h2><h3 id="_7-1前台启动" tabindex="-1"><a class="header-anchor" href="#_7-1前台启动"><span>7.1前台启动</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/redis-6.2.4/bin/
./redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2后台启动" tabindex="-1"><a class="header-anchor" href="#_7-2后台启动"><span>7.2后台启动</span></a></h3><p>从 redis 的源码目录中复制 redis.conf 到 redis 的安装目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cp</span> /usr/local/redis-6.2.4/redis.conf /usr/local/redis-6.2.4/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改 redis.conf 文件，把 daemonize no 改为 daemonize yes</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/redis-6.2.4/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定后台启动文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./redis-server /usr/local/redis-6.2.4/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第八步、关闭redis进程" tabindex="-1"><a class="header-anchor" href="#第八步、关闭redis进程"><span>第八步、关闭redis进程</span></a></h2><p>查看redis进程</p><p>ps -ef | grep redis</p><p>使用 kill 掉进程</p><h2 id="第九步、创建创建软链接" tabindex="-1"><a class="header-anchor" href="#第九步、创建创建软链接"><span>第九步、创建创建软链接</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/redis-6.2.4/bin/redis-cli /usr/bin/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="第十步、设置开机启动" tabindex="-1"><a class="header-anchor" href="#第十步、设置开机启动"><span>第十步、设置开机启动</span></a></h2><p>添加开机启动服务</p><p><code>vim /etc/systemd/system/redis.service</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/redis-6.2.4/bin/redis-server /usr/local/redis-6.2.4/bin/redis.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>设置开机启动
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload</span>
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># systemctl start redis.service</span>
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># systemctl enable redis.service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第十一步、服务操作命令" tabindex="-1"><a class="header-anchor" href="#第十一步、服务操作命令"><span>第十一步、服务操作命令</span></a></h2><p><code>systemctl start redis.service</code> #启动redis服务</p><p><code>systemctl stop redis.service</code> #停止redis服务</p><p><code>systemctl restart redis.service</code> #重新启动服务</p><p><code>systemctl status redis.service</code> #查看服务当前状态</p><p><code>systemctl enable redis.service</code> #设置开机自启动</p><p><code>systemctl disable redis.service</code> #停止开机自启动</p><p>重启服务测试</p>`,40);function x(f,w){const e=i("ExternalLinkIcon");return l(),t("div",null,[p,d,u,s("p",null,[s("a",m,[n("cnblogs.com/heqiuyongl"),a(e)])]),s("p",null,[s("a",b,[n("blog.csdn.net/qq"),a(e)])]),v,s("p",null,[s("a",k,[n("https://redis.io/download/"),a(e)])]),s("p",null,[n("wget "),s("a",h,[n("http://download.redis.io/releases/redis-6.2.4.tar.gz"),a(e)])]),g])}const L=r(c,[["render",x],["__file","redis.html.vue"]]),T=JSON.parse('{"path":"/middleware/redis/redis.html","title":"Linux安装Redis","lang":"zh-CN","frontmatter":{"icon":"redis","title":"Linux安装Redis","category":["中间件"],"headerDepth":5,"date":"2021-07-26T00:00:00.000Z","tag":["Redis"],"description":"Linux安装Redis Redis 参考文献： cnblogs.com/heqiuyongl blog.csdn.net/qq 第一步：下载redis安装包 https://redis.io/download/ wget http://download.redis.io/releases/redis-6.2.4.tar.gz 第二步：解压压缩包 第三...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/middleware/redis/redis.html"}],["meta",{"property":"og:title","content":"Linux安装Redis"}],["meta",{"property":"og:description","content":"Linux安装Redis Redis 参考文献： cnblogs.com/heqiuyongl blog.csdn.net/qq 第一步：下载redis安装包 https://redis.io/download/ wget http://download.redis.io/releases/redis-6.2.4.tar.gz 第二步：解压压缩包 第三..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2021-07-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux安装Redis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"第一步：下载redis安装包","slug":"第一步-下载redis安装包","link":"#第一步-下载redis安装包","children":[]},{"level":2,"title":"第二步：解压压缩包","slug":"第二步-解压压缩包","link":"#第二步-解压压缩包","children":[]},{"level":2,"title":"第三步：yum安装gcc依赖","slug":"第三步-yum安装gcc依赖","link":"#第三步-yum安装gcc依赖","children":[]},{"level":2,"title":"第四步：跳转到redis解压目录下","slug":"第四步-跳转到redis解压目录下","link":"#第四步-跳转到redis解压目录下","children":[]},{"level":2,"title":"第五步：编译安装","slug":"第五步-编译安装","link":"#第五步-编译安装","children":[]},{"level":2,"title":"第六步、安装并指定安装目录","slug":"第六步、安装并指定安装目录","link":"#第六步、安装并指定安装目录","children":[]},{"level":2,"title":"第七步、启动服务","slug":"第七步、启动服务","link":"#第七步、启动服务","children":[{"level":3,"title":"7.1前台启动","slug":"_7-1前台启动","link":"#_7-1前台启动","children":[]},{"level":3,"title":"7.2后台启动","slug":"_7-2后台启动","link":"#_7-2后台启动","children":[]}]},{"level":2,"title":"第八步、关闭redis进程","slug":"第八步、关闭redis进程","link":"#第八步、关闭redis进程","children":[]},{"level":2,"title":"第九步、创建创建软链接","slug":"第九步、创建创建软链接","link":"#第九步、创建创建软链接","children":[]},{"level":2,"title":"第十步、设置开机启动","slug":"第十步、设置开机启动","link":"#第十步、设置开机启动","children":[]},{"level":2,"title":"第十一步、服务操作命令","slug":"第十一步、服务操作命令","link":"#第十一步、服务操作命令","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":2.65,"words":794},"filePathRelative":"middleware/redis/redis.md","localizedDate":"2021年7月26日","excerpt":"<p>Linux安装Redis</p>\\n","autoDesc":true}');export{L as comp,T as data};