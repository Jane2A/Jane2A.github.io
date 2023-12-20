(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業11_atlas_1", frames: [[0,213,89,30],[0,161,97,50],[0,0,59,159]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,358);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-758.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-758.4,-89.4,1517,179);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(9.35,5.3383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(14,18.1692);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(5.2972,18.8804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(4.15,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("ABBC6QgOgKgQgUIgMgSQgPgqhJhgQg+hPAEgvIAAgLQAAgJAGABQAaguAmgEQAzgGAnBaIAnBUQApBhAIBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(12.4875,19.661);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,25,39.3), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(16.7158,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFEFE6").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,29.5,79.5), null);


(lib.走鋼索男人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_1
	this.ikNode_2 = new lib.頭部();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(54.15,19.2,1,1,0,0,0,7.5,19.2);

	this.ikNode_1 = new lib.上半身();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(54.65,20.45,1,1,0,0,0,14.8,19.2);

	this.ikNode_4 = new lib.左手();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(59.7,19.8,0.9996,0.9996,11.4988,0,0,14.3,7.5);

	this.ikNode_6 = new lib.右手();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(46.55,23,0.9996,0.9996,-8.6873,0,0,46.4,4.2);

	this.ikNode_14 = new lib.右大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(52.25,52,0.9995,0.9995,19.0084,0,0,8.6,3.4);

	this.ikNode_12 = new lib.左鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(63.7,112.45,0.9996,0.9996,-2.9866,0,0,5.2,2.6);

	this.ikNode_16 = new lib.右小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(54.3,86.6,0.9995,0.9995,-14.5367,0,0,29.9,4.5);

	this.ikNode_18 = new lib.右鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(31.85,110.15,0.9995,0.9995,-14.5367,0,0,6.5,2.9);

	this.ikNode_8 = new lib.左大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(58.9,52.9,0.9995,0.9995,8.1107,0,0,14.6,3.7);

	this.ikNode_10 = new lib.左小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(63.8,78.55,0.9996,0.9996,-2.9866,0,0,5.7,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_10,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.9866,x:63.8,y:78.55,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:8.1107,x:58.9,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:2.9,scaleX:0.9995,scaleY:0.9995,rotation:-14.5367,x:31.85,y:110.15}},{t:this.ikNode_16,p:{scaleX:0.9995,scaleY:0.9995,rotation:-14.5367,x:54.3,y:86.6,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9996,scaleY:0.9996,rotation:-2.9866,x:63.7,y:112.45,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.4,scaleX:0.9995,scaleY:0.9995,rotation:19.0084,x:52.25,y:52}},{t:this.ikNode_6,p:{regY:4.2,rotation:-8.6873,x:46.55,y:23,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:11.4988,y:19.8,x:59.7,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]}).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.1084,x:63.45,y:78.6,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.4604,x:58.85,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-16.7749,x:33.65,y:110.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-16.7749,x:55.15,y:86.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.1084,x:62.25,y:112.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:17.1612,x:52.05,y:52.1}},{t:this.ikNode_6,p:{regY:4.3,rotation:-7.7502,x:46.55,y:23,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:11.2641,y:19.75,x:59.7,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.7663,x:63.15,y:78.75,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.8116,x:58.7,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-19.0129,x:35.65,y:111.8}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-19.0129,x:56.15,y:86.3,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.7663,x:60.8,y:112.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:15.3134,x:52,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:-6.8139,x:46.55,y:23,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:11.0286,y:19.8,x:59.75,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6435,x:62.95,y:78.65,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.1632,x:58.6,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-21.2486,x:37.65,y:112.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-21.2486,x:57.15,y:86.15,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6435,x:59.5,y:112.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:13.4653,x:51.85,y:52.05}},{t:this.ikNode_6,p:{regY:4.4,rotation:-5.8764,x:46.6,y:23.2,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.7944,y:19.8,x:59.7,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.5227,x:62.7,y:78.75,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.5142,x:58.55,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-23.4866,x:39.7,y:112.75}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-23.4866,x:58.1,y:85.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.5227,x:58.2,y:112.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:11.6174,x:51.7,y:52.1}},{t:this.ikNode_6,p:{regY:4.3,rotation:-4.9408,x:46.55,y:23,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.5603,y:19.75,x:59.65,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.4015,x:62.35,y:78.85,regY:2.6,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.864,x:58.35,y:52.85,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-25.7235,x:41.65,y:113.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-25.7235,x:59.05,y:85.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.4015,x:56.65,y:112.1,regX:5.1}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:9.7692,x:51.4,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-4.003,x:46.55,y:23.05,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.3247,y:19.75,x:59.65,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.2803,x:62.25,y:78.75,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.2166,x:58.25,y:52.85,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-27.9619,x:43.7,y:113.6}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-27.9619,x:60.05,y:85.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.2803,x:55.45,y:111.9,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:7.9213,x:51.3,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-3.0662,x:46.55,y:22.95,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:10.0916,y:19.8,x:59.65,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.1591,x:61.95,y:78.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.5661,x:58.15,y:52.95,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-30.1984,x:45.8,y:113.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-30.1984,x:61,y:85.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.1591,x:54.05,y:111.7,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:6.0738,x:51.3,y:52}},{t:this.ikNode_6,p:{regY:4.4,rotation:-2.1303,x:46.5,y:23.1,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.8573,y:19.8,x:59.6,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:12.0367,x:61.65,y:78.95,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.9178,x:58.1,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-32.4363,x:47.85,y:114.1}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-32.4363,x:61.9,y:84.75,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:12.0367,x:52.75,y:111.5,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:4.2265,x:51.2,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-1.194,x:46.55,y:22.95,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.6214,y:19.85,x:59.55,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.9155,x:61.45,y:78.9,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.2681,x:58.05,y:52.9,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-34.6745,x:50,y:114.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-34.6745,x:62.85,y:84.35,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.9155,x:51.45,y:111.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:2.3784,x:51.1,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-0.2554,x:46.55,y:22.95,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:9.3861,y:19.9,x:59.6,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:15.7942,x:61.2,y:78.9,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.6189,x:57.95,y:52.85,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-36.9112,x:52.05,y:114.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-36.9112,x:63.75,y:83.8,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:15.7942,x:50.1,y:110.8,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:0.5301,x:50.95,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.6761,x:46.55,y:22.95,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.1523,y:19.8,x:59.5,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:17.6734,x:60.95,y:78.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.9701,x:57.85,y:52.8,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-39.1486,x:54.2,y:114.35}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-39.1486,x:64.7,y:83.55,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:17.6734,x:48.75,y:110.45,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-1.3132,x:50.9,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.6131,x:46.55,y:22.9,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.9176,y:19.8,x:59.5,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.5512,x:60.6,y:78.9,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:12.3207,x:57.75,y:52.7,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-41.3875,x:56.25,y:114.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-41.3875,x:65.55,y:82.95,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.5512,x:47.5,y:110.05,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-3.1596,x:50.75,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:2.5495,x:46.55,y:22.95,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.6829,y:19.8,x:59.5,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:21.4299,x:60.5,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:12.672,x:57.65,y:52.65,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-43.6248,x:58.35,y:113.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-43.6248,x:66.4,y:82.5,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:21.4299,x:46.25,y:109.6,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-5.0077,x:50.6,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:3.4867,x:46.55,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.4476,y:19.85,x:59.45,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:23.3089,x:60.2,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:13.0229,x:57.35,y:52.75,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-45.8617,x:60.35,y:113.75}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-45.8617,x:67.35,y:81.95,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:23.3089,x:44.9,y:109.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:-6.8565,x:50.5,y:51.8}},{t:this.ikNode_6,p:{regY:4.4,rotation:4.424,x:46.55,y:23,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.2135,y:19.85,x:59.45,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:25.1863,x:59.95,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:13.3741,x:57.45,y:52.8,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-48.0993,x:62.55,y:113.4}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-48.0993,x:68.1,y:81.3,regY:4.4,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:25.1863,x:43.7,y:108.6,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-8.7038,x:50.45,y:51.9}},{t:this.ikNode_6,p:{regY:4.4,rotation:5.3598,x:46.7,y:23,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.9792,y:19.85,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:27.065,x:59.65,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:13.7242,x:57.25,y:52.75,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-50.3368,x:64.6,y:112.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-50.3368,x:68.95,y:80.7,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:27.065,x:42.5,y:108.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-10.553,x:50.25,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:6.297,x:46.6,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.7444,y:19.9,x:59.4,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:28.9442,x:59.45,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.0757,x:57.2,y:52.75,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-52.5742,x:66.6,y:112.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-52.5742,x:69.75,y:80.1,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:28.9442,x:41.25,y:107.45,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-12.401,x:50.1,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:7.2333,x:46.6,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.5089,y:19.85,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.8226,x:59.15,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.4258,x:57.15,y:52.8,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-54.8123,x:68.7,y:111.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-54.8123,x:70.55,y:79.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.8226,x:40.05,y:106.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-14.2476,x:50,y:51.8}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.1707,x:46.6,y:22.9,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.2742,y:19.9,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:32.7014,x:58.95,y:79.15,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.7775,x:57.05,y:52.8,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-57.049,x:70.7,y:111.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-57.049,x:71.25,y:78.8,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:32.7014,x:38.9,y:106.3,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-16.0945,x:49.85,y:51.75}},{t:this.ikNode_6,p:{regY:4.3,rotation:9.1067,x:46.55,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.0405,y:19.95,x:59.45,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.4088,x:59.4,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.0188,x:57.05,y:52.7,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-54.5649,x:68.3,y:112}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-54.5649,x:70.3,y:79.55,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:29.8271,x:40.35,y:106.95,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-13.9346,x:50,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.0815,x:46.6,y:22.85,regX:46.4,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.1662,y:19.85,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:28.1164,x:59.7,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:13.2617,x:57.15,y:52.7,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-52.081,x:66,y:112.65}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-52.081,x:69.4,y:80.35,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:26.9531,x:41.95,y:107.75,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-11.773,x:50.05,y:51.8}},{t:this.ikNode_6,p:{regY:4.3,rotation:7.0561,x:46.6,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.2924,y:19.8,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:25.8249,x:60.15,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:12.5035,x:57.15,y:52.65,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-49.5973,x:63.6,y:113.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-49.5973,x:68.35,y:81.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:24.0794,x:43.55,y:108.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-9.612,x:50.15,y:51.8}},{t:this.ikNode_6,p:{regY:4.2,rotation:6.0295,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.4198,y:19.75,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:23.533,x:60.55,y:78.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.7448,x:57.25,y:52.75,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-47.1129,x:61.15,y:113.6}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-47.1129,x:67.4,y:81.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:21.2056,x:45.1,y:108.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-7.4508,x:50.25,y:51.75}},{t:this.ikNode_6,p:{regY:4.3,rotation:5.0049,x:46.6,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.5465,y:19.75,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:21.241,x:60.95,y:78.95,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.9873,x:57.3,y:52.8,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-44.6282,x:58.75,y:114}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-44.6282,x:66.25,y:82.25,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:18.3329,x:46.8,y:109.5,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-5.2895,x:50.2,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:3.9802,x:46.6,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6723,y:19.7,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:18.9489,x:61.35,y:78.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.2291,x:57.35,y:52.7,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-42.1446,x:56.3,y:114.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-42.1446,x:65.35,y:82.95,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:15.4583,x:48.35,y:109.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-3.1272,x:50.45,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:2.9541,x:46.6,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.7986,y:19.65,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:16.6571,x:61.8,y:78.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.4708,x:57.5,y:52.7,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-39.6602,x:53.85,y:114.3}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-39.6602,x:64.25,y:83.35,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.5864,x:50,y:110.45,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-0.9667,x:50.55,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.9281,x:46.6,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.9246,y:19.65,x:59.5,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:14.3655,x:62.15,y:78.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.7125,x:57.45,y:52.7,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-37.1761,x:51.45,y:114.3}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-37.1761,x:63.05,y:84.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:9.7115,x:51.55,y:110.75,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:1.1907,x:50.65,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.9035,x:46.6,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.0507,y:19.6,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.0742,x:62.6,y:78.65,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:7.9548,x:57.6,y:52.65,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-34.6922,x:49.05,y:114.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-34.6922,x:61.9,y:84.5,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.8375,x:53.45,y:111.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:3.3516,x:50.75,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:-0.1172,x:46.55,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.817,y:19.55,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:9.7817,x:62.95,y:78.5,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:7.1977,x:57.6,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-32.2082,x:46.65,y:114.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-32.2082,x:60.85,y:84.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.9632,x:55.1,y:111.3,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:5.5128,x:50.8,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-1.1432,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.691,y:19.55,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.4899,x:63.3,y:78.6,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:6.4392,x:57.7,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-29.725,x:44.25,y:113.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-29.725,x:59.65,y:85.25,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0909,x:56.8,y:111.6,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:7.6749,x:50.95,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:-2.1687,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.5636,y:19.5,x:59.5,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.1978,x:63.55,y:78.4,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:5.6819,x:57.75,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-27.2395,x:41.85,y:113.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-27.2395,x:58.45,y:85.55,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.7786,x:58.6,y:111.7,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:9.8357,x:51,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-3.1941,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.4387,y:19.45,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.9053,x:64.15,y:78.3,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:4.9229,x:57.8,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-24.7553,x:39.45,y:112.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-24.7553,x:57.35,y:85.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.6509,x:60.3,y:111.8,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:11.9972,x:51.1,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:-4.2195,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.31,y:19.45,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.6141,x:64.5,y:78.2,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:4.1647,x:57.8,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-22.272,x:37.1,y:112.35}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-22.272,x:56.1,y:86.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-7.5243,x:62.05,y:111.8,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:14.1582,x:51.25,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-5.2446,x:46.6,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.1852,y:19.35,x:59.5,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.6736,x:64.85,y:78.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:3.4072,x:57.9,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-19.7873,x:34.75,y:111.7}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-19.7873,x:54.9,y:86.25,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-10.3991,x:63.7,y:111.75,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:16.3198,x:51.3,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-6.2706,x:46.55,y:22.65,regX:46.4,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.0589,y:19.35,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.964,x:65.25,y:77.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:2.6487,x:57.9,y:52.7,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-17.304,x:32.5,y:110.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-17.304,x:53.75,y:86.3,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-13.272,x:65.55,y:111.7,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:18.482,x:51.45,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:-7.2958,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.9313,y:19.3,x:59.4,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:-6.2563,x:65.7,y:78,regY:2.6,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:1.8915,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-14.8202,x:30.25,y:110.1}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-14.8202,x:52.5,y:86.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-16.1462,x:67.2,y:111.5,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:20.6414,x:51.45,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-8.3226,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-7.8053,y:19.25,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.5482,x:66.1,y:77.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:1.1328,x:58.05,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-12.3363,x:28,y:109.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-12.3363,x:51.25,y:86.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-19.02,x:68.95,y:111.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:22.803,x:51.55,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-9.3459,x:46.55,y:22.6,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.6785,y:19.2,x:59.5,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-10.8397,x:66.45,y:77.6,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:0.3744,x:58.1,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-9.8524,x:25.8,y:108.1}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-9.8524,x:50.05,y:86.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-21.8937,x:70.7,y:111,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:24.9647,x:51.6,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-10.3721,x:46.55,y:22.6,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-9.5521,y:19.2,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:-13.132,x:66.85,y:77.5,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:-0.3788,x:58.15,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-7.3676,x:23.75,y:106.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-7.3676,x:48.9,y:86.3,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-24.7668,x:72.4,y:110.7,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:27.1269,x:51.7,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-11.3972,x:46.6,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-10.4261,y:19.1,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:-10.618,x:66.45,y:77.65,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:0.5878,x:58.1,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-10.3944,x:26,y:108}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-9.4964,x:50.35,y:86.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-22.4998,x:70.55,y:111.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:24.6116,x:51.7,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-10.2896,x:46.6,y:22.6,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-9.3667,y:19.2,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.1026,x:66,y:77.75,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:1.5607,x:58.1,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-13.4203,x:28.35,y:108.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-11.6236,x:51.8,y:86.4,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-20.233,x:68.7,y:111.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:22.0963,x:51.75,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-9.1792,x:46.75,y:22.65,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-8.3054,y:19.3,x:59.4,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.588,x:65.6,y:77.9,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:2.5314,x:58.15,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-16.4447,x:30.7,y:109.65}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-13.7513,x:53.3,y:86.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-17.9666,x:66.75,y:111.6,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:19.5809,x:51.75,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-8.0707,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-7.2469,y:19.4,x:59.4,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.0736,x:65.15,y:78.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:3.5037,x:57.95,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-19.4713,x:33.1,y:110.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-15.8788,x:54.9,y:86.3,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-15.6998,x:64.8,y:111.75,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:17.0679,x:51.7,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-6.9617,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.1864,y:19.45,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.5598,x:64.7,y:78.2,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:4.4752,x:58.05,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-22.4972,x:35.5,y:110.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-18.0064,x:56.35,y:86.1,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-13.4331,x:62.85,y:111.85,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:14.5527,x:51.7,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-5.8527,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-5.1263,y:19.5,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.9502,x:64.25,y:78.3,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:5.4472,x:58.1,y:52.65,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-25.522,x:37.95,y:111.5}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-20.1343,x:57.85,y:85.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-11.165,x:60.95,y:111.8,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:12.0384,x:51.7,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:-4.7433,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.0672,y:19.65,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:4.4649,x:63.85,y:78.45,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:6.418,x:58.15,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-28.5478,x:40.4,y:111.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-22.2631,x:59.35,y:85.6,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:-8.8996,x:59.05,y:111.65,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:9.5224,x:51.65,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:-3.6348,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-3.0077,y:19.7,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.9793,x:63.35,y:78.65,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:7.3908,x:57.9,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-31.5748,x:42.75,y:112.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-24.3905,x:60.75,y:85.2,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-6.6322,x:57.15,y:111.6,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:7.008,x:51.75,y:51.8}},{t:this.ikNode_6,p:{regY:4.3,rotation:-2.5259,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-1.9483,y:19.75,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.4934,x:62.85,y:78.6,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.3613,x:58.05,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-34.6002,x:45.2,y:112.4}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-26.5189,x:62.25,y:84.75,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-4.3648,x:55.3,y:111.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:4.4941,x:51.7,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:-1.4179,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:-0.8878,y:19.85,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.0089,x:62.4,y:78.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.3333,x:58.05,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-37.6266,x:47.75,y:112.55}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-28.6476,x:63.55,y:84.2,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:-2.099,x:53.4,y:111.15,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:1.9792,x:51.7,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:-0.3087,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.1671,y:19.9,x:59.45,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:14.5227,x:61.85,y:78.7,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.3046,x:58.05,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-40.6515,x:50.15,y:112.5}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-30.7741,x:65,y:83.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.1627,x:51.55,y:110.75,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-0.5319,x:51.65,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.796,x:46.65,y:22.7,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.2273,y:19.95,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:17.039,x:61.55,y:78.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.277,x:58.05,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-43.678,x:52.55,y:112.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-32.903,x:66.4,y:83.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.4299,x:49.7,y:110.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-3.0475,x:51.65,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.9062,x:46.5,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.2853,y:20.05,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.552,x:61,y:78.8,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.6,rotation:12.2483,x:57.9,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-46.7032,x:55.05,y:112.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-35.0307,x:67.75,y:82.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.6965,x:47.95,y:109.9,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-5.5611,x:51.6,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:3.0145,x:46.5,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.3458,y:20.15,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:22.0659,x:60.7,y:78.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:13.2205,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-49.7295,x:57.5,y:112.05}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-37.1591,x:69.05,y:81.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.9635,x:46,y:109.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-8.0759,x:51.6,y:51.95}},{t:this.ikNode_6,p:{regY:4.4,rotation:4.1239,x:46.55,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.4057,y:20.15,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:24.5817,x:60.2,y:78.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.192,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-52.7553,x:59.95,y:111.7}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-39.2866,x:70.3,y:80.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.2301,x:44.25,y:108.65,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-10.5911,x:51.6,y:51.95}},{t:this.ikNode_6,p:{regY:4.4,rotation:5.2324,x:46.55,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.4655,y:20.25,x:59.35,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:27.0963,x:59.7,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:15.1639,x:58.05,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-55.781,x:62.35,y:111.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-41.4142,x:71.55,y:80,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:11.4969,x:42.5,y:108,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9993,scaleY:0.9993,rotation:-13.1052,x:51.55,y:51.9}},{t:this.ikNode_6,p:{regY:4.2,rotation:6.341,x:46.55,y:22.5,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.5252,y:20.3,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:29.6112,x:59.15,y:78.95,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.6,rotation:16.1351,x:57.9,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-58.8064,x:64.55,y:110.5}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-43.5419,x:72.75,y:79.1,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:13.7643,x:40.8,y:107.2,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:-15.6203,x:51.5,y:51.8}},{t:this.ikNode_6,p:{regY:4.2,rotation:7.4503,x:46.6,y:22.55,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:7.5855,y:20.45,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:32.1262,x:58.75,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:17.1071,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-61.8331,x:66.95,y:109.8}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-45.6712,x:73.95,y:78.15,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:16.0318,x:39.15,y:106.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-18.1364,x:51.5,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.5596,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.6441,y:20.5,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:34.6397,x:58.4,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:18.0781,x:57.95,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-64.8592,x:69.25,y:109.05}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-47.7977,x:75.05,y:77.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:18.2977,x:37.5,y:105.55,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9993,scaleY:0.9993,rotation:-20.6492,x:51.6,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:9.6687,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.7046,y:20.55,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:37.1545,x:57.9,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:19.0507,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-67.8846,x:71.55,y:108.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-49.927,x:76.15,y:76.05,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:20.564,x:35.85,y:104.65,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-23.166,x:51.55,y:51.9}},{t:this.ikNode_6,p:{regY:4.2,rotation:10.7778,x:46.55,y:22.55,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.7642,y:20.6,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:36.2262,x:58.1,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:18.5741,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-66.1565,x:70.45,y:108.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-48.6465,x:75.8,y:76.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:20.0509,x:36.55,y:104.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9993,scaleY:0.9993,rotation:-22.2358,x:51.55,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:10.5082,x:46.5,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.4944,y:20.6,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:35.2969,x:58.35,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:18.0975,x:57.95,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-64.4283,x:69.35,y:108.75}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-47.3674,x:75.3,y:76.75,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.5363,x:37.2,y:105.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-21.3085,x:51.55,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:10.238,x:46.7,y:22.75,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.2259,y:20.65,x:59.1,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:34.368,x:58.55,y:79.05,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:17.6206,x:57.95,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-62.6998,x:68.35,y:109.05}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-46.0881,x:75,y:77.15,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.0228,x:37.8,y:105.65,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-20.3803,x:51.6,y:51.9}},{t:this.ikNode_6,p:{regY:4.4,rotation:9.9688,x:46.6,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.9577,y:20.6,x:59.25,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:33.439,x:58.65,y:79.05,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:17.1456,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-60.9711,x:67.15,y:109.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-44.8095,x:74.6,y:77.55,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:18.5074,x:38.45,y:105.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-19.4506,x:51.6,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:9.6999,x:46.55,y:22.7,regX:46.4,scaleX:0.9995,scaleY:0.9995}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.6885,y:20.6,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:32.5099,x:59,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:16.6685,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-59.2436,x:66.05,y:109.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-43.5301,x:74.25,y:77.95,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:17.994,x:39.15,y:106.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-18.5235,x:51.65,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:9.4293,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.419,y:20.55,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:31.5813,x:59.2,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:16.1924,x:57.95,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-57.5161,x:65,y:109.55}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-42.2506,x:73.8,y:78.35,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:17.4789,x:39.75,y:106.55,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-17.595,x:51.7,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:9.1606,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.1496,y:20.5,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:30.6523,x:59.5,y:79.1,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:15.7157,x:58.05,y:52.5,regY:3.6}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-55.7873,x:64,y:109.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-40.9715,x:73.4,y:78.6,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:16.9651,x:40.45,y:106.85,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-16.6653,x:51.75,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.8913,x:46.5,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.8794,y:20.5,x:59.1,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:29.7233,x:59.7,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:15.2392,x:58,y:52.5,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-54.0585,x:62.8,y:109.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-39.6924,x:73.1,y:78.95,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:16.4501,x:41.1,y:107.15,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-15.7375,x:51.8,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.6214,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.6113,y:20.5,x:59.35,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:28.7939,x:59.9,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.764,x:58,y:52.65,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-52.3303,x:61.65,y:110}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-38.4136,x:72.65,y:79.4,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:15.9363,x:41.8,y:107.5,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-14.8088,x:51.8,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.3526,x:46.7,y:22.7,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.3415,y:20.4,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:27.8651,x:60.1,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:14.2868,x:58,y:52.65,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-50.6028,x:60.6,y:110.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-37.1336,x:72.2,y:79.75,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:15.422,x:42.35,y:107.7,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-13.8814,x:51.85,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:8.0824,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.0738,y:20.4,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:26.9371,x:60.3,y:79,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:13.8107,x:57.8,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-48.8734,x:59.5,y:110.15}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-35.8544,x:71.75,y:80,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:14.9089,x:43.15,y:107.95,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:-12.9526,x:51.75,y:51.8}},{t:this.ikNode_6,p:{regY:4.3,rotation:7.8127,x:46.55,y:22.65,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.8044,y:20.45,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:26.0072,x:60.45,y:79.05,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:13.3346,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-47.1457,x:58.45,y:110.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-34.5759,x:71.35,y:80.3,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:14.395,x:43.85,y:108.2,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:-12.025,x:51.85,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:7.5428,x:46.7,y:22.7,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.5344,y:20.4,x:59.15,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:25.0787,x:60.8,y:78.9,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:12.8585,x:57.95,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-45.4188,x:57.35,y:110.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-33.2968,x:70.9,y:80.6,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.8805,x:44.6,y:108.5,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-11.0955,x:51.95,y:52}},{t:this.ikNode_6,p:{regY:4.2,rotation:7.2739,x:46.55,y:22.6,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.2654,y:20.4,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:24.1498,x:61,y:78.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:12.3817,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-43.691,x:56.25,y:110.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-32.0164,x:70.55,y:80.95,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.3664,x:45.25,y:108.75,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-10.1679,x:51.95,y:51.9}},{t:this.ikNode_6,p:{regY:4.2,rotation:7.0041,x:46.7,y:22.55,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.9965,y:20.4,x:59.35,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:23.2211,x:61.2,y:79,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.9049,x:58,y:52.5,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-41.9607,x:55.2,y:110.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-30.7372,x:70.1,y:81.3,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:12.8519,x:45.8,y:108.95,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-9.2395,x:52,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:6.7352,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.7278,y:20.35,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:22.2907,x:61.35,y:78.75,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:11.4295,x:57.9,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-40.2339,x:54.1,y:110.2}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-29.4586,x:69.6,y:81.55,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:12.3374,x:46.7,y:109.15,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-8.311,x:52.05,y:52}},{t:this.ikNode_6,p:{regY:4.2,rotation:6.4651,x:46.6,y:22.6,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.4575,y:20.3,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:21.3631,x:61.65,y:78.85,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.9524,x:57.95,y:52.7,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-38.5058,x:52.95,y:110.1}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-28.181,x:69.25,y:81.85,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:11.8229,x:47.35,y:109.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-7.3828,x:52.05,y:52}},{t:this.ikNode_6,p:{regY:4.2,rotation:6.1967,x:46.6,y:22.55,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.189,y:20.3,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:20.4334,x:61.85,y:78.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:10.4762,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-36.7768,x:51.95,y:109.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-26.8999,x:68.75,y:82.15,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:11.3096,x:48.1,y:109.55,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-6.4531,x:52.15,y:51.95}},{t:this.ikNode_6,p:{regY:4.4,rotation:5.9257,x:46.6,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.9199,y:20.25,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:19.5047,x:61.95,y:78.75,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.9999,x:57.95,y:52.65,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-35.0496,x:50.85,y:109.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-25.6206,x:68.3,y:82.45,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.7951,x:48.8,y:109.75,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-5.5251,x:52.15,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:5.6559,x:46.55,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.65,y:20.25,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:18.5755,x:62.25,y:78.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:9.524,x:58,y:52.6,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-33.3215,x:49.75,y:109.8}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-24.3419,x:67.8,y:82.75,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.2809,x:49.5,y:109.9,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-4.5968,x:52.2,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:5.387,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.3819,y:20.25,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:17.6468,x:62.5,y:78.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.6,rotation:9.048,x:57.9,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-31.5933,x:48.7,y:109.6}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-23.0621,x:67.3,y:83,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:9.7658,x:50.1,y:110.05,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-3.6688,x:52.2,y:52}},{t:this.ikNode_6,p:{regY:4.4,rotation:5.1181,x:46.55,y:22.9,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.1123,y:20.25,x:59.4,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:16.7174,x:62.75,y:78.65,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.571,x:58.05,y:52.65,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-29.8649,x:47.65,y:109.45}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-21.7831,x:66.8,y:83.2,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.2522,x:51,y:110.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-2.7401,x:52.25,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:4.8478,x:46.5,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.8428,y:20.2,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:15.7898,x:62.9,y:78.6,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:8.0953,x:58.05,y:52.45,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-28.136,x:46.55,y:109.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-20.5046,x:66.25,y:83.3,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:8.7385,x:51.7,y:110.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-1.8103,x:52.3,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:4.5792,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.5733,y:20.2,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:14.8592,x:63.15,y:78.55,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:7.6202,x:57.95,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-26.4074,x:45.5,y:109.05}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-19.2245,x:65.85,y:83.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.2246,x:52.45,y:110.55,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:-0.8836,x:52.3,y:52}},{t:this.ikNode_6,p:{regY:4.4,rotation:4.3099,x:46.65,y:22.85,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.3039,y:20.2,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.9319,x:63.35,y:78.55,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:7.143,x:58,y:52.45,regY:3.6}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-24.679,x:44.5,y:108.8}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-17.9461,x:65.4,y:83.85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.7096,x:53.15,y:110.7,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:0.0411,x:52.35,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:4.0398,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:4.0364,y:20.2,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9994,scaleY:0.9994,rotation:13.0026,x:63.6,y:78.55,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:6.6664,x:58,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-22.9513,x:43.45,y:108.5}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-16.6661,x:64.85,y:84.05,regY:4.4,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:7.1945,x:53.75,y:110.8,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:0.9693,x:52.4,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:3.7707,x:46.55,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.7674,y:20.15,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:12.0742,x:63.85,y:78.45,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:6.1902,x:58,y:52.65,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-21.2226,x:42.4,y:108.25}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-15.3872,x:64.4,y:84.35,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.6824,x:54.65,y:110.9,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:1.8969,x:52.45,y:52}},{t:this.ikNode_6,p:{regY:4.4,rotation:3.5007,x:46.6,y:22.85,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.4974,y:20.1,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:11.1446,x:64.05,y:78.35,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:5.7143,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-19.4951,x:41.35,y:108.05}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-14.1092,x:64.05,y:84.5,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.1675,x:55.25,y:111,regX:5.1}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:2.8267,x:52.5,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:3.2317,x:46.55,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:3.2284,y:20.1,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:10.216,x:64.2,y:78.3,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:5.2381,x:58.05,y:52.65,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-17.7674,x:40.4,y:107.65}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-12.8302,x:63.55,y:84.7,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.6522,x:56.1,y:111.1,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:3.7547,x:52.5,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:2.9619,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.9586,y:20.1,x:59.2,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:9.2859,x:64.4,y:78.2,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:4.7613,x:58.05,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-16.0391,x:39.35,y:107.35}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-11.5501,x:63,y:84.85,regY:4.5,regX:30}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.1399,x:56.9,y:111.15,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:4.6828,x:52.4,y:52}},{t:this.ikNode_6,p:{regY:4.4,rotation:2.6913,x:46.55,y:22.9,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.6897,y:20.05,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:8.3581,x:64.65,y:78.25,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:4.2849,x:57.95,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-14.3129,x:38.35,y:106.95}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-10.2709,x:62.4,y:85,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.6254,x:57.65,y:111.2,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:5.6121,x:52.55,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:2.4226,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:2.4209,y:20.05,x:59.45,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:7.4282,x:64.8,y:78.3,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:3.8096,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-12.5836,x:37.35,y:106.65}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-8.993,x:61.9,y:85.25,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.1104,x:58.35,y:111.25,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:6.5394,x:52.6,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:2.1539,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.1514,y:20.05,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:6.5002,x:65.05,y:78.25,regY:2.6,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:3.3328,x:58.05,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3.1,scaleX:0.9994,scaleY:0.9994,rotation:-10.8555,x:36.5,y:106.3}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-7.7127,x:61.4,y:85.35,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9994,scaleY:0.9994,rotation:3.5967,x:59.15,y:111.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:7.4693,x:52.5,y:51.85}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.8834,x:46.55,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.8835,y:20,x:59.25,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:5.5704,x:65.15,y:78.05,regY:2.5,regX:5.6}},{t:this.ikNode_8,p:{regX:14.6,rotation:2.8562,x:57.9,y:52.65,regY:3.8}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-9.1277,x:35.4,y:105.7}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-6.4326,x:60.9,y:85.5,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.0823,x:59.85,y:111.3,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:8.3967,x:52.6,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.6148,x:46.6,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.6131,y:20,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:4.6421,x:65.5,y:77.95,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:2.3799,x:58,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-7.3994,x:34.45,y:105.3}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-5.1542,x:60.35,y:85.65,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.5682,x:60.65,y:111.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:9.3256,x:52.75,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.3453,x:46.5,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:1.3445,y:20,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:3.7124,x:65.7,y:77.9,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:1.9037,x:58,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-5.6718,x:33.5,y:104.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-3.8747,x:59.85,y:85.8,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.0526,x:61.35,y:111.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:10.2532,x:52.75,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:1.075,x:46.55,y:22.7,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0759,y:19.95,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:2.7845,x:65.95,y:77.85,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:1.4277,x:58,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-3.9423,x:32.6,y:104.35}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-2.5955,x:59.35,y:85.9,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.5406,x:62.15,y:111.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:11.1828,x:52.75,y:52.05}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.8047,x:46.7,y:22.75,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.8065,y:19.95,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.8548,x:66.1,y:77.8,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:0.9509,x:58.05,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-2.2155,x:31.65,y:103.9}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-1.3176,x:58.8,y:85.95,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:1.0261,x:62.85,y:111.4,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.4,scaleX:0.9994,scaleY:0.9994,rotation:12.1108,x:52.75,y:51.9}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.5353,x:46.6,y:22.75,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.5371,y:19.9,x:59.45,regX:14.4}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.9255,x:66.35,y:77.7,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:0.4741,x:58,y:52.5,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:-0.4864,x:30.7,y:103.4}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:-0.0376,x:58.35,y:86.1,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:0.5117,x:63.65,y:111.3,regX:5.2}},{t:this.ikNode_14,p:{regX:8.6,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:13.0385,x:52.7,y:51.95}},{t:this.ikNode_6,p:{regY:4.3,rotation:0.2668,x:46.7,y:22.7,regX:46.5,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9996,scaleY:0.9996,rotation:0.2668,y:19.9,x:59.3,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).to({state:[{t:this.ikNode_10,p:{scaleX:0.9995,scaleY:0.9995,rotation:0,x:66.55,y:77.65,regY:2.5,regX:5.7}},{t:this.ikNode_8,p:{regX:14.7,rotation:0,x:58.05,y:52.55,regY:3.7}},{t:this.ikNode_18,p:{regY:3,scaleX:0.9994,scaleY:0.9994,rotation:1.2379,x:29.85,y:102.85}},{t:this.ikNode_16,p:{scaleX:0.9994,scaleY:0.9994,rotation:1.2379,x:57.85,y:86.2,regY:4.5,regX:29.9}},{t:this.ikNode_12,p:{scaleX:0.9995,scaleY:0.9995,rotation:0,x:64.4,y:111.35,regX:5.2}},{t:this.ikNode_14,p:{regX:8.7,regY:3.5,scaleX:0.9994,scaleY:0.9994,rotation:13.9677,x:52.85,y:52}},{t:this.ikNode_6,p:{regY:4.3,rotation:0,x:46.55,y:22.8,regX:46.4,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_4,p:{scaleX:0.9995,scaleY:0.9995,rotation:0,y:19.9,x:59.35,regX:14.3}},{t:this.ikNode_1},{t:this.ikNode_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,96.5,130.6);


// stage content:
(lib.作業11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 走鋼索男人
	this.instance = new lib.走鋼索男人();
	this.instance.setTransform(61,53.95,0.7941,0.7941,0,0,0,45.6,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Eh1XAAAMDqvAAA");
	this.shape.setTransform(751.2,100.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// 背景
	this.instance_1 = new lib.補間動畫1("synched",0);
	this.instance_1.setTransform(758.4,89.45);

	this.instance_2 = new lib.補間動畫2("synched",0);
	this.instance_2.setTransform(-262.4,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-262.4},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-774.8,89,2291.8,90);
// library properties:
lib.properties = {
	id: '1E34EBD07B4F63438BA9F4024BD11038',
	width: 500,
	height: 178,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_5.png?1703057467410", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1703057467410", id:"CachedBmp_4"},
		{src:"images/作業11_atlas_1.png?1703057467228", id:"作業11_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1E34EBD07B4F63438BA9F4024BD11038'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;