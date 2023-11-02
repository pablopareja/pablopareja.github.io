(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{8305:function(e,a,r){var t=r(6992),n=r(3682),i=r(3986),s={translations:{en:t.i18n,es:n.i18n,de:i.i18n},defaultLang:"en"};e.exports=s},6046:function(e,a,r){"use strict";r.d(a,{Z:function(){return cookies_banner}});var t=r(7294),n="consent_to_cookies",i=r(5893),cookies_banner=function(){var e=(0,t.useState)(!1),a=e[0],r=e[1];return(0,t.useEffect)(function(){"true"!==window.localStorage.getItem(n)&&r(!0)},[]),(0,i.jsx)("div",{className:"relative w-screen",children:a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"absolute top-0 bottom-0 w-full h-full bg-black opacity-40"}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center w-full px-8 py-4 text-xs text-white",children:[(0,i.jsxs)("p",{className:"overflow-auto",style:{maxHeight:"40px"},children:["This site uses cookies from Google to deliver its services and to analyze traffic. Information about your use of this site is shared with Google. By using this site, you agree to its use of cookies. Learn about"," ",(0,i.jsx)("a",{className:"underline",href:"https://www.google.com/policies/privacy/",target:"_blank",rel:"noreferrer",children:"Google’s privacy practices"})," ","and how"," ",(0,i.jsx)("a",{className:"underline",href:"https://www.google.com/policies/privacy/partners/",target:"_blank",rel:"noreferrer",children:"Google uses data on partner sites"}),"."]}),(0,i.jsx)("button",{className:"px-3 py-1 mt-4 border border-white",type:"button",onClick:function(){window.localStorage.setItem(n,"true"),r(!1)},children:"Accept"})]})]})})}},172:function(e,a,r){"use strict";r.d(a,{Z:function(){return component}});var t=r(7039),n=r(1664),i=r.n(n),s=[{label:"Instagram",url:"https://www.instagram.com/pabloparejamusic/",visible:!0},{label:"Facebook",url:"https://www.facebook.com/pabloparejamusic/",visible:!0},{label:"TikTok",url:"https://www.tiktok.com/@pabloparejamusic",visible:!0},{label:"Spotify",url:"https://open.spotify.com/artist/0rFp2xkRGVaFm3tM4XgtEi",visible:!0},{label:"Apple Music",url:"https://music.apple.com/us/album/the-sea-single/1586833350",visible:!0},{label:"iTunes",url:"https://music.apple.com/us/album/the-sea-single/1586833350",visible:!0},{label:"Youtube Music",url:"https://music.youtube.com/playlist?list=OLAK5uy_mbVjwfv7s7aTkh3o20ArAX3Mw5OryyYuY",visible:!0},{label:"Amazon",url:"https://www.amazon.com/gp/product/B09GSB1Q7Y/?tag=distrokid06-20",visible:!0},{label:"Twitch",url:"",visible:!1},{label:"Pandora",url:"",visible:!1},{label:"Deezer",url:"https://www.deezer.com/en/artist/130157412",visible:!0},{label:"Tidal",url:"",visible:!1},{label:"iHeartRadio",url:"",visible:!1},{label:"ClaroMusica",url:"",visible:!1},{label:"Saavn",url:"",visible:!1},{label:"Boomplay",url:"",visible:!1},{label:"KKBox",url:"",visible:!1},{label:"NetEase",url:"",visible:!1},{label:"TenCent",url:"",visible:!1},{label:"QoBuz",url:"",visible:!1}],o=r(5893),component=function(){var e=(0,t.$G)().t,a=(0,t.gE)().lang;return(0,o.jsxs)("footer",{id:"footer",className:"h-full p-8 text-xs bg-black md:py-20 md:px-36",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsxs)("div",{className:"text-white",children:[(0,o.jsx)(i(),{href:"/?lang=".concat(a),className:"mr-8 leading-4 md:mr-14",style:{letterSpacing:"1px"},children:e("footer.home")}),(0,o.jsx)(i(),{href:"/media?lang=".concat(a),className:"mr-8 leading-4 md:mr-14",style:{letterSpacing:"1px"},children:e("footer.media")}),(0,o.jsx)(i(),{href:"/?lang=".concat(a,"#bio"),className:"mr-8 leading-4 md:mr-14",style:{letterSpacing:"1px"},children:e("footer.bio")}),(0,o.jsx)(i(),{href:"/contact?lang=".concat(a),className:"mr-8 leading-4 md:mr-14",style:{letterSpacing:"1px"},children:e("footer.contact")})]}),(0,o.jsx)(i(),{href:"/?lang=".concat(a),className:"mr-8 leading-4 md:mr-14",style:{letterSpacing:"1px"},children:(0,o.jsx)("img",{src:"/images/pablo_pareja_logo.svg",alt:"Pablo Pareja logo"})})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"mt-6 text-white underline md:mt-10",children:[" ",e("footer.followMe")]}),(0,o.jsx)("div",{className:"grid grid-cols-2 pb-6 mt-4 border-b border-white md:mt-10 md:pb-10 md:grid-cols-4",children:s.filter(function(e){return e.visible}).map(function(e){return(0,o.jsx)(i(),{href:e.url,className:"mb-1 text-white uppercase md:mb-3",target:"_blank",rel:"noreferrer",children:e.label},"follow-me-link-".concat(e.label))})})]})]})}},1416:function(e,a,r){"use strict";r.d(a,{Z:function(){return component}});var t=r(9875),n=r.n(t),i=r(89),s=r(7039),o=r(1664),l=r.n(o),c=r(1163),d=r(7294),m=r(3190),h=r(7602),u=r(2729),p=r(8260),b=r(6213),f=r(3365),g=r(5893),component=function(e){var a=e.black,r=(0,d.useState)(!1),t=r[0],o=r[1],x=(0,d.useState)(!1),w=x[0],v=x[1],y=(0,u.C)(function(e){return e.common.isWhiteBackground}),k=(0,u.T)(),j=(0,c.useRouter)().pathname,N=(0,s.gE)().lang,S=(0,s.$G)().t,_=(0,b.F)(),E=_.useMd,O=_.useSm,P=f.a[N].label,A={enter:{opacity:1,rotateX:0,transition:{duration:.5},display:"block"},exit:{opacity:0,rotateX:-15,transition:{duration:.5,delay:.3},transitionEnd:{display:"none"}}};return(0,d.useEffect)(function(){k((0,h.B6)(!1))},[]),(0,g.jsx)("div",{children:(0,g.jsxs)(p.Z,{children:[E({includeBiggerScreens:!0})&&(0,g.jsxs)("nav",{className:n()({"relative md:px-32 md:py-16 flex justify-between w-full text-xs font-sans z-10":!0,"text-black":a,"text-white":!a}),children:[(0,g.jsx)(l(),{href:"/?lang=".concat(N),className:"flex items-center",children:(0,g.jsx)("img",{src:"/images/pablo_pareja_logo".concat(a?"_black":"",".svg"),alt:"Pablo Pareja"})}),(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)(l(),{href:"/media?lang=".concat(N),className:"leading-4 ml-14",style:{letterSpacing:"0.6px"},children:S("header.media")}),(0,g.jsx)(l(),{href:"/?lang=".concat(N,"#bio"),className:"leading-4 ml-14",style:{letterSpacing:"0.6px"},children:S("header.bio")}),(0,g.jsxs)(i.E.div,{className:"uppercase ml-14",onHoverStart:function(){return o(!0)},onHoverEnd:function(){return o(!1)},children:[P,(0,g.jsx)(i.E.div,{className:"absolute",style:{transformOrigin:"50% -30px"},initial:"exit",animate:t?"enter":"exit",variants:A,children:(0,g.jsx)("div",{className:n()({"px-8 py-5 border mt-8":!0,"border-white":!a,"border-black":a}),children:Object.values(f.a).map(function(e){return(0,g.jsx)("div",{className:"mb-2 text-xs leading-4 uppercase last:mb-0",style:{letterSpacing:"0.6px"},role:"button",tabIndex:0,onClick:function(){o(!1)},onKeyPress:function(){o(!1)},children:(0,g.jsx)(s.Ww,{lang:e.lang,children:e.label})},e.id)})})})]}),(0,g.jsxs)(i.E.div,{className:"uppercase ml-14",onHoverStart:function(){return v(!0)},onHoverEnd:function(){return v(!1)},children:[S("header.social"),(0,g.jsx)(i.E.div,{className:"absolute",style:{transformOrigin:"50% -30px"},initial:"exit",animate:w?"enter":"exit",variants:A,children:(0,g.jsx)("div",{className:n()({"px-8 py-5 border mt-8":!0,"border-white":!a,"border-black":a}),children:f.J.map(function(e){return(0,g.jsx)("div",{className:"mb-2 text-xs leading-4 uppercase last:mb-0",style:{letterSpacing:"0.6px"},role:"button",tabIndex:0,onClick:function(){v(!1)},onKeyPress:function(){v(!1)},children:(0,g.jsx)(l(),{href:e.url,target:"_blank",children:e.label})},e.id)})})})]}),(0,g.jsx)(l(),{href:"/contact?lang=".concat(N),className:n()({"px-10 py-2 leading-4 border ml-14":!0,"border-white":!a,"border-black":a}),style:{letterSpacing:"0.6px"},children:S("header.contact")})]})]}),O({})&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"absolute z-10 pt-8 pl-8",children:(0,g.jsx)(l(),{href:"/?lang=".concat(N),children:(0,g.jsx)("img",{src:"/images/pablo_pareja_logo".concat(a?"_black":"",".svg"),alt:"Pablo Pareja"})})}),(0,g.jsxs)(m.slide,{styles:{bmBurgerButton:{position:"fixed",width:"32px",height:"28px",right:"32px",top:"32px",outline:"none"},bmBurgerBars:{background:y?"#000000":"#ffffff"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px",outline:"none"},bmCross:{background:"#ffffff",outline:"none"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"rgba(0, 0, 0)",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmItemList:{color:"#b8b7ad",padding:"0.8em",display:"flex",flexDirection:"column"},bmItem:{display:"inline-block"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}},right:!0,children:[(0,g.jsx)(l(),{href:"/media?lang=".concat(N),className:"mb-8 leading-4 text-white",style:{letterSpacing:"0.6px"},children:S("header.media")}),(0,g.jsx)(l(),{href:"/contact?lang=".concat(N),className:"mb-8 leading-4 text-white",style:{letterSpacing:"0.6px"},children:S("header.contact")}),(0,g.jsx)(l(),{href:"/?lang=".concat(N,"#bio"),className:"mb-8 leading-4 text-white",style:{letterSpacing:"0.6px"},children:S("header.bio")}),f.J.map(function(e){return(0,g.jsx)("div",{children:(0,g.jsx)(l(),{href:e.url,className:"mb-2 text-xs leading-4 uppercase last:mb-0",style:{letterSpacing:"0.6px"},target:"_blank",children:e.label})},"SA-".concat(e.id))}),(0,g.jsx)("div",{className:"h-full",children:(0,g.jsx)("div",{className:"flex flex-col justify-end h-full",children:Object.values(f.a).map(function(e){return(0,g.jsx)("div",{className:"mb-2 text-xs leading-4 uppercase",style:{letterSpacing:"0.6px"},role:"button",tabIndex:0,onClick:function(){o(!1)},onKeyPress:function(){o(!1)},children:(0,g.jsx)(s.Ww,{lang:e.lang,children:e.label})},e.id)})})})]}),!j.includes("contact")&&(0,g.jsx)(l(),{href:"/contact?lang=".concat(N),className:n()({"fixed z-10 p-2 text-xs leading-4 border bottom-4 right-4 ml-14":!0,"border-white text-white":!y,"border-black text-black":y}),style:{letterSpacing:"0.6px"},children:S("header.contact")})]})]})})}},2729:function(e,a,r){"use strict";r.d(a,{C:function(){return n},T:function(){return useAppDispatch}});var t=r(9473),useAppDispatch=function(){return(0,t.I0)()},n=t.v9},8260:function(e,a,r){"use strict";r.d(a,{Z:function(){return ClientOnly}});var t=r(7294),n=r(5893);function ClientOnly(e){var a=e.children,r=(0,t.useState)(!1),i=r[0],s=r[1];return((0,t.useEffect)(function(){s(!0)},[]),i)?(0,n.jsx)("div",{children:a}):null}},6213:function(e,a,r){"use strict";r.d(a,{F:function(){return useResponsive}});var t=r(9499),n=r(1852);function ownKeys(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function _objectSpread(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?ownKeys(Object(r),!0).forEach(function(a){(0,t.Z)(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function useResponsive(){var e={xs:0,sm:768,md:1e3,lg:1200};return{useXs:function(a){var r=a.includeBiggerScreens,t=void 0!==r&&r;return(0,n.useMediaQuery)(_objectSpread({minWidth:e.xs},!t&&{maxWidth:e.sm-1}))},useSm:function(a){var r=a.includeBiggerScreens,t=void 0!==r&&r;return(0,n.useMediaQuery)(_objectSpread({maxWidth:e.sm},!t&&{maxWidth:e.md-1}))},useMd:function(a){var r=a.includeBiggerScreens,t=void 0!==r&&r;return(0,n.useMediaQuery)(_objectSpread({minWidth:e.md},!t&&{maxWidth:e.lg-1}))},useLg:function(a){var r=a.includeBiggerScreens,t=void 0!==r&&r;return(0,n.useMediaQuery)(_objectSpread({minWidth:e.lg},!t&&{minWidth:e.lg}))}}}},3986:function(e){"use strict";e.exports=JSON.parse('{"i18n":{"description":"Pablo Pareja ist ein spanischer Jazzs\xe4nger und Komponist aus M\xe1laga, Spanien.","title":"Pablo Pareja","contact":{"name":"NAME","email":"EMAIL","message":"NACHRICHT","contact":"KONTAKT","pageTitle":"Kontakt"},"footer":{"home":"HOME","media":"MEDIA","bio":"BIO","contact":"KONTAKT","followMe":"FOLGE MIR:"},"header":{"contact":"KONTAKT","media":"MEDIA","bio":"\xdcBER MICH","social":"SOCIAL"},"homepage":{"playAnchorLink":"ABSPIELEN","listenOnMessage":"H\xf6ren Sie auf","bio":"<p className=\\"mb-8\\"> Pablo Pareja starts studying piano in Granada focusing first on classical and contemporary classical music. Later on he starts developing an interest in film scoring and he composes his first solo piano piece at the age of 17. Years later he studies vocal technique, music theory, jazz, and composition in Rome and M\xe1laga; attending also various international jazz seminars where he has the chance to meet renowned artists like <a className=\\"hover:underline\\" href=\\"https://www.viktorijapilatovic.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Viktorija Pilatovic</a>, <a className=\\"hover:underline\\" href=\\"https://deborahcarter.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Deborah Carter</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Roberta_Gambarini\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Roberta Gambarini</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Norma_Winstone\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Norma Winstone</a>, <a className=\\"hover:underline\\" href=\\"http://www.michaelkanan.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Michael Kanan</a>, and <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Aaron_Goldberg\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Aarong Goldberg</a> among others. </p> <p>More recently Pablo has been performing with the Big Band from the M\xe1laga Jazz Association as the lead singer as well as has participated in various festivals and concerts such as the Jazzahara festival or the International Jazz day Torremolinos. He is currently studying advanced composition with <a className=\\"hover:underline\\" href=\\"https://josecarra.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Jos\xe9 Carra </a> and focuses on the creation of his first EP both as a composer and singer. For that he is collaborating with <a href=\\"https://www.juangaliardomusic.com/\\" target=\\"_blank\\">Juan Galiardo</a> (piano), <a href=\\"https://www.instagram.com/iwillplaywithmytoys/\\" target=\\"_blank\\">Juanma Nieto</a> (drums and percussion), and <a href=\\"https://www.facebook.com/markus.schneider.9674\\" target=\\"_blank\\">Markus Schneider</a> (double bass).</p>","pageTitle":"Pablo Pareja"},"player":{"play":"ABSPIELEN","pause":"PAUSE"}}}')},6992:function(e){"use strict";e.exports=JSON.parse('{"i18n":{"description":"Pablo Pareja is a Spanish jazz singer and composer based in M\xe1laga, Spain.","title":"Pablo Pareja","contact":{"name":"NAME","email":"EMAIL","message":"MESSAGE","contact":"CONTACT","pageTitle":"Contact"},"footer":{"home":"HOME","media":"MEDIA","bio":"BIO","contact":"CONTACT","followMe":"FOLLOW ME:"},"header":{"contact":"CONTACT","media":"MEDIA","bio":"BIO","social":"SOCIAL"},"homepage":{"playAnchorLink":"PLAY","listenOnMessage":"Listen on ","bio":"<p className=\\"mb-8\\"> Pablo Pareja starts studying piano in Granada focusing first on classical and contemporary classical music. Later on he starts developing an interest in film scoring and he composes his first solo piano piece at the age of 17. Years later he studies vocal technique, music theory, jazz, and composition in Rome and M\xe1laga; attending also various international jazz seminars where he has the chance to meet renowned artists like <a className=\\"hover:underline\\" href=\\"https://www.viktorijapilatovic.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Viktorija Pilatovic</a>, <a className=\\"hover:underline\\" href=\\"https://deborahcarter.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Deborah Carter</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Roberta_Gambarini\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Roberta Gambarini</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Norma_Winstone\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Norma Winstone</a>, <a className=\\"hover:underline\\" href=\\"http://www.michaelkanan.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Michael Kanan</a>, and <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Aaron_Goldberg\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Aarong Goldberg</a> among others. </p> <p>More recently Pablo has been performing with the Big Band from the M\xe1laga Jazz Association as the lead singer as well as has participated in various festivals and concerts such as the Jazzahara festival or the International Jazz day Torremolinos. He is currently studying advanced composition with <a className=\\"hover:underline\\" href=\\"https://josecarra.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Jos\xe9 Carra </a> and focuses on the creation of his first EP both as a composer and singer. For that he is collaborating with <a href=\\"https://www.juangaliardomusic.com/\\" target=\\"_blank\\">Juan Galiardo</a> (piano), <a href=\\"https://www.instagram.com/iwillplaywithmytoys/\\" target=\\"_blank\\">Juanma Nieto</a> (drums and percussion), and <a href=\\"https://www.facebook.com/markus.schneider.9674\\" target=\\"_blank\\">Markus Schneider</a> (double bass).</p>","pageTitle":"Pablo Pareja"},"player":{"play":"PLAY","pause":"PAUSE"}}}')},3682:function(e){"use strict";e.exports=JSON.parse('{"i18n":{"description":"Pablo Pareja es un cantante y compositor principalmente de jazz nacido en Granada, Espa\xf1a.","title":"Pablo Pareja","contact":{"name":"NOMBRE","email":"EMAIL","message":"MENSAJE","contact":"CONTACTO","pageTitle":"Contacto"},"header":{"contact":"CONTACTO","media":"MEDIA","bio":"BIO","social":"REDES SOCIALES"},"homepage":{"playAnchorLink":"REPRODUCIR","listenOnMessage":"Esc\xfachala en ","bio":"<p className=\\"mb-8\\"> Pablo Pareja comienza sus estudios de piano en Granada para a\xf1os m\xe1s tarde interesarse por la voz y el jazz. Estudia t\xe9cnica vocal, armon\xeda, composici\xf3n y piano en Roma y M\xe1laga, as\xed como acude a numerosos seminarios de jazz internacionales donde ha recibido clases de artistas como <a className=\\"hover:underline\\" href=\\"https://www.viktorijapilatovic.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Viktorija Pilatovic</a>, <a className=\\"hover:underline\\" href=\\"https://deborahcarter.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Deborah Carter</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Roberta_Gambarini\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Roberta Gambarini</a>, <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Norma_Winstone\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Norma Winstone</a>, <a className=\\"hover:underline\\" href=\\"http://www.michaelkanan.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Michael Kanan</a> y <a className=\\"hover:underline\\" href=\\"https://en.wikipedia.org/wiki/Aaron_Goldberg\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Aarong Goldberg</a> entre otros. </p> <p> Ha participado durante varios a\xf1os como cantante de la Big Band de la Asociaci\xf3n de Jazz de M\xe1laga as\xed como actuado en festivales y espect\xe1culos como el Jazzahara festival o el International Jazz Day Torremolinos. En la actualidad recibe clases de composici\xf3n y armon\xeda de <a className=\\"hover:underline\\" href=\\"https://josecarra.com/\\" target=\\"_blank\\" rel=\\"noreferrer\\" > Jos\xe9 Carra</a> y se centra en la creaci\xf3n de su primer EP como compositor y cantante. Para la realizaci\xf3n de este EP cuenta con la colaboraci\xf3n de m\xfasicos de la talla de <a href=\\"https://www.juangaliardomusic.com/\\" target=\\"_blank\\">Juan Galiardo</a> (piano), <a href=\\"https://www.instagram.com/iwillplaywithmytoys/\\" target=\\"_blank\\">Juanma Nieto</a> (bater\xeda y percusi\xf3n) y <a href=\\"https://www.facebook.com/markus.schneider.9674\\" target=\\"_blank\\">Markus Schneider</a> (contrabajo).</p>"},"footer":{"home":"INICIO","media":"MEDIA","bio":"BIO","contact":"CONTACTO","followMe":"S\xcdGUEME EN:"},"player":{"play":"PLAY","pause":"PAUSAR"}}}')}}]);