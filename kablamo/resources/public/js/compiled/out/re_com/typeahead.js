// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__46681){
var map__46682 = p__46681;
var map__46682__$1 = ((((!((map__46682 == null)))?((((map__46682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46682):map__46682);
var args = map__46682__$1;
var on_change = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__46684 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28286__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__46684,external_model_value);
} else {
return G__46684;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__46685,event){
var map__46686 = p__46685;
var map__46686__$1 = ((((!((map__46686 == null)))?((((map__46686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46686):map__46686);
var state = map__46686__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__46688 = event;
var G__46688__$1 = (((G__46688 instanceof cljs.core.Keyword))?G__46688.fqn:null);
switch (G__46688__$1) {
case "input-text-blurred":
var and__28274__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__28274__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__28286__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46688__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__46690,event){
var map__46691 = p__46690;
var map__46691__$1 = ((((!((map__46691 == null)))?((((map__46691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46691):map__46691);
var state = map__46691__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__46691__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__46693 = event;
var G__46693__$1 = (((G__46693 instanceof cljs.core.Keyword))?G__46693.fqn:null);
switch (G__46693__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__46695,new_value){
var map__46696 = p__46695;
var map__46696__$1 = ((((!((map__46696 == null)))?((((map__46696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46696):map__46696);
var state = map__46696__$1;
var on_change = cljs.core.get.call(null,map__46696__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__46698,suggestion){
var map__46699 = p__46698;
var map__46699__$1 = ((((!((map__46699 == null)))?((((map__46699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46699):map__46699);
var state = map__46699__$1;
var suggestion_to_string = cljs.core.get.call(null,map__46699__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__46701 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__46701,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__46701;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__46702,index){
var map__46703 = p__46702;
var map__46703__$1 = ((((!((map__46703 == null)))?((((map__46703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46703):map__46703);
var state = map__46703__$1;
var suggestions = cljs.core.get.call(null,map__46703__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__46705 = state;
var G__46705__$1 = cljs.core.assoc.call(null,G__46705,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__46705__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__46705__$1,suggestion):G__46705__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__46705__$2,suggestion);
} else {
return G__46705__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__46706,index){
var map__46707 = p__46706;
var map__46707__$1 = ((((!((map__46707 == null)))?((((map__46707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46707):map__46707);
var state = map__46707__$1;
var suggestions = cljs.core.get.call(null,map__46707__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__46709){
var map__46710 = p__46709;
var map__46710__$1 = ((((!((map__46710 == null)))?((((map__46710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46710):map__46710);
var state = map__46710__$1;
var suggestion_active_index = cljs.core.get.call(null,map__46710__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46712 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__46712,suggestion_active_index);
} else {
return G__46712;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__46713){
var map__46714 = p__46713;
var map__46714__$1 = ((((!((map__46714 == null)))?((((map__46714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46714):map__46714);
var state = map__46714__$1;
var suggestions = cljs.core.get.call(null,map__46714__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__46714__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46716 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__46716,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__46716;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__46717){
var map__46718 = p__46717;
var map__46718__$1 = ((((!((map__46718 == null)))?((((map__46718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46718):map__46718);
var state = map__46718__$1;
var suggestions = cljs.core.get.call(null,map__46718__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__46718__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__46720 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__46720,re_com.typeahead.wrap.call(null,((function (){var or__28286__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__46720;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__46721 = state;
var G__46721__$1 = re_com.typeahead.clear_suggestions.call(null,G__46721)
;
var G__46721__$2 = cljs.core.assoc.call(null,G__46721__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__46721__$2,null);
} else {
return G__46721__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__46722){
var map__46723 = p__46722;
var map__46723__$1 = ((((!((map__46723 == null)))?((((map__46723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46723):map__46723);
var state = map__46723__$1;
var input_text = cljs.core.get.call(null,map__46723__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__46723__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__46725 = state;
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28274__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28274__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__46725,input_text);
} else {
return G__46725;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__46726_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__46726_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (1))){
var state_46743__$1 = state_46743;
var statearr_46745_46757 = state_46743__$1;
(statearr_46745_46757[(2)] = null);

(statearr_46745_46757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46743__$1,(4),c_search);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (4))){
var inst_46729 = (state_46743[(7)]);
var inst_46729__$1 = (state_46743[(2)]);
var inst_46730 = cljs.core.deref.call(null,state_atom);
var inst_46731 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_46730);
var inst_46732 = cljs.core._EQ_.call(null,"",inst_46729__$1);
var state_46743__$1 = (function (){var statearr_46746 = state_46743;
(statearr_46746[(8)] = inst_46731);

(statearr_46746[(7)] = inst_46729__$1);

return statearr_46746;
})();
if(inst_46732){
var statearr_46747_46758 = state_46743__$1;
(statearr_46747_46758[(1)] = (5));

} else {
var statearr_46748_46759 = state_46743__$1;
(statearr_46748_46759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (5))){
var inst_46734 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_46743__$1 = state_46743;
var statearr_46749_46760 = state_46743__$1;
(statearr_46749_46760[(2)] = inst_46734);

(statearr_46749_46760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46731 = (state_46743[(8)]);
var inst_46729 = (state_46743[(7)]);
var inst_46736 = re_com.typeahead.search_data_source_BANG_.call(null,inst_46731,state_atom,inst_46729);
var state_46743__$1 = state_46743;
var statearr_46750_46761 = state_46743__$1;
(statearr_46750_46761[(2)] = inst_46736);

(statearr_46750_46761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (7))){
var inst_46738 = (state_46743[(2)]);
var state_46743__$1 = (function (){var statearr_46751 = state_46743;
(statearr_46751[(9)] = inst_46738);

return statearr_46751;
})();
var statearr_46752_46762 = state_46743__$1;
(statearr_46752_46762[(2)] = null);

(statearr_46752_46762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____0 = (function (){
var statearr_46753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46753[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__);

(statearr_46753[(1)] = (1));

return statearr_46753;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____1 = (function (state_46743){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46754){if((e46754 instanceof Object)){
var ex__32498__auto__ = e46754;
var statearr_46755_46763 = state_46743;
(statearr_46755_46763[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46764 = state_46743;
state_46743 = G__46764;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_46756 = f__32583__auto__.call(null);
(statearr_46756[(6)] = c__32582__auto__);

return statearr_46756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__46766 = cljs.core.deref.call(null,state_atom);
var map__46766__$1 = ((((!((map__46766 == null)))?((((map__46766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46766):map__46766);
var state = map__46766__$1;
var input_text = cljs.core.get.call(null,map__46766__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__46766__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__46766,map__46766__$1,state,input_text,c_input){
return (function (p1__46765_SHARP_){
var G__46768 = p1__46765_SHARP_;
var G__46768__$1 = cljs.core.assoc.call(null,G__46768,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__46768__$1,new_text);
} else {
return G__46768__$1;
}
});})(map__46766,map__46766__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__46769 = cljs.core._EQ_;
var expr__46770 = event.which;
if(cljs.core.truth_(pred__46769.call(null,goog.events.KeyCodes.UP,expr__46770))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__46769.call(null,goog.events.KeyCodes.DOWN,expr__46770))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__46769.call(null,goog.events.KeyCodes.ENTER,expr__46770))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__46769.call(null,goog.events.KeyCodes.ESC,expr__46770))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__46769.call(null,goog.events.KeyCodes.TAB,expr__46770))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__29462__auto__ = [];
var len__29455__auto___46794 = arguments.length;
var i__29456__auto___46795 = (0);
while(true){
if((i__29456__auto___46795 < len__29455__auto___46794)){
args__29462__auto__.push((arguments[i__29456__auto___46795]));

var G__46796 = (i__29456__auto___46795 + (1));
i__29456__auto___46795 = G__46796;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__46774){
var map__46775 = p__46774;
var map__46775__$1 = ((((!((map__46775 == null)))?((((map__46775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46775):map__46775);
var args = map__46775__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__46777 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__46777__$1 = ((((!((map__46777 == null)))?((((map__46777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46777):map__46777);
var state = map__46777__$1;
var c_search = cljs.core.get.call(null,map__46777__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__46777__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function() { 
var G__46797__delegate = function (p__46779){
var map__46780 = p__46779;
var map__46780__$1 = ((((!((map__46780 == null)))?((((map__46780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46780):map__46780);
var args__$1 = map__46780__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__46782 = cljs.core.deref.call(null,state_atom);
var map__46782__$1 = ((((!((map__46782 == null)))?((((map__46782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46782):map__46782);
var state__$1 = map__46782__$1;
var suggestions = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__28286__auto__ = width;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__28286__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29094__auto__ = ((function (map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function re_com$typeahead$iter__46784(s__46785){
return (new cljs.core.LazySeq(null,((function (map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function (){
var s__46785__$1 = s__46785;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46785__$1);
if(temp__4657__auto__){
var s__46785__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46785__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__46785__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__46787 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__46786 = (0);
while(true){
if((i__46786 < size__29093__auto__)){
var vec__46788 = cljs.core._nth.call(null,c__29092__auto__,i__46786);
var i = cljs.core.nth.call(null,vec__46788,(0),null);
var s = cljs.core.nth.call(null,vec__46788,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__46787,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__46786,selected_QMARK_,vec__46788,i,s,c__29092__auto__,size__29093__auto__,b__46787,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__46786,selected_QMARK_,vec__46788,i,s,c__29092__auto__,size__29093__auto__,b__46787,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__46786,selected_QMARK_,vec__46788,i,s,c__29092__auto__,size__29093__auto__,b__46787,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function (p1__46772_SHARP_){
p1__46772_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__46786,selected_QMARK_,vec__46788,i,s,c__29092__auto__,size__29093__auto__,b__46787,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__46798 = (i__46786 + (1));
i__46786 = G__46798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46787),re_com$typeahead$iter__46784.call(null,cljs.core.chunk_rest.call(null,s__46785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46787),null);
}
} else {
var vec__46791 = cljs.core.first.call(null,s__46785__$2);
var i = cljs.core.nth.call(null,vec__46791,(0),null);
var s = cljs.core.nth.call(null,vec__46791,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__46791,i,s,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__46791,i,s,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__46791,i,s,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args){
return (function (p1__46772_SHARP_){
p1__46772_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__46791,i,s,s__46785__$2,temp__4657__auto__,map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__46784.call(null,cljs.core.rest.call(null,s__46785__$2)));
}
} else {
return null;
}
break;
}
});})(map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
,null,null));
});})(map__46782,map__46782__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__46780,map__46780__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
;
return iter__29094__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__46797 = function (var_args){
var p__46779 = null;
if (arguments.length > 0) {
var G__46799__i = 0, G__46799__a = new Array(arguments.length -  0);
while (G__46799__i < G__46799__a.length) {G__46799__a[G__46799__i] = arguments[G__46799__i + 0]; ++G__46799__i;}
  p__46779 = new cljs.core.IndexedSeq(G__46799__a,0,null);
} 
return G__46797__delegate.call(this,p__46779);};
G__46797.cljs$lang$maxFixedArity = 0;
G__46797.cljs$lang$applyTo = (function (arglist__46800){
var p__46779 = cljs.core.seq(arglist__46800);
return G__46797__delegate(p__46779);
});
G__46797.cljs$core$IFn$_invoke$arity$variadic = G__46797__delegate;
return G__46797;
})()
;
;})(map__46777,map__46777__$1,state,c_search,c_input,state_atom,input_text_model,map__46775,map__46775__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq46773){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46773));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__32582__auto___46881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46881,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46881,out){
return (function (state_46851){
var state_val_46852 = (state_46851[(1)]);
if((state_val_46852 === (7))){
var inst_46806 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46853_46882 = state_46851__$1;
(statearr_46853_46882[(2)] = inst_46806);

(statearr_46853_46882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (1))){
var inst_46801 = null;
var state_46851__$1 = (function (){var statearr_46854 = state_46851;
(statearr_46854[(7)] = inst_46801);

return statearr_46854;
})();
var statearr_46855_46883 = state_46851__$1;
(statearr_46855_46883[(2)] = null);

(statearr_46855_46883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (4))){
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46851__$1,(7),in$);
} else {
if((state_val_46852 === (15))){
var inst_46836 = (state_46851[(2)]);
var state_46851__$1 = (function (){var statearr_46856 = state_46851;
(statearr_46856[(8)] = inst_46836);

return statearr_46856;
})();
var statearr_46857_46884 = state_46851__$1;
(statearr_46857_46884[(2)] = null);

(statearr_46857_46884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (13))){
var inst_46824 = (state_46851[(9)]);
var inst_46838 = cljs.core._EQ_.call(null,inst_46824,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_46851__$1 = state_46851;
if(inst_46838){
var statearr_46858_46885 = state_46851__$1;
(statearr_46858_46885[(1)] = (16));

} else {
var statearr_46859_46886 = state_46851__$1;
(statearr_46859_46886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (6))){
var inst_46810 = (state_46851[(10)]);
var inst_46809 = (state_46851[(2)]);
var inst_46810__$1 = cljs.core.async.timeout.call(null,ms);
var inst_46818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46819 = [in$,inst_46810__$1];
var inst_46820 = (new cljs.core.PersistentVector(null,2,(5),inst_46818,inst_46819,null));
var state_46851__$1 = (function (){var statearr_46860 = state_46851;
(statearr_46860[(11)] = inst_46809);

(statearr_46860[(10)] = inst_46810__$1);

return statearr_46860;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46851__$1,(8),inst_46820);
} else {
if((state_val_46852 === (17))){
var state_46851__$1 = state_46851;
var statearr_46861_46887 = state_46851__$1;
(statearr_46861_46887[(2)] = null);

(statearr_46861_46887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (3))){
var inst_46849 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46851__$1,inst_46849);
} else {
if((state_val_46852 === (12))){
var inst_46809 = (state_46851[(11)]);
var state_46851__$1 = state_46851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46851__$1,(15),out,inst_46809);
} else {
if((state_val_46852 === (2))){
var inst_46801 = (state_46851[(7)]);
var inst_46803 = (inst_46801 == null);
var state_46851__$1 = state_46851;
if(cljs.core.truth_(inst_46803)){
var statearr_46862_46888 = state_46851__$1;
(statearr_46862_46888[(1)] = (4));

} else {
var statearr_46863_46889 = state_46851__$1;
(statearr_46863_46889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (11))){
var inst_46846 = (state_46851[(2)]);
var inst_46801 = inst_46846;
var state_46851__$1 = (function (){var statearr_46864 = state_46851;
(statearr_46864[(7)] = inst_46801);

return statearr_46864;
})();
var statearr_46865_46890 = state_46851__$1;
(statearr_46865_46890[(2)] = null);

(statearr_46865_46890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (9))){
var inst_46822 = (state_46851[(12)]);
var inst_46830 = cljs.core.nth.call(null,inst_46822,(0),null);
var inst_46831 = cljs.core.nth.call(null,inst_46822,(1),null);
var state_46851__$1 = (function (){var statearr_46866 = state_46851;
(statearr_46866[(13)] = inst_46831);

return statearr_46866;
})();
var statearr_46867_46891 = state_46851__$1;
(statearr_46867_46891[(2)] = inst_46830);

(statearr_46867_46891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (5))){
var inst_46801 = (state_46851[(7)]);
var state_46851__$1 = state_46851;
var statearr_46868_46892 = state_46851__$1;
(statearr_46868_46892[(2)] = inst_46801);

(statearr_46868_46892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (14))){
var inst_46844 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46869_46893 = state_46851__$1;
(statearr_46869_46893[(2)] = inst_46844);

(statearr_46869_46893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (16))){
var inst_46823 = (state_46851[(14)]);
var state_46851__$1 = state_46851;
var statearr_46870_46894 = state_46851__$1;
(statearr_46870_46894[(2)] = inst_46823);

(statearr_46870_46894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (10))){
var inst_46824 = (state_46851[(9)]);
var inst_46810 = (state_46851[(10)]);
var inst_46833 = cljs.core._EQ_.call(null,inst_46824,inst_46810);
var state_46851__$1 = state_46851;
if(inst_46833){
var statearr_46871_46895 = state_46851__$1;
(statearr_46871_46895[(1)] = (12));

} else {
var statearr_46872_46896 = state_46851__$1;
(statearr_46872_46896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (18))){
var inst_46842 = (state_46851[(2)]);
var state_46851__$1 = state_46851;
var statearr_46873_46897 = state_46851__$1;
(statearr_46873_46897[(2)] = inst_46842);

(statearr_46873_46897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46852 === (8))){
var inst_46824 = (state_46851[(9)]);
var inst_46822 = (state_46851[(12)]);
var inst_46822__$1 = (state_46851[(2)]);
var inst_46823 = cljs.core.nth.call(null,inst_46822__$1,(0),null);
var inst_46824__$1 = cljs.core.nth.call(null,inst_46822__$1,(1),null);
var inst_46825 = cljs.core._EQ_.call(null,inst_46824__$1,in$);
var state_46851__$1 = (function (){var statearr_46874 = state_46851;
(statearr_46874[(9)] = inst_46824__$1);

(statearr_46874[(12)] = inst_46822__$1);

(statearr_46874[(14)] = inst_46823);

return statearr_46874;
})();
if(inst_46825){
var statearr_46875_46898 = state_46851__$1;
(statearr_46875_46898[(1)] = (9));

} else {
var statearr_46876_46899 = state_46851__$1;
(statearr_46876_46899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32582__auto___46881,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46881,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__32495__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__32495__auto____0 = (function (){
var statearr_46877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46877[(0)] = re_com$typeahead$debounce_$_state_machine__32495__auto__);

(statearr_46877[(1)] = (1));

return statearr_46877;
});
var re_com$typeahead$debounce_$_state_machine__32495__auto____1 = (function (state_46851){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46878){if((e46878 instanceof Object)){
var ex__32498__auto__ = e46878;
var statearr_46879_46900 = state_46851;
(statearr_46879_46900[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46901 = state_46851;
state_46851 = G__46901;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__32495__auto__ = function(state_46851){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__32495__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__32495__auto____1.call(this,state_46851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__32495__auto____0;
re_com$typeahead$debounce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__32495__auto____1;
return re_com$typeahead$debounce_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46881,out))
})();
var state__32584__auto__ = (function (){var statearr_46880 = f__32583__auto__.call(null);
(statearr_46880[(6)] = c__32582__auto___46881);

return statearr_46880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46881,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1517200936266
