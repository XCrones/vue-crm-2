"use strict";(self["webpackChunkvue_crm_2"]=self["webpackChunkvue_crm_2"]||[]).push([[91],{3703:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var s=a(3396),_=a(9242);const i={class:"table-responsive"},l={class:"table table-bordered text-center table-hover user-select-none"},n=(0,s._)("th",{class:"table__price table__text",scope:"col"},"Цена шт(Р)",-1),d=(0,s._)("th",{class:"table__amount table__text",scope:"col"},"Кол-во(шт)",-1),c=(0,s._)("th",{class:"table__date table__text",scope:"col"},"Дата продажи",-1);function o(e,t,a,o,u,r){const p=(0,s.up)("viewsTopMenuVue"),m=(0,s.up)("vHeaderTable"),v=(0,s.up)("vItem"),b=(0,s.up)("vPopupVue");return(0,s.wg)(),(0,s.iD)("div",{class:"container-xs",onKeydown:t[5]||(t[5]=(0,_.D2)(((...t)=>e.testEscape&&e.testEscape(...t)),["esc"])),onDblclick:t[6]||(t[6]=(...e)=>r.getfull&&r.getfull(...e))},[(0,s.Wm)(p,{state_buttons:e.state_btn_top_menu,onCreate_new_item:t[0]||(t[0]=t=>e.create_new_item(e.active_index)),onOpen_active_item:t[1]||(t[1]=t=>e.open_active_item(e.active_index,u.data_sales)),onPublic_edited_item:t[2]||(t[2]=t=>e.public_edited_item(e.active_index,u.data_sales,u.type)),onCancel_edited_item:t[3]||(t[3]=t=>e.cancel_edited_item(e.active_index,u.data_sales,u.type)),onDelete_active_item:t[4]||(t[4]=t=>e.delete_active_item(e.active_index,u.data_sales))},null,8,["state_buttons"]),(0,s._)("div",i,[(0,s._)("table",l,[(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[n,d,c])),_:1}),(0,s.Wm)(v,{render_data:u.render_keys,get_data:u.data_sales,onDoubleClick:r.doubleClick,onSingleclick:r.singleclick},null,8,["render_data","get_data","onDoubleClick","onSingleclick"])])]),e.isPopupVisible?((0,s.wg)(),(0,s.j4)(b,{key:0,edit_data:e.editable_item,onPopup_close:e.popup_close,onReturn_edited_item:r.return_edited_item},null,8,["edit_data","onPopup_close","onReturn_edited_item"])):(0,s.kq)("",!0)],32)}var u=a(2445),r=a(8520),p=a(4768),m=a(9109),v=a(65),b=a(8447),h={name:"vs-sale",components:{viewsTopMenuVue:u.Z,vPopupVue:r.Z,vItem:p.Z,vHeaderTable:m.Z},props:{},data(){return{data_sales:[],type:"sales",render_keys:[]}},mixins:[b.Z],methods:{getfull(){},singleclick(e){this.select_id_item(e,this.data_sales)},doubleClick(e){this.select_id_item(e,this.data_sales),this.open_active_item(e,this.data_sales)},return_edited_item(e){this.valid_item(e,this.data_sales,this.type)}},watch:{},computed:{...(0,v.Se)(["GET_USER_PERMISSION","GET_PRODUCT","GET_STATE_BUFFER","GET_BUFFER"])},mounted(){},unmounted(){},created(){this.state_btn_top_menu.isCreateActive=this.GET_USER_PERMISSION.isCreate,this.data_sales=this.GET_PRODUCT(this.type),this.render_keys.push("price"),this.render_keys.push("amount"),this.render_keys.push("date")}},k=a(89);const E=(0,k.Z)(h,[["render",o]]);var T=E}}]);
//# sourceMappingURL=views-sale.efe2e86d.js.map