(window["webpackJsonpkuaqson.github.io"]=window["webpackJsonpkuaqson.github.io"]||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),o=t.n(l),c=(t(86),t(87),t(145)),i=t(144),m=t(14),s=t(20),u=t(18),d=t(17),p=t(19),g=t(143),E=t(146),b=t(147),h=t(128),f=t(123),v=t(124),w=t(125),x=t(126),y=t(127),j=function(){return r.a.createElement(i.a,{direction:"row",justify:"center"},r.a.createElement(g.a,{plain:!0,justifyContent:"center",dropProps:{align:{top:"bottom"}},items:[{label:r.a.createElement(i.a,{color:"brand",alignSelf:"center",pad:{right:"32px"}},"About me"),onClick:function(){return S("#about")},icon:r.a.createElement(i.a,{pad:{vertical:"12px",left:"32px",right:"16px"}},r.a.createElement(f.a,{color:"brand",size:"medium"}))},{label:r.a.createElement(i.a,{color:"brand",alignSelf:"center",pad:{right:"32px"}},"Projects"),onClick:function(){return S("#projects")},icon:r.a.createElement(i.a,{pad:{vertical:"12px",left:"32px",right:"16px"}},r.a.createElement(v.a,{color:"brand",size:"medium"}))},{label:r.a.createElement(i.a,{color:"brand",alignSelf:"center",pad:{right:"32px"}},"Contact"),onClick:function(){return S("#contact")},icon:r.a.createElement(i.a,{pad:{vertical:"12px",left:"32px",right:"16px"}},r.a.createElement(w.a,{color:"brand",size:"medium"}))}]},r.a.createElement(i.a,{direction:"row",gap:"small",pad:"medium",align:"center"},r.a.createElement(x.a,{color:"brand"}),r.a.createElement(E.a,{color:"brand",weight:"bold",size:"1.25rem"},"Quang Son Nguyen"),r.a.createElement(y.a,null))))},k=function(){return r.a.createElement(i.a,{direction:"row",justify:"between",alignSelf:"center",align:"center",gap:"medium",pad:{vertical:"small",horizontal:"medium"}},r.a.createElement(i.a,{direction:"row",gap:"small",align:"center"},r.a.createElement(x.a,{color:"brand",size:"36px"}),r.a.createElement(E.a,{color:"brand",weight:"bold",size:"1.25rem"},"Quang Son Nguyen")),r.a.createElement(i.a,{direction:"row",gap:"medium",justify:"center"},r.a.createElement(b.a,{a11yTitle:"About",href:"#about",label:"About me",icon:r.a.createElement(f.a,{color:"brand",size:"medium"})}),r.a.createElement(b.a,{a11yTitle:"Projects by me",href:"#projects",label:"Projects",icon:r.a.createElement(v.a,{color:"brand",size:"medium"})}),r.a.createElement(b.a,{a11yTitle:"Contact me",href:"#contact",label:"Contact",icon:r.a.createElement(w.a,{color:"brand",size:"medium"})})))},S=function(e){setTimeout((function(){window.location.replace(e)}),0)},_=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).handleScroll=function(){var e=t.state.prevScrollpos,a=window.pageYOffset,n=e>a;t.setState({prevScrollpos:a,visible:n})},t.state={prevScrollpos:window.pageYOffset,visible:!0},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=["navbar"];return!this.state.visible&&e.push("navbar--hidden"),this.state.prevScrollpos&&e.push("navbar--sahdow"),r.a.createElement(h.a.Consumer,null,(function(a){return r.a.createElement("div",{className:e.join(" ")},"xsmall"!==a&&"small"!==a&&r.a.createElement(k,null),("xsmall"===a||"small"===a)&&r.a.createElement(j,null))}))}}]),a}(r.a.Component),N=t(129),z=t(130),C=t(131);var O=function(){return r.a.createElement(i.a,{background:{color:"brand"},pad:"small"},r.a.createElement(i.a,{direction:"row",justify:"center",align:"center",gap:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(N.a,null),href:"https://www.facebook.com/quangson.nguyen.399",target:"_blank",color:"#fff"}),r.a.createElement(b.a,{icon:r.a.createElement(z.a,null),href:"https://github.com/KuaqSon",target:"_blank",color:"#fff"})),r.a.createElement(i.a,{direction:"row",justify:"center",align:"center",gap:"medium",pad:"small"},r.a.createElement(E.a,{color:"#fff"},"2019"),r.a.createElement(C.a,null),r.a.createElement(E.a,{color:"#fff"},"Made by Quang Son Nguyen")))};var q=function(){return r.a.createElement(i.a,{height:{min:"100vh"},justify:"center"},r.a.createElement(i.a,{animation:{type:"zoomOut",duration:1e3,size:"large"}},r.a.createElement("div",{className:"container greeting-container"},r.a.createElement("div",{className:"greeting-sm text-outline"},"Hello, my name is"),r.a.createElement("div",{className:"greeting-main text-outline"},"Quang Son Nguyen"),r.a.createElement("div",{className:"greeting-second text-outline"},"I'm a web developer"))))},A=t(132),H=function(e){return r.a.createElement(h.a.Consumer,null,(function(a){return r.a.createElement(i.a,{direction:"row",gap:"medium",align:"start",pad:{vertical:"medium"}},r.a.createElement(A.a,{color:"brand",size:"large"}),r.a.createElement(E.a,{color:"brand",size:"small"===a?"24px":"36px"},e))}))},I=t(11),K=t.n(I),M=t(133),T=t(134),R=t(135),J=t(136),L=t(137),P=t(138),Q=t(139),U=t(140),G=t(76),W=t(59),Y=t(72),D=t.n(Y),B=t(148),X=function(e,a){return[-(a-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},F=function(e,a,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(a,"deg) scale(").concat(t,")")};var V=function(){var e=Object(W.b)((function(){return{xys:[0,0,1],config:{mass:4,tension:100,friction:40}}})),a=Object(G.a)(e,2),t=a[0],n=a[1];return r.a.createElement(W.a.div,{onMouseMove:function(e){var a=e.clientX,t=e.clientY;return n({xys:X(a,t)})},onMouseLeave:function(){return n({xys:[0,0,1]})},style:{transform:t.xys.interpolate(F)}},r.a.createElement(i.a,{direction:"row",justify:"center"},r.a.createElement(i.a,{height:"medium",width:"medium",elevation:"large",round:"large"},r.a.createElement(B.a,{fit:"cover",src:D.a,className:"avatar-img"}))))};var $=function(){return r.a.createElement(i.a,{height:{min:"100vh"},id:"about"},r.a.createElement("div",{className:"container section-container"},H("A little bit about me"),r.a.createElement(i.a,{direction:"row-responsive",align:"start",gap:"large",justify:"between"},r.a.createElement(i.a,null,r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{width:{max:"768px"}},r.a.createElement(E.a,{color:"brand"},"Hello! I'm Quang Son, a web developer based in Ho Chi Minh, Viet Nam who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends."))),r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{pad:{vertical:"medium"}},r.a.createElement(E.a,{color:"brand"},"Here's a few technologies I've been working with recently:"),r.a.createElement("div",{className:"tech-types"},r.a.createElement(i.a,{width:{min:"220px"},pad:{vertical:"small"}},r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(M.a,{color:"brand"})," Javascript"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(T.a,{color:"brand"})," HTML & CSS"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(R.a,{color:"brand"})," ReactJs"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(J.a,{color:"brand"})," Angular")),r.a.createElement(i.a,{width:{min:"220px"},pad:{vertical:"small"}},r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(L.a,{color:"brand"})," ASP.NET & ASP.NET Core"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(P.a,{color:"brand"})," NodeJs"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(Q.a,{color:"brand"})," ExpressJs"),r.a.createElement(i.a,{direction:"row",gap:"small",pad:{vertical:"xsmall"}},r.a.createElement(U.a,{color:"brand"})," Ruby on Rails")))))),r.a.createElement(K.a,{right:!0},r.a.createElement(V,null)))))},Z=(t(99),t(141)),ee=[{date:"06 August 2019",name:"Instadolo",gitUrl:"https://github.com/KuaqSon/instadolo",image_url:"https://raw.githubusercontent.com/KuaqSon/instadolo/master/demo_images/instadolo.png",demo_url:"https://kuaqson.github.io/instadolo/",specs:["Reactjs","Instagram","Html & Css"],desc:"A small web apps help you download highest resolution versions of images from instagram post.",background:"#eef3f7"},{date:"10 September 2019",name:"Good Sleep",gitUrl:"https://github.com/KuaqSon/good-sleep",image_url:"https://raw.githubusercontent.com/KuaqSon/good-sleep/master/demo_images/goodsleep.png",demo_url:"https://kuaqson.github.io/good-sleep/",specs:["Reactjs","Datetime picker","Html & Css"],desc:"This is a small web app that helps you calculate the time you go to bed and wake up to help you get a good night's sleep that will keep you awake the next day.",background:"#141e30"},{date:"09 September 2019",name:"Git Checkout",gitUrl:"https://github.com/KuaqSon/gcb-extension",image_url:"https://raw.githubusercontent.com/KuaqSon/gcb-extension/master/screenshots/demo.png",demo_url:"https://github.com/KuaqSon/gcb-extension/releases",specs:["Reactjs","Html & Css","Chrome extension"],desc:"An extension version of develoveper-vn/gcb, Help you create git branch name faster and more compatible when working with git flow.",background:"#eee"}],ae=function(e){var a=e.size,t=e.name,n=e.gitUrl,l=e.image_url,o=e.demo_url,c=e.specs,m=e.desc,s=e.background,u=e.date;return r.a.createElement("div",{className:"prj-item"},r.a.createElement("div",{className:"prj-item__container"},r.a.createElement("div",{className:"prj-item__img"},r.a.createElement("img",{src:l,alt:t,style:{backgroundColor:s}})),r.a.createElement("div",{className:"prj-item__content"},r.a.createElement("span",{className:"prj-item__time"},u),r.a.createElement("div",{className:"prj-item__title"},t),r.a.createElement("div",{className:"prj-item__desc"},m),r.a.createElement(i.a,{gap:"small",direction:"row",justify:"small"===a?"center":"start",wrap:!0,margin:{vertical:"small"}},c&&c.map((function(e){return r.a.createElement("div",{className:"prj-item__spec",key:"".concat(e," + ").concat(t)},"[".concat(e,"]"))}))),r.a.createElement(i.a,{gap:"medium",direction:"row-responsive"},r.a.createElement(b.a,{label:"Github Repository",icon:r.a.createElement(z.a,null),href:n,target:"_blank",color:"brand"}),r.a.createElement(b.a,{label:"Live Demo",icon:r.a.createElement(Z.a,null),href:o,target:"_blank",color:"brand"})))))};var te=function(){return r.a.createElement(h.a.Consumer,null,(function(e){return r.a.createElement(i.a,{height:{min:"100vh"},id:"projects"},r.a.createElement("div",{className:"container section-container"},H("Here're some funny projects i've built"),r.a.createElement(i.a,{gap:"medium",margin:{vertical:"medium"}},"small"===e&&ee.map((function(a){return r.a.createElement(ae,Object.assign({key:a.name,size:e,index:ee.indexOf(a)},a))})),"small"!==e&&ee.map((function(a){return r.a.createElement(K.a,{bottom:!0,key:a.name},r.a.createElement(ae,Object.assign({index:ee.indexOf(a),size:e},a)))})))))}))},ne=t(142);var re=function(){return r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{height:{min:"80vh"},id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{direction:"column",justify:"center",pad:{top:"48px"}},r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{direction:"row",justify:"center"},r.a.createElement(E.a,{textAlign:"center",size:"48px"},"Let's connect"))),r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{margin:{vertical:"medium"},direction:"row",justify:"center"},r.a.createElement(E.a,{textAlign:"center",size:"24px"},"Although I'm not currently looking for freelance opportunities, my inbox is always open. Feel free to connect with me. I'll try my best to answer your email!"))),r.a.createElement(K.a,{bottom:!0},r.a.createElement(i.a,{pad:{vertical:"large"},justify:"center",direction:"row"},r.a.createElement(b.a,{icon:r.a.createElement(ne.a,null),label:"Get in touch",href:"mailto:qson.ng@gmail.com",size:"large"})))))))},le=t(73),oe=t.n(le);var ce=function(){return r.a.createElement(K.a,{right:!0},r.a.createElement("div",{className:"home-img",style:{backgroundImage:"url(".concat(oe.a,")")}}))},ie=t(75),me=t(74),se=Object(me.deepMerge)(ie.grommet,{global:{colors:{brand:"#021c1e",background:"#feffff","light-1":"#edf5e1",secondary:"#004445"}}});var ue=function(){return r.a.createElement(c.a,{plain:!0,theme:se},r.a.createElement(_,null),r.a.createElement(ce,null),r.a.createElement(i.a,{width:{max:"1500px"},margin:{horizontal:"auto",top:"100px"}},r.a.createElement(q,null),r.a.createElement($,null),r.a.createElement(te,null),r.a.createElement(re,null)),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,a,t){e.exports=t.p+"static/media/avatar-1.a27d592b.png"},73:function(e,a,t){e.exports=t.p+"static/media/avatar-2.7a3a8044.jpg"},81:function(e,a,t){e.exports=t(116)},86:function(e,a,t){},87:function(e,a,t){},99:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.f9cc30f3.chunk.js.map