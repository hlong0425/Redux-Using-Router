(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{38:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(37),c=n(35),s=n(36),a=n.n(s),o="https://react-http-dc150-default-rtdb.firebaseio.com/",u=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o+"/quotes.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)c.push(Object(r.a)({id:s},n[s]));return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.statusText||"Could not fetch quotes.");case 5:return e.next=7,n.json();case 7:if(null!==(c=e.sent)){e.next=10;break}return e.abrupt("return",null);case 10:return s=Object(r.a)({id:t},c),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.quoteId),e.next=3,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,n.ok){e.next=9;break}throw new Error(r.message||"Could not add comments.");case 9:return e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments");case 8:for(u in s=[],c)s.push(Object(r.a)({id:u},c[u]));return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},39:function(e,t,n){"use strict";var r=n(37),c=n(35),s=n(40),a=n(36),o=n.n(a),u=n(0);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),a=Object(s.a)(n,2),d=a[0],m=a[1],l=Object(u.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,m({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:l},d)}},45:function(e,t,n){e.exports={comments:"Comments_comments__1WLt-"}},46:function(e,t,n){e.exports={form:"NewCommentForm_form__1gQt6",loading:"NewCommentForm_loading__1VIHB",control:"NewCommentForm_control__1UXcV",actions:"NewCommentForm_actions__3n_tn"}},47:function(e,t,n){e.exports={item:"CommentItem_item__38TaW"}},48:function(e,t,n){e.exports={comments:"CommentsList_comments__x1bnK"}},49:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__3n8xv"}},54:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(11),s=n(40),a=n(0),o=n(45),u=n.n(o),i=n(39),d=n(38),m=n(15),l=n(46),j=n.n(l),f=n(1),b=function(e){var t=Object(i.a)(d.a),n=t.status,r=t.error,c=t.sendRequest,s=Object(a.useRef)(),o=e.onAddedComment;console.log(n),Object(a.useEffect)((function(){"completed"!==n||r||e.onAddedComment()}),[n,r,o]);var u=function(t){t.preventDefault();var n=s.current.value;if(""!==n.trim()){var r=e.quoteId;c({commentData:{text:n},quoteId:r})}};return Object(f.jsxs)("form",{className:j.a.form,onSubmit:u,children:["pending"===n&&Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})}),Object(f.jsxs)("div",{className:j.a.control,onSubmit:u,children:[Object(f.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(f.jsx)("textarea",{id:"comment",rows:"5",ref:s})]}),Object(f.jsx)("div",{className:j.a.actions,children:Object(f.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=n(47),h=n.n(p),x=function(e){return Object(f.jsx)("li",{className:h.a.item,children:Object(f.jsx)("p",{children:e.text})})},O=n(48),v=n.n(O),g=function(e){return Object(f.jsx)("ul",{className:v.a.comments,children:e.comments.map((function(e){return Object(f.jsx)(x,{text:e.text},e.id)}))})},w=function(){var e=Object(i.a)(d.c),t=e.sendRequest,n=e.status,c=e.data;console.log("Load Comments page");var o=Object(a.useState)(!1),l=Object(s.a)(o,2),j=l[0],p=l[1],h=Object(r.useParams)(),x=h.id;Object(a.useEffect)((function(){t(h.id)}),[x,t]);var O,v=Object(a.useCallback)((function(){t(x)}),[t,x]);return"pending"===n&&(O=Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})})),"completed"===n&&(null===c||void 0===c?void 0:c.length)>0&&(O=Object(f.jsx)(g,{comments:c})),"completed"!==n||c&&0!==c.length||(O=Object(f.jsx)("p",{children:"No comments were added yet"})),Object(f.jsxs)("section",{className:u.a.comments,children:[Object(f.jsx)("h2",{children:"User Comments"}),!j&&Object(f.jsx)("button",{className:"btn",onClick:function(){p(!0)},children:"Add a Comment"}),j&&Object(f.jsx)(b,{quoteId:x,onAddedComment:v}),O]})},C=n(49),_=n.n(C),k=function(e){return Object(f.jsxs)("figure",{className:_.a.quote,children:[Object(f.jsx)("p",{children:e.text}),Object(f.jsx)("figcaption",{children:e.author})]})},N=n(8),q=n(50);t.default=function(e){var t=Object(r.useParams)(),n=Object(i.a)(d.e,!0),s=n.data,o=n.error,u=n.status,l=n.sendRequest,j=Object(q.useRouteMatch)();return Object(a.useEffect)((function(){l(t.id)}),[l,t.id]),"pending"===u?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(m.a,{})}):"completed"===u&&o?Object(f.jsx)("div",{children:o}):"completed"!==u||s?Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(k,{text:s.text,author:s.author}),Object(f.jsx)(r.Route,{exact:!0,path:j.path,children:Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(N.b,{className:"btn--flat",to:"".concat(j.url,"/comments"),children:"Load Comments"})})}),Object(f.jsx)(r.Route,{path:"/quotes/:id/comments",children:Object(f.jsx)(w,{})})]}):Object(f.jsx)("div",{children:"Id invalid"})}}}]);
//# sourceMappingURL=4.d0dd13e2.chunk.js.map