(function(e){function t(t){for(var a,d,b=t[0],n=t[1],s=t[2],f=0,p=[];f<b.length;f++)d=b[f],Object.prototype.hasOwnProperty.call(o,d)&&o[d]&&p.push(o[d][0]),o[d]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);h&&h(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],a=!0,d=1;d<c.length;d++){var b=c[d];0!==o[b]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=c[0]))}return e}var a={},d={app:0},o={app:0},i=[];function b(e){return n.p+"js/"+({}[e]||e)+"."+{"chunk-a442e1e2":"69af91dc","chunk-092ef98d":"38d6cb09","chunk-72a49717":"3801bb87"}[e]+".js"}function n(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.e=function(e){var t=[],c={"chunk-a442e1e2":1,"chunk-092ef98d":1,"chunk-72a49717":1};d[e]?t.push(d[e]):0!==d[e]&&c[e]&&t.push(d[e]=new Promise((function(t,c){for(var a="css/"+({}[e]||e)+"."+{"chunk-a442e1e2":"e6d0f703","chunk-092ef98d":"d52c689b","chunk-72a49717":"36b558a6"}[e]+".css",o=n.p+a,i=document.getElementsByTagName("link"),b=0;b<i.length;b++){var s=i[b],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===a||f===o))return t()}var p=document.getElementsByTagName("style");for(b=0;b<p.length;b++){s=p[b],f=s.getAttribute("data-href");if(f===a||f===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete d[e],h.parentNode.removeChild(h),c(i)},h.href=o;var r=document.getElementsByTagName("head")[0];r.appendChild(h)})).then((function(){d[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,c){a=o[e]=[t,c]}));t.push(a[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.src=b(e);var p=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(h);var c=o[e];if(0!==c){if(c){var a=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+d+")",p.name="ChunkLoadError",p.type=a,p.request=d,c[1](p)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},n.m=e,n.c=a,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var h=f;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},cd49:function(e,t,c){"use strict";c.r(t);c("4b0a");var a=c("2bb1"),d=(c("7844"),c("5596")),o=(c("bda7"),c("5e46")),i=(c("da3c"),c("0b33")),b=c("7a23");function n(e,t){const c=Object(b["E"])("router-view");return Object(b["x"])(),Object(b["d"])(c)}var s=c("6b0d"),f=c.n(s);const p={},h=f()(p,[["render",n]]);var r=h,m=c("6605");const u=[{path:"/",component:()=>Promise.all([c.e("chunk-a442e1e2"),c.e("chunk-092ef98d")]).then(c.bind(null,"16c0"))},{path:"/video/:id",component:()=>Promise.all([c.e("chunk-a442e1e2"),c.e("chunk-72a49717")]).then(c.bind(null,"4aa1"))}],l=Object(m["a"])({history:Object(m["b"])(),routes:u});var v=l,w=(c("e235"),c("e4a2"),c("96eb")),g=c.n(w),C=[{text:"首页",id:"0"},{text:"动画",id:"1"},{text:"番剧",id:"2"},{text:"国创",id:"3"},{text:"音乐",id:"4"},{text:"舞蹈",id:"5"},{text:"科技",id:"6"},{text:"游戏",id:"7"},{text:"娱乐",id:"8"},{text:"鬼畜",id:"9"},{text:"电影",id:"10"},{text:"电视剧",id:"11"},{text:"纪录片",id:"12"},{text:"影视",id:"13"},{text:"时尚",id:"14"},{text:"生活",id:"15"},{text:"广告",id:"16"},{text:"直播",id:"17"},{text:"相簿",id:"18"}],S=[{id:"1",imgSrc:"https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp"},{id:"2",imgSrc:"https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp"},{id:"3",imgSrc:"https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp"},{id:"4",imgSrc:"https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp"}],_=[{id:"0",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",desc:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",playCount:"24.9万",commentCount:"1345",videoSrc:"http://files.ak48.xyz/2018120195458.mp4"},{id:"1",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",desc:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",playCount:"63.8万",commentCount:"7825",videoSrc:"http://files.ak48.xyz/20181219211856.mp4"},{id:"2",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",desc:"迈克尔杰克逊封神的12秒，无人能做到",playCount:"63.8万",commentCount:"7825",videoSrc:"http://files.ak48.xyz/20181219211920.mp4"},{id:"3",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",desc:"【2018】年度影视混剪 Ready Story 2018【混剪】",playCount:"40.0万",commentCount:"1066",videoSrc:"http://files.ak48.xyz/20181219211910.mp4"},{id:"4",link:"",imgSrc:"https://i2.hdslb.com/bfs/archive/2cc604557cab1f6fd79591981891467f7b825010.jpg@320w_200h.webp",desc:"当你觉得扛不住的时候来看看这段视频",playCount:"82.7万",commentCount:"719",videoSrc:""},{id:"5",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/0fc171eaa7bf6b81cf5427fc57db104a4ef719d7.jpg@320w_200h.webp",desc:"【1080/漫威/衔接踩点向】前方高能！带你体验完美流畅的衔接踩点视觉盛宴！",playCount:"28.9万",commentCount:"817",videoSrc:""},{id:"6",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/0bf251d3f3b2cb589532aa24eaea140b312f7765.jpg@320w_200h.webp",desc:"【木鱼微剧场】诺兰作品《星际穿越》，严谨的科学精神与深刻人文关怀（Re:C）",playCount:"44.6万",commentCount:"7149",videoSrc:""},{id:"7",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/4a4155cf25b38da958e64b531709bca37927c82b.jpg@320w_200h.webp",desc:"【嘻咦啊看】其实很多人一辈子都不懂得怎样道歉",playCount:"63.8万",commentCount:"7825",videoSrc:""},{id:"8",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/54cd74a9bfd187fb795724c7bb51272e7c07a2e5.jpg@320w_200h.webp",desc:"【改革春风吹满地】【漫威/香港电影/赵本山】和斧头帮一起吹满地吧~",playCount:"30.4万",commentCount:"373",videoSrc:""},{id:"9",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/9046c3db8d6cddf56287fa1ead4e406baf4747f3.jpg@320w_200h.webp",desc:"一家永远没有回头客的店《自杀专卖店》",playCount:"40.0万",commentCount:"1066",videoSrc:""},{id:"10",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/67e474f4fa31d5a2a8a6241a28cdf67be898eed4.png@320w_200h.webp",desc:"【演技】吃饭同样是吃空气，为什么演技差距如此之大！",playCount:"65.7万",commentCount:"3083",videoSrc:""},{id:"11",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/67be0fadbe5eec5b967132c38fba65913cac7f43.jpg@320w_200h.webp",desc:"【盘点火影真人版】我叫王大锤，是个忍者！这次参加了一个高成本火影忍者大电影！！",playCount:"46.1万",commentCount:"2090",videoSrc:""},{id:"12",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/332b9cf87e30331277c84dcc47b1d53c2cb3fdfb.jpg@320w_200h.webp",desc:"女部落奇怪规定，女人怀孕后必须吃男人补身体，还好这只是电影",playCount:"56.6万",commentCount:"663",videoSrc:""},{id:"13",link:"",imgSrc:"https://i2.hdslb.com/bfs/archive/2e30177ef42ea0a420cd9926870d1463ed0be11c.jpg@320w_200h.webp",desc:"《爱情公寓》令人窒息的骚操作！让人笑出猪叫声的神操作盘点！ 第十九弹",playCount:"53.9万",commentCount:"543",videoSrc:""},{id:"14",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/cab6d4254e4b97a0edf4d2393f5e8aed4a90201c.jpg@320w_200h.webp",desc:"【全程高能】一个角色的三观到底能够正到什么地步【世间清流】",playCount:"32.6万",commentCount:"2425",videoSrc:""},{id:"15",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/396dfc33b8c3f426606760f9614759d7cf29c28d.png@320w_200h.webp",desc:"明星20年后再次演绎自己的经典角色，谁变化最小",playCount:"46.6万",commentCount:"2770",videoSrc:""},{id:"16",link:"",imgSrc:"https://i2.hdslb.com/bfs/archive/f03f82e14ee380f8e44c0b62924438f0ccc93750.jpg@320w_200h.webp",desc:"一部拷问社会和人性的电影，极度真实，中国版的《东京物语》！",playCount:"37.9万",commentCount:"1658",videoSrc:""},{id:"17",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/7ea04d86d345d109df15fd8fae5a1a12eca14b88.jpg@320w_200h.webp",desc:"【公开处刑】演技炸裂与演技尴尬到底是什么样子：我是谢晓飞，我走路拽起来都是演技？",playCount:"42.4万",commentCount:"5165",videoSrc:""},{id:"18",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/39a366506c68e612bf07443deff25a6bfe55e08b.jpg@320w_200h.webp",desc:"爆笑沙雕剧《我是大哥大》 全集，不看你后悔，沙雕青年快乐多，万恶之源，笑出腹肌",playCount:"26.6万",commentCount:"2027",videoSrc:""},{id:"19",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/45eeee2d1eb67237e255652f5ed682edf70d137a.jpg@320w_200h.webp",desc:"恶婆婆故意用蜂蜜试探品如 结果自己的孙子却被送去了医院!",playCount:"41.0万",commentCount:"652",videoSrc:""},{id:"20",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/3e7a75efe33f7391bb73ef3dcbc762f3d7d15136.png@320w_200h.webp",desc:"【极度舒适系列】那些惊艳至极的服化道！视觉盛宴！【第8期】",playCount:"16.6万",commentCount:"613",videoSrc:""},{id:"21",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/1f0159497cac9ebfe7ac2a96aae2c5df32273d27.jpg@320w_200h.webp",desc:"姐姐们为了阻止唯一的弟弟谈恋爱，真是花样百出",playCount:"29.6万",commentCount:"822",videoSrc:""},{id:"22",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/2d0e5ece82827a666f38e7e12fc06eefe70ddbe7.jpg@320w_200h.webp",desc:"500名副导演联合封杀胖嫂，本人回应：“我不演了，你们不用封杀我”",playCount:"32.3万",commentCount:"190",videoSrc:""},{id:"23",link:"",imgSrc:"https://i2.hdslb.com/bfs/archive/6b4f86491290565e8d41b04a1a649051c6419d06.jpg@320w_200h.webp",desc:"《2019上半年即将上映的科幻大片》九部即将上映的科幻巨制，总有一部是你期待的！",playCount:"20.1万",commentCount:"1216",videoSrc:""}],y=[{id:"10",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/67e474f4fa31d5a2a8a6241a28cdf67be898eed4.png@320w_200h.webp",desc:"【演技】吃饭同样是吃空气，为什么演技差距如此之大！",playCount:"65.7万",commentCount:"3083",videoSrc:""},{id:"11",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/67be0fadbe5eec5b967132c38fba65913cac7f43.jpg@320w_200h.webp",desc:"【盘点火影真人版】我叫王大锤，是个忍者！这次参加了一个高成本火影忍者大电影！！",playCount:"46.1万",commentCount:"2090",videoSrc:""},{id:"12",link:"",imgSrc:"https://i1.hdslb.com/bfs/archive/332b9cf87e30331277c84dcc47b1d53c2cb3fdfb.jpg@320w_200h.webp",desc:"女部落奇怪规定，女人怀孕后必须吃男人补身体，还好这只是电影",playCount:"56.6万",commentCount:"663",videoSrc:""},{id:"14",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/cab6d4254e4b97a0edf4d2393f5e8aed4a90201c.jpg@320w_200h.webp",desc:"【全程高能】一个角色的三观到底能够正到什么地步【世间清流】",playCount:"32.6万",commentCount:"2425",videoSrc:""},{id:"15",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/396dfc33b8c3f426606760f9614759d7cf29c28d.png@320w_200h.webp",desc:"明星20年后再次演绎自己的经典角色，谁变化最小",playCount:"46.6万",commentCount:"2770",videoSrc:""},{id:"16",link:"",imgSrc:"https://i2.hdslb.com/bfs/archive/f03f82e14ee380f8e44c0b62924438f0ccc93750.jpg@320w_200h.webp",desc:"一部拷问社会和人性的电影，极度真实，中国版的《东京物语》！",playCount:"37.9万",commentCount:"1658",videoSrc:""},{id:"17",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/7ea04d86d345d109df15fd8fae5a1a12eca14b88.jpg@320w_200h.webp",desc:"【公开处刑】演技炸裂与演技尴尬到底是什么样子：我是谢晓飞，我走路拽起来都是演技？",playCount:"42.4万",commentCount:"5165",videoSrc:""},{id:"18",link:"",imgSrc:"https://i0.hdslb.com/bfs/archive/39a366506c68e612bf07443deff25a6bfe55e08b.jpg@320w_200h.webp",desc:"爆笑沙雕剧《我是大哥大》 全集，不看你后悔，沙雕青年快乐多，万恶之源，笑出腹肌",playCount:"26.6万",commentCount:"2027",videoSrc:""}],j=[{id:"1",avatar:"https://i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",username:"峰岛达裕",content:"太强了吧，质量好高啊~",date:"12-15"},{id:"2",avatar:"https://i0.hdslb.com/bfs/face/7dad2615a4e8fef238d9b8000593a529fbcc0b90.jpg@60w_60h_1c.png",username:"黑狌白鸾",content:"鲁迅说过，如果你有一个苹果，我有一个苹果，我们交换，一人还是一个苹果，如果你有一个网站，我有一个网站，我们交换那我们双方就有两个网站",date:"12-15"},{id:"3",avatar:"https://i2.hdslb.com/bfs/face/27ec942e8d4e6e024d3a9f11240d81a0aa90caca.jpg@60w_60h_1c.png",username:"马猴烧酒柊筱娅",content:"等等，那这样的话，牧草君岂不是一个视频打了1w多个广告",date:"12-15"},{id:"4",avatar:"https://i1.hdslb.com/bfs/face/7f3605a11f54e5ac1719e7877c641a19da137d32.jpg@60w_60h_1c.png",username:"NAN某",content:"我经常逛的那些网站也有很多广告(｀・ω・´)",date:"12-15"},{id:"5",avatar:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",username:"牧草君",content:"你们赶快去这个王网站了里面找找好玩的，我已经找到好几个(✪▽✪)好康的网站了",date:"12-15"}],k=[{id:"0",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"1",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"2",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"3",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"4",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"5",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"6",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"7",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"8",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"9",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"10",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"11",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"12",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"13",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"14",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"15",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"16",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"17",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"18",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"19",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"20",videoSrc:"http://sites.zbztb.cn/medias/2018120195458.mp4",poster:"https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",author:"牧草君1",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"41.4万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"21",videoSrc:"http://sites.zbztb.cn/medias/20181219211856.mp4",poster:"https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",videoTitle:"【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",author:"牧草君2",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"24.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"22",videoSrc:"http://sites.zbztb.cn/medias/20181219211920.mp4",poster:"https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",videoTitle:"迈克尔杰克逊封神的12秒，无人能做到",author:"牧草君3",authorIconSrc:"https:////i1.hdslb.com/bfs/face/bb856d0bed8ef8abc0544fd5bd86da4cedf62a04.jpg@60w_60h_1c.png",playCount:"28.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"},{id:"23",videoSrc:"http://sites.zbztb.cn/medias/20181219211910.mp4",poster:"https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",videoTitle:"【2018】年度影视混剪 Ready Story 2018【混剪】",author:"牧草君4",authorIconSrc:"https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",playCount:"29.9万",likeCount:"5.2万",favCount:"2.1万",commentCount:1345,date:"12-15"}];g.a.setup({timeout:"50-1000"}),g.a.mock(/\/swiperList/,"get",()=>({code:0,result:S})),g.a.mock(/\/navList/,"get",()=>({code:0,result:C})),g.a.mock(/\/videosList/,"get",()=>({code:0,result:_})),g.a.mock(/\/recommendList/,"get",()=>({code:0,result:y})),g.a.mock(/\/commentsList/,"get",()=>({code:0,result:{count:454,items:j}})),g.a.mock(/\/videoDetail/,"get",({url:e})=>{const t=e.split("?")[1],c=new URLSearchParams(t),a=c.get("id");return g.a.mock({code:0,result:function(){return k.find(e=>e.id===a)}})});const z=Object(b["c"])(r);z.use(i["a"]),z.use(o["a"]),z.use(d["b"]),z.use(a["b"]),z.use(v),z.mount("#app")},e235:function(e,t,c){},e4a2:function(e,t,c){}});
//# sourceMappingURL=app.56c0dd8f.js.map