import{_ as p}from"./true-image-20210601002120191-DxfPVPxz.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as u,c as h,b as n,d as a,w as s,a as i,e as t}from"./app-DXPUtFHE.js";const m={},v=n("p",null,"摘要生成位置，66666666",-1),k={class:"hint-container details"},g=n("summary",null,"内容目录",-1),b={class:"table-of-contents"},f=i('<h1 id="测试md-h1" tabindex="-1"><a class="header-anchor" href="#测试md-h1"><span>测试md h1</span></a></h1><h2 id="基础概-h2" tabindex="-1"><a class="header-anchor" href="#基础概-h2"><span>基础概 h2</span></a></h2><h3 id="java-语言-h3" tabindex="-1"><a class="header-anchor" href="#java-语言-h3"><span>Java 语言 h3</span></a></h3><h4 id="有哪些特-h4" tabindex="-1"><a class="header-anchor" href="#有哪些特-h4"><span>有哪些特 h4</span></a></h4><h5 id="有哪些特-h5" tabindex="-1"><a class="header-anchor" href="#有哪些特-h5"><span>有哪些特 h5</span></a></h5><h6 id="有哪些特-h6" tabindex="-1"><a class="header-anchor" href="#有哪些特-h6"><span>有哪些特 h6</span></a></h6><h2 id="视频" tabindex="-1"><a class="header-anchor" href="#视频"><span>视频</span></a></h2><p>引入B站视频</p>',8),y=i(`<hr><h2 id="代码折叠" tabindex="-1"><a class="header-anchor" href="#代码折叠"><span>代码折叠</span></a></h2><details class="hint-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="插入pdf文件" tabindex="-1"><a class="header-anchor" href="#插入pdf文件"><span>插入PDF文件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;PDF url=&quot;/java/pdf/date.pdf&quot; :height=&quot;420&quot; /&gt;
&lt;PDF url=&quot;https://topjfk.oss-cn-chengdu.aliyuncs.com/docker/01.为什么要学习.pdf&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x=i(`<hr><blockquote><p>&lt;!-- @include: ./test-i.md{6-} --&gt;</p></blockquote><hr><h2 id="导入文件测试" tabindex="-1"><a class="header-anchor" href="#导入文件测试"><span>导入文件测试</span></a></h2><p>使用 <code>&lt;!-- @include: filename --&gt;</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end}--&gt;</code></li></ul><p>同时你也可以导入文件区域:</p><p><code>&lt;!-- @include: filename#snippet-data --&gt;</code></p><p>域内容被 <code>#region</code> 和 <code>#endregion</code> 注释包围。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
<span class="token title important"><span class="token punctuation">##</span> Hello world</span>

<span class="token comment">&lt;!-- #region snippet-data --&gt;</span>

Lorem ipsum dolor sit amet consectetur adipisicing 

<span class="token comment">&lt;!-- #endregion snippet-data --&gt;</span>

Veniam harum illum 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能让你热闹热闹如</p><p>能让你热闹热闹如</p><blockquote><p>哪些特哪 <em>些特</em> 哪些特哪 <strong>些特</strong> 哪些特</p><p>哪 <mark>些特</mark> 哪<code>些特哪些特哪些</code>特哪些特</p></blockquote><p>重中之重<code>走着走着</code>自作主张自增</p><ol><li>简单易学；</li><li>面向对象（<em>封装</em>，<em>继承</em>，<strong>多态</strong>）；</li><li>平台无关。</li></ol><ul><li>aaa</li><li>手动阀手动阀</li><li><ul><li>了了离开了</li></ul></li></ul><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h2><table><thead><tr><th>参数</th><th></th></tr></thead><tbody><tr><td>name</td><td><em>xxx</em>22</td></tr><tr><td>age</td><td><code>22</code></td></tr><tr><td>xx</td><td>xx <strong>xx</strong> xx实现<mark>平台无关</mark>性x<br><code>sdfsdf</code></td></tr><tr><td>xx</td><td>xx xx xx实现<strong>平台</strong>无关性x</td></tr></tbody></table><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token comment"># prod、 \`dev\`、test</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">shared-configs</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> application<span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
            <span class="token key atrule">group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> jf
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@description</span> 描述
 * <span class="token keyword">@date</span> 2022/07/05 15:46
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;requestInterceptor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RequestInterceptor</span> <span class="token function">requestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RequestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function _(w,j){const e=l("router-link"),o=l("BiliBili"),c=l("VidStack"),d=l("PDF");return u(),h("div",null,[v,n("details",k,[g,n("nav",b,[n("ul",null,[n("li",null,[a(e,{to:"#基础概-h2"},{default:s(()=>[t("基础概 h2")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#java-语言-h3"},{default:s(()=>[t("Java 语言 h3")]),_:1})])])]),n("li",null,[a(e,{to:"#视频"},{default:s(()=>[t("视频")]),_:1})]),n("li",null,[a(e,{to:"#代码折叠"},{default:s(()=>[t("代码折叠")]),_:1})]),n("li",null,[a(e,{to:"#插入pdf文件"},{default:s(()=>[t("插入PDF文件")]),_:1})]),n("li",null,[a(e,{to:"#导入文件测试"},{default:s(()=>[t("导入文件测试")]),_:1})]),n("li",null,[a(e,{to:"#表格"},{default:s(()=>[t("表格")]),_:1})]),n("li",null,[a(e,{to:"#代码块"},{default:s(()=>[t("代码块")]),_:1})])])])]),f,a(o,{bvid:"BV1SN4y1u7sV"}),a(c,{src:"/music/chenchusheng-ymyrgsn.mp3",title:"陈楚生-有没有人告诉你"}),y,a(d,{url:"https://topjfk.oss-cn-chengdu.aliyuncs.com/docker/01.为什么要学习.pdf"}),x])}const D=r(m,[["render",_],["__file","markdown.html.vue"]]),T=JSON.parse('{"path":"/markdown.html","title":"测试md","lang":"zh-CN","frontmatter":{"icon":"edit","title":"测试md","category":["Java"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","sticky":true,"star":true,"tag":["Java"],"sidebar":false,"gitInclude":["../docs/test-i.md"],"description":"摘要生成位置，66666666 内容目录 测试md h1 基础概 h2 Java 语言 h3 有哪些特 h4 有哪些特 h5 有哪些特 h6 视频 引入B站视频","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/markdown.html"}],["meta",{"property":"og:title","content":"测试md"}],["meta",{"property":"og:description","content":"摘要生成位置，66666666 内容目录 测试md h1 基础概 h2 Java 语言 h3 有哪些特 h4 有哪些特 h5 有哪些特 h6 视频 引入B站视频"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-29T14:00:10.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-29T14:00:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"测试md\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-29T14:00:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"基础概 h2","slug":"基础概-h2","link":"#基础概-h2","children":[{"level":3,"title":"Java 语言 h3","slug":"java-语言-h3","link":"#java-语言-h3","children":[{"level":4,"title":"有哪些特 h4","slug":"有哪些特-h4","link":"#有哪些特-h4","children":[{"level":5,"title":"有哪些特 h5","slug":"有哪些特-h5","link":"#有哪些特-h5","children":[{"level":6,"title":"有哪些特 h6","slug":"有哪些特-h6","link":"#有哪些特-h6","children":[]}]}]}]}]},{"level":2,"title":"视频","slug":"视频","link":"#视频","children":[]},{"level":2,"title":"代码折叠","slug":"代码折叠","link":"#代码折叠","children":[]},{"level":2,"title":"插入PDF文件","slug":"插入pdf文件","link":"#插入pdf文件","children":[]},{"level":2,"title":"导入文件测试","slug":"导入文件测试","link":"#导入文件测试","children":[]},{"level":2,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":2,"title":"代码块","slug":"代码块","link":"#代码块","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1706536810000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":1.09,"words":327},"filePathRelative":"markdown.md","localizedDate":"2020年1月1日","excerpt":"<p>摘要生成位置，66666666</p>\\n","autoDesc":true}');export{D as comp,T as data};
