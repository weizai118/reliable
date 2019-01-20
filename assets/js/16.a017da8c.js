(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{167:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"jenkins-android-任务配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-android-任务配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Jenkins Android 任务配置")]),a._v(" "),r("hr"),a._v(" "),r("h2",{attrs:{id:"依赖准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖准备","aria-hidden":"true"}},[a._v("#")]),a._v(" 依赖准备")]),a._v(" "),r("h3",{attrs:{id:"环境依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境依赖")]),a._v(" "),r("p",[a._v("在 "),r("code",[a._v("reliable_home")]),a._v(" 创建 "),r("code",[a._v("gradle_cache")]),a._v(" 目录用于 Gradle 工具的缓存。")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/reliable_home/gradle_cache\n")])])]),r("h3",{attrs:{id:"docker-部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 部署")]),a._v(" "),r("p",[a._v("就像 reliable-web 一样，Reliable 环境配置倾向于容器化，推荐你使用 Android Docker 容器运行任务。")]),a._v(" "),r("h2",{attrs:{id:"示例工程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例工程","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例工程")]),a._v(" "),r("p",[r("a",{attrs:{href:"//github.com/app-bootstrap/android-app-bootstrap"}},[a._v("android-app-bootstrap")])]),a._v(" "),r("h2",{attrs:{id:"快速上手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),r("h3",{attrs:{id:"第1步-创建任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第1步-创建任务","aria-hidden":"true"}},[a._v("#")]),a._v(" 第1步 - 创建任务")]),a._v(" "),r("p",[a._v("创建一个项目名为 "),r("code",[a._v("android-app-bootstrap")]),a._v("，并且选择自由风格模式。")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2p8qmlazj21kw15ztol.jpg",width:"75%"}})]),a._v(" "),r("h3",{attrs:{id:"第2步-scm-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第2步-scm-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 第2步 - SCM 配置")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx2.sinaimg.cn/large/6d308bd9ly1ft2panw2oqj21kw15znaj.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("输入项目的 git 地址，并且选择克隆深度为 1，分支为 "),r("code",[a._v("master")]),a._v("。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("https://github.com/app-bootstrap/android-app-bootstrap.git\n")])])]),r("h3",{attrs:{id:"第3步-构建脚本配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第3步-构建脚本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 第3步 - 构建脚本配置")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2peam690j21kw15ztl8.jpg",width:"75%"}})]),a._v(" "),r("p",[r("strong",[a._v("注意")])]),a._v(" "),r("ul",[r("li",[a._v("请确保勾选构建前删除运行空间，以排除老的中间文件造成的问题。")])]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2plz2djxj21kw16pk5j.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("我们提供 Android 构建 Docker 镜像 "),r("code",[a._v("macacajs/macaca-android-build-docker")]),a._v("，你可以设置如下：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("docker stop $JOB_NAME || true && docker rm -f $JOB_NAME || true\n\ndocker run --rm \\\n  --name $JOB_NAME \\\n  -e JOB_NAME \\\n  -e BUILD_NUMBER \\\n  -e RELIABLE_SERVER_URL=http://192.168.0.102:9900 \\\n  -v $WORKSPACE:/root/src \\\n  -v $HOME/reliable_home/static:/static \\\n  -v $HOME/reliable_home/gradle_cache:/root/.gradle \\\n  macacajs/macaca-android-build-docker\n")])])]),r("p",[r("strong",[a._v("注意")])]),a._v(" "),r("ul",[r("li",[a._v("也可以不使用容器而使用系统命令行直接进行构建。")]),a._v(" "),r("li",[a._v("请确认 "),r("code",[a._v("RELIABLE_SERVER_URL")]),a._v(" 已经正确配置，可以是一个 IPV4 或者某个 url，否则会遇到如下问题：")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("error: TypeError: Cannot read property 'server' of undefined\n    at _.postToGW (/root/src/node_modules/reliable-cli/lib/helper.js:31:66)\n    at ReportCommand.pushToWebhook (/root/src/node_modules/reliable-cli/lib/report-command.js:130:18)\n    at ReportCommand._run (/root/src/node_modules/reliable-cli/lib/report-command.js:70:35)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! android-app-bootstrap@1.0.8 reliable: `reliable report -c ./reliable.config.js`\nnpm ERR! Exit status 1\n")])])]),r("h3",{attrs:{id:"第4步-理解构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第4步-理解构建","aria-hidden":"true"}},[a._v("#")]),a._v(" 第4步 - 理解构建")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx2.sinaimg.cn/large/6d308bd9ly1ft2pvmld7dj21kw148wn3.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("构建结束后，你可以在 reliable web 平台获得构建结果。")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx1.sinaimg.cn/large/6d308bd9ly1ft2pvmlnkij21kw148dph.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("比如我们能够获得 "),r("code",[a._v("android-app-bootstrap")]),a._v(" 的 "),r("code",[a._v("debug")]),a._v(" 类型包和 "),r("code",[a._v("release")]),a._v(" 类型包。")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx4.sinaimg.cn/large/6d308bd9ly1ft2pvmmewxj21kw14849j.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("Reliable 平台也支持扫码下载安装等实用功能。")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9ly1ft2pvmlz1hj21kw148tl3.jpg",width:"75%"}})]),a._v(" "),r("p",[a._v("我们也可以获得项目配置，版本等额外信息。如果需要更多上报信息可以参考上报脚本文档 "),r("a",{attrs:{href:"//github.com/macacajs/reliable-cli#configuration"}},[a._v("reliable-cli#configuration")]),a._v("。")]),a._v(" "),r("h3",{attrs:{id:"第5步-自动化测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第5步-自动化测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 第5步 - 自动化测试")]),a._v(" "),r("p",[a._v("Reliable 无缝集成 Macaca 自动化测试工具，支持通过率报告，端到端链路刻画，覆盖率等质量覆盖方案。")]),a._v(" "),r("p",[a._v("配置敬请期待！")])])}],!1,null,null,null);s.options.__file="jenkins-android.md";t.default=s.exports}}]);