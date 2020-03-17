(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5b92"],{7003:function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("h-page-content",{attrs:{padding:""}},[c("div",{staticClass:"row"},[c("div",{staticClass:"col"},[c("div",{staticClass:"text-h4"},[e._v("Toggle")]),c("div",{ref:"tg-boolean"}),c("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Boolean",code:e.ckboolean,script:e.ckbooleanScript,javascript:""}},[c("div",{staticClass:"column"},[c("div",{staticClass:"col"},[e._v("\n            Do you agree terms and conditions?\n          ")]),c("div",{staticClass:"col"},[c("h-toggle",{attrs:{text:"I agree"},model:{value:e.termAccepted,callback:function(t){e.termAccepted=t},expression:"termAccepted"}})],1),c("div",{staticClass:"col"},[e._v("\n            Your option is: "+e._s(e.termAccepted)+"\n          ")])])]),c("div",{ref:"tg-readonly"}),c("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Readonly",code:e.ckboolean,script:e.ckbooleanScript,javascript:""}},[c("div",{staticClass:"column"},[c("div",{staticClass:"col"},[c("h-toggle",{attrs:{text:"I agree",readonly:""},model:{value:e.termAccepted,callback:function(t){e.termAccepted=t},expression:"termAccepted"}})],1),c("div",{staticClass:"col"},[e._v("\n            Your option is: "+e._s(e.termAccepted)+"\n          ")])])]),c("comp-code",{staticClass:"h-mt-lg",attrs:{title:"Option checked"}},[c("div",{staticClass:"column"},[c("div",{staticClass:"col"},[c("h-toggle",{attrs:{text:"Item checked"},model:{value:e.ckChecked,callback:function(t){e.ckChecked=t},expression:"ckChecked"}})],1),c("div",{staticClass:"col"},[e._v("\n            Your model is "+e._s(e.ckChecked)+"\n          ")])])]),c("div",{ref:"tg-list"}),c("comp-code",{staticClass:"h-mt-lg",attrs:{title:"List",code:e.cklist,script:e.cklistScript,javascript:""}},[c("div",{staticClass:"column"},[c("div",{staticClass:"col"},[e._v("\n            Select your favorite colors\n          ")]),c("div",{staticClass:"col"},[c("h-toggle",{attrs:{text:"Red",value:"Red"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),c("h-toggle",{attrs:{text:"Green",value:"Green"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),c("h-toggle",{attrs:{text:"Blue",value:"Blue"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),c("div",{staticClass:"col"},[e._v("\n            Your favorites colors: "+e._s(e.colors)+"\n          ")])])]),c("div",{ref:"tg-listnumbers"}),c("comp-code",{staticClass:"h-mt-lg",attrs:{title:"List with numbers",code:e.cklistnumbers,script:e.cklistnumbersScript,javascript:""}},[c("div",{staticClass:"column"},[c("div",{staticClass:"col"},[e._v("\n            Select yours favorite numbers\n          ")]),c("div",{staticClass:"col"},[c("h-toggle",{attrs:{text:"1",value:1},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),c("h-toggle",{attrs:{text:"2",value:2},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),c("h-toggle",{attrs:{text:"3",value:3},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}}),c("h-toggle",{attrs:{text:"4",value:4},model:{value:e.checkedNumbers,callback:function(t){e.checkedNumbers=t},expression:"checkedNumbers"}})],1),c("div",{staticClass:"col"},[e._v("\n            Favorite numbers "+e._s(e.checkedNumbers)+"\n          ")])])]),c("tabs-help",{staticClass:"h-mt-md",attrs:{properties:e.helpTopics.properties,events:e.helpTopics.events}})],1),c("div",{staticClass:"col-auto"},[c("list-help",[c("h-list",[c("h-list-header",{attrs:{text:"Styles"}}),c("h-list-item",{on:{click:function(t){return e.goToElement("tg-boolean")}}},[c("h-list-item-content",[c("h-list-item-text",{attrs:{title:"Boolean"}})],1)],1),c("h-list-item",{on:{click:function(t){return e.goToElement("tg-list")}}},[c("h-list-item-content",[c("h-list-item-text",{attrs:{title:"List"}})],1)],1),c("h-list-item",{on:{click:function(t){return e.goToElement("tg-listnumbers")}}},[c("h-list-item-content",[c("h-list-item-text",{attrs:{title:"Numbers"}})],1)],1)],1)],1)],1)])])},l=[],o=c("cc04"),n={properties:[{name:"v-model",type:"String, Array or Boolean.",description:"Model of the component."},{name:"value",type:"String, Number or Object",description:"Sets the value of the toggle."},{name:"text",type:"String or Number",description:"Sets the text of the checkbox."}],events:[{name:"@change(value)",description:"Triggered immediately on model change"}]},i={data:function(){return{ckChecked:!0,termAccepted:!1,colors:[],checkedNames2:["Maça","Uva","Abacaxi"],checkedNumbers:[1,3],checked2:!1,helpTopics:{properties:[],events:[]},ckboolean:'\n<div class="column">\n  <div class="col">\n    Do you agree terms and conditions?\n  </div>\n  <div class="col">\n    <h-toggle v-model="termAccepted" text="I agree"/>\n  </div>\n  <div class="col">\n    Your option is: {{ termAccepted }}\n  </div>\n</div>\n',ckbooleanScript:"\n  data () {\n    return {\n      termAccepted: false\n    }\n  }    \n",cklist:'\n<div class="column">\n  <div class="col">\n    Select your favorite colors\n  </div>\n  <div class="col">\n    <h-toggle v-model="colors" text="Red" value="Red"/>\n    <h-toggle v-model="colors" text="Green" value="Green"/>\n    <h-toggle v-model="colors" text="Blue" value="Blue"/>\n  </div>\n  <div class="col">\n    Your favorites colors: {{ colors }}\n  </div>\n</div>\n',cklistScript:"\n  data () {\n    return {\n      colors: []\n    }\n  }    \n",cklistnumbers:'\n<div class="column">\n  <div class="col">\n    Select yours favorite numbers\n  </div>\n  <div class="col">\n    <h-toggle v-model="checkedNumbers" text="1" :value="1"/>\n    <h-toggle v-model="checkedNumbers" text="2" :value="2"/>\n    <h-toggle v-model="checkedNumbers" text="3" :value="3"/>\n    <h-toggle v-model="checkedNumbers" text="4" :value="4"/>\n  </div>\n  <div class="col">\n    Favorite numbers {{ checkedNumbers }}\n  </div>\n</div>\n',cklistnumbersScript:"\n  data () {\n    return {\n      checkedNumbers: [1, 3]\n    }\n  }      \n"}},mounted:function(){this.helpTopics.properties=n.properties,this.helpTopics.events=n.events},methods:{goToElement:function(e){o["a"].goToElement(this.$refs[e])}}},a=i,r=c("2877"),d=Object(r["a"])(a,s,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d5b92.13df2b4b.js.map