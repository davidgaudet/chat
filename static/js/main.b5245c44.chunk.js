(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{60:function(e,t,a){e.exports=a(74)},65:function(e,t,a){},66:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),i=a.n(l),m=(a(65),a(13)),c=a(28),s=a(30),o=a(31),d=a(39),u=a(38),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("p",null," * Meeter * ")}}]),a}(n.a.Component),h=a(120),b=a(119),E=a(115),f=(a(66),a(116)),g=a(117),v=a(118),y=a(40),w=(a(67),a(41)),_=a.n(w),x=a(114),N=a(77),k=a(110),C=a(122),S=a(121),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={active_round:!1,rounds_completed:0,rounds_remaining:0,new_members:[0],ext_members:[1],new_member_data:[{first:"Sample",last:"User",role:"Intern",forms:"",pic:"https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg",dateJoined:"date",currentMatch:0,id:0}],ext_member_data:[{first:"Boss",last:"User",role:"Manager",forms:"",pic:"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",dateJoined:"date",currentMatch:0,id:0}],modalStyle:"",open:!1,setOpen:!1},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this;function t(e){var t=e.name,a=e.pic,r=e.matchName,l=e.matchPic,i=j(),m=n.a.useState(F),s=Object(c.a)(m,1)[0],o=n.a.useState(!1),d=Object(c.a)(o,2),u=d[0],p=d[1],h=n.a.createElement("div",{style:s,className:i.paper},n.a.createElement("h2",{id:"simple-modal-title"},"Meeter Match!"),n.a.createElement("p",{id:"simple-modal-description"},"Match Meeting Details."),n.a.createElement(k.a,null,n.a.createElement(N.a,{alt:t[0],src:a,className:i.large}),n.a.createElement(N.a,{alt:r,src:l,className:i.large,height:"1000"})),n.a.createElement("p",null,t," + ",r));return n.a.createElement("div",null,n.a.createElement(x.a,{size:"small",onClick:function(){p(!0)}},n.a.createElement(N.a,{alt:t,src:a})),n.a.createElement(C.a,{open:u,onClose:function(){p(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},h))}this.state.rounds_remaining=this.state.new_members.length+this.state.ext_members.length-(1+this.state.rounds_completed);for(var a=[],r=[],l=[],i=[],s=0;s<this.state.new_members.length;s++){for(var o="",d="",u=0;u<this.state.rounds_completed;u++)o+=" O   ";for(u=0;u<this.state.new_members.length+this.state.ext_members.length-(1+this.state.rounds_completed);u++)d+=" O   ";var h=this.state.new_member_data[s],w=this.state.ext_member_data[h.currentMatch];console.log(w),i.push(n.a.createElement(t,{name:h.first,pic:h.pic,matchName:w.first,matchPic:w.pic})),0!=this.state.rounds_completed&&a.push(n.a.createElement(E.a,{item:!0},n.a.createElement(f.a,{className:"roundStatusCard",variant:"outlined"},n.a.createElement(g.a,null,n.a.createElement(y.a,{variant:"body2",component:"p"},o))))),r.push(n.a.createElement(E.a,{item:!0,spacing:2},n.a.createElement(t,{name:h.first,pic:h.pic,matchName:w.first,matchPic:w.pic}))),0!=this.state.rounds_remaining&&l.push(n.a.createElement(E.a,{item:!0},n.a.createElement(f.a,{className:"roundStatusCard",variant:"outlined"},n.a.createElement(g.a,null,n.a.createElement(y.a,{variant:"body2",component:"p"},d)))))}var q=[];for(s=0;s<this.state.ext_members.length;s++){var O=this.state.ext_member_data[s],M=this.state.new_member_data[O.currentMatch];q.push(n.a.createElement(t,{name:O.first,pic:O.pic,matchName:M.first,matchPic:M.pic}))}var L=function(t){var m=t.rCompleted,c=t.rRemaining;return n.a.createElement("div",null,n.a.createElement(E.a,{container:!0,justify:"space-evenly",alignItems:"stretch",style:{padding:"24px"}},n.a.createElement(E.a,{item:!0,xs:3,component:f.a,className:j().roundStatusCard,variant:"outlined"},n.a.createElement(g.a,null,n.a.createElement(y.a,{variant:"body2",component:"p"},"Rounds Completed: ",m,n.a.createElement("br",null),"Rounds Remaining: ",c))),n.a.createElement(E.a,{item:!0,xs:3,component:f.a,className:j().memberStatusCard,variant:"outlined"},n.a.createElement(v.a,{action:n.a.createElement(P,{isNewMember:!0}),title:n.a.createElement(y.a,{variant:"body2",component:"p"},"New Members")}),n.a.createElement(g.a,null,n.a.createElement(k.a,null,i))),n.a.createElement(E.a,{item:!0,xs:3,component:f.a,className:j().memberStatusCard,variant:"outlined"},n.a.createElement(v.a,{action:n.a.createElement(P,null),title:n.a.createElement(y.a,{variant:"body2",component:"p"},"Existing Members")}),n.a.createElement(g.a,null,n.a.createElement(k.a,null,q)))),n.a.createElement(E.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"stretch"},n.a.createElement(E.a,{container:!0,item:!0,xs:2,spacing:1,direction:"column",justify:"center",alignItems:"flex-end"},a),n.a.createElement(f.a,{className:"roundStatusCard",variant:"outlined"},n.a.createElement(g.a,null,n.a.createElement(E.a,{container:!0,spacing:4,direction:"column",justify:"center"},r))),n.a.createElement(E.a,{container:!0,item:!0,xs:2,spacing:1,direction:"column",justify:"center",alignItems:"flex-start"},l)),n.a.createElement(E.a,{container:!0,item:!0,justify:"center",alignItems:"center"},n.a.createElement(E.a,{item:!0},0==e.state.active_round&&n.a.createElement(b.a,{onClick:function(){e.setState({active_round:!e.state.active_round})},variant:"outlined",style:{backgroundColor:"#82E0AA",margin:"20px"}},"Start Round"),1==e.state.active_round&&n.a.createElement(b.a,{onClick:function(){e.setState({active_round:!e.state.active_round,rounds_completed:m+1})},variant:"outlined",style:{backgroundColor:"#f5d36e",margin:"20px"}},"Finish Round"))))};function R(){return Math.round(20*Math.random())-10}function F(){var e=50+R(),t=50+R();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}function I(){var e=j();return n.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},n.a.createElement(S.a,{required:!0,id:"standard-required",className:"new-member-first",label:"Required",helperText:"First Name",placeholder:"First Name"}),n.a.createElement(S.a,{required:!0,id:"standard-required",className:"new-member-last",label:"Required",helperText:"Last Name",placeholder:"Last Name"}),n.a.createElement(S.a,{className:"new-member-role",id:"standard-basic",label:"",helperText:"Team Role",placeholder:"Team Role"}),n.a.createElement(S.a,{className:"new-member-forms",id:"standard-full-width",style:{margin:8},placeholder:"Enter Link",helperText:"Google Forms Link",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}),n.a.createElement(S.a,{className:"new-member-pic",id:"standard-full-width",style:{margin:8},placeholder:"Enter Link",helperText:"Profile Picture Link",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}))}function T(){var e=j();return n.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},n.a.createElement(S.a,{required:!0,id:"standard-required",className:"new-member-first",label:"Required",helperText:"First Name",placeholder:"First Name"}),n.a.createElement(S.a,{required:!0,id:"standard-required",className:"new-member-last",label:"Required",helperText:"Last Name",placeholder:"Last Name"}),n.a.createElement(S.a,{className:"new-member-role",id:"standard-basic",label:"",helperText:"Team Role",placeholder:"Team Role"}),n.a.createElement(S.a,{className:"new-member-forms",id:"standard-full-width",style:{margin:8},placeholder:"Enter Link",helperText:"Google Forms Link",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}),n.a.createElement(S.a,{className:"new-member-pic",id:"standard-full-width",style:{margin:8},placeholder:"Enter Link",helperText:"Profile Picture Link",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}))}function A(){var e,t=j();return n.a.createElement("form",{className:t.container,noValidate:!0},n.a.createElement(S.a,(e={className:"new-member-date",id:"date",label:"Join Date",type:"date",defaultValue:"yyyy-MM-dd"},Object(m.a)(e,"className",t.textField),Object(m.a)(e,"InputLabelProps",{shrink:!0}),e)))}var P=function(t){var a=t.isNewMember,r=j(),l=n.a.useState(F),i=Object(c.a)(l,1)[0],m=n.a.useState(!1),s=Object(c.a)(m,2),o=s[0],d=s[1],u=function(){d(!0)},p=function(){d(!1)},h=n.a.createElement("div",{style:i,className:r.paper},n.a.createElement("h2",{id:"simple-modal-title"},"New Teammember Form"),n.a.createElement("p",{id:"simple-modal-description"},"Onboard your new member to meeter."),n.a.createElement(I,null),n.a.createElement(A,null),n.a.createElement("button",{type:"button",onClick:function(){var t=document.querySelectorAll("#standard-required")[0].value,a=document.querySelectorAll("#standard-required")[1].value,r=document.getElementById("standard-basic").value,n=document.querySelectorAll("#standard-full-width")[0].value,l=document.querySelectorAll("#standard-full-width")[1].value,i=document.getElementById("date").value;if(""!=t.trim()&&""!=a.trim()){console.log(t,a,r,n,l,i),""==l.trim()&&(l="invalid");var m={first:t,last:a,role:r,forms:n,pic:l,dateJoined:i,currentMatch:0,id:e.state.new_members.length-1},c=e.state.new_members,s=c[c.length-1];c.push(s+2),e.setState({new_members:c});var o=e.state.new_member_data;o.push(m),e.setState({new_member_data:o}),d(!1)}else""==t.trim()&&""==a.trim()?alert("First and last name required"):""==t.trim()?alert("First name required"):""==a.trim()&&alert("Last name required")}},"Add User")),b=n.a.createElement("div",{style:i,className:r.paper},n.a.createElement("h2",{id:"simple-modal-title"},"Existing Team Member Form"),n.a.createElement("p",{id:"simple-modal-description"},"Add your exisiting team member to Meeter."),n.a.createElement(T,null),n.a.createElement(A,null),n.a.createElement("button",{type:"button",onClick:function(){var t=document.querySelectorAll("#standard-required")[0].value,a=document.querySelectorAll("#standard-required")[1].value,r=document.getElementById("standard-basic").value,n=document.querySelectorAll("#standard-full-width")[0].value,l=document.querySelectorAll("#standard-full-width")[1].value,i=document.getElementById("date").value;if(""!=t.trim()&&""!=a.trim()){console.log(t,a,r,n,l,i),""==l.trim()&&(l="invalid");var m={first:t,last:a,role:r,forms:n,pic:l,dateJoined:i,currentMatch:0,id:e.state.new_members.length-1},c=e.state.ext_members,s=c[c.length-1];c.push(s+2),e.setState({ext_members:c});var o=e.state.ext_member_data;o.push(m),e.setState({ext_member_data:o}),d(!1)}else""==t.trim()&&""==a.trim()?alert("First and last name required"):""==t.trim()?alert("First name required"):""==a.trim()&&alert("Last name required")}},"Add User"));return a?n.a.createElement("div",null,n.a.createElement(x.a,{size:"small",onClick:function(){u()}},n.a.createElement(_.a,null)),n.a.createElement(C.a,{open:o,onClose:p,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},h)):n.a.createElement("div",null,n.a.createElement(x.a,{size:"small",onClick:function(){u()}},n.a.createElement(_.a,null)),n.a.createElement(C.a,{open:o,onClose:p,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},b))};return n.a.createElement("div",{className:"App"},n.a.createElement(p,null),n.a.createElement(L,{rCompleted:this.state.rounds_completed,rRemaining:this.state.rounds_remaining}))}}]),a}(n.a.Component),j=Object(h.a)((function(e){var t;return t={root:{},roundStatusCard:{backgroundColor:"#8DC6F6",border:"1px solid black"},memberStatusCard:{alight:"left",backgroundColor:"#D19BE8",border:"1px solid black"},meetingRowCard:{border:"1px solid black",backgroundColor:"white"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{fontSize:14},pos:{marginBottom:12}},Object(m.a)(t,"paper",{position:"absolute",width:500,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}),Object(m.a)(t,"root",{"& > *":{margin:e.spacing(1),width:"25ch"}}),Object(m.a)(t,"rootles",{display:"flex","& > *":{margin:e.spacing(1)}}),Object(m.a)(t,"container",{display:"flex",flexWrap:"wrap"}),Object(m.a)(t,"textField",{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}),Object(m.a)(t,"large",{width:e.spacing(15),height:e.spacing(15)}),t})),O=q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.b5245c44.chunk.js.map