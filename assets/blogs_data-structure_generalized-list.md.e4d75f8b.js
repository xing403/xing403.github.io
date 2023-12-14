import{_ as i,C as e,c as s,H as t,k as a,w as d,a as r,Q as n,o as c}from"./chunks/framework.b0840c63.js";const P=JSON.parse('{"title":"广义表","description":"","frontmatter":{"title":"广义表","layout":"doc"},"headers":[],"relativePath":"blogs/data-structure/generalized-list.md","filePath":"blogs/data-structure/generalized-list.md","lastUpdated":1698109494000}'),h={name:"blogs/data-structure/generalized-list.md"},_=a("h1",{id:"广义表",tabindex:"-1"},[r("广义表 "),a("a",{class:"header-anchor",href:"#广义表","aria-label":'Permalink to "广义表"'},"​")],-1),p={style:{display:"flex",gap:"10px"}},u=n('<h2 id="广义表定义" tabindex="-1">广义表定义 <a class="header-anchor" href="#广义表定义" aria-label="Permalink to &quot;广义表定义&quot;">​</a></h2><p>广义表又称列表(List)，是 n≥0 个元素 (a1,a2,a3,...,an) 的优先序列，其中ai是原子数据类型或者是一个广义表，记</p><div style="text-align:center;">LS=(a1,a2,a3,...,an)</div><ul><li>LS : 表示表名</li><li>ai : 表示元素，通常小写字母表示元素是原子数据类型，大写字母表示元素是广义表</li></ul><h3 id="广义表表头" tabindex="-1">广义表表头 <a class="header-anchor" href="#广义表表头" aria-label="Permalink to &quot;广义表表头&quot;">​</a></h3><p>广义表的第一个元素(a1),可以是一个原子类型也可以是一个广义表</p><h3 id="广义表表尾" tabindex="-1">广义表表尾 <a class="header-anchor" href="#广义表表尾" aria-label="Permalink to &quot;广义表表尾&quot;">​</a></h3><p>广义表中除了第一个元素之外的其他元素组成的广义表 --&gt; 表尾是一个表</p><p>广义表可以使用 &quot;()&quot; 表示，其中()的最深层数表示表的深度， 表的次序 ：一个直接前驱，一个直接后继</p><h4 id="例如" tabindex="-1">例如 <a class="header-anchor" href="#例如" aria-label="Permalink to &quot;例如&quot;">​</a></h4><p>LS = (a1) : LS中有一个元素 表头为 a1，表尾为 () LS = (a1, a2) ：LS中有两个元素 表头为 a1，表尾为 (a2) LS = (a1, ()) ：LS中有两个元素 表头为 a1，表尾为 (()) LS = (a1, a2,()) ：LS中有三个元素 表头为 a1，表尾为 (a2,())</p><h4 id="表的共享" tabindex="-1">表的共享 <a class="header-anchor" href="#表的共享" aria-label="Permalink to &quot;表的共享&quot;">​</a></h4><p>两个广义表 A，B, 其中A和 B 的关系 B = (A)</p><h4 id="表的递归" tabindex="-1">表的递归 <a class="header-anchor" href="#表的递归" aria-label="Permalink to &quot;表的递归&quot;">​</a></h4><p>有一个广义表 A，其中 A = (A)</p>',15);function m(b,f,x,S,q,g){const l=e("el-divider"),o=e("el-tag");return c(),s("div",null,[_,t(l),a("div",p,[t(o,null,{default:d(()=>[r("data structure")]),_:1})]),u])}const k=i(h,[["render",m]]);export{P as __pageData,k as default};
