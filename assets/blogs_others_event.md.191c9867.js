import{_ as e,C as a,c,H as n,k as s,w as t,a as l,Q as r,o as i}from"./chunks/framework.b0840c63.js";const B=JSON.parse('{"title":"PC端和移动端交互事件","description":"","frontmatter":{"title":"PC端和移动端交互事件","layout":"doc"},"headers":[],"relativePath":"blogs/others/event.md","filePath":"blogs/others/event.md","lastUpdated":1694504129000}'),E={name:"blogs/others/event.md"},y=s("h1",{id:"pc端和移动端交互事件",tabindex:"-1"},[l("PC端和移动端交互事件 "),s("a",{class:"header-anchor",href:"#pc端和移动端交互事件","aria-label":'Permalink to "PC端和移动端交互事件"'},"​")],-1),d={style:{display:"flex",gap:"10px"}},h=r(`<h2 id="鼠标事件" tabindex="-1">鼠标事件 <a class="header-anchor" href="#鼠标事件" aria-label="Permalink to &quot;鼠标事件&quot;">​</a></h2><h3 id="鼠标左键单击" tabindex="-1">鼠标左键单击 <a class="header-anchor" href="#鼠标左键单击" aria-label="Permalink to &quot;鼠标左键单击&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标左键点击 &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">click</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标左键点击 &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标右键单击" tabindex="-1">鼠标右键单击 <a class="header-anchor" href="#鼠标右键单击" aria-label="Permalink to &quot;鼠标右键单击&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">contextmenu</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标右键点击 &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">contextmenu</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标右键点击 &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标左键双击点击" tabindex="-1">鼠标左键双击点击 <a class="header-anchor" href="#鼠标左键双击点击" aria-label="Permalink to &quot;鼠标左键双击点击&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dblclick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标左键双击点击 &#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dblclick</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标左键双击点击 &#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标按下" tabindex="-1">鼠标按下 <a class="header-anchor" href="#鼠标按下" aria-label="Permalink to &quot;鼠标按下&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mousedown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标按下&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mousedown</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标按下&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标释放" tabindex="-1">鼠标释放 <a class="header-anchor" href="#鼠标释放" aria-label="Permalink to &quot;鼠标释放&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mouseup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标释放&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mouseup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标释放&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标移动" tabindex="-1">鼠标移动 <a class="header-anchor" href="#鼠标移动" aria-label="Permalink to &quot;鼠标移动&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mousemove</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标移动&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mousemove</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标移动&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标移入" tabindex="-1">鼠标移入 <a class="header-anchor" href="#鼠标移入" aria-label="Permalink to &quot;鼠标移入&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mouseover</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标移入&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mouseover</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标移入&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标移出" tabindex="-1">鼠标移出 <a class="header-anchor" href="#鼠标移出" aria-label="Permalink to &quot;鼠标移出&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mouseout</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标移出&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mouseout</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标移出&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标进入-在元素内移动时触发-不会冒泡" tabindex="-1">鼠标进入（在元素内移动时触发，不会冒泡） <a class="header-anchor" href="#鼠标进入-在元素内移动时触发-不会冒泡" aria-label="Permalink to &quot;鼠标进入（在元素内移动时触发，不会冒泡）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mouseenter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标进入（在元素内移动时触发，不会冒泡）&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mouseenter</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标进入（在元素内移动时触发，不会冒泡）&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标离开-从元素内移出时触发-不会冒泡" tabindex="-1">鼠标离开（从元素内移出时触发，不会冒泡） <a class="header-anchor" href="#鼠标离开-从元素内移出时触发-不会冒泡" aria-label="Permalink to &quot;鼠标离开（从元素内移出时触发，不会冒泡）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mouseleave</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标离开（从元素内移出时触发，不会冒泡）&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mouseleave</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标离开（从元素内移出时触发，不会冒泡）&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="鼠标滚轮滚动" tabindex="-1">鼠标滚轮滚动 <a class="header-anchor" href="#鼠标滚轮滚动" aria-label="Permalink to &quot;鼠标滚轮滚动&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">wheel</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;鼠标滚轮滚动&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wheel</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;鼠标滚轮滚动&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h2 id="键盘事件" tabindex="-1">键盘事件 <a class="header-anchor" href="#键盘事件" aria-label="Permalink to &quot;键盘事件&quot;">​</a></h2><h3 id="键盘按键按下" tabindex="-1">键盘按键按下 <a class="header-anchor" href="#键盘按键按下" aria-label="Permalink to &quot;键盘按键按下&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">keydown</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;键盘按键按下&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">keydown</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;键盘按键按下&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="键盘按键释放" tabindex="-1">键盘按键释放 <a class="header-anchor" href="#键盘按键释放" aria-label="Permalink to &quot;键盘按键释放&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">keyup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;键盘按键释放&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">keyup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;键盘按键释放&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="键盘按键输入" tabindex="-1">键盘按键输入 <a class="header-anchor" href="#键盘按键输入" aria-label="Permalink to &quot;键盘按键输入&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">keypress</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;键盘按键输入&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">keypress</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;键盘按键输入&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h2 id="触摸事件" tabindex="-1">触摸事件 <a class="header-anchor" href="#触摸事件" aria-label="Permalink to &quot;触摸事件&quot;">​</a></h2><h3 id="触摸开始" tabindex="-1">触摸开始 <a class="header-anchor" href="#触摸开始" aria-label="Permalink to &quot;触摸开始&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touchstart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;触摸开始&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touchstart</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触摸开始&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="触摸结束" tabindex="-1">触摸结束 <a class="header-anchor" href="#触摸结束" aria-label="Permalink to &quot;触摸结束&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touchend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;触摸结束&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touchend</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触摸结束&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="触摸移动" tabindex="-1">触摸移动 <a class="header-anchor" href="#触摸移动" aria-label="Permalink to &quot;触摸移动&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touchmove</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;触摸移动&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touchmove</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触摸移动&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="触摸取消" tabindex="-1">触摸取消 <a class="header-anchor" href="#触摸取消" aria-label="Permalink to &quot;触摸取消&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">touchcancel</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;触摸取消&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">touchcancel</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触摸取消&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h2 id="拖放事件" tabindex="-1">拖放事件 <a class="header-anchor" href="#拖放事件" aria-label="Permalink to &quot;拖放事件&quot;">​</a></h2><h3 id="拖动开始" tabindex="-1">拖动开始 <a class="header-anchor" href="#拖动开始" aria-label="Permalink to &quot;拖动开始&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dragstart</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拖动开始&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dragstart</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;拖动开始&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="拖动结束" tabindex="-1">拖动结束 <a class="header-anchor" href="#拖动结束" aria-label="Permalink to &quot;拖动结束&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dragend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拖动结束&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dragend</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;拖动结束&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="在可拖动元素上方拖动时触发" tabindex="-1">在可拖动元素上方拖动时触发 <a class="header-anchor" href="#在可拖动元素上方拖动时触发" aria-label="Permalink to &quot;在可拖动元素上方拖动时触发&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dragover</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;在可拖动元素上方拖动时触发&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dragover</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;在可拖动元素上方拖动时触发&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="拖动进入目标区域" tabindex="-1">拖动进入目标区域 <a class="header-anchor" href="#拖动进入目标区域" aria-label="Permalink to &quot;拖动进入目标区域&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dragenter</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拖动进入目标区域&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dragenter</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;拖动进入目标区域&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="拖动离开目标区域" tabindex="-1">拖动离开目标区域 <a class="header-anchor" href="#拖动离开目标区域" aria-label="Permalink to &quot;拖动离开目标区域&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">dragleave</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;拖动离开目标区域&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">dragleave</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;拖动离开目标区域&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="完成拖放操作" tabindex="-1">完成拖放操作 <a class="header-anchor" href="#完成拖放操作" aria-label="Permalink to &quot;完成拖放操作&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">drop</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;完成拖放操作&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">drop</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;完成拖放操作&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h2 id="窗口事件" tabindex="-1">窗口事件 <a class="header-anchor" href="#窗口事件" aria-label="Permalink to &quot;窗口事件&quot;">​</a></h2><h3 id="窗口大小改变" tabindex="-1">窗口大小改变 <a class="header-anchor" href="#窗口大小改变" aria-label="Permalink to &quot;窗口大小改变&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;窗口大小改变&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;窗口大小改变&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="滚动条滚动" tabindex="-1">滚动条滚动 <a class="header-anchor" href="#滚动条滚动" aria-label="Permalink to &quot;滚动条滚动&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">scroll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;滚动条滚动&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">scroll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;滚动条滚动&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div>`,57);function g(v,u,F,b,k,C){const p=a("el-divider"),o=a("el-tag");return i(),c("div",null,[y,n(p),s("div",d,[n(o,null,{default:t(()=>[l("javascript")]),_:1})]),h])}const q=e(E,[["render",g]]);export{B as __pageData,q as default};
