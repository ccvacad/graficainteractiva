(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"instrucciones_atlas_", frames: [[396,0,100,357],[0,0,394,347]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.disparo1 = function() {
	this.spriteSheet = ss["instrucciones_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nave = function() {
	this.spriteSheet = ss["instrucciones_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAfAlIAAhJIg9Akg");
	this.shape.setTransform(29.3,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAAIA9gkIAABJg");
	this.shape_1.setTransform(29.3,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjikmIHFAAQBEAAAABEIAAHFQAABEhEAAInFAAQhEAAAAhEIAAnFQAAhEBEAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiEnQhEAAAAhEIAAnFQAAhEBEAAIHFAAQBEAAAABEIAAHFQAABEhEAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.1,61.1);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAlgeIhJAAIAkA9g");
	this.shape.setTransform(28.6,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkgeIBJAAIglA9g");
	this.shape_1.setTransform(28.6,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjikmIHFAAQBEAAAABEIAAHFQAABEhEAAInFAAQhEAAAAhEIAAnFQAAhEBEAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiEnQhEAAAAhEIAAnFQAAhEBEAAIHFAAQBEAAAABEIAAHFQAABEhEAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.1,61.1);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgegkIAABJIA9glg");
	this.shape.setTransform(29.7,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgegkIA9AkIg9Alg");
	this.shape_1.setTransform(29.7,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjikmIHFAAQBEAAAABEIAAHFQAABEhEAAInFAAQhEAAAAhEIAAnFQAAhEBEAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiEnQhEAAAAhEIAAnFQAAhEBEAAIHFAAQBEAAAABEIAAHFQAABEhEAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.1,61.1);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgkAfIBJAAIglg9g");
	this.shape.setTransform(28.3,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAfIAkg9IAlA9g");
	this.shape_1.setTransform(28.3,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjikmIHFAAQBEAAAABEIAAHFQAABEhEAAInFAAQhEAAAAhEIAAnFQAAhEBEAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjiEnQhEAAAAhEIAAnFQAAhEBEAAIHFAAQBEAAAABEIAAHFQAABEhEAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.1,61.1);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBGQgbgdgBgqQAAgpAagcQAagdApAAQAoAAAbAbQAbAbAAAsQAAAogbAeQgZAegpAAQgnAAgbgdgAghhLQgVASAAAuQAAAjAQAgQARAfAcAAQAXAAAMgUQANgVAAgjQAAgigPggQgQgfgdAAQgRAAgLALg");
	this.shape.setTransform(124.2,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBhIAAgHQATgCAGgFQAGgFAAgQIAAhcQAAgUgDgJQgEgIgKAAIgGAAIgHACIAAgHIAYgJIARgGIAVgJIACABIAAAFIAAAhQAMgSANgKQAMgKANAAQAKAAAHAGQAHAGAAAKQAAAIgFAGQgFAFgIAAQgIAAgIgHQgIgHgEAAQgHAAgLAMQgJALAAANIAABbQAAASAHAHQAIAGATAAIAAAHg");
	this.shape_1.setTransform(107,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBXQgNgNAAgTQAAgeAegUQASgLA4gVIAAgSQAAgUgEgJQgHgNgVAAQgLAAgJAFQgKAFAAAKIABAJIABAHQABALgIAFQgEADgHAAQgIAAgFgGQgFgHgBgHQAAgOASgQQASgQAiAAQAnAAAOAaQAIAOAAAbIAABSIABAQQADAIAIAAIAIgBIALgHIAAAKQgHAIgHAFQgMAIgMAAQgOAAgGgJQgGgJgBgMQgPANgKAHQgTALgRAAQgSAAgMgMgAgSAAQgdASAAAXQAAASAMAJQAHAGALAAQANAAAMgIQAMgHAAgMIAAhAQgXAIgPAJg");
	this.shape_2.setTransform(91.3,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhCPIAAgHQATgBAGgHQAFgHAAgPIAAjEQAAgQgEgEQgEgEgKAAIgEAAIgGABIAAgHIATgHIAqgOIABABIABACIAAAcQANgOAKgGQASgMATAAQAdAAAUAYQAVAZAAApQAAApgZAhQgYAhgmAAQgLAAgHgDQgOgEgLgMIAABEQAAAUAHAFQAHAFAWACIAAAHgAgThrQgNAJAAAJIAABmQAGAOAKAHQALAHANAAQAWAAAQgWQAQgVAAgnQAAgmgRgTQgQgSgVAAQgPAAgMAJg");
	this.shape_3.setTransform(70.2,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBfIgSgFIgFACIgCAFIgGAAIAAhCIAHAAQAFAXAIANQAOAWAbAAQAPAAAJgIQAJgJAAgNQAAgJgFgIQgGgIgMgIIgWgMQgagOgMgNQgLgOAAgSQAAgYAQgOQAQgPAZAAQAKAAANAFIAPADIAFgBIADgDIAFAAIABA5IgGAAQgEgUgHgKQgNgVgXAAQgOAAgIAIQgJAKAAAMQAAASAdAPIAaAPQArAWAAAgQAAAYgSAPQgSAQgcAAQgMAAgQgEg");
	this.shape_4.setTransform(52.3,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAFgFABgYIAAhiQgBgNgBgFQgDgIgKAAIgEAAIgNAEIAAgHIAJgDIAxgRIAIgDIAAADIAACTQgBAXAHAGQAFAGAUACIAAAFgAgQhqQgGgGgBgJQABgIAGgHQAGgGAJAAQAIAAAGAGQAGAGAAAJQAAAJgGAGQgGAHgIAAQgJAAgGgHg");
	this.shape_5.setTransform(38.1,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiLCLIAAgIQAWgCAHgGQAHgGAAgXIAAi6QAAgXgHgHQgGgGgXgCIAAgIIBxAAQA3AAAoATQBIAigBBWQAAAfgMAcQgNAdgaATQgQAMgSAHQggAMguAAgAg3h3QgFACAAALIAADUQAAALAFADQAFADAQABQAwAAAggUQAwgeAAhJQABg/goghQgjgbg4AAQgOAAgFADg");
	this.shape_6.setTransform(16.8,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,46);


(lib.space = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAlQgNgNAAgXQAAgWANgOQAMgOATAAQAKAAAJAFQAJAEAFAIQAFAHACAJIABAUIhEAAQABAPAGAIQAGAJANAAQAMAAAHgIQAEgFACgGIAQAAIgEALQgEAHgEAEQgHAHgLACQgGACgGAAQgRAAgMgNgAAbgHQgBgLgEgGQgGgLgPAAQgKAAgHAIQgIAIAAAMIAzAAIAAAAg");
	this.shape.setTransform(64.1,43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAlQgLgOABgUQgBgYAMgOQANgOASAAQAQAAAKAIQAJAIADATIgQAAQgBgJgGgGQgFgFgKAAQgPAAgGAOQgFAKABANQAAAOAFAKQAHAJAMAAQAJAAAGgGQAFgGADgKIAQAAQgDATgLAIQgLAJgQAAQgRAAgMgNg");
	this.shape_1.setTransform(54.8,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAqQgIgIAAgMQAAgNAIgHQAIgGANgCIAYgDQAGgBACgEIABgGQAAgIgGgEQgGgDgJAAQgMAAgGAGQgDAEgBAHIgOAAQAAgRALgHQALgHAOAAQAPAAALAHQALAGAAANIAAA2IABAEQAAAAAAAAQAAABABAAQAAAAABAAQABAAAAAAIADAAIADAAIAAALIgGACIgFAAQgIAAgEgGQgCgDgBgGQgFAHgIAEQgJAFgLAAQgNAAgIgIgAALACIgJACIgJABQgIABgEADQgIAEAAAJQAAAHAFAEQAFADAHAAQAJAAAHgDQANgHgBgOIAAgMIgHACg");
	this.shape_2.setTransform(45.4,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBDIAAiCIAPAAIAAANQAFgHAFgDQAIgGAKAAQAQAAAMANQALALgBAXQAAAegQANQgKAJgNgBQgKABgHgFQgFgCgFgHIAAAwgAgWgjQgDAIgBANQABAMADAGQAGAPAQAAQAKAAAIgJQAHgKAAgRQAAgMgDgIQgGgPgQAAQgQAAgGARg");
	this.shape_3.setTransform(35.5,45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAoQgJgJAAgOIAPAAQAAAIAEAEQAGAIAOAAQAJgBAHgDQAHgEAAgIQAAgGgGgDQgDgCgLgCIgLgEQgNgDgFgDQgLgGAAgLQAAgOAKgIQAKgIAQAAQAVAAAJANQAGAIAAAIIgPAAQAAgFgEgEQgFgHgNABQgJgBgFAEQgFADAAAGQAAAGAHAEQADACAHACIAKACQARAFAGACQAJAGAAAOQAAAMgJAJQgKAJgUAAQgUAAgJgKg");
	this.shape_4.setTransform(25.8,43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("EgrfgFEMBW/AAAQBCAAAABCIAAIFQAABChCAAMhW/AAAQhBAAAAhCIAAoFQAAhCBBAAg");
	this.shape_5.setTransform(285,32.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgrfAFFQhBAAgBhCIAAoFQABhCBBAAMBW/AAAQBBAAAABCIAAIFQAABChBAAg");
	this.shape_6.setTransform(285,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,571.9,67);


(lib.P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhtCLIAAgIQAYgCAFgHQAGgHAAgaIAAi1QAAgWgGgIQgHgGgWgCIAAgIIBtAAQA2AAAcAVQAcAUAAAiQAAArgfAUQggASgvAAIgQgBIgQAAIAABMQAAAYAIAGQAHAHAYABIAAAIgAgdh3QgDACAAAJIAABsIAPABIAHAAQAcABAQgIQAegPAAgpQAAgmghgPQgSgHgagBQgNAAgDAEg");
	this.shape.setTransform(29.8,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAWAgQABgCABgCQACgEACgDQABgPABAAQAIAFgKAKQAAgFAAgEQgBgRgIgNQgHgJgKgHIgCgHIgEgOIgEAPQgBgBAAAAQgDgBgCgBIAEAJIABABIAEAIIgEAAIAAADIgDgBIgBgBIAAACIACACIgBgDIAAgCIAAAAIgBABIgDgBIABAIIACANIABADIAAAAIAAABIAAAAIABAEIABABIAAAAQgBgBAAAAIAAAFIABgEIABADIACgBIABAAIAAAEIAAAAIgBgBIgCgCIACACIAAgDIAAgBIAAAAQgCgBgBAAIADACIAAgBIADgNIAAABIAEAGIABAAIAFAIIgDgJIAAgDIABACIABABIABABIgBgDIgEgOIAAAEIgBgEIgCgCIAAAAIAAAAIAAAAIgBAIIAEAFIACACIgBgFIADAHIAAABIABABIAAAAIABAAIgBgDIAAgBIAEgCIABgBIAEgDIAAAMIgBgBIgCgEIAAgBIgBgDIgBgGIgBgDIAGAGIgFgDIgGgCIAAAAIABABIAFAIIgFgIIgBgBIgDgCIgBAAIgBgIIgBAGIADAIIAAAFIAAAGIAAAAIAAALIAAABIADACIAEADIAAgBQgCgCgCgBIACgEIAAgBIAAAAAAqASIAAACQgDACgDABQAAgCABgCQAEgBABAAIABAAQgBABAAABIgKATQABgJADgHQgEAAgEgCQAGgBADgBQAGgMAKgHgAAeAvQABgGABgCAAeAxQAAgBAAgBIgCgIIAAAFIACAFIADAFIgDgHAAhA2IAKgkAAcAVIAAASIgEgLIgGgRIAKAKIgLgQIAAAEIgCgGIAAAFIACACIABABIgBgCIAAABIgBALIAAAKIgBgCIgBgGIgCADIgBgCIABgFIAAAAQgBgBgBAAQgBgBgBgBIgCgHAAWAgIAGAMIAAAZQABgNABgHAA1AAIgUA2AACgiQAAAAgBgBIgBgGIgJg5IAAA5IAAAEIAAAEIAAAIIgDAAIAAgBIAAABIgEAAIADADIgCAFIgJAgIgBACIAAgBIAAAAIABgBQAAgBABAAIAAABIgCADIAAgBIgBAEIACgCIAAgBIgBAAIgBADIACgDIACgDIAAgBQABAAABABIAAABQgBgBgBAAQgBgBAAABQgBgBAAABIAFgIIgEAHQABAAAAAAIADgEIgBAFQAAABABAAIAAAAIgCAHIAEgJIABgBIAEgDIABAAIACgCAgIgoIgBADIgBADIgCAIIgCgRIgTAvIgBADIAFAOIAEgFIAJgpAgEgUIgFgCIAAAEIACADIABABIABABIABABIABABIgBAFIgCAMIAGgGIABAAIACgBIABgBIABAAIAAgBIABAAIgFgOIgCgIIgCAEIAAAAIAAABIACgFIgCAEIgBACIgCAFIgDAIIAAABIgBAAIABAAIAAAAIAAgBIAAAAIADgEIAAABIACACIAAgFIACgHIgBAAIAAgBIABABIABgGIAFAFIAFAEIgHgSAgEgTIAAgBIgDAFIgCAEIAAAFIgBgEIgDAGIgGALIAAADIAHgLIACgEIgCAFIgBADIgFAMIABgBIAGgKIgFAJIgNAcIAAgDIAAgDIgBACIAAACIABgBIAIgPIgIASAgLgUIACACIAAAHIgBABgAgJgFIADgFIgGAKIgBADIgGANQgBAAAAAAIAAABIAAgBIABAAIABgBIgDAIAgMgBIADgFAgGgJIABgEIACgGIgBAAAAEgPIAAAAIgFgKgAAFgOIAAAAIgBgBIAAgFIgDgPQgEgDgFgCAABgLIABACIgBgEgAAHAAIgBgEIgBgKAAJACIADgFAAPACIAAAAIAEgUIgCAXIgCgDIAAABIAAgBIgBgBIgCgFIADgGAAKgGIACADAAHAAIACACIAFAFIABABIAAAKIAAADIAAAIIAAARIgDgUIgBABIAAgDIgBgGIACABIAAABIAAgBIAAAAIgBgDIABABIABgCIAAgBIABgHIABgFAgBgZIgEAAIACAEIgBABAgiAHIgFANQAEABAGAAIAEgFIABgBAgnA1IgMgqQAEAHAIACIAAAhIAAADIAAABIABgBIAAgBgAgmA3IgBABIgHAPIAHgOIAAAqAgmA4IAIgRIgBAoIAThFIABgBIAAABIAAAVIAEgVIAAAAIABABIAGALIABgBIAAADIAAAAIgBgBIAAgBIABACIACAEIgCgEIAAAPIggAogAgeAlIgIASAgdAjIAAgOIgBAQAAKAIIgCgFIgBgDAAKASIAAgFIABADIgDgJIAAgCIAAgBIAAgBIAAABIAAgBIABgBAAKANIgCgGAAKAIIADAGIACAEIABADIAGALAANAPIgDgHAAIAEIAAAAIACAEAAGAIIACgDIgCgFIACADIgBgDAAEAOIAAgBQgCgBgBgBQgDgCgEgCIAAAAIAHAFIAAAJgAADAcIADAEIADAFIACgKIAAAAIgDgKIACABIAAAAAAOAXIgCgDIADABQgBgBgCgBAALAbIAAAAIgFAFIgFAHIAAAtIAIgvIAGAJQACgDABgEIgCgIIgBAPIgEgTgAAPAVIgBACAAGAIIAEAFAAMARIADAEIgCgGAAMATIAAgCAgHAGIABAAIAAABQAAgBgBAAgAgVAVIAAACIAAAAIgBgBIgCgDIAEgCIgBABIgBAEIgHANAgVAXIAAAAIAAAAAgVASIAAADQAAgCACgDAgaAVIABgFAgUAQIgBACAAAAXIgGgMIgFAmgAgLAfIAAASAgTAHIAHgIAgKAFIAEgOAgngFIAAAZAgZAQIgIgMIgGgJIAFAMAASAnQACgEACgDAAcBFIgKgeAAchVIAABh");
	this.shape_1.setTransform(28.3,30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgkAfIBJAAIglg9g");
	this.shape_2.setTransform(28.3,30.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAfIAkg9IAlA9g");
	this.shape_3.setTransform(28.3,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AjikmIHFAAQBEAAAABEIAAHFQAABEhEAAInFAAQhEAAAAhEIAAnFQAAhEBEAAg");
	this.shape_4.setTransform(29.5,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjiEnQhEAAAAhEIAAnFQAAhEBEAAIHFAAQBEAAAABEIAAHFQAABEhEAAg");
	this.shape_5.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.1,61.1);


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.disparo1();
	this.instance.parent = this;
	this.instance.setTransform(4,-14.2,0.08,0.08,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-14.2,8,28.6);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.disparo1();
	this.instance.parent = this;
	this.instance.setTransform(4,-14.2,0.08,0.08,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-14.2,8,28.6);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBfIgSgEIgFACIgCADIgGAAIAAhCIAHAAQAFAYAIANQAOAXAbAAQAPAAAJgJQAJgJAAgOQAAgIgFgIQgGgIgMgHIgWgOQgagNgMgNQgLgNAAgUQAAgWAQgPQAQgPAZAAQAKAAANAEIAPAFIAFgCIADgDIAFAAIABA5IgGAAQgEgTgHgMQgNgUgXAAQgOAAgIAJQgJAIAAAMQAAATAdAPIAaAOQArAYAAAfQAAAYgSAQQgSAPgcAAQgMAAgQgEg");
	this.shape.setTransform(92.4,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBHQgbgdAAgrQAAgpAagcQAZgdApABQAoAAAaAbQAbAaAAAtQAAAngZAeQgaAegqABQgmAAgbgdgAgihMQgUAUAAAtQAAAjARAgQAQAgAdAAQAXAAAMgWQAMgUAAgjQAAgjgQgeQgPgggeAAQgQAAgMAKg");
	this.shape_1.setTransform(73.4,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBmQgFgMAAgVIAAh7IgWAAIgBgBIgBgCIABgDIAGgFIAVgTIAcgmIADAAIAAADIAAAzIAqAAIAAAOIgqAAIgBB1QAAAQAEAIQAEAOAPAAQAHAAAFgEIANgLIAFAFIgEAGQgLAPgMAFQgMAHgLgBQgXABgJgWg");
	this.shape_2.setTransform(57.5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BGQgWgeABgmQgBgoAZgeQAZgeAmAAQAdAAAVAUQAWAUAAAlIiBAAQACAvAUAVQATAWAaAAQAVAAAPgLQAOgMANgUIAIACQgJAagXAXQgYAWgfAAQgoAAgUgdgAAhgiQgCgVgGgKQgJgSgXAAQgXAAgNAVQgHALgDARIBWAAIAAAAg");
	this.shape_3.setTransform(42,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAGgFAAgYIAAhiQAAgNgCgFQgDgIgKAAIgFAAIgMAEIAAgHIAJgDIAxgRIAHgDIAAADIAACTQABAXAFAGQAGAGAUACIAAAFgAgQhqQgGgGAAgJQAAgIAGgHQAGgGAJAAQAIAAAGAGQAHAGAAAJQAAAJgHAGQgGAHgIAAQgJAAgGgHg");
	this.shape_4.setTransform(26.9,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDBgIAAgFQASgDAGgFQAFgGAAgRIAAhXQAAgUgEgJQgIgRgWAAQgNAAgNAJIgTAQIAABoQAAARAGAJQAGAIASABIAAAFIhdAAIAAgFQAUgDAFgHQAFgGAAgcIAAg5QAAgfgEgMQgGgUgWAAQgNAAgMAHQgMAGgJAMIAABvQAAAPAFAHQAGAFASABIAAAFIhdAAIAAgFQAQgCAFgEQAIgFAAgTIAAhoQAAgQgEgFQgEgEgJAAIgHABIgFABIAAgIIAPgEIAagKIAUgHIABABIAAAEIAAAbQAUgSAPgHQAPgHAPAAQAWAAALAOQAHAIAEAOQAPgQALgHQAUgNAUAAQAhAAALAbQAHAPAAAhIAABUQAAAPAGAFQAHAFAQACIAAAFg");
	this.shape_5.setTransform(5.1,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAGgFgBgYIAAhiQAAgNgBgFQgEgIgJAAIgFAAIgMAEIAAgHIAJgDIAxgRIAHgDIAAADIAACTQAAAXAHAGQAFAGAUACIAAAFgAgQhqQgHgGABgJQgBgIAHgHQAGgGAJAAQAIAAAGAGQAHAGgBAJQABAJgHAGQgGAHgIAAQgJAAgGgHg");
	this.shape_6.setTransform(-17.4,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABBfIgCgGIg/iVQgIgSgIgHQgFgEgKgBIAAgGIBSAAIAAAGIgOADQgFACAAAHIABAHIADAIIAqBmIAlhaIAFgOIACgLQAAgIgIgDIgMgDIAAgGIA6AAIAAAGQgKABgEAGQgEAGgJAVIg7CSIgDAGIgDABg");
	this.shape_7.setTransform(-33.8,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhBBHQgbgdgBgrQAAgpAagcQAbgdAoABQAoAAAaAbQAbAaAAAtQAAAngaAeQgZAegpABQgnAAgbgdgAghhMQgVAUAAAtQAAAjAQAgQARAgAcAAQAXAAAMgWQANgUAAgjQAAgjgQgeQgPgggdAAQgRAAgLAKg");
	this.shape_8.setTransform(-54.8,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9CLIAAgIQAagCAHgHQAFgHABgaIAAi8IhrDuIgGAAIhqjkIAACmQABAiAJALQAHAHAXACIAAAIIhjAAIAAgIQAbgCAGgJQAIgKAAghIAAiqQAAgWgHgHQgIgHgZgBIAAgIIBTAAIBgDRIBdjRIBUAAIAAAIQgYACgGAGQgHAIAAAVIAAC6QAAAXAHAHQAGAGAYACIAAAIg");
	this.shape_9.setTransform(-84.1,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-23,209,46);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.nave();
	this.instance.parent = this;
	this.instance.setTransform(-34,-29.9,0.173,0.173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-29.9,68,59.9);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73,23,1,1,0,0,0,73,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,46);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(104.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,46);


// stage content:
(lib.instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pausa
	this.instance = new lib.P("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(278,210.1,1,1,0,0,0,29.5,29.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({_off:false},0).wait(24).to({startPosition:0},0).to({scaleX:0.25,scaleY:0.25},24).to({_off:true},1).wait(16).to({_off:false,scaleX:1,scaleY:1},0).wait(1));

	// PausaTexto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBXQgNgNAAgTQAAgeAegUQASgLA4gVIAAgSQAAgUgEgJQgHgNgVAAQgLAAgJAFQgKAFAAAKIABAJIABAHQABALgIAFQgEADgHAAQgIAAgFgGQgFgHgBgHQAAgOASgQQASgQAiAAQAnAAAOAaQAIAOAAAbIAABSIABAQQADAIAIAAIAIgBIALgHIAAAKQgHAIgHAFQgMAIgMAAQgOAAgGgJQgGgJgBgMQgPANgKAHQgTALgRAAQgSAAgMgMgAgSAAQgdASAAAXQAAASAMAJQAHAGALAAQANAAAMgIQAMgHAAgMIAAhAQgXAIgPAJg");
	this.shape.setTransform(316.3,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBfIgSgEIgFABIgCAEIgGAAIAAhCIAHAAQAFAYAIAMQAOAYAbAAQAPAAAJgJQAJgJAAgOQAAgIgFgIQgGgIgMgHIgWgOQgagNgMgNQgLgNAAgTQAAgYAQgOQAQgPAZAAQAKAAANAEIAPAFIAFgBIADgEIAFAAIABA6IgGAAQgEgVgHgLQgNgUgXAAQgOAAgIAJQgJAIAAAMQAAATAdAPIAaAOQArAYAAAfQAAAYgSAQQgSAPgcAAQgMAAgQgEg");
	this.shape_1.setTransform(298.3,82.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BUQgQgNAAgdIAAhpQAAgRgHgFQgFgEgPgBIAAgGIA+AAIAACDQAAAOAEAHQAHAQAVABQAMgBAOgJQAHgFAIgJIAAhvQAAgRgGgEQgGgFgTgBIAAgHIBDAAIAACPQAAAOAFAGQAFAFAQAAIAAAFIgRAFIgSAGIgXAIIgBAAIAAgDIAAghQgOARgMAHQgQANgUAAQgSAAgPgNg");
	this.shape_2.setTransform(279.2,82.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBXQgNgNAAgTQAAgeAegUQASgLA4gVIAAgSQAAgUgEgJQgHgNgVAAQgLAAgJAFQgKAFAAAKIABAJIABAHQABALgIAFQgEADgHAAQgIAAgFgGQgGgHAAgHQABgOARgQQASgQAiAAQAnAAAOAaQAIAOAAAbIAABSIABAQQADAIAIAAIAIgBIALgHIAAAKQgHAIgHAFQgMAIgMAAQgOAAgFgJQgHgJgBgMQgPANgKAHQgTALgRAAQgRAAgNgMgAgSAAQgeASAAAXQAAASANAJQAHAGALAAQANAAAMgIQAMgHAAgMIAAhAQgXAIgPAJg");
	this.shape_3.setTransform(260.4,82.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhtCLIAAgIQAYgCAFgHQAGgIAAgZIAAi2QAAgVgGgIQgHgGgWgCIAAgIIBtAAQA2AAAcAVQAcAUAAAjQAAAqgfAUQggASgvAAIgQAAIgQgBIAABMQAAAYAIAGQAHAGAYACIAAAIgAgdh4QgDADAAAJIAABsIAPABIAHAAQAcABAQgIQAegOAAgpQAAgnghgPQgSgIgaAAQgNAAgDADg");
	this.shape_4.setTransform(238.7,78.2);

	this.text = new cjs.Text("Pausa", "42px 'Times'", "#FFFFFF");
	this.text.lineHeight = 44;
	this.text.parent = this;
	this.text.setTransform(227,60.6);
	this.text._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABACIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAABIAAABIAAAAIAAAAIAAABgAAAACIAAAAIAAgBIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAABgAAAAAgAAAAAIAAAAIAAgBIAAAAIAAABIAAAAg");
	this.shape_5.setTransform(276.7,81.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAABIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAABIAAAAIABABIgBABgAAAACIAAAAIAAgBIAAABgAAAgBIAAAAIAAABg");
	this.shape_6.setTransform(276.4,81.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABACIAAgBIAAgBIgBgBIABAAIAAACIAAAAIABAAIgBABgAAAACIAAAAIAAgBIAAgBIAAgBIAAAAIAAACIAAAAIAAAAIAAAAIAAABg");
	this.shape_7.setTransform(276.1,81.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABACIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAABIAAABIAAAAIAAAAIAAABgAAAACIAAAAIAAgBIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIAAABgAAAAAgAAAAAIAAAAIAAgBIAAAAIAAABIAAAAg");
	this.shape_8.setTransform(275.7,81.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBACIABAAIAAgBIAAgCIAAAAIAAAAIAAAAIAAAAIAAAAIABABIgBAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAIAAAAIABAAIgBgBIABAAIABABIgBAAIgBAAIAAAAIAAABIAAABIAAAAg");
	this.shape_9.setTransform(275.4,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},245).to({state:[{t:this.text}]},24).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(269).to({_off:false},0).wait(1).to({scaleX:0.95,scaleY:0.96,x:229.3,y:61.4},0).wait(1).to({scaleX:0.91,scaleY:0.92,x:231.7,y:62.2},0).wait(1).to({scaleX:0.86,scaleY:0.88,x:234,y:63},0).wait(1).to({scaleX:0.81,scaleY:0.84,x:236.4,y:63.8},0).wait(1).to({scaleX:0.76,scaleY:0.8,x:238.7,y:64.7},0).wait(1).to({scaleX:0.71,scaleY:0.77,x:241,y:65.5},0).wait(1).to({scaleX:0.67,scaleY:0.73,x:243.4,y:66.3},0).wait(1).to({scaleX:0.62,scaleY:0.69,x:245.7,y:67.1},0).wait(1).to({scaleX:0.57,scaleY:0.65,x:248.1,y:68},0).wait(1).to({scaleX:0.52,scaleY:0.61,x:250.4,y:68.8},0).wait(1).to({scaleX:0.48,scaleY:0.57,x:252.7,y:69.6},0).wait(1).to({scaleX:0.43,scaleY:0.53,x:255.1,y:70.4},0).wait(1).to({scaleX:0.38,scaleY:0.49,x:257.4,y:71.3},0).wait(1).to({scaleX:0.33,scaleY:0.45,x:259.8,y:72.1},0).wait(1).to({scaleX:0.28,scaleY:0.41,x:262.1,y:72.9},0).wait(1).to({scaleX:0.24,scaleY:0.37,x:264.4,y:73.7},0).wait(1).to({scaleX:0.19,scaleY:0.33,x:266.8,y:74.6},0).wait(1).to({scaleX:0.14,scaleY:0.29,x:269.1,y:75.4},0).wait(1).to({scaleX:0.09,scaleY:0.26,x:271.4,y:76.2},0).wait(1).to({scaleX:0.05,scaleY:0.22,x:273.8,y:77},0).wait(1).to({scaleX:0,scaleY:0.18,skewY:180,x:276.1,y:77.8},0).wait(1).to({scaleX:0.05,scaleY:0.14,x:278.5,y:78.7},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:280.8,y:79.5},0).to({_off:true},1).wait(18));

	// Espacio
	this.instance_1 = new lib.space("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(199,263.1,0.572,0.754,0,0,0,284.9,32.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({_off:false},0).to({regX:285,scaleX:0.47,scaleY:0.62,x:199.1},24).to({regX:285.1,scaleX:0.56,scaleY:0.74},8).wait(17).to({startPosition:0},0).to({regX:285.6,regY:33.3,scaleX:0.01,scaleY:0.02,rotation:180},24).to({_off:true},1).wait(86));

	// DisparoTexto
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBBGQgbgcAAgrQAAgpAagcQAZgcApgBQAoAAAaAbQAbAbAAAsQAAAogZAeQgaAfgqgBQgmAAgbgdgAgihLQgUASAAAuQAAAkARAfQAQAfAdABQAXgBAMgUQAMgVAAgjQAAgjgQgfQgPgfgeAAQgQAAgMALg");
	this.shape_10.setTransform(327.2,67.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFBhIAAgHQATgCAGgFQAGgFAAgQIAAhcQAAgUgDgJQgEgIgKAAIgGAAIgHACIAAgHIAYgJIARgGIAVgJIACABIAAAFIAAAhQAMgSANgKQAMgKANAAQAKAAAHAGQAHAGAAAKQAAAIgFAGQgFAFgIAAQgIAAgIgHQgIgHgEAAQgHAAgLAMQgJALAAANIAABbQAAASAHAHQAIAGATAAIAAAHg");
	this.shape_11.setTransform(310,67.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhHBXQgNgNAAgTQAAgeAdgUQAUgLA3gVIAAgSQAAgUgEgJQgHgNgVAAQgKAAgKAFQgJAFAAAKIABAJIAAAHQAAALgHAFQgFADgGAAQgJAAgFgGQgEgHAAgHQAAgOASgQQARgQAjAAQAmAAAPAaQAHAOAAAbIAABSIACAQQACAIAJAAIAIgBIAKgHIAAAKQgHAIgHAFQgLAIgMAAQgOAAgGgJQgHgJAAgMQgQANgKAHQgTALgQAAQgSAAgNgMgAgSAAQgdASgBAXQABASALAJQAJAGAJAAQAOAAALgIQANgHAAgMIAAhAQgXAIgPAJg");
	this.shape_12.setTransform(294.3,67.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhhCPIAAgHQATgBAGgHQAFgHAAgPIAAjEQAAgQgEgEQgEgEgKAAIgEAAIgGABIAAgHIATgHIAqgOIABABIABACIAAAcQANgOAKgGQASgMATAAQAdAAAUAYQAVAZAAApQAAApgZAhQgYAhgmAAQgLAAgHgDQgOgEgLgMIAABEQAAAUAHAFQAHAFAWACIAAAHgAgThrQgNAJAAAJIAABmQAGAOAKAHQALAHANAAQAWAAAQgWQAQgVAAgnQAAgmgRgTQgQgSgVAAQgPAAgMAJg");
	this.shape_13.setTransform(273.2,71.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeBfIgSgFIgFACIgCAFIgGAAIAAhDIAHAAQAFAYAIAMQAOAYAbAAQAPgBAJgIQAJgJAAgNQAAgJgFgIQgGgIgMgIIgWgMQgagOgMgNQgLgOAAgSQAAgYAQgOQAQgPAZAAQAKAAANAFIAPAEIAFgBIADgEIAFAAIABA6IgGAAQgEgVgHgLQgNgUgXAAQgOAAgIAIQgJAKAAALQAAATAdAPIAaAPQArAXAAAfQAAAYgSAPQgSAQgcAAQgMAAgQgEg");
	this.shape_14.setTransform(255.3,67.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAGgFAAgYIAAhiQAAgNgCgFQgDgIgKAAIgFAAIgMAEIAAgHIAJgDIAxgRIAHgDIAAADIAACTQABAXAFAGQAGAGAUACIAAAFgAgQhqQgGgGAAgJQAAgIAGgHQAGgGAJAAQAIAAAGAGQAHAGAAAJQAAAJgHAGQgGAHgIAAQgJAAgGgHg");
	this.shape_15.setTransform(241.1,62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiLCLIAAgIQAWgCAHgGQAHgGAAgXIAAi6QAAgYgGgGQgIgGgWgCIAAgIIBwAAQA4AAApATQBGAiABBWQAAAfgNAdQgNAcgaATQgQAMgSAHQggAMguAAgAg3h3QgFACAAALIAADUQAAALAFADQAFADAPABQAxAAAfgUQAygeAAhJQAAg/gpghQgigcg4AAQgOABgFADg");
	this.shape_16.setTransform(219.8,63.2);

	this.instance_2 = new lib.Símbolo4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(276,66.6,1,1,0,0,0,73,23);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},151).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[]},77).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).wait(1).to({regX:68.1,regY:23.8,scaleX:0.95,scaleY:0.96,x:271.3,y:67.3},0).wait(1).to({scaleX:0.91,scaleY:0.92,x:271.5},0).wait(1).to({scaleX:0.86,scaleY:0.88,x:271.8,y:67.2},0).wait(1).to({scaleX:0.82,scaleY:0.84,x:272},0).wait(1).to({scaleX:0.77,scaleY:0.8,x:272.2},0).wait(1).to({scaleX:0.73,scaleY:0.75,x:272.4},0).wait(1).to({scaleX:0.68,scaleY:0.71,x:272.7,y:67.1},0).wait(1).to({scaleX:0.63,scaleY:0.67,x:272.9},0).wait(1).to({scaleX:0.59,scaleY:0.63,x:273.1},0).wait(1).to({scaleX:0.54,scaleY:0.59,x:273.3,y:67},0).wait(1).to({scaleX:0.5,scaleY:0.55,x:273.6},0).wait(1).to({scaleX:0.45,scaleY:0.51,x:273.8,y:66.9},0).wait(1).to({scaleX:0.4,scaleY:0.47,x:274},0).wait(1).to({scaleX:0.36,scaleY:0.43,x:274.3},0).wait(1).to({scaleX:0.31,scaleY:0.38,x:274.5},0).wait(1).to({scaleX:0.27,scaleY:0.34,x:274.7,y:66.8},0).wait(1).to({scaleX:0.22,scaleY:0.3,x:274.9},0).wait(1).to({scaleX:0.18,scaleY:0.26,x:275.2},0).wait(1).to({scaleX:0.13,scaleY:0.22,x:275.4,y:66.7},0).wait(1).to({scaleX:0.08,scaleY:0.18,x:275.6},0).wait(1).to({scaleX:0.04,scaleY:0.14,x:275.8,y:66.6},0).wait(1).to({scaleX:0.01,scaleY:0.1,skewY:180,x:276.1},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:276.2},0).to({_off:true},1).wait(87));

	// Disparo
	this.instance_3 = new lib.Interpolación7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(438,216.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Interpolación8("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(438,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},175).to({state:[{t:this.instance_4}]},24).to({state:[]},1).to({state:[]},101).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).to({_off:true,y:-23.7},24).wait(112));

	// Nave
	this.instance_5 = new lib.Interpolación1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(409,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:339},23).to({x:409},26).to({x:408,y:326},26).to({y:253},26).to({scaleX:0.12,scaleY:0.12,rotation:180,x:439},25).to({_off:true},1).wait(24).to({_off:false,scaleX:1,scaleY:1,rotation:0},0).wait(24).to({startPosition:0},0).wait(25).to({startPosition:0},0).to({scaleX:0.12,scaleY:0.12,rotation:180},24).to({_off:true},1).wait(86));

	// Izquierda
	this.instance_6 = new lib.Símbolo7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.1,306.1,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.66,scaleY:0.66},23).wait(1).to({regX:29.6,regY:29.6,scaleX:1,scaleY:1,x:94.2,y:306.2},0).wait(78).to({startPosition:0},0).to({regX:29.4,regY:29.8,scaleX:0.13,scaleY:0.13,y:306.3},24).to({_off:true},1).wait(184));

	// Derecha
	this.instance_7 = new lib.Símbolo5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(223.1,306.1,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({startPosition:0},0).to({scaleX:0.7,scaleY:0.7},24).wait(1).to({regX:29.6,regY:29.6,scaleX:1,scaleY:1,x:223.2,y:306.2},0).wait(52).to({startPosition:0},0).to({scaleX:0.14,scaleY:0.14},24).to({_off:true},1).wait(184));

	// Abajo
	this.instance_8 = new lib.Símbolo6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(159.1,306.1,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({startPosition:0},0).to({regX:29.6,scaleX:0.73,scaleY:0.73},24).wait(1).to({regY:29.6,scaleX:1,scaleY:1,y:306.2},0).wait(26).to({startPosition:0},0).to({regX:29.7,regY:29.7,scaleX:0.14,scaleY:0.14,skewY:180,x:159,y:306.3},24).to({_off:true},1).wait(184));

	// Arriba
	this.instance_9 = new lib.Símbolo3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(159.1,241.1,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(77).to({startPosition:0},0).to({scaleX:0.66,scaleY:0.66},24).wait(1).to({regX:29.6,regY:29.6,scaleX:1,scaleY:1,x:159.2,y:241.2},0).to({regX:29.7,regY:29.7,scaleX:0.14,scaleY:0.14,rotation:180,x:159},24).to({_off:true},1).wait(184));

	// Movimientos
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeBfIgSgEIgFABIgCAFIgGAAIAAhDIAHAAQAFAYAIAMQAOAYAbAAQAPAAAJgJQAJgJAAgOQAAgIgFgIQgGgIgMgHIgWgOQgagNgMgNQgLgOAAgSQAAgYAQgOQAQgPAZAAQAKAAANAEIAPAFIAFgBIADgEIAFAAIABA6IgGAAQgEgVgHgLQgNgUgXAAQgOAAgIAJQgJAJAAALQAAATAdAPIAaAPQArAWAAAgQAAAYgSAPQgSAQgcAAQgMAAgQgEg");
	this.shape_17.setTransform(367.9,65.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhBBHQgcgdABgrQAAgpAagcQAagcAogBQAoABAbAaQAbAbAAAtQAAAngaAeQgbAegpAAQgmAAgbgcgAgihLQgUATAAAtQAAAjARAgQAQAfAcABQAYAAAMgWQAMgVAAgiQAAgjgPgeQgRgggdAAQgQAAgMALg");
	this.shape_18.setTransform(348.9,65.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaBmQgFgMAAgVIAAh7IgWAAIgBgBIgBgCIABgDIAGgFIAVgTIAbgmIAEAAIAAADIAAAzIAqAAIAAAOIgqAAIgBB2QAAAPAEAIQAEAOAPAAQAHAAAFgEIANgLIAFAFIgEAGQgLAOgMAHQgMAFgLAAQgXAAgJgVg");
	this.shape_19.setTransform(333,63.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag+BGQgWgeABgmQgBgoAZgeQAZgeAmAAQAdAAAVAUQAWAUAAAlIiBAAQACAvAUAVQATAWAaAAQAVAAAPgLQAOgMANgUIAIACQgJAagXAXQgYAWgfAAQgoAAgUgdgAAhgiQgCgVgGgKQgKgSgWAAQgYAAgMAVQgGALgEARIBWAAIAAAAg");
	this.shape_20.setTransform(317.5,65.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAGgFAAgYIAAhiQAAgNgCgFQgEgIgJAAIgEAAIgNAEIAAgHIAJgDIAxgRIAIgDIAAADIAACTQAAAXAFAGQAGAGAUACIAAAFgAgQhqQgGgGAAgJQAAgIAGgHQAGgGAJAAQAIAAAGAGQAHAGAAAJQAAAJgHAGQgGAHgIAAQgJAAgGgHg");
	this.shape_21.setTransform(302.4,60.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABDBgIAAgFQASgCAGgGQAFgFAAgSIAAhXQAAgUgEgJQgIgRgWAAQgNAAgNAJIgTAQIAABoQAAARAGAJQAGAIASABIAAAFIhdAAIAAgFQAUgDAFgHQAFgHAAgbIAAg4QAAgggEgMQgGgUgWAAQgNAAgMAHQgMAGgJAMIAABvQAAAQAFAFQAGAHASAAIAAAFIhdAAIAAgFQAQgCAFgEQAIgFAAgSIAAhpQAAgPgEgFQgEgFgJAAIgHAAIgFACIAAgIIAPgEIAagKIAUgHIABABIAAAEIAAAcQAUgTAPgHQAPgHAPAAQAWAAALAPQAHAHAEANQAPgPALgHQAUgNAUAAQAhAAALAbQAHAPAAAhIAABUQAAAOAGAGQAHAFAQACIAAAFg");
	this.shape_22.setTransform(280.6,65.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxCPIAAgFQAWgDAGgFQAGgFgBgYIAAhiQAAgNgBgFQgDgIgKAAIgFAAIgMAEIAAgHIAJgDIAxgRIAHgDIAAADIAACTQABAXAFAGQAGAGAUACIAAAFgAgQhqQgHgGABgJQgBgIAHgHQAGgGAJAAQAIAAAGAGQAHAGgBAJQABAJgHAGQgGAHgIAAQgJAAgGgHg");
	this.shape_23.setTransform(258.1,60.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AABBfIgCgGIg/iVQgIgSgIgHQgFgEgKgBIAAgGIBSAAIAAAGIgOADQgFACAAAHIABAHIADAIIAqBmIAlhaIAFgOIACgLQAAgIgIgDIgMgDIAAgGIA6AAIAAAGQgKABgEAGQgEAGgJAVIg7CSIgDAGIgDABg");
	this.shape_24.setTransform(241.7,65.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBBHQgcgdAAgrQAAgpAagcQAbgcAogBQAoABAaAaQAbAbAAAtQAAAngaAeQgaAegoAAQgnAAgbgcgAghhLQgVATAAAtQAAAjAQAgQARAfAdABQAXAAALgWQANgVAAgiQAAgjgQgeQgQgggcAAQgRAAgLALg");
	this.shape_25.setTransform(220.7,65.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA9CLIAAgIQAagCAGgHQAGgHABgaIAAi8IhrDuIgGAAIhqjkIAACmQABAjAJAKQAHAGAXADIAAAIIhjAAIAAgIQAbgCAGgKQAIgIAAgiIAAipQAAgXgHgHQgIgHgZgBIAAgIIBTAAIBgDRIBdjRIBUAAIAAAIQgYACgGAGQgHAIAAAWIAAC5QAAAXAHAHQAGAGAYACIAAAIg");
	this.shape_26.setTransform(191.4,61.2);

	this.instance_10 = new lib.Símbolo1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(275.5,64.6,0.99,1,0,0,0,104.5,23.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).to({state:[{t:this.instance_10}]},102).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[]},174).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(102).to({_off:false},0).wait(1).to({regX:102.8,regY:19.5,scaleX:0.96,scaleY:0.96,x:273.9,y:61.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:61.3},0).wait(1).to({scaleX:0.89,scaleY:0.88,x:274,y:61.4},0).wait(1).to({scaleX:0.86,scaleY:0.84,x:274.1,y:61.5},0).wait(1).to({scaleX:0.82,scaleY:0.8,y:61.7},0).wait(1).to({scaleX:0.79,scaleY:0.76,x:274.2,y:61.8},0).wait(1).to({scaleX:0.76,scaleY:0.72,y:61.9},0).wait(1).to({scaleX:0.72,scaleY:0.68,x:274.3,y:62.1},0).wait(1).to({scaleX:0.69,scaleY:0.64,y:62.3},0).wait(1).to({scaleX:0.66,scaleY:0.6,x:274.4,y:62.4},0).wait(1).to({scaleX:0.62,scaleY:0.56,x:274.5,y:62.6},0).wait(1).to({scaleX:0.59,scaleY:0.52,y:62.7},0).wait(1).to({scaleX:0.56,scaleY:0.48,x:274.6,y:62.8},0).wait(1).to({scaleX:0.52,scaleY:0.44,y:63},0).wait(1).to({scaleX:0.49,scaleY:0.4,x:274.7,y:63.1},0).wait(1).to({scaleX:0.46,scaleY:0.36,y:63.3},0).wait(1).to({scaleX:0.42,scaleY:0.32,x:274.8,y:63.4},0).wait(1).to({scaleX:0.39,scaleY:0.28,y:63.6},0).wait(1).to({scaleX:0.36,scaleY:0.24,x:274.9,y:63.7},0).wait(1).to({scaleX:0.32,scaleY:0.2,x:275,y:63.9},0).wait(1).to({scaleX:0.29,scaleY:0.16,y:64},0).wait(1).to({scaleX:0.26,scaleY:0.12,x:275.1,y:64.1},0).wait(1).to({scaleX:0.22,scaleY:0.08,y:64.3},0).to({_off:true},1).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(338.6,241.6,379.5,295.1);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#252525",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/instrucciones_atlas_.png", id:"instrucciones_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;