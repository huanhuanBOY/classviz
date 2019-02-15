 !function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){!function(){"use strict";function t(e){if(!(this instanceof t))return new t(e);this._canvas=e="string"==typeof e?document.getElementById(e):e,this._ctx=e.getContext("2d"),this._width=e.width,this._height=e.height,this._max=1,this._data=[]}t.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,e){e=e||15;var a=this._circle=document.createElement("canvas"),n=a.getContext("2d"),i=this._r=t+e;return a.width=a.height=2*i,n.shadowOffsetX=n.shadowOffsetY=200,n.shadowBlur=e,n.shadowColor="black",n.beginPath(),n.arc(i-200,i-200,t,0,2*Math.PI,!0),n.closePath(),n.fill(),this},gradient:function(t){var e=document.createElement("canvas"),a=e.getContext("2d"),n=a.createLinearGradient(0,0,0,256);for(var i in e.width=1,e.height=256,t)n.addColorStop(i,t[i]);return a.fillStyle=n,a.fillRect(0,0,1,256),this._grad=a.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var e=this._ctx;e.clearRect(0,0,this._width,this._height);for(var a,n=0,i=this._data.length;n<i;n++)a=this._data[n],e.globalAlpha=Math.max(a[2]/this._max,void 0===t?.05:t),e.drawImage(this._circle,a[0]-this._r,a[1]-this._r);var o=e.getImageData(0,0,this._width,this._height);return this._colorize(o.data,this._grad),e.putImageData(o,0,0),this},_colorize:function(t,e){for(var a,n=3,i=t.length;n<i;n+=4)(a=4*t[n])&&(t[n-3]=e[a],t[n-2]=e[a+1],t[n-1]=e[a+2])}},window.simpleheat=t}()},function(t,e,a){"use strict";a.r(e);var n={},i={windowFrames:{},init:function(){i.windowFrames[window.location.href]={window:window,document:document,Y:0,X:0},i.iframeCheckStart()},iframeCheckStart:function(){setTimeout(()=>{i.iframeCheck(void 0,window,document),i.iframeCheckStart()},500)},iframeCheck:function(t,e,a){if(e.location&&e.location.href&&e.location.href.indexOf("http")>=0){let u=a.getElementsByTagName("iframe");if(!i.windowFrames[e.location.href]){var r=e.location.href.match(/[a-z0-9]{15,20}/g);if(r&&r.length>0){var d=!0;for(var s in i.windowFrames){var l=s.match(/[a-z0-9]{15,20}/g);l&&l.length>0&&r[0]!=l[0]?delete i.windowFrames[s]:l&&l.length>0&&r[0]==l[0]&&(d=!1)}d&&o.start(r[0])}let u=e.location.href.split("/");if(!i.windowFrames[u[u.length-2]]&&n[u[u.length-2]]>=1){for(var c in window.scrollTo(0,0),i.windowFrames)n[c]>=1&&delete i.windowFrames[c];o.start(n[u[u.length-2]])}i.windowFrames[u[u.length-2]]=i.getElementCoords(t),i.windowFrames[u[u.length-2]].window=e,i.windowFrames[u[u.length-2]].document=a}for(c=0;c<u.length;c++)u[c].contentWindow&&u[c].contentWindow.location.href&&i.iframeCheck(u[c],u[c].contentWindow,u[c].contentDocument)}},getElementCoords:function(t){var e=t.getBoundingClientRect(),a=document.body,n=document.documentElement,i=window.pageYOffset||n.scrollTop||a.scrollTop,o=window.pageXOffset||n.scrollLeft||a.scrollLeft,r=n.clientTop||a.clientTop||0,d=n.clientLeft||a.clientLeft||0,s=e.top+i-r,l=e.left+o-d;return{Y:Math.round(s),X:Math.round(l)}},getCurrentElementSize:function(t){for(var e="",a=t.split(","),n=0;n<a.length;n++){var i=a[n].split(/[#\.]/);e+=i[0],""!=i[1]&&(e+="[id="+i[1]+"]"),""!=i[2]&&(e+="."+i[2]),e+=" "}return e}};i.init(),a.d(e,"coverMap",function(){return o}),a(0);var o={miniWidth:300,miniHeatRate:300/parseFloat(window.innerWidth),miniHeatMap:{},heatMap:{},columnSet:{},initHeatMapHtml:function(){var t=$("body")[0].clientWidth,e=$("body")[0].clientHeight,a=document.createElement("div");a.innerHTML='\n                                <div id="heatmapWrap" style="z-index:9999;background:rgba(192,192,192,0.2);pointer-events: none;opacity: 1; width: '+t+"px; height: "+e+'px; left: 0px; top: 0px; display: block;position:absolute">\n                                    <canvas id="heatmap" width="'+t+'" height="'+e+'" style="position: absolute; left: 0px; top: 0px;"></canvas>\n                                </div>\n                                <div class="sidenav">\n                                    <form style="margin:0px">\n                                        <select id="id_select" onchange=coverMap.refreshHeatMap() name="condiment" class="selectpicker required" style="background: beige;" >\n                                            <option value="mousemove">Mouse Move</option>\n                                            <option value="click">Mouse Click</option>\n                                        </select>\n                                    </form>\n                                    <div class="options">\n                                    <p class="heatmapconfig">Heatmap config</p>\n                                        <label>Radius: </label><input type="range" id="id_radius" value="25" min="10" max="50" /><br />\n                                        <label style="padding-right: 18px;">Blur: </label><input type="range" id="id_blur" value="15" min="10" max="50" />\n                                    </div>\n                                    <p class="minioverview">Mini heatmap for overview</p>\n                                    <canvas id="miniheatmap" width="'+o.miniWidth+'px" height="'+e+'px" style="background:rgba(192,192,192,0.2)"></canvas>\n                                </div>\n                            ',$("body")[0].append(a)},filterDataByType:function(t,e,a){for(var n=[],i=0;i<t.length;i++){var o={};(void 0).windowFrames[t[i][a.d_source]]&&("mousemove"==e?"mousemove"==t[i][a.type]&&(o.x=(void 0).windowFrames[t[i][a.d_source]].X+t[i][a.pageX],o.y=(void 0).windowFrames[t[i][a.d_source]].Y+t[i][a.pageY],n.push([o.x,o.y,1])):"mousedown"!=t[i][a.type]&&"mouseup"!=t[i][a.type]||(o.x=(void 0).windowFrames[t[i][a.d_source]].X+t[i][a.pageX],o.y=(void 0).windowFrames[t[i][a.d_source]].Y+t[i][a.pageY],n.push([o.x,o.y,1])))}return n},getMinidata:function(t){for(var e=[],a=0;a<t.length;a++)e.push([t[a][0]*o.miniHeatRate,t[a][1]*o.miniHeatRate,t[a][2]]);return e},refreshHeatMap:function(){var t=$("#id_select")[0].value;o.heatMap.clear(),o.miniHeatMap.clear();var e=o.filterDataByType(data.results,t,o.columnSet);o.heatMap.data(e).draw(),o.miniHeatMap.data(o.getMinidata(e)).draw(),o.setHeatMap()},drawheatmap:function(t,e){var a=simpleheat(e);return a.data(t),a.max(10),a},setHeatMap:function(){var t=parseInt($("#id_radius")[0].value),e=parseInt($("#id_blur")[0].value);o.heatMap.radius(t,e),o.miniHeatMap.radius(o.miniHeatRate*t,o.miniHeatRate*e),o.heatMap.draw(),o.miniHeatMap.draw()},start:function(t){var e=new XMLHttpRequest;e.open("GET","/api/student/question/dataCollect/getModel1?questionId="+t,!0),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){for(var t=JSON.parse(e.responseText),a=0;a<t.columnList.length;a++)o.columnSet[t.columnList[a]]=a;var n=t.data,i=o.filterDataByType(n,"mousemove",o.columnSet);o.heatMap=o.drawheatmap(i,$("#heatmap")[0]),o.miniHeatMap=o.drawheatmap(o.getMinidata(i),$("#miniheatmap")[0]),o.setHeatMap(),setTimeout(function(){$("#id_radius").change(function(t){o.setHeatMap()}),$("#id_blur").change(function(t){o.setHeatMap()})},1e3)}},e.setRequestHeader("Content-Type","application/json"),e.send()}};o.initHeatMapHtml()}]);