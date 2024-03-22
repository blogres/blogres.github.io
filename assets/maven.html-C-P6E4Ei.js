import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as p,b as n,e as s,d as e,a as t}from"./app-DXPUtFHE.js";const c={},r=n("p",null,"Maven管理",-1),d=n("h2",{id:"安装与配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装与配置"},[n("span",null,"安装与配置")])],-1),u=n("p",null,"Windows、Linux 配置 Maven3.6、gradle 阿里下载源",-1),m={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mirrors.bfsu.edu.cn/apache/maven/",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"pom依赖查询地址：",-1),k={href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.aliyun.com/mvn/search",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="win10" tabindex="-1"><a class="header-anchor" href="#win10"><span>win10</span></a></h2><h3 id="自定义本地仓库存储地址" tabindex="-1"><a class="header-anchor" href="#自定义本地仓库存储地址"><span>自定义本地仓库存储地址</span></a></h3><p>1、打开配置文件：apache-maven-3.6.3 -&gt; conf -&gt; settings.xml</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   | Default: \${user.home}/.m2/repository
  &lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;
  --&gt;</span>
  <span class="token comment">&lt;!-- 自定义本地仓库存储地址 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">&gt;</span></span>D:\\GZRJ\\apache-maven-3.6.3\\repositorys<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置阿里仓库下载源" tabindex="-1"><a class="header-anchor" href="#配置阿里仓库下载源"><span>配置阿里仓库下载源</span></a></h3>`,5),f={href:"https://developer.aliyun.com/mvn/guide",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 设置下载源：aliyun --&gt;</span>
 <span class="token comment">&lt;!-- 设置下载源：Nexus aliyun 老版本 --&gt;</span>
  <span class="token comment">&lt;!--    &lt;mirror&gt;
		&lt;id&gt;nexus-aliyun&lt;/id&gt;
		&lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
		&lt;name&gt;Nexus aliyun&lt;/name&gt;
		&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
	&lt;/mirror&gt;--&gt;</span>
 <span class="token comment">&lt;!-- 设置下载源：aliyun 新版本--&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>aliyunmaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>阿里云公共仓库<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://maven.aliyun.com/repository/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 设置下载源：华为 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>huaweicloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://repo.huaweicloud.com/repository/maven/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- ##################jdk###############--&gt;</span>
<span class="token comment">&lt;!-- &lt;profiles&gt;
		&lt;profile&gt;
            &lt;id&gt;jdk-1.8&lt;/id&gt;
            &lt;activation&gt;
                &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
                &lt;jdk&gt;1.8&lt;/jdk&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.gource&gt;
                &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
                &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
&lt;/profiles&gt;--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一步：环境配置，在里省略</p><h2 id="linux环境" tabindex="-1"><a class="header-anchor" href="#linux环境"><span>linux环境</span></a></h2><h3 id="环境配置sudo-vim-etc-profile" tabindex="-1"><a class="header-anchor" href="#环境配置sudo-vim-etc-profile"><span>环境配置sudo vim /etc/profile</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#jdk环境</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/data/rj/jdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/data/rj/maven363
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/jre/lib/rt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/dt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${JAVA_HOME}</span>/jre/bin:<span class="token variable">\${M2_HOME}</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@kong:/<span class="token comment"># source /etc/profile</span>
root@kong:/<span class="token comment"># mvn -v</span>
Apache Maven <span class="token number">3.6</span>.3 <span class="token punctuation">(</span>cecedd343002696d0abb50b32b541b8a6ba2883f<span class="token punctuation">)</span>
Maven home: /data/rj/maven363
Java version: <span class="token number">1.8</span>.0_261, vendor: Oracle Corporation, runtime: /data/rj/jdk/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: <span class="token string">&quot;linux&quot;</span>, version: <span class="token string">&quot;5.4.50-amd64-desktop&quot;</span>, arch: <span class="token string">&quot;amd64&quot;</span>, family: <span class="token string">&quot;unix&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><p>清空文件：mvn clean</p><p>编译项目：mvn compile</p><p>打包jar：mvn package</p><p>打包并部署到本地maven目录里：mvn install</p><p><code>.jar.original</code> 结尾文件</p><blockquote><p>.jar.original 是普通 jar 包，不包含依赖</p><p>.jar 是可执行 jar 包，包含了 pom 中的所有依赖，可以直接用 <code>java -jar</code> 命令执行</p><p>如果是部署，就用 .jar</p><p>如果是给别的项目用，就要给 <code>.jar.original</code> 这个包</p></blockquote>`,14);function x(y,j){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,d,u,n("ul",null,[n("li",null,[n("a",m,[s("Maven3.X 下载地址"),e(a)])]),n("li",null,[n("a",v,[s("maven nginx导航资源"),e(a)])])]),g,n("ul",null,[n("li",null,[n("a",k,[s("maven 官网 仓库"),e(a)])]),n("li",null,[n("a",b,[s("maven 阿里云 仓库"),e(a)])])]),h,n("p",null,[n("a",f,[s("maven | gradle 阿里云官网配置指南"),e(a)])]),_])}const O=l(c,[["render",x],["__file","maven.html.vue"]]),w=JSON.parse('{"path":"/tools/maven.html","title":"Maven管理","lang":"zh-CN","frontmatter":{"icon":"configuration","title":"Maven管理","category":["开发工具"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","tag":["Maven"],"description":"Maven管理 安装与配置 Windows、Linux 配置 Maven3.6、gradle 阿里下载源 Maven3.X 下载地址 maven nginx导航资源 pom依赖查询地址： maven 官网 仓库 maven 阿里云 仓库 win10 自定义本地仓库存储地址 1、打开配置文件：apache-maven-3.6.3 -> conf -> s...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/tools/maven.html"}],["meta",{"property":"og:title","content":"Maven管理"}],["meta",{"property":"og:description","content":"Maven管理 安装与配置 Windows、Linux 配置 Maven3.6、gradle 阿里下载源 Maven3.X 下载地址 maven nginx导航资源 pom依赖查询地址： maven 官网 仓库 maven 阿里云 仓库 win10 自定义本地仓库存储地址 1、打开配置文件：apache-maven-3.6.3 -> conf -> s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T11:49:35.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T11:49:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T11:49:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"安装与配置","slug":"安装与配置","link":"#安装与配置","children":[]},{"level":2,"title":"win10","slug":"win10","link":"#win10","children":[{"level":3,"title":"自定义本地仓库存储地址","slug":"自定义本地仓库存储地址","link":"#自定义本地仓库存储地址","children":[]},{"level":3,"title":"配置阿里仓库下载源","slug":"配置阿里仓库下载源","link":"#配置阿里仓库下载源","children":[]}]},{"level":2,"title":"linux环境","slug":"linux环境","link":"#linux环境","children":[{"level":3,"title":"环境配置sudo vim /etc/profile","slug":"环境配置sudo-vim-etc-profile","link":"#环境配置sudo-vim-etc-profile","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706874575000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"tools/maven.md","localizedDate":"2020年1月1日","excerpt":"<p>Maven管理</p>\\n","autoDesc":true}');export{O as comp,w as data};
