"use strict";(self["webpackChunkvue_crm_2"]=self["webpackChunkvue_crm_2"]||[]).push([[170],{8447:function(t,e,i){var s=i(65);e["Z"]={data(){return{active_index:void 0,isPopupVisible:!1,editable_item:{},state_btn_top_menu:{isCreateActive:!1,isOpenActive:!1,isPublicActive:!1,isDeleteActive:!1},time:null}},methods:{...(0,s.nv)(["SET_MAIN_STORAGE","SET_STATUS_SALE","SET_STATES","SET_BUFFER","DELETE_ITEM_MAIN_STORAGE"]),popup_close(){this.isPopupVisible=!1,this.editable_item={},this.active_index=null,this.state_btn_top_menu.isOpenActive=!1,this.state_btn_top_menu.isDeleteActive=!1,this.state_btn_top_menu.isPublicActive=!1},select_id_item(t,e){this.active_index=t,this.GET_USER_PERMISSION.isWatch&&this.active_index>=0?(this.state_btn_top_menu.isOpenActive=!0,this.GET_USER_PERMISSION.isDelete&&(this.state_btn_top_menu.isDeleteActive=!0),"edited"===e[t].status||"new"===e[t].status?this.state_btn_top_menu.isPublicActive=!0:this.state_btn_top_menu.isPublicActive=!1):(this.state_btn_top_menu.isOpenActive=!1,this.GET_USER_PERMISSION.isDelete&&(this.state_btn_top_menu.isDeleteActive=!1))},create_new_item(){this.editable_item.status="new",this.isPopupVisible=!0},open_active_item(t,e){this.editable_item={...e[t]},this.isPopupVisible=!0},objectsEqual(t,e){if(t===e)return!0;if(null==t||"object"!=typeof t||null==e||"object"!=typeof e)return!1;let i=0,s=0;for(let a in t)i+=1;for(let a in e)if(s+=1,!(a in t)||!this.objectsEqual(t[a],e[a]))return!1;return i==s},delete_active_item(t,e){e[t].status="delete",this.state_btn_top_menu.isDeleteActive=!1,this.state_btn_top_menu.isPublicActive=!0},cancel_edited_item(t,e,i){let s=!1;this.GET_BUFFER(i).find(((a,_)=>{if(a.id===e[t].id)return s=!0,e[t]=JSON.parse(JSON.stringify(a)),delete e[t].status,this.GET_BUFFER(i).splice(_,1),this.state_btn_top_menu.isPublicActive=!1,!0})),s||("new"===e[t].status?(e.splice(t,1),this.state_btn_top_menu.isPublicActive=!1):"delete"===e[t].status?(delete e[t].status,this.state_btn_top_menu.isPublicActive=!1):(console.log("ERROR GET_BUFFER "+JSON.stringify(e[t])),e[t].status="error"))},public_edited_item(t,e,i){let s=!1;this.GET_BUFFER(i).find(((a,_)=>{if(a.id===e[t].id)return s=!0,delete e[t].status,this.SET_MAIN_STORAGE({name:i,value:e[t]}),this.GET_BUFFER(i).splice(_,1),this.state_btn_top_menu.isPublicActive=!1,!0})),s||("new"===e[t].status?(delete e[t].status,this.SET_MAIN_STORAGE({name:i,value:e[t]}),this.state_btn_top_menu.isPublicActive=!1):"delete"===e[t].status?(this.DELETE_ITEM_MAIN_STORAGE({name:i,value:{id:e[t].id}}),this.state_btn_top_menu.isPublicActive=!1,this.state_btn_top_menu.isOpenActive=!1):(console.log("ERROR PUBLIC "+JSON.stringify(e[t])),e[t].status="error"))},valid_item(t,e,i){"new"!=t.status?this.objectsEqual(e[this.active_index],t)||(t.status="edited",this.SET_BUFFER({name:i,value:e[this.active_index]}),e[this.active_index]=JSON.parse(JSON.stringify(t))):e.push(JSON.parse(JSON.stringify(t))),this.popup_close()}},computed:{...(0,s.Se)(["GET_USER_PERMISSION","GET_BUFFER"])}}},8520:function(t,e,i){i.d(e,{Z:function(){return Z}});var s=i(3396),a=i(7139),_=i(9242);const n=t=>((0,s.dD)("data-v-dfd7047e"),t=t(),(0,s.Cn)(),t),r={class:"popup__wrapper"},o={class:"popup__body"},d={class:"popup__header"},l=(0,s.Uk)("ID: "),c={class:"popup__amount-error"},p={key:0},u={class:"popup__content"},m={class:"popup__content-items"},h={class:"popup__item"},v=n((()=>(0,s._)("div",{class:"popup__data-text"},"Название:",-1))),b=["readonly"],x={key:0,class:"popup__error-text"},T={class:"popup__item"},E=n((()=>(0,s._)("div",{class:"popup__data-text"},"Артикул:",-1))),g=["readonly"],f={key:0,class:"popup__error-text"},w={class:"popup__item"},y=n((()=>(0,s._)("div",{class:"popup__data-text"},"Колличество:",-1))),A=["readonly"],S={key:0,class:"popup__error-text"},k={class:"popup__item"},C=n((()=>(0,s._)("div",{class:"popup__data-text"},"Цена(шт):",-1))),I=["readonly"],O={key:0,class:"popup__error-text"},D={class:"popup__item"},P=n((()=>(0,s._)("div",{class:"popup__data-text"},"Описание:",-1))),R=["readonly"],U={key:0,class:"popup__error-text"},N={class:"popup__item"},G=n((()=>(0,s._)("div",{class:"popup__data-text"},"Дата:",-1))),z=["readonly"],F={key:0,class:"popup__error-text"},M={class:"popup__footer"},$=["disabled"];function j(t,e,i,n,j,B){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("span",null,[l,(0,s._)("span",{class:(0,a.C_)(["popup__state",{new__id:j.isNewItem,edit__id:!j.isNewItem}])},(0,a.zw)(j.temp_edit_data.id),3)]),(0,s._)("span",null,(0,a.zw)(j.text_popup),1),(0,s._)("span",{class:"material-icons",onClick:e[0]||(e[0]=(...t)=>B.popupClose&&B.popupClose(...t))}," close")]),(0,s._)("div",c,[0!=j.errorText.amount_error?((0,s.wg)(),(0,s.iD)("span",p,"Найдено ошибок: "+(0,a.zw)(j.errorText.amount_error),1)):(0,s.kq)("",!0)]),(0,s._)("div",u,[(0,s._)("div",m,[(0,s._)("div",h,[v,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>j.temp_edit_data.name=t),readonly:!j.IsEditing},null,8,b),[[_.nr,j.temp_edit_data.name]]),0!=j.errorText.name.length?((0,s.wg)(),(0,s.iD)("span",x,(0,a.zw)(j.errorText.name),1)):(0,s.kq)("",!0)]),(0,s._)("div",T,[E,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>j.temp_edit_data.article=t),readonly:!j.IsEditing},null,8,g),[[_.nr,j.temp_edit_data.article]]),0!=j.errorText.article.length?((0,s.wg)(),(0,s.iD)("span",f,(0,a.zw)(j.errorText.article),1)):(0,s.kq)("",!0)]),(0,s._)("div",w,[y,(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=t=>j.temp_edit_data.amount=t),readonly:!j.IsEditing},null,8,A),[[_.nr,j.temp_edit_data.amount]]),0!=j.errorText.amount.length?((0,s.wg)(),(0,s.iD)("span",S,(0,a.zw)(j.errorText.amount),1)):(0,s.kq)("",!0)]),(0,s._)("div",k,[C,(0,s.wy)((0,s._)("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=t=>j.temp_edit_data.price=t),readonly:!j.IsEditing},null,8,I),[[_.nr,j.temp_edit_data.price]]),0!=j.errorText.price.length?((0,s.wg)(),(0,s.iD)("span",O,(0,a.zw)(j.errorText.price),1)):(0,s.kq)("",!0)]),(0,s._)("div",D,[P,(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=t=>j.temp_edit_data.specific=t),readonly:!j.IsEditing},null,8,R),[[_.nr,j.temp_edit_data.specific]]),0!=j.errorText.specific.length?((0,s.wg)(),(0,s.iD)("span",U,(0,a.zw)(j.errorText.specific),1)):(0,s.kq)("",!0)]),(0,s._)("div",N,[G,(0,s.wy)((0,s._)("input",{type:"date","onUpdate:modelValue":e[6]||(e[6]=t=>j.temp_edit_data.date=t),readonly:!j.IsEditing},null,8,z),[[_.nr,j.temp_edit_data.date]]),0!=j.errorText.date.length?((0,s.wg)(),(0,s.iD)("span",F,(0,a.zw)(j.errorText.date),1)):(0,s.kq)("",!0)])])]),(0,s._)("div",M,[(0,s._)("button",{class:"popup__close",onClick:e[7]||(e[7]=(...t)=>B.popupClose&&B.popupClose(...t))},"Отмена"),(0,s._)("button",{class:"popup__submit",onClick:e[8]||(e[8]=(...t)=>B.validDate&&B.validDate(...t)),disabled:!j.IsEditing},"Сохранить",8,$)])])])}var B=i(65),q={name:"v-popup",components:{},props:{edit_data:{type:Object,default(){return{}}}},data(){return{temp_edit_data:{status:void 0,id:void 0,article:void 0,amount:void 0,price:void 0,specific:void 0,name:void 0,date:void 0},errorText:{name:"",article:"",amount:"",price:"",specific:"",date:"",amount_error:0},IsEditing:!1,isNewItem:!1,text_popup:""}},methods:{popupClose(){this.$emit("popup_close")},validDate(){this.errorText.amount_error=0,this.errorText.name="",this.errorText.article="",this.errorText.amount="",this.errorText.price="",this.errorText.specific="",this.errorText.date="",void 0!==this.temp_edit_data.name&&""!==this.temp_edit_data.name||(this.errorText.name="имя не может быть пустым",this.errorText.amount_error++),(void 0===this.temp_edit_data.article||this.temp_edit_data.article.length<4)&&(this.errorText.article="минимум 4 символа (ХХХХ)",this.errorText.amount_error++),(void 0===this.temp_edit_data.amount||this.temp_edit_data.amount<1)&&(this.errorText.amount="колличество должно быть >=1",this.errorText.amount_error++),(void 0===this.temp_edit_data.price||this.temp_edit_data.price<1)&&(this.errorText.price="цена должна быть >=1",this.errorText.amount_error++),void 0!==this.temp_edit_data.specific&&0!==this.temp_edit_data.specific.length||(this.errorText.specific="требуется указывать описание",this.errorText.amount_error++),void 0!==this.temp_edit_data.date&&10==this.temp_edit_data.date.length||(this.errorText.date="требуется указывать дату",this.errorText.amount_error++),0===this.errorText.amount_error&&this.$emit("return_edited_item",this.temp_edit_data)},popupClosePress(t){"Escape"===t.key&&this.popupClose()}},watch:{},computed:{...(0,B.Se)(["GET_PRODUCT","GET_USER_PERMISSION"])},mounted(){this.IsEditing=this.GET_USER_PERMISSION.isEdit,this.IsEditing?(this.temp_edit_data=JSON.parse(JSON.stringify(this.edit_data)),"new"===this.temp_edit_data.status?(this.isNewItem=!0,this.text_popup="Новый",0!=this.GET_PRODUCT("sales").length?this.temp_edit_data.id=`000${parseInt(this.GET_PRODUCT("sales")[this.GET_PRODUCT("sales").length-1].id)+1}`:this.temp_edit_data.id="0001"):this.text_popup="Редактирование"):this.text_popup="Только чтения"},created(){document.addEventListener("keydown",this.popupClosePress,!0)},unmounted(){document.removeEventListener("keydown",this.popupClosePress,!0)}},J=i(89);const V=(0,J.Z)(q,[["render",j],["__scopeId","data-v-dfd7047e"]]);var Z=V},4768:function(t,e,i){i.d(e,{Z:function(){return g}});var s=i(3396),a=i(7139);const _=["onClick","onDblclick"],n={class:"table__text"},r={class:"table__text"},o={class:"table__text"};function d(t,e,i,d,l,c){const p=(0,s.up)("vsBodyTbale");return(0,s.wg)(),(0,s.iD)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.get_data,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id,onClick:t=>c.singleClick(e),onDblclick:t=>c.doubleClick(e),class:(0,a.C_)([{"table-active":`${e}`==l.active_index},{"bg-warning bg-gradientt":"edited"===t.status},{"bg-danger bg-gradient":"error"===t.status},{"bg-success bg-gradient":"new"===t.status},{"bg-secondary bg-gradient":"delete"===t.status}])},[(0,s.Wm)(p,{item:t,index:e},{default:(0,s.w5)((()=>[(0,s._)("td",n,(0,a.zw)(c.get_specific_field(t,i.render_data[0])),1),(0,s._)("td",r,(0,a.zw)(c.get_specific_field(t,i.render_data[1])),1),(0,s._)("td",o,(0,a.zw)(c.get_specific_field(t,i.render_data[2])),1)])),_:2},1032,["item","index"])],42,_)))),128))])}const l={scope:"row",class:"table__text"},c=(0,s._)("td",{class:"table__text"},"Номер заявки",-1),p={class:"table__text"},u={class:"table__text"};function m(t,e,i,_,n,r){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("th",l,(0,a.zw)(i.index+1),1),c,(0,s._)("td",p,(0,a.zw)(i.item.article),1),(0,s._)("td",u,(0,a.zw)(i.item.name),1),(0,s.WI)(t.$slots,"default")],64)}var h={name:"vs-body-table",components:{},props:{item:{type:Object,default(){return{}}},index:{type:Number,default(){return null}}},data(){return{}},methods:{},watch:{},computed:{},mounted(){}},v=i(89);const b=(0,v.Z)(h,[["render",m]]);var x=b,T={name:"vs-item",components:{vsBodyTbale:x},props:{get_data:{type:Array,default(){return[{}]}},render_data:{type:Array,default(){return[""]}}},data(){return{active_index:void 0,time:null}},methods:{singleClick(t){this.active_index=t,clearTimeout(this.time),this.time=setTimeout((()=>{this.$emit("singleclick",t)}),160)},doubleClick(t){clearTimeout(this.time),this.active_index=t,this.$emit("doubleClick",t)},get_specific_field(t,e){try{return Object.entries(t).filter((t=>t[0]===e))[0][1]}catch{return"null"}}},watch:{},computed:{},mounted(){}};const E=(0,v.Z)(T,[["render",d]]);var g=E},9109:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(3396);const a=(0,s._)("th",{class:"table__number table__text",scope:"col"},"№",-1),_=(0,s._)("th",{class:"table__number table__text",scope:"col"},"№ заявки",-1),n=(0,s._)("th",{class:"table__article table__text",scope:"col"},"Артикул",-1),r=(0,s._)("th",{class:"table__name table__text",scope:"col"},"Название",-1);function o(t,e,i,o,d,l){return(0,s.wg)(),(0,s.iD)("thead",null,[(0,s._)("tr",null,[a,_,n,r,(0,s.WI)(t.$slots,"default")])])}var d={name:"vs-header-table",components:{},props:{},data(){return{}},methods:{},watch:{},computed:{},mounted(){}},l=i(89);const c=(0,l.Z)(d,[["render",o]]);var p=c},2445:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(3396),a=i(7139);function _(t,e,i,_,n,r){return(0,s.wg)(),(0,s.iD)("ul",{class:"nav text-capitalize top-menu justify-content-start user-select-none",onClick:e[5]||(e[5]=(...t)=>r.remove_target&&r.remove_target(...t))},[(0,s._)("li",{class:"nav-item",onClick:e[0]||(e[0]=(...t)=>r.create_new_item&&r.create_new_item(...t))},[(0,s._)("a",{class:(0,a.C_)(["nav-link d-inline-block",{"text-white active":i.state_buttons.isCreateActive,disabled:!i.state_buttons.isCreateActive}]),"aria-current":"page",href:"#"},"Создать",2)]),(0,s._)("li",{class:"nav-item",onClick:e[1]||(e[1]=(...t)=>r.open_active_item&&r.open_active_item(...t))},[(0,s._)("a",{class:(0,a.C_)(["nav-link",{"text-white active":i.state_buttons.isOpenActive,disabled:!i.state_buttons.isOpenActive}]),"aria-current":"page",href:"#"},"Открыть",2)]),(0,s._)("li",{class:"nav-item",onClick:e[2]||(e[2]=(...t)=>r.delete_active_item&&r.delete_active_item(...t))},[(0,s._)("a",{class:(0,a.C_)(["nav-link",{"text-white active":i.state_buttons.isDeleteActive,disabled:!i.state_buttons.isDeleteActive}]),"aria-current":"page",href:"#"},"удалить",2)]),(0,s._)("li",{class:"nav-item",onClick:e[3]||(e[3]=(...t)=>r.cancel_edited_item&&r.cancel_edited_item(...t))},[(0,s._)("a",{class:(0,a.C_)(["nav-link",{"text-white active":i.state_buttons.isPublicActive,disabled:!i.state_buttons.isPublicActive}]),"aria-current":"page",href:"#"},"отмена",2)]),(0,s._)("li",{class:"nav-item",onClick:e[4]||(e[4]=(...t)=>r.public_edited_item&&r.public_edited_item(...t))},[(0,s._)("a",{class:(0,a.C_)(["nav-link",{"text-white active":i.state_buttons.isPublicActive,disabled:!i.state_buttons.isPublicActive}]),"aria-current":"page",href:"#"},"провести",2)])])}var n=i(65),r={name:"vs-top-menu",components:{},props:{state_buttons:{type:Object,default(){return{isOpenActive:!1,isCreateActive:!1,isPublicActive:!1,isDeleteActive:!1}}}},data(){return{}},methods:{remove_target(){this.$emit("remove_target")},create_new_item(){this.state_buttons.isCreateActive&&this.$emit("create_new_item")},open_active_item(){this.state_buttons.isOpenActive&&this.$emit("open_active_item")},public_edited_item(){this.state_buttons.isPublicActive&&this.$emit("public_edited_item")},cancel_edited_item(){this.state_buttons.isPublicActive&&this.$emit("cancel_edited_item")},delete_active_item(){this.state_buttons.isDeleteActive&&this.$emit("delete_active_item")},classObject(t){return[{"text-white":t.status},{active:t.status},{"text-success":!t.status},{disable:!t.status}]}},watch:{},computed:{...(0,n.Se)(["GET_USER_PERMISSION"])},mounted(){}},o=i(89);const d=(0,o.Z)(r,[["render",_],["__scopeId","data-v-034f141a"]]);var l=d}}]);
//# sourceMappingURL=170.55016f64.js.map