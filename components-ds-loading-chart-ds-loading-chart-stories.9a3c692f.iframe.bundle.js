"use strict";(self.webpackChunkbasic_ui_components=self.webpackChunkbasic_ui_components||[]).push([[815],{"./src/components/ds-loading-chart/ds-loading-chart.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Column:()=>Column,Pie:()=>Pie,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,semiPie:()=>semiPie});var _utils_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/utils.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Loading/Loading Chart",component:"ds-loading-chart",render:args=>{const element=document.createElement("ds-loading-chart");return(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.W)(element,args),element},argTypes:{type:{control:{type:"select"},options:["column","pie","semi-pie"]}}},Column={args:{type:"column"}},Pie={args:{type:"pie"}},semiPie={args:{type:"semi-pie"}},__namedExportsOrder=["Column","Pie","semiPie"];Column.parameters={...Column.parameters,docs:{...Column.parameters?.docs,source:{originalSource:'{\n  args: ({\n    type: "column"\n  } as HTMLDsLoadingChartElement)\n}',...Column.parameters?.docs?.source}}},Pie.parameters={...Pie.parameters,docs:{...Pie.parameters?.docs,source:{originalSource:'{\n  args: ({\n    type: "pie"\n  } as HTMLDsLoadingChartElement)\n}',...Pie.parameters?.docs?.source}}},semiPie.parameters={...semiPie.parameters,docs:{...semiPie.parameters?.docs,source:{originalSource:'{\n  args: ({\n    type: "semi-pie"\n  } as HTMLDsLoadingChartElement)\n}',...semiPie.parameters?.docs?.source}}}},"./src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setAttributes(element,attributes){Object.entries(attributes).forEach((([key,value])=>{null!=value&&!1!==value&&""!==value&&(value="object"==typeof value?JSON.stringify(value):value.toString(),element.setAttribute(function camelToKebab(str){return str.replace(/[A-Z]/g,(match=>`-${match.toLowerCase()}`))}(key),value))}))}function getIconNames(icons){return icons.map((icon=>icon.name))}__webpack_require__.d(__webpack_exports__,{W:()=>setAttributes,k:()=>getIconNames})}}]);