(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(2),o=n.n(r),m=(n(12),n(3)),c=n(4),l=n(6),s=n(5),h=function(e){var a=e.id,n=e.name,t=e.email;return i.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},i.a.createElement("img",{alt:"robopic",src:"https://robohash.org/".concat(a,".png?size=200x200")}),i.a.createElement("div",null,i.a.createElement("h2",null,n),i.a.createElement("p",null,t)))},u=function(e){var a=e.robots;return i.a.createElement("div",null,a.map((function(e,n){return i.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},d=function(e){var a=e.searchchange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Robots",onChange:a}))},g=[{id:1,name:"C.V.Vishnuu",username:"Vishnuu",email:"cvishnuu01@gmail.com"},{id:2,name:"R.Indra Mohini",username:"Indra",email:"indra@gmail.com"},{id:3,name:"C.K.Venu Kuttan",username:"Venu",email:"venu@gmail.com"},{id:4,name:"Jenisha Gopinath",username:"Jenisha",email:"jenishagopinath@gmail.com"},{id:5,name:"Ajay Maheswaran",username:"Ajay",email:"ajay@gmail.com"},{id:6,name:"Dharmish",username:"Dharmish",email:"dharmish@gmail.com"},{id:7,name:"Mark Joseph",username:"Mark",email:"Markj@gmail.com"},{id:8,name:"Ruchitha",username:"Ruchi",email:"ruchi@gmail.com"},{id:9,name:"Nithin Mishra",username:"Nithin",email:"nithin@gmail.com"},{id:10,name:"Arshath Raj",username:"Arshath",email:"arshath@gmail.com"},{id:11,name:"Neeraj Sunil",username:"Neeraj",email:"neeraj@gmail.com"},{id:12,name:"Sofia",username:"Sofi",email:"sofia@gmail.com"}],f=(n(13),function(e){return i.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"}},e.children)}),b=function(e){Object(l.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(m.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:g,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f1"},"Robot Friends"),i.a.createElement(d,{searchchange:this.onSearchChange}),i.a.createElement(f,null,i.a.createElement(u,{robots:t})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.55f1fcb5.chunk.js.map