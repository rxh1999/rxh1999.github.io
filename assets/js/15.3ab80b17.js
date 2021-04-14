(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{520:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"安装和配置clash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置clash"}},[s._v("#")]),s._v(" 安装和配置Clash")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/Dreamacro/clash/releases/download/v1.5.0/clash-linux-amd64-v1.5.0.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" -d clash-linux-amd64-v1.5.0.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" clash-linux-amd64-v1.5.0 /usr/local/bin/clash \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/clash \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -r ~/.config/clash\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" your/config/file.yml ~/.config/clash/config.yml\nclash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("访问http://clash.razord.top/#/proxies，在设置中查看HTTP代理端口和Socks5代理端口")])]),s._v(" "),n("li",[n("p",[s._v("配置vpn")]),s._v(" "),n("p",[s._v("Settings->Network->VPN->Network Proxy")]),s._v(" "),n("p",[n("img",{attrs:{src:"/home/rxh/vuepress/blog/img/041501clash.png",alt:"041501clash"}})])])]),s._v(" "),n("h1",{attrs:{id:"添加clash启动服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加clash启动服务"}},[s._v("#")]),s._v(" 添加Clash启动服务")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("添加service文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/clash.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("在User处填写当前用户的名称")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[Unit]\nDescription=clash service\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nExecStart=/usr/local/bin/clash\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("设置Clash开机启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("systemctl daemon-reload\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" clash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("其他功能")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" clash start "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" clash stop "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" clash restart "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" clash status "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])]),s._v(" "),n("h1",{attrs:{id:"参考文献"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),n("p",[s._v("https://suan.eu.org/post/clash-%E6%95%99%E7%A8%8B/")])])}),[],!1,null,null,null);a.default=e.exports}}]);