import{A as le,B as y,C as A,D as G,E as be,F as m,G as Ae,M as u,N as a,O as Me,P as B,Q as f,R as g,T as d,V as M,W as U,X as Ee,Z as C,_ as H,a as h,b as p,ba as ue,c as ve,ca as L,d as _e,da as $,e as ye,ea as Se,f as Ce,fa as we,g as Ve,ga as Fe,h as R,ha as Ie,i as T,ia as xe,j as ie,k as re,l as v,n as De,o as V,p as D,q as oe,r as _,u as se,v as j,w as c,x as ae,y as s,z as b}from"./chunk-F6IHTXAK.js";var je=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(s(ae),s(se))};static \u0275dir=y({type:n})}return n})(),Ge=(()=>{class n extends je{static \u0275fac=(()=>{let t;return function(r){return(t||(t=oe(n)))(r||n)}})();static \u0275dir=y({type:n,features:[A]})}return n})(),fe=new v("");var st={provide:fe,useExisting:T(()=>Y),multi:!0};function at(){let n=ue()?ue().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var lt=new v(""),Y=(()=>{class n extends je{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!at())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(s(ae),s(se),s(lt,8))};static \u0275dir=y({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&f("input",function(l){return r._handleInput(l.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(l){return r._compositionEnd(l.target.value)})},standalone:!1,features:[U([st]),A]})}return n})();var ut=new v(""),ct=new v("");function Be(n){return n!=null}function Ue(n){return be(n)?ye(n):n}function He(n){let e={};return n.forEach(t=>{e=t!=null?h(h({},e),t):e}),Object.keys(e).length===0?null:e}function Le(n,e){return e.map(t=>t(n))}function dt(n){return!n.validate}function $e(n){return n.map(e=>dt(e)?e:t=>e.validate(t))}function ht(n){if(!n)return null;let e=n.filter(Be);return e.length==0?null:function(t){return He(Le(t,e))}}function We(n){return n!=null?ht($e(n)):null}function ft(n){if(!n)return null;let e=n.filter(Be);return e.length==0?null:function(t){let i=Le(t,e).map(Ue);return Ve(i).pipe(Ce(He))}}function qe(n){return n!=null?ft($e(n)):null}function Oe(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function ze(n){return n._rawValidators}function Ke(n){return n._rawAsyncValidators}function ce(n){return n?Array.isArray(n)?n:[n]:[]}function q(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ne(n,e){let t=ce(e);return ce(n).forEach(r=>{q(t,r)||t.push(r)}),t}function Pe(n,e){return ce(e).filter(t=>!q(n,t))}var de=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=We(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var k=class extends de{_parent=null;name=null;valueAccessor=null},he=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},pt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},rn=p(h({},pt),{"[class.ng-submitted]":"isSubmitted"}),Ze=(()=>{class n extends he{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(k,2))};static \u0275dir=y({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[A]})}return n})();var x="VALID",W="INVALID",E="PENDING",O="DISABLED",w=class{},z=class extends w{value;source;constructor(e,t){super(),this.value=e,this.source=t}},N=class extends w{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},P=class extends w{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},S=class extends w{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function Je(n){return(Q(n)?n.validators:n)||null}function mt(n){return Array.isArray(n)?We(n):n||null}function Xe(n,e){return(Q(e)?e.asyncValidators:n)||null}function gt(n){return Array.isArray(n)?qe(n):n||null}function Q(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function vt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new R(1e3,"");if(!i[t])throw new R(1001,"")}function _t(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new R(1002,"")})}var K=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return C(this.statusReactive)}set status(e){C(()=>this.statusReactive.set(e))}_status=H(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===x}get invalid(){return this.status===W}get pending(){return this.status==E}get disabled(){return this.status===O}get enabled(){return this.status!==O}errors;get pristine(){return C(this.pristineReactive)}set pristine(e){C(()=>this.pristineReactive.set(e))}_pristine=H(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return C(this.touchedReactive)}set touched(e){C(()=>this.touchedReactive.set(e))}_touched=H(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new _e;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Pe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(p(h({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new P(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new P(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(p(h({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAsPending(e={}){this.status=E;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new S(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(p(h({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=O,this.errors=null,this._forEachChild(r=>{r.disable(p(h({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,i)),this._events.next(new S(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(p(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(h({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===E)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new z(this.value,t)),this._events.next(new S(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(p(h({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?O:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ue(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new S(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?O:this.errors?W:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(W)?W:x}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new P(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=gt(this._rawAsyncValidators)}};var Ye=new v("",{providedIn:"root",factory:()=>pe}),pe="always";function yt(n,e,t=pe){Vt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),bt(n,e),Mt(n,e),At(n,e),Ct(n,e)}function ke(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Dt(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Z(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Ct(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Vt(n,e){let t=ze(n);e.validator!==null?n.setValidators(Oe(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ke(n);e.asyncValidator!==null?n.setAsyncValidators(Oe(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Z(e._rawValidators,r),Z(e._rawAsyncValidators,r)}function Dt(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=ze(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Ke(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Z(e._rawValidators,i),Z(e._rawAsyncValidators,i),t}function bt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Qe(n,e)})}function At(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Qe(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Qe(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Mt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Et(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function St(n){return Object.getPrototypeOf(n.constructor)===Ge}function wt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===Y?t=o:St(o)?i=o:r=o}),r||i||t||null}function Re(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Te(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var F=class extends K{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Je(t),Xe(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Re(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Re(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ft={provide:fe,useExisting:T(()=>me),multi:!0},me=(()=>{class n extends Ge{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=oe(n)))(r||n)}})();static \u0275dir=y({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&f("input",function(l){return r.onChange(l.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[U([Ft]),A]})}return n})();var et=new v(""),It={provide:k,useExisting:T(()=>ge)},ge=(()=>{class n extends k{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new _;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,l){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=l,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=wt(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&ke(i,this,!1),yt(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Et(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ke(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(s(ut,10),s(ct,10),s(fe,10),s(et,8),s(Ye,8))};static \u0275dir=y({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[U([It]),A,De]})}return n})();var xt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=le({type:n});static \u0275inj=re({})}return n})(),J=class extends K{constructor(e,t,i){super(Je(t),Xe(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,i={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){_t(this,!1,e),e.forEach((i,r)=>{vt(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,i)=>{e(t,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var tt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:et,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Ye,useValue:t.callSetDisabledState??pe}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=le({type:n});static \u0275inj=re({imports:[xt]})}return n})();var I=class n{constructor(){}saveSection(e,t){let i=`dynamic-inputs-section-${e}`;localStorage.setItem(i,JSON.stringify(t))}loadSection(e){let t=`dynamic-inputs-section-${e}`,i=localStorage.getItem(t);return i?JSON.parse(i):null}removeSection(e){let t=`dynamic-inputs-section-${e}`;localStorage.removeItem(t)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ie({token:n,factory:n.\u0275fac,providedIn:"root"})};function Pt(n,e){if(n&1){let t=B();u(0,"div",6)(1,"label",7),d(2),a(),u(3,"input",8),f("keypress",function(r){let o=V(t).index,l=g();return D(l.onKeyPress(r,o))}),a(),u(4,"button",3),f("click",function(){let r=V(t).index,o=g();return D(o.removeInput(r))}),d(5," - "),a()()}if(n&2){let t=e.$implicit,i=e.index,r=g();c(),m("for","input-"+r.sectionIndex+"-"+i),c(),M("Number ",i+1,""),c(),m("id","input-"+r.sectionIndex+"-"+i)("formControl",t),c(),m("disabled",r.inputs.length<=1)}}var ee=class n{constructor(e){this.dataService=e;this.loadFromLocalStorage()}sectionIndex;sectionCount=1;set initialValues(e){this.inputs.clear(),e.forEach(t=>this.inputs.push(new F(t))),this.loadFromLocalStorage()}inputsChange=new _;removeSection=new _;inputs=new J([new F(0)]);total=0;subscription=new ve;ngOnInit(){this.updateTotal()}ngOnDestroy(){this.subscription.unsubscribe()}addInput(){this.inputs.push(new F(0))}removeInput(e){this.inputs.length>1&&this.inputs.removeAt(e)}removeThisSection(){this.removeSection.emit(this.sectionIndex),this.dataService.removeSection(this.sectionIndex)}onKeyPress(e,t){if(e.key==="Enter"){let r=e.target.value,o=parseFloat(r)||0;this.inputs.at(t).setValue(o),this.saveToLocalStorage(),this.emitChanges(),this.updateTotal()}}updateTotal(){this.total=this.inputs.value.map(e=>e??0).reduce((e,t)=>e+t,0)}emitChanges(){let e=this.inputs.value.map(t=>t??0);this.inputsChange.emit(e)}saveToLocalStorage(){let e=this.inputs.value.map(t=>t??0);this.dataService.saveSection(this.sectionIndex,e)}loadFromLocalStorage(){let e=this.dataService.loadSection(this.sectionIndex);e?(this.inputs.clear(),e.forEach(t=>this.inputs.push(new F(t)))):this.inputs.length===0&&this.inputs.push(new F(0)),this.updateTotal()}get isRemoveSectionDisabled(){return this.sectionCount<=1&&this.sectionIndex===0}static \u0275fac=function(t){return new(t||n)(s(I))};static \u0275cmp=b({type:n,selectors:[["app-dynamic-inputs"]],inputs:{sectionIndex:"sectionIndex",sectionCount:"sectionCount",initialValues:"initialValues"},outputs:{inputsChange:"inputsChange",removeSection:"removeSection"},decls:11,vars:4,consts:[[1,"section"],[1,"button-group"],[3,"click"],[3,"click","disabled"],["class","input-group",4,"ngFor","ngForOf"],[1,"result"],[1,"input-group"],[3,"for"],["type","number","placeholder","Enter value and press Enter to save",3,"keypress","id","formControl"]],template:function(t,i){t&1&&(u(0,"div",0)(1,"h3"),d(2),a(),u(3,"div",1)(4,"button",2),f("click",function(){return i.addInput()}),d(5,"Add Input"),a(),u(6,"button",3),f("click",function(){return i.removeThisSection()}),d(7," Remove Section "),a()(),G(8,Pt,6,5,"div",4),u(9,"div",5),d(10),a()()),t&2&&(c(2),M("Section ",i.sectionIndex+1,""),c(4),m("disabled",i.isRemoveSectionDisabled),c(2),m("ngForOf",i.inputs.controls),c(2),M("Result: ",i.total,""))},dependencies:[$,L,tt,Y,me,Ze,ge],styles:[".section[_ngcontent-%COMP%]{margin-bottom:20px}.button-group[_ngcontent-%COMP%]{margin:10px 0}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:10px}.input-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:5px 0}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:80px;margin-right:10px}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:5px}.result[_ngcontent-%COMP%]{margin-top:10px;font-weight:700}"]})};function kt(n,e){if(n&1){let t=B();u(0,"div")(1,"app-dynamic-inputs",3),f("inputsChange",function(r){let o=V(t).index,l=g();return D(l.updateInputs(o,r))})("removeSection",function(r){V(t);let o=g();return D(o.removeSection(r))}),a()()}if(n&2){let t=e.$implicit,i=e.index,r=g();c(),m("sectionIndex",i)("initialValues",t)("sectionCount",r.getSectionCount())}}var te=class n{constructor(e){this.dataService=e}sections=[[0]];ngOnInit(){this.loadAllSections()}addSection(){this.sections.push([0]),this.saveAllSections()}removeSection(e){this.sections.length>1&&e>=0&&e<this.sections.length&&(this.sections.splice(e,1),this.reindexSections())}updateInputs(e,t){e>=0&&e<this.sections.length&&(this.sections[e]=t,this.dataService.saveSection(e,t))}loadAllSections(){this.sections=[];let e=0;for(;;){let t=this.dataService.loadSection(e);if(!t)break;this.sections.push(t),e++}this.sections.length===0&&this.sections.push([0])}saveAllSections(){this.sections.forEach((e,t)=>this.dataService.saveSection(t,e));for(let e=this.sections.length;this.dataService.loadSection(e);e++)this.dataService.removeSection(e)}reindexSections(){this.sections.forEach((e,t)=>this.dataService.saveSection(t,e));for(let e=this.sections.length;this.dataService.loadSection(e);e++)this.dataService.removeSection(e)}getSectionCount(){return this.sections.length}static \u0275fac=function(t){return new(t||n)(s(I))};static \u0275cmp=b({type:n,selectors:[["app-dynamic-sections"]],decls:4,vars:1,consts:[[1,"container",2,"padding","10px"],[2,"display","block","margin-bottom","10px",3,"click"],[4,"ngFor","ngForOf"],[3,"inputsChange","removeSection","sectionIndex","initialValues","sectionCount"]],template:function(t,i){t&1&&(u(0,"div",0)(1,"button",1),f("click",function(){return i.addSection()}),d(2," + Section "),a(),G(3,kt,2,3,"div",2),a()),t&2&&(c(3),m("ngForOf",i.sections))},dependencies:[$,L,ee],encapsulation:2})};var rt=[{path:"",redirectTo:"example",pathMatch:"full"},{path:"example",loadChildren:()=>import("./chunk-WXEV4FHB.js")},{path:"assignment",component:te}];var ot={providers:[Ee(),xe(rt)]};var ne=class n{title="week-06";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["app-root"]],decls:11,vars:1,consts:[[1,"app-cmp-links"],["routerLink","example","routerLinkActive","app-st-active"],["routerLink","assignment","routerLinkActive","app-st-active"]],template:function(t,i){t&1&&(u(0,"h1"),d(1),a(),u(2,"nav",0)(3,"ul")(4,"li")(5,"a",1),d(6,"Example"),a()(),u(7,"li")(8,"a",2),d(9,"Assignment"),a()()()(),Me(10,"router-outlet")),t&2&&(c(),M("",i.title,": Dependencies Injection"))},dependencies:[we,Fe,Ie],styles:["h1[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})};Se(ne,ot).catch(n=>console.error(n));
