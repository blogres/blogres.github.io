import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as o,b as n,d as p,w as i,a as l,e as c}from"./app-DXPUtFHE.js";const u={},d=n("h3",{id:"mount-磁盘挂载与卸除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mount-磁盘挂载与卸除"},[n("span",null,"mount 磁盘挂载与卸除")])],-1),r=l(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>Linux 的磁盘挂载使用 <code>mount</code> 命令，卸载使用 <code>umount</code> 命令。</p><p><strong>磁盘挂载语法：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token punctuation">[</span>-t 文件系统<span class="token punctuation">]</span> <span class="token punctuation">[</span>-L Label名<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o 额外选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span>  装置文件名  挂载点
<span class="token function">mount</span> <span class="token punctuation">[</span>-lhV<span class="token punctuation">]</span>
<span class="token function">mount</span> <span class="token parameter variable">-a</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
<span class="token function">mount</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>--source<span class="token punctuation">]</span> <span class="token operator">&lt;</span>源<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token punctuation">[</span>--target<span class="token punctuation">]</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>
<span class="token function">mount</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token operator">&lt;</span>源<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>
<span class="token function">mount</span> <span class="token operator">&lt;</span>操作<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>挂载点<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>目标<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-a 挂载/etc/fstab文件中指定的所有文件系统</li><li>-f 使 mount 命令模拟挂载设备，但并不真的挂载</li><li>-F 和 -a 参数一起使用时，会同时挂载所有文件系统</li><li>-v 详细模式，将会说明挂载设备的每一步</li><li>-I 不启用任何/sbin/mount.filesystem下的文件系统帮助文件</li><li>-l 给ext2、ext3或XFS文件系统自动添加文件系统标签</li><li>-n 挂载设备，但不注册到/etc/mtab已挂载设备文件中</li><li>-p num 进行加密挂载时，从文件描述符 num 中获得密码短语</li><li>-s 忽略该文件系统不支持的挂载选项</li><li>-r 将设备挂载为只读的</li><li>-w 将设备挂载为可读写的（默认参数）</li><li>-L label 将设备按指定的 label 挂载</li><li>-U uuid 将设备按指定的 uuid 挂载</li><li>-O 和 -a 参数一起使用，限制命令只作用到特定的一组文件系统上</li><li>-o 给文件系统添加特定的选项</li></ul><p><code>-o</code> 参数允许在挂载文件系统时添加一些以逗号分隔的额外选项。以下为常用的选项。</p><ul><li>ro ：以只读形式挂载。</li><li>rw ：以读写形式挂载。</li><li>user ：允许普通用户挂载文件系统。</li><li>check=none ：挂载文件系统时不进行完整性校验。</li><li>loop ：挂载一个文件。</li></ul><p>mount 命令提供如下四部分信息：</p><ul><li>媒体的设备文件名</li><li>媒体挂载到虚拟目录的挂载点</li><li>文件系统类型</li><li>已挂载媒体的访问状态</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># mount</span>
sysfs on /sys <span class="token builtin class-name">type</span> sysfs <span class="token punctuation">(</span>rw,nosuid,nodev,noexec,relatime<span class="token punctuation">)</span>
proc on /proc <span class="token builtin class-name">type</span> proc <span class="token punctuation">(</span>rw,nosuid,nodev,noexec,relatime<span class="token punctuation">)</span>
devtmpfs on /dev <span class="token builtin class-name">type</span> devtmpfs <span class="token punctuation">(</span>rw,nosuid,size<span class="token operator">=</span>4049260k,nr_inodes<span class="token operator">=</span><span class="token number">1012315</span>,mode<span class="token operator">=</span><span class="token number">755</span><span class="token punctuation">)</span>
securityfs on /sys/kernel/security <span class="token builtin class-name">type</span> securityfs <span class="token punctuation">(</span>rw,nosuid,nodev,noexec,relatime<span class="token punctuation">)</span>
tmpfs on /dev/shm <span class="token builtin class-name">type</span> tmpfs <span class="token punctuation">(</span>rw,nosuid,nodev<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用默认的方式，将刚刚创建的 /dev/hdc6 挂载到 /mnt/hdc6 上面！</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mkdir /mnt/hdc6</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/hdc6 /mnt/hdc6</span>
<span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># df</span>
Filesystem           1K-blocks      Used Available Use% Mounted on
<span class="token punctuation">..</span><span class="token punctuation">..</span>.中间省略<span class="token punctuation">..</span><span class="token punctuation">..</span>.
/dev/hdc6              <span class="token number">1976312</span>     <span class="token number">42072</span>   <span class="token number">1833836</span>   <span class="token number">3</span>% /mnt/hdc6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动挂载媒体设备的基本命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">type</span> device directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动将U盘/dev/sdb1挂载到/media/disk</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mount</span> <span class="token parameter variable">-t</span> vfat /dev/sdb1 /media/disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>磁盘卸载命令 <code>umount</code> 语法：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">umount</span> <span class="token punctuation">[</span>-fn<span class="token punctuation">]</span> 装置文件名或挂载点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选项与参数：</p><ul><li>-f ：强制卸除！可用在类似网络文件系统 (NFS) 无法读取到的情况下；</li><li>-n ：不升级 /etc/mtab 情况下卸除。</li></ul><p><strong>卸载 /dev/hdc6</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin ~<span class="token punctuation">]</span><span class="token comment"># umount /dev/hdc6     </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27);function m(k,v){const s=t("RouteLink");return e(),o("div",null,[d,n("ul",null,[n("li",null,[p(s,{to:"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86"},{default:i(()=>[c("返回命令大全列表")]),_:1})])]),r])}const g=a(u,[["render",m],["__file","mount.html.vue"]]),f=JSON.parse('{"path":"/linux/basis/commands/mount.html","title":"mount","lang":"zh-CN","frontmatter":{"title":"mount","article":false,"timeline":false,"description":"mount 磁盘挂载与卸除 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： Linux 的磁盘挂载使用 mount 命令，卸载使用 umount 命令。 磁盘挂载语法： -a 挂载/etc/fstab文件中指定的所有文件系统 -f 使 mount 命令模拟挂载设备，但并不真的挂载 -F 和 -a ...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/linux/basis/commands/mount.html"}],["meta",{"property":"og:title","content":"mount"}],["meta",{"property":"og:description","content":"mount 磁盘挂载与卸除 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： Linux 的磁盘挂载使用 mount 命令，卸载使用 umount 命令。 磁盘挂载语法： -a 挂载/etc/fstab文件中指定的所有文件系统 -f 使 mount 命令模拟挂载设备，但并不真的挂载 -F 和 -a ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"mount\\",\\"description\\":\\"mount 磁盘挂载与卸除 ①、命令名称： ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述： ⑥、语法： Linux 的磁盘挂载使用 mount 命令，卸载使用 umount 命令。 磁盘挂载语法： -a 挂载/etc/fstab文件中指定的所有文件系统 -f 使 mount 命令模拟挂载设备，但并不真的挂载 -F 和 -a ...\\"}"]]},"headers":[{"level":3,"title":"mount 磁盘挂载与卸除","slug":"mount-磁盘挂载与卸除","link":"#mount-磁盘挂载与卸除","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":2.44,"words":732},"filePathRelative":"linux/basis/commands/mount.md","localizedDate":"2024年1月29日","excerpt":"<h3>mount 磁盘挂载与卸除</h3>\\n<ul>\\n<li><a href=\\"/linux/basis/command.html#%E7%A3%81%E7%9B%98%E7%AE%A1%E7%90%86\\" target=\\"_blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：</p>\\n<p>⑥、语法：</p>\\n<p>Linux 的磁盘挂载使用 <code>mount</code> 命令，卸载使用 <code>umount</code> 命令。</p>","autoDesc":true}');export{g as comp,f as data};
