import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as r,b as n,e as a,d as t,a as s}from"./app-DXPUtFHE.js";const c={},p=n("p",null,"Java 16 新特性概览",-1),d=n("h2",{id:"java-16",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java-16"},[n("span",null,"Java 16")])],-1),u=n("h3",{id:"记录类型-转正",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#记录类型-转正"},[n("span",null,"记录类型（转正）")])],-1),h=n("p",null,"变更历史：",-1),v=n("thead",null,[n("tr",null,[n("th",null,"JDK 版本"),n("th",null,"更新类型"),n("th",null,"JEP"),n("th",null,"更新内容")])],-1),g=n("td",null,"Java SE 14",-1),_=n("td",null,"Preview",-1),k={href:"https://openjdk.java.net/jeps/359",target:"_blank",rel:"noopener noreferrer"},m=n("td",null,[a("引入 "),n("code",null,"record"),a(" 关键字，"),n("code",null,"record"),a(" 提供一种紧凑的语法来定义类中的不可变数据。")],-1),J=n("td",null,"Java SE 15",-1),f=n("td",null,"Second Preview",-1),b={href:"https://openjdk.org/jeps/384",target:"_blank",rel:"noopener noreferrer"},j=n("td",null,[a("支持在局部方法和接口中使用 "),n("code",null,"record"),a("。")],-1),P=n("td",null,"Java SE 16",-1),I=n("td",null,"Permanent Release",-1),D={href:"https://openjdk.org/jeps/395",target:"_blank",rel:"noopener noreferrer"},w=n("td",null,"非静态内部类可以定义非常量的静态成员。",-1),x=s(`<p>从 Java SE 16 开始，非静态内部类可以定义非常量的静态成员。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
 <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 JDK 16 之前，如果写上面这种代码，IDE 会提示你静态字段 age 不能在非静态的内部类中定义，除非它用一个常量表达式初始化。（The field age cannot be declared static in a non-static inner type, unless initialized with a constant expression）</p></blockquote><h3 id="instanceof-模式匹配-转正" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配-转正"><span>instanceof 模式匹配（转正）</span></a></h3>`,4),y=n("thead",null,[n("tr",null,[n("th",null,"JDK 版本"),n("th",null,"更新类型"),n("th",null,"JEP"),n("th",null,"更新内容")])],-1),E=n("td",null,"Java SE 14",-1),A=n("td",null,"preview",-1),S={href:"https://openjdk.org/jeps/305",target:"_blank",rel:"noopener noreferrer"},K=n("td",null,"首次引入 instanceof 模式匹配。",-1),C=n("td",null,"Java SE 15",-1),T=n("td",null,"Second Preview",-1),N={href:"https://openjdk.org/jeps/375",target:"_blank",rel:"noopener noreferrer"},U=n("td",null,"相比较上个版本无变化，继续收集更多反馈。",-1),L=n("td",null,"Java SE 16",-1),Z=n("td",null,"Permanent Release",-1),G={href:"https://openjdk.org/jeps/394",target:"_blank",rel:"noopener noreferrer"},R=n("td",null,"模式变量不在隐式为 final。",-1),V=s(`<p>从 Java SE 16 开始，你可以对 instanceof 中的变量值进行修改。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">learn</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
   s <span class="token operator">=</span> <span class="token string">&quot;JavaGuide&quot;</span><span class="token punctuation">;</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览新特性" tabindex="-1"><a class="header-anchor" href="#预览新特性"><span>预览新特性</span></a></h3><h4 id="密封类" tabindex="-1"><a class="header-anchor" href="#密封类"><span>密封类</span></a></h4><p>在 JDK 15 引入的 sealed class（密封类）在 JDK 16 得到了改进：更加严格的引用检查和密封类的继承关系。</p><h3 id="其他优化与改进" tabindex="-1"><a class="header-anchor" href="#其他优化与改进"><span>其他优化与改进</span></a></h3><ul><li><strong>优化 JavaDoc 的搜索功能</strong> ：对于单词大小写问题的改进，当不知道具体拼写或者大小写的时候很有用。</li><li><strong>ZGC 并发线程处理</strong> ：JEP 376 将 ZGC 线程栈处理从安全点转移到一个并发阶段，甚至在大堆上也允许在毫秒内暂停 GC 安全点。消除 ZGC 垃圾收集器中最后一个延迟源可以极大地提高应用程序的性能和效率。</li><li><strong>弹性元空间</strong> ：此特性可将未使用的 HotSpot 类元数据（即元空间，metaspace）内存更快速地返回到操作系统，从而减少元空间的占用空间。具有大量类加载和卸载活动的应用程序可能会占用大量未使用的空间。新方案将元空间内存按较小的块分配，它将未使用的元空间内存返回给操作系统来提高弹性，从而提高应用程序性能并降低内存占用。</li><li><strong>Unix-Domain 套接字通道</strong> ：Unix-domain 套接字一直是大多数 Unix 平台的一个特性，现在在 Windows 10 和 Windows Server 2019 也提供了支持。此特性为 java.nio.channels 包的套接字通道和服务器套接字通道 API 添加了 Unix-domain（AF_UNIX）套接字支持。它扩展了继承的通道机制以支持 Unix-domain 套接字通道和服务器套接字通道。Unix-domain 套接字用于同一主机上的进程间通信（IPC）。它们在很大程度上类似于 TCP/IP，区别在于套接字是通过文件系统路径名而不是 Internet 协议（IP）地址和端口号寻址的。对于本地进程间通信，Unix-domain 套接字比 TCP/IP 环回连接更安全、更有效。</li><li><strong>打包工具</strong>：此特性最初是作为 Java 14 中的一个孵化器模块引入的，该工具允许打包自包含的 Java 应用程序。它支持原生打包格式，为最终用户提供自然的安装体验，这些格式包括 Windows 上的 msi 和 exe、macOS 上的 pkg 和 dmg，还有 Linux 上的 deb 和 rpm。它还允许在打包时指定启动时参数，并且可以从命令行直接调用，也可以通过 ToolProvider API 以编程方式调用。注意 jpackage 模块名称从 jdk.incubator.jpackage 更改为 jdk.jpackage。这将改善最终用户在安装应用程序时的体验，并简化了“应用商店”模型的部署。</li><li><strong>对基于值的类发出警告</strong>：此特性将原始包装器类（java.lang.Integer、java.lang.Double 等）指定为基于值的（类似于 java.util.Optional 和 java.time.LocalDateTime），并在其构造器中添加 forRemoval（自 JDK 9 开始被弃用），这样会提示新的警告。在 Java 平台中尝试在任何基于值的类的实例上进行不正确的同步时，它会发出警告。</li><li><strong>默认强封装 JDK 内部元素</strong>：此特性会默认强封装 JDK 的所有内部元素，但关键内部 API（例如 sun.misc.Unsafe）除外。默认情况下，使用早期版本成功编译的访问 JDK 内部 API 的代码可能不再起作用。鼓励开发人员从使用内部元素迁移到使用标准 API 的方法上，以便他们及其用户都可以无缝升级到将来的 Java 版本。强封装由 JDK 9 的启动器选项–illegal-access 控制，到 JDK 15 默认改为 warning，从 JDK 16 开始默认为 deny。（目前）仍然可以使用单个命令行选项放宽对所有软件包的封装，将来只有使用–add-opens 打开特定的软件包才行。</li><li><strong>向量 API（孵化器）</strong>：该孵化器 API 提供了一个 API 的初始迭代以表达一些向量计算，这些计算在运行时可靠地编译为支持的 CPU 架构上的最佳向量硬件指令，从而获得优于同等标量计算的性能，充分利用单指令多数据（SIMD）技术（大多数现代 CPU 上都可以使用的一种指令）。尽管 HotSpot 支持自动向量化，但是可转换的标量操作集有限且易受代码更改的影响。该 API 将使开发人员能够轻松地用 Java 编写可移植的高性能向量算法。</li><li><strong>外部链接器 API（孵化器）</strong>：该孵化器 API 提供了静态类型、纯 Java 访问原生代码的特性，该 API 将大大简化绑定原生库的原本复杂且容易出错的过程。Java 1.1 就已通过 Java 原生接口（JNI）支持了原生方法调用，但并不好用。Java 开发人员应该能够为特定任务绑定特定的原生库。它还提供了外来函数支持，而无需任何中间的 JNI 粘合代码。</li><li><strong>外部存储器访问 API</strong>：在 Java 14 和 Java 15 中作为孵化器 API 引入的这个 API 使 Java 程序能够安全有效地对各种外部存储器（例如本机存储器、持久性存储器、托管堆存储器等）进行操作。它提供了外部链接器 API 的基础。</li><li><strong>启用 C++14 语言特性</strong> ：它允许在 JDK C++ 源代码中使用 C++14 语言特性，并提供在 HotSpot 代码中可以使用哪些特性的具体指导。在 JDK 15 中，JDK 中 C++ 代码使用的语言特性仅限于 C++98/03 语言标准。它要求更新各种平台编译器的最低可接受版本。</li><li><strong>AlpineLinux 移植；JEP 388，Windows/AArch64 移植</strong> ：这些 JEP 的重点不是移植工作本身，而是将它们集成到 JDK 主线存储库中；JEP 386 将 JDK 移植到 Alpine Linux 和其他使用 musl 作为 x64 上主要 C 库的发行版上。此外，JEP 388 将 JDK 移植到 Windows AArch64（ARM64）。</li></ul><h3 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h3>`,8),q={href:"https://docs.oracle.com/en/java/javase/16/language/java-language-changes.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.oracle.com/java/technologies/javase/16all-relnotes.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.infoq.cn/article/IAkwhx7i9V7G8zLVEd4L",target:"_blank",rel:"noopener noreferrer"};function W(B,H){const e=o("ExternalLinkIcon");return i(),r("div",null,[p,d,u,h,n("table",null,[v,n("tbody",null,[n("tr",null,[g,_,n("td",null,[n("a",k,[a("JEP 359"),t(e)])]),m]),n("tr",null,[J,f,n("td",null,[n("a",b,[a("JEP 384"),t(e)])]),j]),n("tr",null,[P,I,n("td",null,[n("a",D,[a("JEP 395"),t(e)])]),w])])]),x,n("table",null,[y,n("tbody",null,[n("tr",null,[E,A,n("td",null,[n("a",S,[a("JEP 305"),t(e)])]),K]),n("tr",null,[C,T,n("td",null,[n("a",N,[a("JEP 375"),t(e)])]),U]),n("tr",null,[L,Z,n("td",null,[n("a",G,[a("JEP 394"),t(e)])]),R])])]),V,n("ul",null,[n("li",null,[n("a",q,[a("Java Language Changes"),t(e)])]),n("li",null,[n("a",z,[a("Consolidated JDK 16 Release Notes"),t(e)])]),n("li",null,[n("a",O,[a("Java 16 正式发布，新特性一一解析"),t(e)])])])])}const X=l(c,[["render",W],["__file","java16.html.vue"]]),Q=JSON.parse('{"path":"/java/new-features/java16.html","title":"Java 16 新特性概览","lang":"zh-CN","frontmatter":{"icon":"java","title":"Java 16 新特性概览","category":["Java"],"headerDepth":5,"date":"2021-11-20T00:00:00.000Z","order":8,"tag":["Java新特性"],"description":"Java 16 新特性概览 Java 16 记录类型（转正） 变更历史： 从 Java SE 16 开始，非静态内部类可以定义非常量的静态成员。 在 JDK 16 之前，如果写上面这种代码，IDE 会提示你静态字段 age 不能在非静态的内部类中定义，除非它用一个常量表达式初始化。（The field age cannot be declared st...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/java/new-features/java16.html"}],["meta",{"property":"og:title","content":"Java 16 新特性概览"}],["meta",{"property":"og:description","content":"Java 16 新特性概览 Java 16 记录类型（转正） 变更历史： 从 Java SE 16 开始，非静态内部类可以定义非常量的静态成员。 在 JDK 16 之前，如果写上面这种代码，IDE 会提示你静态字段 age 不能在非静态的内部类中定义，除非它用一个常量表达式初始化。（The field age cannot be declared st..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:published_time","content":"2021-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 16 新特性概览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"Java 16","slug":"java-16","link":"#java-16","children":[{"level":3,"title":"记录类型（转正）","slug":"记录类型-转正","link":"#记录类型-转正","children":[]},{"level":3,"title":"instanceof 模式匹配（转正）","slug":"instanceof-模式匹配-转正","link":"#instanceof-模式匹配-转正","children":[]},{"level":3,"title":"预览新特性","slug":"预览新特性","link":"#预览新特性","children":[{"level":4,"title":"密封类","slug":"密封类","link":"#密封类","children":[]}]},{"level":3,"title":"其他优化与改进","slug":"其他优化与改进","link":"#其他优化与改进","children":[]},{"level":3,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":6.38,"words":1915},"filePathRelative":"java/new-features/java16.md","localizedDate":"2021年11月20日","excerpt":"<p>Java 16 新特性概览</p>\\n","autoDesc":true}');export{X as comp,Q as data};
