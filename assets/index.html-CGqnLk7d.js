import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as n,d as a,a as s}from"./app-DXPUtFHE.js";const i="/assets/true-20170816171523564-CGDnxGll.png",p={},c=s('<h2 id="总览" tabindex="-1"><a class="header-anchor" href="#总览"><span>总览</span></a></h2><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="概念定义" tabindex="-1"><a class="header-anchor" href="#概念定义"><span>概念定义</span></a></h2><p><strong>Producer</strong> 消息生产者</p><p>​ <strong>Producer Group</strong> 生产者组，简单来说就是多个发送同一类消息的生产者称之为一个生产者组。在这里可以不用关心，只要知道有这么一个概念即可。</p><p><strong>Consumer</strong> 消息消费者，简单来说，消费 MQ 上的消息的应用程序就是消费者，至于消息是否进行逻辑处理，还是直接存储到数据库等取决于业务需要。</p><p>​ <strong>Consumer Group</strong> 消费者组</p><p><strong>Topic</strong> 是一种消息的逻辑分类，比如说你有订单类的消息，也有库存类的消息，那么就需要进行分类，一个是订单Topic 存放订单相关的消息，一个是库存 Topic 存储库存相关的消息。</p><p><strong>Message</strong> 是消息的载体。必须指定 topic，相当于寄信的地址。可选的 tag，以便消费端可以基于 tag 进行过滤消息。也可以添加额外的键值对，例如你需要一个业务 key 来查找 broker 上的消息，方便在开发过程中诊断问题。</p><p><strong>Tag</strong> 标签可以被认为是对 Topic 进一步细化。一般在相同业务模块中通过引入标签来标记不同用途的消息。</p><p><strong>Broker</strong> 接收来自生产者的消息，储存以及为消费者拉取消息的请求做好准备。</p><p><strong>Name Server</strong> 为 producer 和 consumer 提供路由信息。</p><h2 id="场景应用-解耦-流量控制" tabindex="-1"><a class="header-anchor" href="#场景应用-解耦-流量控制"><span>场景应用：解耦，流量控制</span></a></h2><p>1.大多应用中，可通过消息服务中间件来提升系统 <strong>异步通信</strong>、<strong>扩展解耦能力</strong></p>',14);function l(g,d){const e=o("Catalog");return r(),n("div",null,[a(e),c])}const u=t(p,[["render",l],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/middleware/mq/","title":"MQ消息中间件","lang":"zh-CN","frontmatter":{"icon":"edit","title":"MQ消息中间件","article":false,"timeline":false,"index":false,"head":[["meta",{"property":"og:url","content":"https://blogres.github.io/middleware/mq/"}],["meta",{"property":"og:title","content":"MQ消息中间件"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T15:03:54.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-02-06T15:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"MQ消息中间件\\"}"]]},"headers":[{"level":2,"title":"总览","slug":"总览","link":"#总览","children":[]},{"level":2,"title":"概念定义","slug":"概念定义","link":"#概念定义","children":[]},{"level":2,"title":"场景应用：解耦，流量控制","slug":"场景应用-解耦-流量控制","link":"#场景应用-解耦-流量控制","children":[]}],"git":{"createdTime":1706536810000,"updatedTime":1707231834000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":2}]},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"middleware/mq/README.md","localizedDate":"2024年1月29日","excerpt":""}');export{u as comp,f as data};
