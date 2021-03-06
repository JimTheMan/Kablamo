// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__47805_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__47805_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___47806 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___47806)){
var not_i_47807 = temp__4657__auto___47806;
if(cljs.core.fn_QMARK_.call(null,not_i_47807)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_47807);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_47807);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_47808 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_47809 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___47822 = re_frame.interop.now.call(null);
var duration__30776__auto___47823 = (end__30775__auto___47822 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__47810_47824 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__47811_47825 = null;
var count__47812_47826 = (0);
var i__47813_47827 = (0);
while(true){
if((i__47813_47827 < count__47812_47826)){
var vec__47814_47828 = cljs.core._nth.call(null,chunk__47811_47825,i__47813_47827);
var k__30777__auto___47829 = cljs.core.nth.call(null,vec__47814_47828,(0),null);
var cb__30778__auto___47830 = cljs.core.nth.call(null,vec__47814_47828,(1),null);
try{cb__30778__auto___47830.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___47823,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e47817){if((e47817 instanceof java.lang.Exception)){
var e__30779__auto___47831 = e47817;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___47829,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___47831);
} else {
throw e47817;

}
}
var G__47832 = seq__47810_47824;
var G__47833 = chunk__47811_47825;
var G__47834 = count__47812_47826;
var G__47835 = (i__47813_47827 + (1));
seq__47810_47824 = G__47832;
chunk__47811_47825 = G__47833;
count__47812_47826 = G__47834;
i__47813_47827 = G__47835;
continue;
} else {
var temp__4657__auto___47836 = cljs.core.seq.call(null,seq__47810_47824);
if(temp__4657__auto___47836){
var seq__47810_47837__$1 = temp__4657__auto___47836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47810_47837__$1)){
var c__29125__auto___47838 = cljs.core.chunk_first.call(null,seq__47810_47837__$1);
var G__47839 = cljs.core.chunk_rest.call(null,seq__47810_47837__$1);
var G__47840 = c__29125__auto___47838;
var G__47841 = cljs.core.count.call(null,c__29125__auto___47838);
var G__47842 = (0);
seq__47810_47824 = G__47839;
chunk__47811_47825 = G__47840;
count__47812_47826 = G__47841;
i__47813_47827 = G__47842;
continue;
} else {
var vec__47818_47843 = cljs.core.first.call(null,seq__47810_47837__$1);
var k__30777__auto___47844 = cljs.core.nth.call(null,vec__47818_47843,(0),null);
var cb__30778__auto___47845 = cljs.core.nth.call(null,vec__47818_47843,(1),null);
try{cb__30778__auto___47845.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___47823,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e47821){if((e47821 instanceof java.lang.Exception)){
var e__30779__auto___47846 = e47821;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___47844,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___47846);
} else {
throw e47821;

}
}
var G__47847 = cljs.core.next.call(null,seq__47810_47837__$1);
var G__47848 = null;
var G__47849 = (0);
var G__47850 = (0);
seq__47810_47824 = G__47847;
chunk__47811_47825 = G__47848;
count__47812_47826 = G__47849;
i__47813_47827 = G__47850;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_47809;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_47808;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1517200940832
