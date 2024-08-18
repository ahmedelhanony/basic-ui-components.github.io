"use strict";(self.webpackChunkbasic_ui_components=self.webpackChunkbasic_ui_components||[]).push([[81],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/ds-attachments/ds-attachments.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/utils.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Attachments",component:"ds-attachments",render:args=>{const element=document.createElement("ds-attachments");return(0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.W)(element,args),element.addEventListener("attachmentEvent",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("attachmentEvent")),element.addEventListener("deleteEvent",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("deleteEvent")),element.addEventListener("downloadEvent",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("downloadEvent")),element.addEventListener("viewEvent",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("viewEvent")),element},argTypes:{file:{control:"object",description:"Attachment file details, can be an object or stringified JSON."},readonly:{control:"boolean",description:"Determines if the attachment is readonly."},showDownload:{control:"boolean",description:"Should the download button be shown."},showActions:{control:"boolean",description:"Should the action buttons be shown."},showView:{control:"boolean",description:"Should the view button be shown."}}},Example={args:{file:{id:12,name:"example.png",size:"2048",errorMsg:""},readonly:!1,showDownload:!0,showActions:!0,showView:!0}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  args: {\n    file: {\n      id: 12,\n      name: "example.png",\n      size: "2048",\n      errorMsg: ""\n    },\n    readonly: false,\n    showDownload: true,\n    showActions: true,\n    showView: true\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setAttributes(element,attributes){Object.entries(attributes).forEach((([key,value])=>{null!=value&&!1!==value&&""!==value&&(value="object"==typeof value?JSON.stringify(value):value.toString(),element.setAttribute(function camelToKebab(str){return str.replace(/[A-Z]/g,(match=>`-${match.toLowerCase()}`))}(key),value))}))}function getIconNames(icons){return icons.map((icon=>icon.name))}__webpack_require__.d(__webpack_exports__,{W:()=>setAttributes,k:()=>getIconNames})}}]);