(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ble/ble"],{4814:function(e,n,t){"use strict";var o=t("7600"),a=t.n(o);a.a},7600:function(e,n,t){},"9f64":function(e,n,t){"use strict";t.r(n);var o=t("c2e0"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},a3eb:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},bbf9:function(e,n,t){"use strict";t.r(n);var o=t("a3eb"),a=t("9f64");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("4814");var l=t("2877"),c=Object(l["a"])(a["default"],o["a"],o["b"],!1,null,"2f7e7fcd",null);n["default"]=c.exports},c2e0:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{bleData:[],bleIndex:[],modalName:"",available:!1,discovering:!1}},mounted:function(){var e=this;e.initBle(),setInterval(function(){setTimeout(function(){e.available||e.initBle()},0)},2e3)},methods:{hideModal:function(){this.modalName=""},ab2hex:function(e){var n=Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)});return n.join("")},getBleState:function(){var n=this;e.onBluetoothAdapterStateChange(function(e){n.available=e.available,n.discovering=e.discovering,console.log("蓝牙是否可用："+e.available),console.log("蓝牙是否搜索："+e.discovering),n.available?n.modalName="":n.modalName="isOpenBle"})},initBle:function(){var n=this,t=1;e.openBluetoothAdapter({success:function(o){console.log(o),"openBluetoothAdapter:ok"==o.errMsg&&(console.log("************************初始化蓝牙成功************************"),n.getBleState(),e.startBluetoothDevicesDiscovery({services:[],success:function(o){console.log("************************开始搜寻旧蓝牙************************"),e.getBluetoothDevices({success:function(e){console.log(e),e.devices[0]&&console.log(n.ab2hex(e.devices[0].advertisData))}}),console.log("************************开始搜寻新蓝牙************************"),e.onBluetoothDeviceFound(function(e){console.log("************************新蓝牙 "+t+"************************"),t++;var o=e.devices[0];-1==n.bleIndex.indexOf(o.deviceId)&&(""==o.name?(n.bleData.push({name:o.deviceId,id:o.deviceId,tag:!1}),n.bleIndex.push(o.deviceId)):(n.bleData.push({name:o.name,id:o.deviceId,tag:!0}),n.bleIndex.push(o.deviceId)))})}}))},fail:function(e){(e.errCode="10001")&&(n.modalName="isOpenBle")}})}}};n.default=t}).call(this,t("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ble/ble-create-component',
    {
        'pages/ble/ble-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bbf9"))
        })
    },
    [['pages/ble/ble-create-component']]
]);                
