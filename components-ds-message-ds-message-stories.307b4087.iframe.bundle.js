"use strict";(self.webpackChunkbasic_ui_components=self.webpackChunkbasic_ui_components||[]).push([[615],{"./src/components/ds-message/ds-message.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{General:()=>General,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,emptyCard:()=>emptyCard,emptyList:()=>emptyList,noConnection:()=>noConnection,notAuthorized:()=>notAuthorized});var _utils_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/utils.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Message",component:"ds-message",render:args=>{const element=document.createElement("ds-message");return(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.W)(element,args),element},argTypes:{type:{control:{type:"select"},options:["emptyCard","emptyList","notAuthorized","noConnection","general"]},image:{control:{type:"file"}}}},General={args:{type:"general",label:"Nothing fancy here, just a simple message."}},emptyCard={args:{type:"emptyCard",label:"Nothing fancy here, just a simple message."}},emptyList={args:{type:"emptyList",label:"Nothing fancy here, just a simple message."}},noConnection={args:{type:"noConnection",label:"Nothing fancy here, just a simple message."}},notAuthorized={args:{type:"notAuthorized",label:"Nothing fancy here, just a simple message."}},__namedExportsOrder=["General","emptyCard","emptyList","noConnection","notAuthorized"];General.parameters={...General.parameters,docs:{...General.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'general',\n    label: 'Nothing fancy here, just a simple message.'\n  }\n}",...General.parameters?.docs?.source}}},emptyCard.parameters={...emptyCard.parameters,docs:{...emptyCard.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'emptyCard',\n    label: 'Nothing fancy here, just a simple message.'\n  }\n}",...emptyCard.parameters?.docs?.source}}},emptyList.parameters={...emptyList.parameters,docs:{...emptyList.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'emptyList',\n    label: 'Nothing fancy here, just a simple message.'\n  }\n}",...emptyList.parameters?.docs?.source}}},noConnection.parameters={...noConnection.parameters,docs:{...noConnection.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'noConnection',\n    label: 'Nothing fancy here, just a simple message.'\n  }\n}",...noConnection.parameters?.docs?.source}}},notAuthorized.parameters={...notAuthorized.parameters,docs:{...notAuthorized.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'notAuthorized',\n    label: 'Nothing fancy here, just a simple message.'\n  }\n}",...notAuthorized.parameters?.docs?.source}}}},"./src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setAttributes(element,attributes){Object.entries(attributes).forEach((([key,value])=>{null!=value&&!1!==value&&""!==value&&(value="object"==typeof value?JSON.stringify(value):value.toString(),element.setAttribute(function camelToKebab(str){return str.replace(/[A-Z]/g,(match=>`-${match.toLowerCase()}`))}(key),value))}))}function getIconNames(icons){return icons.map((icon=>icon.name))}__webpack_require__.d(__webpack_exports__,{W:()=>setAttributes,k:()=>getIconNames})}}]);