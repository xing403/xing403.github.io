import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.b0840c63.js";const u=JSON.parse('{"title":"SpringBoot 构建 & 部署","description":"","frontmatter":{"title":"SpringBoot 构建 & 部署","layout":"doc"},"headers":[],"relativePath":"blogs/java/springboot-build-deploy.md","filePath":"blogs/java/springboot-build-deploy.md","lastUpdated":1698109494000}'),p={name:"blogs/java/springboot-build-deploy.md"},o=l(`<h1 id="springboot-构建-部署" tabindex="-1">SpringBoot 构建 &amp; 部署 <a class="header-anchor" href="#springboot-构建-部署" aria-label="Permalink to &quot;SpringBoot 构建 &amp; 部署&quot;">​</a></h1><h2 id="springboot-构建-war" tabindex="-1">SpringBoot 构建 war <a class="header-anchor" href="#springboot-构建-war" aria-label="Permalink to &quot;SpringBoot 构建 war&quot;">​</a></h2><h3 id="pxm-xml-内容" tabindex="-1">pxm.xml 内容 <a class="header-anchor" href="#pxm-xml-内容" aria-label="Permalink to &quot;pxm.xml 内容&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!--  修改打包方式: war --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">packaging</span><span style="color:#E1E4E8;">&gt;war&lt;/</span><span style="color:#85E89D;">packaging</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 控制打包的版本--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;0.0.2-SNAPSHOT&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!--  修改打包方式: war --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">packaging</span><span style="color:#24292E;">&gt;war&lt;/</span><span style="color:#22863A;">packaging</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 控制打包的版本--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;0.0.2-SNAPSHOT&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="配置依赖使用外部tomcat服务器" tabindex="-1">配置依赖使用外部Tomcat服务器 <a class="header-anchor" href="#配置依赖使用外部tomcat服务器" aria-label="Permalink to &quot;配置依赖使用外部Tomcat服务器&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;spring-boot-starter-tomcat&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">scope</span><span style="color:#E1E4E8;">&gt;provided&lt;/</span><span style="color:#85E89D;">scope</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">dependency</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.boot&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-boot-starter-tomcat&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">scope</span><span style="color:#24292E;">&gt;provided&lt;/</span><span style="color:#22863A;">scope</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">dependency</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220418150147.png" alt=""></p><h2 id="springboot-构建-jar" tabindex="-1">SpringBoot 构建 jar <a class="header-anchor" href="#springboot-构建-jar" aria-label="Permalink to &quot;SpringBoot 构建 jar&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!--  添加简单的配置项：打包的形式--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">packaging</span><span style="color:#E1E4E8;">&gt;jar&lt;/</span><span style="color:#85E89D;">packaging</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">plugins</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--      maven 打包插件--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;org.springframework.boot&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;spring-boot-maven-plugin&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">plugins</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!--  添加简单的配置项：打包的形式--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">packaging</span><span style="color:#24292E;">&gt;jar&lt;/</span><span style="color:#22863A;">packaging</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">build</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">plugins</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--      maven 打包插件--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.springframework.boot&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;spring-boot-maven-plugin&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">plugins</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">build</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="maven-打包插件" tabindex="-1">maven 打包插件 <a class="header-anchor" href="#maven-打包插件" aria-label="Permalink to &quot;maven 打包插件&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417143014.png" alt=""></p><h2 id="开始打包" tabindex="-1">开始打包 <a class="header-anchor" href="#开始打包" aria-label="Permalink to &quot;开始打包&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417143215.png" alt=""></p><blockquote><p>控制台会显示打包信息</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417143332.png" alt=""></p><blockquote><p>项目打包生成的jar包位置</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417143404.png" alt=""></p><h2 id="部署-宝塔面板" tabindex="-1">部署(宝塔面板) <a class="header-anchor" href="#部署-宝塔面板" aria-label="Permalink to &quot;部署(宝塔面板)&quot;">​</a></h2><blockquote><p>添加项目</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417150109.png" alt=""></p><blockquote><p>例如：</p></blockquote><p><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417150204.png" alt=""> 填写之后点击提交等待项目部署 <img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417150303.png" alt=""></p><blockquote><p><code>在浏览器中输入所绑定的域名即可查看项目情况</code><img src="https://raw.githubusercontent.com/xing403/images-repo/main/assets/website/20220417150507.png" alt=""> 部署成功</p></blockquote>`,23),t=[o];function e(r,c,i,g,E,y){return n(),a("div",null,t)}const m=s(p,[["render",e]]);export{u as __pageData,m as default};
