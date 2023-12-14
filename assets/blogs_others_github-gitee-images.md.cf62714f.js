import{_ as n,C as p,c as g,H as t,k as o,w as a,a as s,Q as l,o as c}from"./chunks/framework.b0840c63.js";const _=JSON.parse('{"title":"github & github 图床","description":"","frontmatter":{"title":"github &amp; github 图床","layout":"doc"},"headers":[],"relativePath":"blogs/others/github-gitee-images.md","filePath":"blogs/others/github-gitee-images.md","lastUpdated":1698123543000}'),r={name:"blogs/others/github-gitee-images.md"},h=o("h1",{id:"github-github-图床",tabindex:"-1"},[s("github & github 图床 "),o("a",{class:"header-anchor",href:"#github-github-图床","aria-label":'Permalink to "github &amp; github 图床"'},"​")],-1),m={style:{display:"flex",gap:"10px"}},u=l(`<h2 id="gitee图床" tabindex="-1">gitee图床 <a class="header-anchor" href="#gitee图床" aria-label="Permalink to &quot;gitee图床&quot;">​</a></h2><h3 id="创建gitee账号" tabindex="-1">创建gitee账号 <a class="header-anchor" href="#创建gitee账号" aria-label="Permalink to &quot;创建gitee账号&quot;">​</a></h3><blockquote><p>有账号密码可以直接进行图片仓库创建</p></blockquote><p>打开gitee官网：[gitee官网]:<a href="https://gitee.com/" target="_blank" rel="noreferrer">https://gitee.com/</a></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg01.png" alt="picgoUpdateImg01"></p><p>点击右上角注册</p><p><strong>这个姓名是昵称</strong></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg02.png" alt="picgoUpdateImg02"></p><p>进行登录</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg03.png" alt=""></p><h3 id="创建图片仓库" tabindex="-1">创建图片仓库 <a class="header-anchor" href="#创建图片仓库" aria-label="Permalink to &quot;创建图片仓库&quot;">​</a></h3><p>点击用户头像旁边的加号-----&gt; 创建仓库</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg04.png" alt=""></p><p>填写仓库信息</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg05.png" alt=""></p><p>初始化readme.md文件</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg06.png" alt=""></p><p>创建仓库成功</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg07.png" alt=""></p><h2 id="创建github图床" tabindex="-1">创建github图床 <a class="header-anchor" href="#创建github图床" aria-label="Permalink to &quot;创建github图床&quot;">​</a></h2><p>如果你没有 Github账号 可以在官网 <a href="https://github.com/" target="_blank" rel="noreferrer">https://github.com/</a> 注册。</p><p>下载 git <a href="http://git-scm.com/downloads" target="_blank" rel="noreferrer">http://git-scm.com/downloads</a> <code>安装</code> -&gt; <code>打开</code></p><h3 id="输入命令" tabindex="-1">输入命令 <a class="header-anchor" href="#输入命令" aria-label="Permalink to &quot;输入命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 生成 SSH Key 备用</span></span>
<span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rsa</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;youremail@example.com&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 生成 SSH Key 备用</span></span>
<span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rsa</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;youremail@example.com&quot;</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328013908.png" alt=""></p><blockquote><p>引号里面的为自己的邮箱</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014106.png" alt=""></p><blockquote><p>生成成功,本地电脑找到这个目录</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014108.png" alt=""></p><h3 id="进入到github官网-找到-setting" tabindex="-1">进入到github官网 找到 <code>setting</code> <a class="header-anchor" href="#进入到github官网-找到-setting" aria-label="Permalink to &quot;进入到github官网 找到 \`setting\`&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014109.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014110.png" alt=""><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014111.png" alt=""> 此处的将ssh key 填入 <img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014112.png" alt=""></p><blockquote><p>测试是否连接成功</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-T</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-T</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014113.png" alt=""></p><h3 id="创建-github-仓库" tabindex="-1">创建 github 仓库 <a class="header-anchor" href="#创建-github-仓库" aria-label="Permalink to &quot;创建 github 仓库&quot;">​</a></h3><p>和 gitee 相似 <a href="http://ilstudy.vip/index.php/archives/26/" target="_blank" rel="noreferrer">http://ilstudy.vip/index.php/archives/26/</a></p><blockquote><p>创建本地项目（github仓库中有资源）</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"><span style="color:#6A737D;"># clone github资源到本地</span></span>
<span class="line"><span style="color:#6A737D;"># git clone +GitHub上创建的仓库地址</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/xing403/iotblog.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"><span style="color:#6A737D;"># clone github资源到本地</span></span>
<span class="line"><span style="color:#6A737D;"># git clone +GitHub上创建的仓库地址</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/xing403/iotblog.git</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220331135739.png" alt="20220331135739.png"></p><blockquote><p>创建本地项目（github仓库中没有资源）</p></blockquote><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014107.png" alt=""></p><h2 id="安装picgo" tabindex="-1">安装picgo <a class="header-anchor" href="#安装picgo" aria-label="Permalink to &quot;安装picgo&quot;">​</a></h2><p>官网下载：<a href="https://molunerfinn.com/PicGo/" target="_blank" rel="noreferrer">https://molunerfinn.com/PicGo/</a></p><blockquote><p>选择为谁安装该软件</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg08.png" alt=""></p><blockquote><p>选择安装路径</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg09.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg10.png" alt=""></p><blockquote><p>安装完成，点击打开</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg11.png" alt=""></p><blockquote><p>下载gitee插件</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg12.png" alt=""></p><h3 id="配置gitee图床信息" tabindex="-1">配置gitee图床信息 <a class="header-anchor" href="#配置gitee图床信息" aria-label="Permalink to &quot;配置gitee图床信息&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg13.png" alt=""></p><blockquote><p>获取token</p></blockquote><p>打开gitee页面</p><blockquote><p>点击右上角用户头像----&gt;设置</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg14.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg15.png" alt=""></p><blockquote><p>点击生成令牌</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg16.png" alt=""></p><blockquote><p>填写令牌信息</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg17.png" alt=""></p><blockquote><p>验证账号信息</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg18.png" alt=""></p><blockquote><p>注意这里令牌（token）<strong>只会出现一次</strong>，请妥善保管</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg19.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg20.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg21.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg22.png" alt=""></p><p>将图片拖拽的上传区就可自动上传，可以多个图片一起上传，在PicGo中有快捷键设置上传，方便上传操作</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/images/tools/picgoUpdateImg23.png" alt=""></p><h3 id="配置-github-图床信息" tabindex="-1">配置 GitHub 图床信息 <a class="header-anchor" href="#配置-github-图床信息" aria-label="Permalink to &quot;配置 GitHub 图床信息&quot;">​</a></h3><h4 id="生成-github-的-token" tabindex="-1">生成 github 的 token <a class="header-anchor" href="#生成-github-的-token" aria-label="Permalink to &quot;生成 github 的 token&quot;">​</a></h4><p>settings -&gt; Developer settings -&gt; Personal access tokens</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014206.png" alt=""><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014207.png" alt=""></p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014208.png" alt=""><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014209.png" alt=""> 保存好，token 忘记只能再次生成 配置 Picgo</p><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220328014210.png" alt=""></p><h2 id="安装snipaste" tabindex="-1">安装snipaste <a class="header-anchor" href="#安装snipaste" aria-label="Permalink to &quot;安装snipaste&quot;">​</a></h2><p>snipaste是一个截图工具，配合picgo使用，截完图直接通过快捷键或者拖拽到上传区，之后将图片上传到图床</p><p>官网下载：<a href="https://www.snipaste.com/download.html" target="_blank" rel="noreferrer">https://www.snipaste.com/download.html</a></p><p>快捷键 <strong>F1</strong> 进行截屏，笔记本截屏可能需要使用 <strong>Fn + F1</strong></p>`,84);function b(d,k,y,w,x,q){const i=p("el-divider"),e=p("el-tag");return c(),g("div",null,[h,t(i),o("div",m,[t(e,null,{default:a(()=>[s("github")]),_:1}),t(e,null,{default:a(()=>[s("gitee")]),_:1}),t(e,null,{default:a(()=>[s("图床工具")]),_:1})]),u])}const F=n(r,[["render",b]]);export{_ as __pageData,F as default};