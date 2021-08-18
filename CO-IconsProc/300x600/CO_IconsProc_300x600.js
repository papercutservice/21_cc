(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CO_IconsProc_300x600_atlas_1", frames: [[0,0,301,600]]}
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



(lib.icon_bg_300x600 = function() {
	this.initialize(ss["CO_IconsProc_300x600_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.toothsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tooth.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAfIAJAAQALAEAHAWQADAMAEAWIAEAWQAHASAOgUQAMgTAGgyQADgSALgQQATgngFgjQgHglgfgNQgVgJgUALQgKAHgMgBQgLABgKgHQgVgLgVAJQgeANgGAlQgGAjATAnQALAQACATQAHAyAMASQAOAUAHgSIAEgWQAEgWADgMQAGgWAMgEgAgnhgQgNACgJALQgJAKgBAO");
	this.shape.setTransform(10.6899,12.5864);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,22.4,26.2);


(lib.stethsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// steth.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABXhBQAAAGAGAAQAFAAAAgFQABgCgCgCQgBgCgDAAIAAAAQgFAAgBAFgABdggQANAAAKgKQAKgJAAgOQAAgNgKgKQgJgKgOAAQgOAAgJAKQgKAJAAAOQAAAOAKAJQAJAKAOAAIAAA2QAAAJgGAHQgHAGgJAAIgkAAQgIABgFAFQgFAGABAIQAAAHAFAGQAFAFAHAAIBFAAQAJAAAGAHQAHAGAAAJQAAAJgHAHQgGAGgJAAIhyAAQgUgBgPgOQgOgOAAgUIAAgyIgGAAQgYAAgSgRQgSgRAAgZIAAhHQAAgFADgDQADgDAFAAIALAAQAAAEADAEQADADAFAAQAEAAAEgDQADgEAAgEQAAgFgDgDQgDgDgFAAQgFAAgDADQgDADAAAFAgQhyQABgFgEgDQgDgDgEAAQgFAAgDADQgDADAAAFQgBAEAEAEQADADAEAAQAFAAADgDQADgEAAgEIALAAQAFAAACADQADADAAAFIAABHQAAAZgQARQgSARgZAAIgFAA");
	this.shape.setTransform(13.075,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,27.2,27.2);


(lib.shotsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shot.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABdgDIgQgRIgNgMIgegfIgOgNIgaAbIgdAcIgcAcIgYAXQAHAVAPAPIAAAAIg3A3AB5g9IgPgOIgegfAAUhMIgRgRAAig/IAqgrIgPgOAAFglIgLgMAgYgKIgLgLAhBBCQAQAPAUAHIAWgXAg1ASIgKgLAAXAiQAGgBAFAAIAAAAQASAAANAMQAMANAAARQAAASgMANQgOAMgRAAQgSAAgNgMQgLgNAAgSQAAgFABgFQADgLAHgJQAJgJALgCIA2g2AANBMIAPAQIAcgfABAggIAqgr");
	this.shape.setTransform(12.55,12.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,26.1,26.1);


(lib.preggosvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// preggo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUg3QgRAAgLgLQgLgMAAgRQAAgQALgMQALgMARAAQAQAAAMAMQAMAMAAAQQAAARgMAMQgMALgQAAgAgvBXQgFgCgDgBQgHgDgCgIQgBgCAAgJQAAgQAJgkQAJgmAIgJQAHgJAMgCQAMgCAIAHQADADAMAPQAKANAWANQAIAEACAJQACAIgEAHQgHAOgPgDIAaAfQATAlgjAcAgRAYIgLAhIA2AXQAFACACAEQACAEgBAFQgFAPgMgEQgugOgSgFAg3CIQgFgbANgW");
	this.shape.setTransform(7.0093,14.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,15.1,29.2);


(lib.mhsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mh.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABKgKIAjAAQANABAGgMIAAgBQADgIgEgIQgFgIgJgCIgBAAQAAgJgIgHQgHgGgKAAQgOAAgIANQgEgCgGAAQgGAAgFAEQgFAFAAAGIAAADQgGABgEAEQgEAFAAAFQAAAHAEADQAFAGAIAAIAgAAQgBgQgGgQAAsCGIAAgmQABgTAJgPIABgDQAQgcADgfQAAgFAAgFAAOhTQABgGgDgHQgHgLgMgCIAAgBQgBgNgKgJQgKgJgOAAQgVAAgJASQgHgEgFAAQgKAAgGAGQgHAGgBAJIAAAEQgIABgGAGQgFAHgBAIQAAAJAHAFQAHAIALAAIAFAAAg6g6IAuAAQAQAAAIgPIAAgBQACgEAAgFAAqhHQgJgGgLgEQgEgBgEgBQgMgDgMAAQgeAAgVAOQgQAKgIAPQgFALgCAJQgCAKACALQAAAHgDAFIgOAdQgCAEABAEQADAEAFAAIANACIABAXAgxAFQgEAGgHAAQgHAAgDgGAg5BCQgMAIgNgCQgDABgDgBIABAPQgBAIAGAHQAFAEAGgBQABABACgBIAfgCIAAAn");
	this.shape.setTransform(13.3393,14.6737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,27.8,30.4);


(lib.masksvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABbhXQgCARAHATQAKAagHAUQgFAMgLALIAAAGABbhXQAQAAALgDQAmgKgJgXQgDgIgKAAQgMgBgMAMQgQAOgDATgABjgFQABAHAAAIIABAAQACAxghAkQghAjgwACQgwACgkghQgjghgDgwIABgKQAAgEAAgFQADgXAPgUQANgQAigZQANgKAHgEQADgCACgBQAMgGAPAAQAOAAANAHQAFACAJAHQAFADAGAFQAiAaAMAQQAMAQAEATgABTAJIAAAJAg2g7QASgPAVgCQAVADARAOAiEABQgEgEgDgFQgUghAageQAYgcA+ACAhyASQgKgHgIgKAhyASIAAAGAhyAJIAAAJAhCBEIBkAAAhCgGIBkAAAAahaQAnAEAagBAhTAeICGAA");
	this.shape.setTransform(15.3295,13.7273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,31.7,28.5);


(lib.devicessvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// devices.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhGAFIAAA3QAAAFgEADQgDAEgFgBIg2AAQgLAAAAgLIAAh4QgBgEAEgDQADgEAEAAIA3AAQAFAAADAEQAEADAAAEIAABBIDbAAAhzAxIAMAA");
	this.shape.setTransform(15.3469,16.4531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAcBTIBdAAQAHAAAFgFQAFgFAAgHIAAikQAAgHgFgFQgFgFgHAAIjxAAQgHAAgFAFQgFAFAAAHIAABHAAcBTIAFAhAhSBTIBuAA");
	this.shape_1.setTransform(16.45,12.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAIhhAA");
	this.shape_2.setTransform(16.45,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgCAQIAFgg");
	this.shape_3.setTransform(13.425,21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,31.7,25.1);


(lib.crossORsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// crossOR.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAuBqIi1AAQgEgPgBgOQADgkAGgaQAEgUACgSIAGhQQAOgDAPADQAGAAACAHIAFANQACAHADACQAEACAHAAQALgBAIgEQAIgEAHAEQABABAJAEQAGACAFgCQAWgKAMgEQAQgGATAAIBBAAQACAAACACIAHAKQADAEgCAFQgDAMgFAO");
	this.shape.setTransform(14.5,11.0432);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmgSIgaAAIAAgZIgYAAIAAAZIgZAAIAAAYIAZAAIAAAZIAYAAIAAgZIAZAAgAAABeQgSgHgTgQQglgfAAgoIAAhGQAjgWAngBQAoABAjAWIAABGQAAAoglAfQgTAQgTAHg");
	this.shape_1.setTransform(23.775,15.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,32.8,26.2);


(lib.crosshandsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// crosshand.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah5BqIACAAQAKAAAHACIBUAeQAOAEAMgIIBqhAQAGgDACgHQACgHgEgGQgBgCgBAAQgIgKgNAGIgqAXQAAgFgEgEQgEgFgHAAIgBAAIg3AAQgJAAgHgHQgUgRgYABQgTAAgRAJQgDACgFAAAA3hIIggAAIAAghIghAAIAAAhIgiAAIAAAiIAiAAIAAAhIAhAAIAAghIAhAAgABZg3QAAAigZAYQgYAYgjAAQghAAgYgYQgZgYAAgiQAAgjAZgYQAYgYAhAAQAjgBAYAZQAZAYAAAjgAgsBTIBSAAQAHAAAFgEQAFgFAAgHQAAgCAAgB");
	this.shape.setTransform(12.7333,14.4912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,26.5,29.9);


(lib.baby01svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baby-01.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHhEQgTAIgPAQQgOAQgGAUAA+A5QgLANgTgBQgSABgMgN");
	this.shape.setTransform(10.325,13.0784);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah1ghQgIADgFAHQgEAIAAAIQgBAJAHAIQAGAHAKABQAFAAAFgDQAJAjAdAWQAdAVAjgBQAkABAdgWQAdgVAJgjQAEADAGAAQAKgBAGgIQAGgHAAgJQABgKgHgIQgGgHgKgBQgHAAgFAEQgHgVgPgQQgQgQgUgJ");
	this.shape_1.setTransform(14,15.3273);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMAiQAMABAKgKQAKgKABgPQABgNgGgJQgGgKgKgBQgHAAgHAGQgGAGgBAIIAAABQAAAJADAFQADAGAHABQAFAAADgEQAEgEAAgE");
	this.shape_2.setTransform(13.8036,3.8829);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAgHQAIAAAAAHQAAAIgIAAQgHAAAAgIQAAgHAHAAg");
	this.shape_3.setTransform(17.2,13.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAgHQAIAAAAAHQAAAIgIAAQgHAAAAgIQAAgHAHAAg");
	this.shape_4.setTransform(10.75,13.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,28.9,26);


(lib.ICON_circleteal70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,167,181,0.698)").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A9AABTQAABVg8A8Qg8A8hVAAQhUAAg8g8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_circleteal70, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICON_circleblue60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,107,162,0.6)").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A9AABTQAABVg8A8Qg8A8hVAAQhUAAg8g8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_circleblue60, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.HS_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#849F4F").s().p("Ap9EXIAHnRINagKIgCh7IGDgCIAZKDgAFdgfQgVAOgIAYQgGAUAAAZQAAAaAGATQAJAZAVAOQAVAOAgAAQAyAAAeggQADgDgEgCIgZgYQgCgDgEADQgSARgZAAQgfAAgHgZIgDgKQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAIBxAAQAEAAAAgEQAAglgGgUQgIgYgVgOQgVgOgfABQgeAAgVANgAgnAvQgVAQAAAdQAAAdASAPQARAOAaAAQAjAAAQgVIABAAIAAANQAAADAEAAIArAAQADAAAAgDIAAh4QAAgjgSgPQgUgRgtABQgqAAgaASQgDACACADIARAeQACADADgDQAQgKAZAAQAWAAAIAEQAIAHAAANIAAAHQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIghAAQgkAAgUAOgAnMBXIgZAdQgCACACADQAiAdAzAAQAoAAAWgSQAVgRABgeQAAgyg/gGIgUgCQgPgCgGgEQgFgDAAgHQAAgOAYgBQAbAAAXAOQAEADACgDIAVgaQADgDgDgDQgegWguAAQgkgBgVARQgUAQAAAaQAAAzA9AHIAVABQAQACAGAEQAFAEAAAHQAAASgdAAQgfAAgagVIgDgBIgDABgACfgkIAACyQAAADAEAAIAuAAQAEAAAAgDIAAhjQAAgnAdgCQAMAAAPAJQADABACgCIAWgmQACgEgDgCQgNgLgUABQgjgBgOAYIAAAAIAAgPQAAgFgEAAIguAAQgEAAAAAFgAieAiIAABsQAAADAEAAIAuAAQAEAAAAgDIAAh2QAAgegRgTQgRgUgeABQghAAgPAUIgBAAIAAhZQAAgDgEAAIguAAQgEAAAAADIAAD/QAAADAEAAIAuAAQAEAAAAgDIAAhsQAAgPAIgKQAIgJAOAAQAdAAAAAig");
	this.shape.setTransform(25.025,83.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#849F4F").s().p("AgeABQAAgVAgAAIAaAAQABABABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAANQAAAZgiAAQgbgBAAgTg");
	this.shape_1.setTransform(27.15,92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#849F4F").s().p("AgeATQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgGACgIQAHgTAXgBQAZABAGATQACAGAAAIQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_2.setTransform(65.075,85.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2788A3").s().p("AqIk4IUcAvIAII0I03AOgAhWAjQgVAQAAAeQgBAdAUAPQAQAOAbAAQAkAAAPgVIAAANQAAADAEAAIArAAQAEAAAAgDIAAh5QAAgjgSgPQgUgRgsAAQgrAAgcATQgCACACADIARAfQACACADgBQARgMAZAAQAWAAAIAGQAHAGAAAMIAAAHQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIghAAQgjAAgVAOgAkagrQgVAOgIAZQgHATAAAZQAAAXAHAWQAIAaAWAOQAVAOAgAAQAzAAAdggQADgDgDgCIgagYQgCgDgDADQgSAQgZAAQgfAAgIgYQgCgDgBgIQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIBxAAQAFAAAAgEQAAgmgGgTQgJgZgUgOQgWgOgfAAQgeAAgVAOgADcgxIAAAhQAAAEAFAAIALAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABUQAAAhAOAPQAOAPAgAAIAUAAQAEAAABgEIAAgnQgBgDgEAAIgJAAQgJAAgDgEQgFgFAAgKIAAhSQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAYAAQAEAAABgEIAAghQgBgDgEAAIgYAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgyQAAgEgDAAIguAAQgFAAAAAEIAAAyQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgLAAQgFAAAAADgABth9IAADKQAAAfANAPQAOAOAfAAIAVAAQADAAAAgEIAAgnQAAgDgDAAIgIAAQgRAAAAgSIAAjGQAAgEgEAAIgvAAQgDAAAAAEgAHggBQAIAIAAAQIAABsQAAADADAAIAvAAQAEAAAAgDIAAh3QAAgegRgTQgQgUgfAAQghAAgQAWIAAAAIAAhaQAAgEgEAAIguAAQgFAAAAAEIAAEAQAAADAFAAIAuAAQAEAAAAgDIAAhsQAAgQAIgIQAIgKAOAAQAOAAAHAKgAmpgBQAHAIAAAQIAABsQAAADAFAAIAuAAQAEAAAAgDIAAh3QAAgegRgTQgRgUgfAAQghAAgPAWIAAhaQAAgEgEAAIgvAAQgDAAAAAEIAAEAQAAADADAAIAvAAQAEAAAAgDIAAhsQAAgQAIgIQAHgKAOAAQAOAAAIAKg");
	this.shape_3.setTransform(-21.95,31.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2788A3").s().p("AgeABQAAgVAgAAIAbAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAANQAAAZgiAAQgbgBAAgTg");
	this.shape_4.setTransform(-24.5,39.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2788A3").s().p("AgeASQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgGADgIQAHgUAXAAQAYAAAIAUQACAIAAAGQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-45.05,31.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2788A3").s().p("AJdAwIAcgBQABAJANAAQAPABAAgNIAAgIQgIAFgMAAQgRAAgLgMQgKgLAAgSQAAgSAKgLQALgMARAAQANAAAIAHIAAgFIAaAAIAABRQAAARgLALQgLAKgTAAQgmAAgFgggAJ4AAQAAASAPAAQAHgBAEgEQAEgEAAgIIAAgCQAAgHgEgFQgFgEgGAAQgPAAAAARgALLAdQgMgLAAgSQAAgSAMgLQAMgMATAAQATAAAMAMQAMALAAASQAAASgMALQgMAMgTAAQgTAAgMgMgALbAAQAAASAPAAQAPAAAAgSQAAgRgPAAQgPAAAAARgAILAeQgLgLAAgTQAAgSALgLQAMgMASAAQASAAAKAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgKAHQgLAHgOAAQgTAAgMgLgAI0gIQgBgMgKAAQgLAAgBAMIAXAAIAAAAgAFOAZQgRgQAAgaQAAgaARgRQAQgQAbAAQAbAAARAQQARARAAAaQAAAagRAQQgRAQgbAAQgbAAgQgQgAFjgpQgIAJAAAPQAAAPAIAJQAIAIAOAAQAOAAAIgIQAJgJAAgPQAAgPgJgJQgIgIgOgBQgOABgIAIgACHAdQgMgLAAgSQAAgSAMgLQAMgMATAAQATAAAMAMQAMALAAASQAAASgMALQgMAMgTAAQgTAAgMgMgACXAAQAAASAPAAQAPAAAAgSQAAgRgPAAQgPAAAAARgAAJAeQgLgLAAgTQAAgSALgLQALgMATAAQARAAALAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgLAHQgKAHgPAAQgTAAgLgLgAAygIQgBgMgLAAQgKAAgBAMIAXAAIAAAAgAiVASQAAgWAigCIAJAAIAAgEQAAgIgGAAQgHAAAAAHIgcgBQAAgLAJgJQAKgJAQAAQAiAAAAAhIAAAvIgaAAIAAgFQgHAHgMAAQgaAAAAgXgAh6AQQAAAFAHAAQAEAAACgCQADgDAAgDIAAgEIgHAAQgJABAAAGgAlOAfQgNgKAAgTIAegBQAAAGAFAEQAFAFAHAAQANgBAAgIQAAgHgTgFQgTgFgIgGQgLgHAAgQQAAgQAKgJQALgMAUAAQAUAAAMALQAMAJABASIgeABQAAgNgOAAQgMAAAAAKQAAAEAEACQADADAMADQATAEAIAHQALAJAAANQAAASgMAKQgMAIgTAAQgVAAgNgKgAoUANIAAgdIgOAAIAAgXIAOAAIABgZIAbAAIAAAZIARAAIAAAXIgRAAIAAAWQAAALALAAIAGgBIAAAYIgNABQggAAAAgcgAqjASQAAgWAigCIAKAAIAAgEQAAgIgHAAQgHAAAAAHIgcgBQAAgLAJgJQAKgJAQAAQAiAAAAAhIAAAvIgaAAIAAgFQgHAHgMAAQgaAAAAgXgAqIAQQAAAFAHAAQAEAAACgCQADgDAAgDIAAgEIgHAAQgJABAAAGgAr0AeQgLgLAAgTQAAgSALgLQALgMATAAQARAAALAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgLAHQgKAHgOAAQgTAAgMgLgArLgIQgBgMgKAAQgLAAgBAMIAXAAIAAAAgANWAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAhOIAaAAIAAAFQAGgHAOAAQAOAAAIAIQAJAJAAAPIAAAwgAHGAnIAAhOIAbAAIAAAGQAHgHAOAAIAAAbQgJAAgGAFQgFAEAAAGIAAAlgADlAnIAAg3IgOAAIAAgXIAOAAIAAgFQAAgQAKgKQAKgJAQAAIAJAAIAAAZIgGgBQgFAAgDADQgDADAAAEIAAAGIARAAIAAAXIgRAAIAAA3gAg7AnIAAhOIAbAAIAAAGQAGgHAPAAIAAAbQgKAAgFAFQgFAEAAAGIAAAlgAjAAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAh1IAcAAIAAArQAGgGAMAAQAOAAAIAIQAJAJAAAPIAAAwgAmnAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAh1IAcAAIAAArQAHgGALAAQAOAAAIAIQAJAJAAAPIAAAwgApJAnIAAh1IAcAAIAAB1gAstAnIAAgsIgmAAIAAAsIgeAAIAAhwIAeAAIAAAqIAmAAIAAgqIAeAAIAABwg");
	this.shape_6.setTransform(0.175,134.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HS_logo, new cjs.Rectangle(-88.7,0,177.5,143), null);


(lib.HEAD5type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgJAKQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(137.55,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgVBBQgHgEgGgHQgGgGgDgJQgEgKAAgMQAAgMAEgHQADgKAGgHQAGgHAHgDQAIgEAJABQAJAAAIADQAIAEAGAIIAAgyIAVAAIAACFIgVAAIAAgOQgGAIgIADQgIAFgJAAQgJAAgIgDgAgRgFQgIAIABAOQAAAIABAFQACAGAEAFQADADAGADQAEACAGABQAHAAAHgFQAHgDAEgGIAAglQgEgGgHgDQgHgEgHAAQgMAAgHAJg");
	this.shape_1.setTransform(129.7,13.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(119.325,15.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_3.setTransform(108.875,15.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_4.setTransform(98.325,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgiAqQgIgIAAgPIAAhEIAVAAIAAA8QAAAMAFAEQAFAEAJAAQAHAAAHgEQAGgEAEgFIAAhDIAVAAIAABgIgVAAIAAgMQgFAFgJAFQgIAFgLgBQgQAAgHgHg");
	this.shape_5.setTransform(83.225,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgUAvQgJgEgGgHQgHgHgDgJQgEgKAAgKQAAgKAEgJQADgJAHgHQAGgHAJgEQAKgEAKAAQAMAAAJAEQAJAEAGAHQAHAHADAJQAEAJAAAKQAAAKgEAKQgDAJgHAHQgGAHgJAEQgJAEgMAAQgKAAgKgEgAgLgdQgFADgEAEQgDAFgCAGQgCAFAAAGQAAAGACAGQACAGADAEQAEAFAFADQAFACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGQACgGAAgGQAAgGgCgFQgCgGgDgFQgEgEgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_6.setTransform(72.525,15.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgiBEIgGgBIADgTIAEABIAEAAQAFAAAEgBQADgCACgFIAFgLIgohhIAXAAIAbBIIAchIIAXAAIgvBxQgEANgIAEQgJAFgLAAIgGAAg");
	this.shape_7.setTransform(62.475,17.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_8.setTransform(48.125,15.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AgZAyIAAhgIAVAAIAAAOQAEgHAIgFQAJgEAJAAIAAAUIgGAAIgHABIgHACIgGAFIgEAEIAABCg");
	this.shape_9.setTransform(40.275,15.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgUAxQgGgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgEAFgEQAFgEAGgCQAGgCAGAAQAIAAAJADQAIADAFAGIAAgOQAAgIgGgFQgHgFgJAAQgQAAgMAMIgJgOQAIgIALgEQAKgEALAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAKIAAA/IgVAAIAAgKQgGAGgIADQgIAEgIAAQgGAAgGgCgAgPAGQgGAFAAAIQAAAIAGAFQAGAEAJAAQAGAAAGgCQAGgDAEgFIAAgOQgEgFgGgDQgGgCgGAAQgJAAgGAEg");
	this.shape_10.setTransform(31.375,15.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AgNAvQgJgEgHgHQgGgGgEgKQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgEQAKgEAJAAQAPAAAJAFQAJAFAEAHIgNANQgJgLgOAAQgGAAgFACQgFADgEAEQgDAEgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAEAEAFADQAFACAGAAQAOAAAJgLIANANQgEAHgJAFQgJAFgPAAQgJAAgKgEg");
	this.shape_11.setTransform(22.15,15.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_12.setTransform(7.725,15.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AAWBDIAAg9QAAgKgFgFQgGgEgIAAQgHAAgHAEQgGAEgEAFIAABDIgVAAIAAiFIAVAAIAAAyIAGgFIAIgFIAIgEQAFgBAGAAQAQAAAHAIQAIAHAAAPIAABEg");
	this.shape_13.setTransform(-2.825,13.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_14.setTransform(-10.975,14.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_15.setTransform(-21.125,14.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_16.setTransform(-29.225,15.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E6B").s().p("AgXBCQgJgDgKgIIAKgQQAGAIAIACQAHADAKAAQAEAAAFgCQAFgBAFgDQAEgDACgFQACgFABgHIAAgMQgGAIgIAEQgIAEgJAAQgJAAgIgDQgIgEgFgFQgGgHgDgJQgDgIAAgMQAAgMADgKQADgIAGgHQAFgGAIgDQAIgEAJAAQAJAAAHAEQAIAEAHAIIAAgOIAUAAIAABbQAAANgEAIQgEAJgIAFQgHAFgIACQgJACgIAAQgNAAgJgDgAgRgpQgIAIAAAPQAAAOAIAHQAHAIALAAIAIgBIAHgCIAGgFIAFgDIAAgkIgFgGIgGgDIgHgEIgIgBQgLAAgHAJg");
	this.shape_17.setTransform(-40.2,17.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E6B").s().p("AgUAvQgJgEgGgHQgHgHgDgJQgEgKAAgKQAAgKAEgJQADgJAHgHQAGgHAJgEQAKgEAKAAQAMAAAJAEQAJAEAGAHQAHAHADAJQAEAJAAAKQAAAKgEAKQgDAJgHAHQgGAHgJAEQgJAEgMAAQgKAAgKgEgAgLgdQgFADgEAEQgDAFgCAGQgCAFAAAGQAAAGACAGQACAGADAEQAEAFAFADQAFACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGQACgGAAgGQAAgGgCgFQgCgGgDgFQgEgEgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_18.setTransform(-55.175,15.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_19.setTransform(-63.375,14.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_20.setTransform(-75.925,15.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E6B").s().p("AAxAyIAAg+QAAgJgEgEQgEgFgIAAQgHAAgGAEQgGAEgDAFIAABDIgUAAIAAg+QAAgJgEgEQgEgFgJAAQgGAAgGAEQgGAEgEAFIAABDIgVAAIAAhgIAVAAIAAANIAFgFIAHgFIAJgEQAFgBAGAAQALAAAFAEQAHAFACAJIAGgHQADgEAEgCIAJgEQAFgBAGAAQANAAAHAGQAIAIAAAPIAABFg");
	this.shape_21.setTransform(-89.125,15.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E6B").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_22.setTransform(-99.15,13.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_23.setTransform(-104.025,14.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E6B").s().p("AgVAvQgLgEgIgHIAKgPIAGAFIAIAEIAJADIAIABQAKAAAFgEQAFgDAAgGQgBgFgEgCQgEgDgGgBIgOgDQgHgCgGgDQgHgCgEgGQgFgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQANAAAJAEQAJAEAHAGIgJAPQgFgFgHgEQgIgDgJAAQgHAAgFADQgFAEAAAFQAAAEAFACIAKAEIAOADIANAFQAHADAEAFQAFAGAAAKQAAAGgDAGQgCAFgFAEQgGAEgHACQgIADgKAAQgLAAgKgEg");
	this.shape_24.setTransform(-115.85,15.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003E6B").s().p("AgMASIAEgDIAFgFIADgFIABgFIgBAAIgCAAQgFAAgDgCQgEgEABgFQAAgGADgEQAEgEAGAAQAFAAAFAEQAEAFABAJQAAAJgGAJQgFAJgHAGg");
	this.shape_25.setTransform(-122.15,9.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_26.setTransform(-127.125,14.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003E6B").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_27.setTransform(-132.275,13.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD5type, new cjs.Rectangle(-147,0,294,28.4), null);


(lib.HEAD4type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgJAKQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(118.45,47.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgVAvQgLgEgIgHIAKgPIAGAFIAIAEIAJADIAIABQAKAAAFgEQAFgDAAgGQgBgFgEgCQgEgDgGgBIgOgDQgHgCgGgDQgHgCgEgGQgFgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQANAAAJAEQAJAEAHAGIgJAPQgFgFgHgEQgIgDgJAAQgHAAgFADQgFAEAAAFQAAAEAFACIAKAEIAOADIANAFQAHADAEAFQAFAGAAAKQAAAGgDAGQgCAFgFAEQgGAEgHACQgIADgKAAQgLAAgKgEg");
	this.shape_1.setTransform(111.85,43.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AAxAyIAAg+QAAgJgEgEQgEgFgIAAQgHAAgGAEQgGAEgDAFIAABDIgUAAIAAg+QAAgJgEgEQgEgFgJAAQgGAAgGAEQgGAEgEAFIAABDIgVAAIAAhgIAVAAIAAANIAFgFIAHgFIAJgEQAFgBAGAAQALAAAFAEQAHAFACAJIAGgHQADgEAEgCIAJgEQAFgBAGAAQANAAAHAGQAIAIAAAPIAABFg");
	this.shape_2.setTransform(99.625,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgUAxQgGgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgEAFgEQAFgEAGgCQAGgCAGAAQAIAAAJADQAIADAFAGIAAgOQAAgIgGgFQgHgFgJAAQgQAAgMAMIgJgOQAIgIALgEQAKgEALAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAKIAAA/IgVAAIAAgKQgGAGgIADQgIAEgIAAQgGAAgGgCgAgPAGQgGAFAAAIQAAAIAGAFQAGAEAJAAQAGAAAGgCQAGgDAEgFIAAgOQgEgFgGgDQgGgCgGAAQgJAAgGAEg");
	this.shape_3.setTransform(86.375,43.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AAZAwIgZgjIgYAjIgYAAIAkgwIgigvIAYAAIAWAgIAXggIAYAAIgiAvIAkAwg");
	this.shape_4.setTransform(77.05,43.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_5.setTransform(67.225,43.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgJBDIAAiFIATAAIAACFg");
	this.shape_6.setTransform(55.5,42.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgUAxQgGgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgEAFgEQAFgEAGgCQAGgCAGAAQAIAAAJADQAIADAFAGIAAgOQAAgIgGgFQgHgFgJAAQgQAAgMAMIgJgOQAIgIALgEQAKgEALAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAKIAAA/IgVAAIAAgKQgGAGgIADQgIAEgIAAQgGAAgGgCgAgPAGQgGAFAAAIQAAAIAGAFQAGAEAJAAQAGAAAGgCQAGgDAEgFIAAgOQgEgFgGgDQgGgCgGAAQgJAAgGAEg");
	this.shape_7.setTransform(48.175,43.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_8.setTransform(40.625,42.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_9.setTransform(32.425,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_10.setTransform(21.875,43.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("Ag7BDIAAiFIAyAAQAPAAANAFQAMAFAKAJQAJAJAFAMQAFANAAANQAAAPgFAMQgFAMgJAJQgKAJgMAFQgNAFgPAAgAgjAuIAaAAQAKAAAIgDQAJgEAGgGQAGgHADgIQADgIAAgKQAAgIgDgJQgDgIgGgHQgGgGgIgDQgJgEgKAAIgaAAg");
	this.shape_11.setTransform(10.175,42.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD4type, new cjs.Rectangle(-155.5,0,305,56.7), null);


(lib.HEAD3type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgJAKQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(-3.8,47.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgWAvQgKgEgIgHIAKgPIAGAFIAIAEIAJADIAIABQAKAAAFgEQAFgDgBgGQAAgFgDgCQgFgDgGgBIgOgDQgHgCgHgDQgGgCgFgGQgEgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQAMAAAKAEQAJAEAHAGIgJAPQgFgFgHgEQgHgDgKAAQgHAAgFADQgEAEgBAFQAAAEAEACIAMAEIAMADIAPAFQAGADAEAFQAFAGAAAKQAAAGgDAGQgDAFgFAEQgEAEgIACQgHADgLAAQgLAAgLgEg");
	this.shape_1.setTransform(-10.4,43.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_2.setTransform(-19.975,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgUAvQgJgEgGgHQgHgHgDgJQgEgKAAgKQAAgKAEgJQADgJAHgHQAGgHAJgEQAKgEAKAAQAMAAAJAEQAJAEAGAHQAHAHADAJQAEAJAAAKQAAAKgEAKQgDAJgHAHQgGAHgJAEQgJAEgMAAQgKAAgKgEgAgLgdQgFADgEAEQgDAFgCAGQgCAFAAAGQAAAGACAGQACAGADAEQAEAFAFADQAFACAGAAQAHAAAFgCQAFgDAEgFQADgEACgGQACgGAAgGQAAgGgCgFQgCgGgDgFQgEgEgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_3.setTransform(-30.675,43.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AgKBDIAAhfIAUAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_4.setTransform(-38.1,42.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_5.setTransform(-42.975,42.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgUAxQgGgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgEAFgEQAFgEAGgCQAGgCAGAAQAIAAAJADQAIADAFAGIAAgOQAAgIgGgFQgHgFgJAAQgQAAgMAMIgJgOQAIgIALgEQAKgEALAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAKIAAA/IgVAAIAAgKQgGAGgIADQgIAEgIAAQgGAAgGgCgAgPAGQgGAFAAAIQAAAIAGAFQAGAEAJAAQAGAAAGgCQAGgDAEgFIAAgOQgEgFgGgDQgGgCgGAAQgJAAgGAEg");
	this.shape_6.setTransform(-51.125,43.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AglAwIAAgQIAug9IguAAIAAgSIBKAAIAAAPIguA+IAvAAIAAASg");
	this.shape_7.setTransform(-60.25,43.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgKBDIAAhfIAVAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_8.setTransform(-66.7,42.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_9.setTransform(-74.075,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgiAqQgIgIAAgPIAAhEIAVAAIAAA8QAAAMAFAEQAFAEAJAAQAHAAAHgEQAGgEAEgFIAAhDIAVAAIAABgIgVAAIAAgMQgFAFgJAFQgIAFgLgBQgQAAgHgHg");
	this.shape_10.setTransform(-84.725,44.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AAxAyIAAg+QAAgJgEgEQgEgFgIAAQgHAAgGAEQgGAEgDAFIAABDIgUAAIAAg+QAAgJgEgEQgEgFgJAAQgGAAgGAEQgGAEgEAFIAABDIgVAAIAAhgIAVAAIAAANIAFgFIAHgFIAJgEQAFgBAGAAQALAAAFAEQAHAFACAJIAGgHQADgEAEgCIAJgEQAFgBAGAAQANAAAHAGQAIAIAAAPIAABFg");
	this.shape_11.setTransform(-98.025,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AAxAyIAAg+QAAgJgEgEQgEgFgIAAQgHAAgGAEQgGAEgDAFIAABDIgUAAIAAg+QAAgJgEgEQgEgFgJAAQgGAAgGAEQgGAEgEAFIAABDIgVAAIAAhgIAVAAIAAANIAFgFIAHgFIAJgEQAFgBAGAAQALAAAFAEQAHAFACAJIAGgHQADgEAEgCIAJgEQAFgBAGAAQANAAAHAGQAIAIAAAPIAABFg");
	this.shape_12.setTransform(-113.975,43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_13.setTransform(-124.225,42.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3type, new cjs.Rectangle(-155.5,0,305,56.7), null);


(lib.HEAD2type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgJAKQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(132.05,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgVAvQgLgEgIgHIAKgPIAGAFIAIAEIAJADIAJABQAJAAAFgEQAFgDAAgGQAAgFgFgCQgEgDgHgBIgNgDQgHgCgGgDQgHgCgEgGQgFgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQANAAAJAEQAJAEAHAGIgJAPQgFgFgHgEQgIgDgJAAQgHAAgFADQgFAEAAAFQABAEAEACIAKAEIAOADIANAFQAHADAEAFQAFAGAAAKQAAAGgDAGQgDAFgEAEQgGAEgHACQgIADgKAAQgLAAgKgEg");
	this.shape_1.setTransform(125.45,15.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AgHA4QgGgGAAgMIAAg3IgQAAIAAgSIAQAAIAAgbIAUAAIAAAbIATAAIAAASIgTAAIAAAyQAAAFACADQACADAFAAIAFgBIAEgCIAFAQIgHAEQgFACgIAAQgLAAgGgHg");
	this.shape_2.setTransform(118.375,14.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgJBDIAAhfIATAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(113.45,13.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AgVAvQgLgEgIgHIAKgPIAGAFIAIAEIAJADIAIABQAKAAAFgEQAFgDAAgGQgBgFgEgCQgEgDgGgBIgOgDQgHgCgGgDQgHgCgEgGQgFgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQANAAAJAEQAJAEAHAGIgJAPQgEgFgIgEQgIgDgJAAQgHAAgFADQgFAEAAAFQAAAEAFACIALAEIANADIANAFQAHADAEAFQAFAGAAAKQAAAGgDAGQgCAFgFAEQgGAEgHACQgIADgKAAQgLAAgKgEg");
	this.shape_4.setTransform(106.9,15.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgKBDIAAhfIAUAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_5.setTransform(100.6,13.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgKAwIgohfIAXAAIAbBHIAchHIAXAAIgoBfg");
	this.shape_6.setTransform(93.875,15.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgUBBQgJgEgFgHQgGgGgDgJQgDgKgBgMQABgMADgHQADgKAFgHQAGgHAJgDQAHgEAKABQAHAAAJADQAIAEAFAIIAAgyIAWAAIAACFIgWAAIAAgOQgFAIgIADQgIAFgIAAQgKAAgHgDgAgSgFQgGAIgBAOQABAIACAFQABAGAEAFQAEADAEADQAGACAEABQAIAAAHgFQAHgDADgGIAAglQgDgGgHgDQgHgEgIAAQgLAAgIAJg");
	this.shape_7.setTransform(79,13.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgKBDIAAiFIAUAAIAACFg");
	this.shape_8.setTransform(71.8,13.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AgJBDIAAhfIAUAAIAABfgAgIgsQgEgEAAgFQAAgGAEgDQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_9.setTransform(67.7,13.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AAWBDIAAg9QAAgKgFgFQgGgEgIAAQgHAAgHAEQgGAEgEAFIAABDIgVAAIAAiFIAVAAIAAAyIAGgFIAIgFIAIgEQAFgBAGAAQAQAAAHAIQAIAHAAAPIAABEg");
	this.shape_10.setTransform(60.325,13.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AgNAvQgJgEgHgHQgGgGgEgKQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgEQAKgEAJAAQAPAAAJAFQAJAFAEAHIgNANQgJgLgOAAQgGAAgFACQgFADgEAEQgDAEgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAEAEAFADQAFACAGAAQAOAAAJgLIANANQgEAHgJAFQgJAFgPAAQgJAAgKgEg");
	this.shape_11.setTransform(50.5,15.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AgXAJIAAgRIAvAAIAAARg");
	this.shape_12.setTransform(43.1,15.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AgKBDIAAiFIAUAAIAACFg");
	this.shape_13.setTransform(38.4,13.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AgKBDIAAiFIAVAAIAACFg");
	this.shape_14.setTransform(34.3,13.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_15.setTransform(27.025,15.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E6B").s().p("AAaBDIgahiIgZBiIgZAAIgmiFIAaAAIAaBmIAchmIARAAIAcBmIAahmIAaAAIgmCFg");
	this.shape_16.setTransform(13.1,13.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2type, new cjs.Rectangle(-152.5,0,305,56.7), null);


(lib.HEAD1type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgJAKQgEgEAAgFQAAgGAEgDQAEgFAFAAQAGAAAEAFQAEADAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(4.7,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgVAvQgLgEgIgHIAKgPIAGAFIAIAEIAJADIAJABQAJAAAFgEQAFgDAAgGQAAgFgFgCQgEgDgHgBIgNgDQgHgCgGgDQgHgCgEgGQgFgFAAgJQAAgGACgGQADgFAFgEQAFgEAHgCQAHgDAIAAQANAAAJAEQAJAEAHAGIgJAPQgFgFgHgEQgIgDgJAAQgHAAgFADQgFAEAAAFQABAEAEACIAKAEIAOADIANAFQAHADAEAFQAFAGAAAKQAAAGgDAGQgDAFgEAEQgGAEgHACQgIADgKAAQgLAAgKgEg");
	this.shape_1.setTransform(-1.9,15.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AgvBEIAAiFIAWAAIAAAOQAFgIAIgEQAIgEAIAAQAKAAAIAEQAIADAFAHQAGAGADAJQADAKABAMQgBAMgDAIQgDAJgGAHQgFAGgIAEQgIADgKAAQgIAAgIgEQgHgEgGgHIAAAygAgIgwIgHAEIgGADIgEAGIAAAlIAEAFIAGAEIAHADIAHABQAMAAAIgJQAGgIAAgOQAAgHgBgHQgCgFgEgFQgDgEgFgCQgGgCgFgBIgHABg");
	this.shape_2.setTransform(-11.25,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgiAqQgIgIAAgPIAAhEIAVAAIAAA8QAAAMAFAEQAFAEAJAAQAHAAAHgEQAGgEAEgFIAAhDIAVAAIAABgIgVAAIAAgMQgFAFgJAFQgIAFgLgBQgQAAgHgHg");
	this.shape_3.setTransform(-22.325,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AATBDIgdgoIgNAOIAAAaIgVAAIAAiFIAVAAIAABTIApguIAaAAIgoArIApA1g");
	this.shape_4.setTransform(-31.875,13.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgNAvQgJgEgGgHQgHgGgDgKQgFgJAAgLQAAgKAFgJQADgKAHgGQAGgHAJgEQAKgEAKAAQAOAAAIAFQAJAFAGAHIgOANQgJgLgNAAQgHAAgFACQgFADgEAEQgEAEgBAGQgCAGAAAGQAAAHACAGQABAGAEAEQAEAEAFADQAFACAHAAQANAAAJgLIAOANQgGAHgJAFQgIAFgOAAQgKAAgKgEg");
	this.shape_5.setTransform(-41.9,15.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgRAvQgJgEgHgGQgHgHgDgJQgEgKAAgLQAAgKADgJQAEgJAHgHQAGgHAJgEQAJgEAKAAQALAAAIAEQAJAEAGAHQAHAHADAKQADAJAAALIAAAFIhJAAQAAAFADAFQACAFAEAEQAEADAFACQAGADAGAAQAHAAAHgDQAIgDAFgFIAKAOQgIAHgKADQgKAEgMAAQgJAAgKgEgAgKgeQgFACgDAEQgDADgCAFIgCAJIA1AAIgCgJQgBgEgEgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_6.setTransform(-51.875,15.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AAWBDIAAg9QAAgKgFgFQgGgEgIAAQgHAAgHAEQgGAEgEAFIAABDIgVAAIAAiFIAVAAIAAAyIAGgFIAIgFIAIgEQAFgBAGAAQAQAAAHAIQAIAHAAAPIAABEg");
	this.shape_7.setTransform(-62.425,13.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgNAvQgJgEgHgHQgGgGgEgKQgDgJAAgLQAAgKADgJQAEgKAGgGQAHgHAJgEQAKgEAJAAQAPAAAIAFQAJAFAGAHIgOANQgIgLgOAAQgHAAgFACQgFADgEAEQgDAEgCAGQgDAGAAAGQAAAHADAGQACAGADAEQAEAEAFADQAFACAHAAQAOAAAIgLIAOANQgGAHgJAFQgIAFgPAAQgJAAgKgEg");
	this.shape_8.setTransform(-72.25,15.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AgJBDIAAiFIAUAAIAACFg");
	this.shape_9.setTransform(-83.5,13.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgUAxQgGgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgEAFgEQAFgEAGgCQAGgCAGAAQAIAAAJADQAIADAFAGIAAgOQAAgIgGgFQgHgFgJAAQgQAAgMAMIgJgOQAIgIALgEQAKgEALAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAKIAAA/IgVAAIAAgKQgGAGgIADQgIAEgIAAQgGAAgGgCgAgPAGQgGAFAAAIQAAAIAGAFQAGAEAJAAQAGAAAGgCQAGgDAEgFIAAgOQgEgFgGgDQgGgCgGAAQgJAAgGAEg");
	this.shape_10.setTransform(-90.825,15.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AgiAqQgIgIAAgPIAAhEIAVAAIAAA8QAAAMAFAEQAFAEAJAAQAHAAAHgEQAGgEAEgFIAAhDIAVAAIAABgIgVAAIAAgMQgFAFgJAFQgIAFgLgBQgQAAgHgHg");
	this.shape_11.setTransform(-100.875,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_12.setTransform(-111.525,15.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AAWAyIAAg8QAAgLgFgFQgGgEgIAAQgIAAgGAEQgHAEgDAFIAABDIgVAAIAAhgIAVAAIAAANIAGgFIAHgGIAJgDIALgBQAPAAAIAIQAIAHAAAPIAABEg");
	this.shape_13.setTransform(-122.175,15.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AAoBDIgJgaIg9AAIgJAaIgbAAIA0iFIAdAAIA0CFgAgXAVIAvAAIgYg/g");
	this.shape_14.setTransform(-133.9,13.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1type, new cjs.Rectangle(-152.5,0,305,56.7), null);


(lib.CO_v_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101E28").s().p("AgyA1QgXgVAAggQAAgeAWgVQAVgWAeAAQAfAAAWAXQAVAVgBAdQAAAfgVAVQgVAVgfABQgdgBgVgUgAgvgvQgTAUAAAbQAAAcATAUQAUATAbAAQAcAAATgTQATgTABgdQAAgbgTgTQgUgUgcAAQgbAAgUATgAASAuQgCgDgCgKIgCgPQgCgIgFgEQgEgCgJAAIgGAAIAAAqIgRAAIAAhcIAfAAQAPAAAFACQAPAFAAARQAAAQgTAGQAGABADAEQADAEABAJQAEAVADAHgAgOgIIAOAAQATAAAAgNQAAgIgHgDQgDgBgMAAIgLAAg");
	this.shape.setTransform(133.817,86.6327,0.4949,0.4949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8732B").s().p("ACmLBQgKgEgNACQgPADgIAAQAAgDgKgCIgOgBQgRABgHgCQAAgDgSACQgjgBAAgBIgUgCIgTgBQgLgCgHAAQAAgBgQABQgRABAAgDIgOgEQgJgDAAAHQgDAAgFgDQgEgDgDAAQAAAFgJgBIgNgDQgNgCgLACQgRACgYgKIgJgEQgEgCgEABQgCAAgIgEQgIgFAAgBIgMABIgMABQgIACgFgBQgDAAgDgEQgEgFgDAAIAAAEQgEAAgEgCQgGgDAAgEQgCAGgBAAQAAgDgIgDQgIgCgFAAIgBABQgBAAAAAAQAAgBAAABQgBAAAAAAQAAAAAAAAQgDABgFgEQgEgDgEABQgEABAAgDIgIgGQgHgFAAAEQgCABgMgFQgNgGAAgCIgTgJQgBABAAAAQgBABAAAAQAAABAAAAQAAAAABAAIgEABIAAAAIgEAAIAEAAQABADgQgGQgCgDgFAAQAAgGgDgCIAAAGIgFgDQgGgDAAADIgIgIIgOgCQAAgCgNgGQgNgGAAgCQgKgEgDgKQgBgDgJgBIgOgCQgTgKgBABQgEgCgCABIABgDQgCAAgQgKQgLgIgDgIIgLgDQgCgCgBgDQgBgBgFAAIgDgHIgCgHQgEgBgCACQgCACgCAAQgBgLgTAAQgPAAAAgBIgNgBIgMgBQgSAFgHgCQAAgBgYgBQgaAAgDgBQAAACgJgCIgNgDQgLAFgDgEQgNgEgCABQAAABgGAAIgHgBIgJgCQgDgCgFAAIgOABQAAABgOgEQgGAAgFgHQgCgBgNABIgMAAQgEABgcgDQgcgDAAgBIgJgDQgGgCgDAAIgXgDQgDgEgbgGQgagHAAgBQgCAAgEgCQgDgDgDABQgOACAAgEQgJgEgPAAQAAgFgKgBQgNgBgBgBQgLgFgFgDQgHgGgQgDIgYgEQgDgDgDABIgHACIgGgDIgHgCQAAgEgJgBQgJgBgCgFIAJgCQgBgEgMgEQgMgFAAACIgSgJQgFAAgIgGIgLgHIgMgEIgNgBIAVAVQAAADAHAGQAHAGABAEQADACAGAHQAGAGAEABQAKADAEAHQADAAAHADIAKAFIAHAEQAHAEAAACQAFAAAHADQAGADAEAAIAEACQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAFABAGAGQACAFAWAEQAVAEAAADIAYAKQADAAAGADQAFAEAEAAQACgBATAGIATAFQADAAAIAEQAGAEAEgBQAEgBAJAEQAKAEADAAQAAgBARAEIAVAFQAEAAAJACIANAEQAAABAOACIAQABQAAAFBNAGQADADAjADQAiAEAAABQBPAIAAgBQADgBAkAEQAiAEAAgBQAIgBAAABQgGAAgMAGQgOAGgFABIgMgCQgLgCAAADIgGABQgDABgDgBQAAAGgUABQgTABAAgDQgQACAAgCIgGACQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgLgBQgDgBgDgGQgDAAgCADQgBABgGAAIgNgBQgXgCgDgCIgFgFIgJABIgMgEQgKgDAAADQgGAAgKgCQgCgGgEABIgJAFQgFADgFgCQAAgCgLgCQgKgCgEABQAAACgWgEIgbgFQAAgCgOgBQgPgBgBgEQgHAAgLgDQgMgDgGgBQgCgCgNgBQgNgBAAgCQgGAAgJgCIgOgEIgNgEQgNgEAAgBIgNgCQgKgCAAgBQgFAAgGgCIgLgFIgDgBIgCgBQgLAAAQALQACACAGACQAGACADADIAKADQAAABAFABIAHABQAAACASADQAAADAaAEQAZAFABAHIgKACQAAgDgXgDQgZgDgCgDIgagHQgVgHAAgDIgZgIQgUgIAAgBQgIgCgKgEQgNgGgFgGIgIgFQgJgEAAABQgCAAgHgFQgIgFAAgCQgKAAgPgHQgRgJgCgJQgPgKgGAAIgIgIQgFgFgDgCIgGgIIgJgFQgGgCAAgDQgGgEgHgIQgHgJgDgGQgDgBgEgHQgFgHAAgCQgDAAgDgJQgDgKgEAAQAAgEgDgGQgEgFAAgFQgBAAgFgTIgGgYIgHgkQgHgjAFAAIgFgVQgBAAgBgLIgBgNQgDAAAAgNQgBgOgCAAIgJhUIAAggQAAgcACAAIgCgjQgBggAEAAIgCgxQgCgsAFgDQAAgEAKgaQALgZgBgEQAIAAAHgOQAHgPAGgCQACgBADgFQACgGADgCQAAgFAGgGQAHgGAHgBIgDgEQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAABAAIAEgCQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAHgHIAKgHIAFAAIAEgCQALgIgHAAQgCgGAFgEQAFgFAFAAIAIgDIAIgCQAKgFAKgJIAQgRQAGgGADgBIAFgDIACgEQACAAAOgLQAAgCANgFQANgGAAgEQAEAAAJgGQAJgHABgDIAOgJQAHgEAIAAQAAgBAGgDIAFgCIAJABQAGACABgDIAXgEQAOgEAAgJQADgBACgEIADgEQABgCAEgDQAEgCABgDIgBAAQAAgFAHACIAJACIARgCIAIgFIAKgEIAJgFQAHgEACAAIAEgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQAFAAAFgCQAHgCAAgDQgHAAAHgHQAHgGAEgBIANgHQAFAAAGgDQAAgDAHgCQAGgCAAgEQAGAAAAADQADAAAEgCIAHgCIAKACQAGABACgDIAOgGQAJgGAEAAQAAgBALgEQAKgDAEAAQAAgCAHAAQAHAAAAgBQAJAAACgCQACgBAAgHIAFgDIAEgEIAJACIgBAFIAEgCIADgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAfAAAHgDQAEgBAGACIAKACQALgGgFAAQgCgJASgGQATgGAAAFQAMgIAZAAQACgDAJAAQAJABACgEIAXgEQAUgEAAgBIABABIAVgFQAWgFADAAQAVAAAAgEIAIgCQAHgBAAgBIAggHIAvgHQAOAAAggFQAggGAQAAQAAgFBQAAQAAABAGACQAHACAAACQgIAFgXgCIgQABIgRABQgJAAgRADQgSADgJAAQAAgChXATQAAAFArgFIAxgGIAugGIAbgDQARgCAJACQAUgDABAKQASAAAAABIAHABQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAABIgIAAQAAADg1ACQAAABgRADIgUACIgTAAQgSAAAAADIgwAHIgSACIgUACQAAADgMACIgQACQgIgBgPAEQgQAFgHAAIgMACQgMACAAACQgEAAgGAEQgHAEgDAAIgJAAIgJgBQAAADgQACQgPADgBADQgCAKgMADQgOABgIACQAAADgTAHQgHAKgHAEQACAIAiABQAfABAHgEQADgCAagEQAXgDAAgCIAMgCIAMgDQAAgBAGABIAHABQARgEAJAAQAAgBAcgDIAcgFQAfgDAAgBIAVgCIAWgCQAAgCAmgCQAngDAFABIApgDQAkgDAAACQAMgCAYACIAcgBQASgBALACQAAADAJACQAJACAAgCIAQABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQADgBAKACQALADAAACQgEACgWABIgVAAIgmABQgCADgWAFQgVAFAAACIgQgBQgPgBAAACIgWAAQAAAFgZABIgegBQAAADglABQglACgBAIQARADAXgDIAngGQAAACAkgCQAjgBAAABQAFAAALgDQAEAAAEACQAFADAEAAIAQgBQAJABgEAGQgFAIghACIghACQhWAFAAADIgTACQgTACAAgCQgGgBgJADQgLADgDAAIgRACQgCACgGAAIgKgBQgGABgJAGQgIAGgGABQAAAFgdAEQAAABgHACQgIADAAABIgTADIgKACQgLACgBACQgRAAgMAMQgGABgKAFQgKAGgGABQAAgBgNAFIgPAFQAAgCgFABQgEAAgCACIAEABQgBADgMACIAAgEIgOAFQAKAIgUAEQgWAEAAACIgTAGQgNAFgGABQAAgCgvAQIgRAGQgRAGgCADQgTAAgDAEQgFAAgHAFQgGAEgFgBQgGAAgFAFQgGAGgFAAQgCgDgFACIgIAEIgKAFQgFACgFABQgBABgLADIgNACQAAAFgJACIgOADQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABgBAAQgCADgEAAQgEAAgCADQgDAEgDACIgDADQgBABgEAAQgBgCgGgBQgFgCAAAEQgFAAgBAFQgDAHgCABQAAADgJAAQgOAJgCAAQAAACgMACQgLADAAAEIgMAGQgIAFAAADQgFABgFAEQgGAEgEABIgGADQgEACgCAAQgRAJgCAAQgEAEgFAAIgQAMQAAADgIAFQgIAEAAADQgGAEgOACQgBAEgEACQgFACgBABQgFAAgEAIQgEAHgDABQgEABgIAHQgIAFgDAAQAAAFgHAEQgIADgBAFQgSALgLANQgEAAgGAGIgIAKQgGAIgFADQgBADgFACQgFACAAAEQgCAAgHAJQgGAIgDAAIABADQgFAAgFAHIgHAKIgIAIIgHAJQgDAHgLANQgJALgBAJQADAAAGgHQAIgJACgBQAGgKAEAAQAAgDAHgFQAGgFABgCQgCAAAKgJIALgJQAGAAAEgJQAEgJADAAIAGgGQAGgFACAAQACgEAHgEIALgHQAAgCAEgFIAHgFIAVgPQADgHAUgGQABgDAJgEQAIgEAAgCQgBgEAGgCIAIgDIAWgOQAEAAAFgFQAGgEADAAIAhgUQAGgCARgIQATgJAAgDQAHgBACgDQAEAAABgDQACgDACAAQAHgCABgCIAIgEQAFgDAAgBIAGgDIAFgDQAAADAMgFQALgFACgDIAHgCQAFgCAAgBQAHgBAOgJQANgIAIAAQADgEAJgCQAIgCADgDQAEAAAGgEQAFgEAEAAQAFgFAIAAIAIgIIAHAAIAGgBIASgHQAAgBAGgCIAHgBQADgEAKgBIALgCQABgCAHgDQAIgEAAgCIAQgDQAAgCALgDQAJgCAEAAQAAgGANgBQANgBACgCIApgMQAhgJAAgFQAEAAASgFQARgGAAgBQAFAAAJgCQAKgCAAgEQAygGAAgEQALAAAQgFQATgHAHgBQAAgBAYgFIAbgFQAAgBAdgGIAhgHQAIgCANgBQAAgBAFgBIAHgBIATgEQAMgDAHABQAAAIgWAFIgeAFQgQAEAAACQgDAAgHAFQgHAFgFgBQAAAAgBgBQAAAAAAAAQAAAAgBAAQgBAAAAAAQAAACgZAIIgHAFQgEADgEAAQgDAEgGABIgMABIgbAJQgQAFgMACIgEADQgEADAAACQgEAAAFAEQAFADAAgEIAMgBQAKgBAAgCQAfAAgQAFIgHAEIgGAGQgCABgHgCQgEgBgCAGQgJgBgIAEQgKAEgIAAQgFAAgHAEQgGAEgEAAQAAAEAGAAIAGgCIAHgCQAAANgmACQgBADgGABQgDACgEgBQgEAAgDABQgBACgPAFQgFAGgSAAQgLABgBAGQgEgBgFACQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgEgCgBABQAAABgFAEIgIAEQgOAFAAACQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIABACIgGACQgEACgCgBQgBAGgKABIgOgBQAHAFgHADQgFACgGAAQAAgBgIAEIgIAEQgDAGgPAAQAAgDgGACIgEADQgBgDgEAFIgEAIIgGgCQgBAAgBAAQgBAAgBAAQAAAAgBABQAAAAAAABQgFACgIAAQgEAAgMACQgNADAAADQgDAAgEAEQgFAEgDAAIgbAKQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgDADQgEAAgDACQgDACgCAAQAAADgEABQgEACgDAAQgFgBgDAEQgEAFgDAAIgHAEIgFADQAAAGgKACIgOABQAAABgFADIgHADQgDABgHAIQgFAHgGgBQgHgCgJAJQgRAEgBADIgFACQgCABAAAEIgJgBQABABAAAAQABAAgBABQAAAAAAAAQgBABgBAAIgEAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAABABABQAAAGgKAAQgCgCgGADIgJAEQgRAHgIAKQgJABgIAEIgPAJQAAAEgMAGQgMAHgCAFIgJAEQgGACAAAEIgMAFIgGACQgDABgCADIgCADIgEACQgJAHAAACQgDAAgCADQgDAEgCAAQgHABgFAEIgNAPQgHAIgJADQAAAGgOAJQgOAKAAAHQgEACAOALQAPANgBADQgFAAgGAKQgFAKgBAGQgDAAAPANQAPAMAAgEQAGAAAIAHQAIAHABAGQAAAEAKACQAKACACACIAMAJQAGAAALAGQALAFAGAAQAAAHArAAQAMAMAIAAQAAABAIAAQAJABABABIALAAQAGABAFADIAOAJQANAGAFgCIAKgCIALgCQAEADACAAQgCAEADACQACABANgBQAMAAACAEIATABIAIABIAJABQAAgCAPADIASADQADgEAGAAIALAAQABACAHAAQAHAAADADIAEAKQAEAIADgBIACAAIABgCIABgNQABgFAFAAIAKAAIAPACIARAAQAAgCAKADIAMAEQAAgFAKgCQAKgBAAAGIAugFIgBgCQADgCgDgPQgEgPABAAIgEgNQgFgMABAAQABgCgBgFQgBgFgCAAIgBgUQgBgFACgMQABgOACAAIAAgDQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAFAAAAgZQACAAACgIIADgJQAAgFADgGQADgHABgFIAIgfIAIgQQAFgKAAgGQAEgCACgGQADgIADgCQAHgGgBgHQAMgMgBAAIAEgGQADgCACgEQgCgFAEgBQAAgCAFgGQAGgFAAgDQACgBAFgGQAFgHACAAQAAgDAFgDIAIgGQACAAAEgEQADgEAAgCQANgGAPgPIAFgCQAAAAABAAQAAAAABABQAAAAAAABQABABAAABIgRANQgFACgFAIQgFAHgBAFQAGgBADgDIAGgIQAPgGAAgBQAIgCANgKQALgJAKAAIAIgBQADAAADgDQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAAgDAEgBQAAgDAJgHQAIgHAFgCQADgBAFgEIAIABQACgCAFAAQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBIAIgGQAHgGAAADQAGACAAgLQAGgBAFgEQACgCAJgCQAAgDACgDQADgDACAAQAAgCAMgGIANgHIACgFQABgCAEgBIAGgCIAGgFIAFgBIAFgCQAEgEAHgDQAIgDADgDQAFgEADACIAEADQADAHgOAHIgSAIQAAACgSAJIgMAJQgIAFgCAFQgEABgIAGQgIAGgGABQAAAIgLACIgMAJQgGAFgCAFQgIACgHAIQgCAAgDADQgDACgEAAQgGABgCAHQgIAEgCAJQgEACgEAFIgIAIIgPAMQgKAHAAAHQgNAGACANIgDAEIgCAGQgFACgBAJQgCAAgEAFIgFAFQgJAKAAgEQgDABgBAHQAAAGgIAAQAAABgEAEIgFAEIgBALIgGAJQgEAGgBAEIgMAKIgEAMIgGAEQgBACABAFQgBAAgEAHIgDAJQgDABgFAIIgHAHQAAATgIADQgGACABAJIAAANQgEAAgBAZQgBAZABAAQABgJAIgNQAKgOABgHQADAAAFgIQAEgGAAgDIALgUQACgBAFgIQAEgHAEAAQAEgPALgCQgCgKAMgGIANgPQABgEAJgIQAIgHAAgFQAFgCAGgIQAFgJAFgCQAAgDALgJQAJgIAFgDQAAgDALgHQAKgGAAgCQAGgEANgNIAPgNQAEAAADgFQADgFAEAAQACgEAHgGQAHgFAEgBQABgDAFgEQAHgEABgCQAIAAALgMQAMgMAGAAIAKgHQAIgFAAgCQADgBABgDQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAIAAgCgGIAGAAQAAgCARgIQAQgJAEgBQAAgEATgKQARgJAGAAQADgGAJgFQAIgEAHgCQAAgBAJgEQAJgEACAAQACgCAUgJQATgIAAgBIAEgEQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIAGgBQAAgCAIgDIAIgCQADgDAIAEQACgJAFAAQAGgGAIAAQAAgCAHgCIAKgDQAFgHAZgGQABgCAGgBQAFgCACgCIAGgCIAHgCQAAgCAGgBQAGgBAAgBIAEADIAdgQQAAgBAMgDQALgCAAgCQAXgGAAgCIAJAAQAHAAADgEQADAAAPgJQABAAABAGQAAgIAVgEIAMgEQAJgDABAAQAQAKgEgHIgCgDQgBgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAugJQACgEAXgEQAWgEAAgBIAIgDQAEgCADAAQAAgDARgBQATgCABgCQADAAADgDQADgDADAAQAAgCALAAQAngIADABQAAgCAvgIQAHABANgDIAVgGQAYgFAGAAQA9gJAGAAQAJgBAVgEQATgEAMAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBIAKAFQAIADAAgGIAUgCQA+gHAAACQADABAZgFIAigBQAfAAAAgCIBjgBQAAgCAoADQAsAEAEAAIAKAAQADAEAEgCIAIgCQACAHgDgBQgBAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgFAEgNAAQAAAAAAgBQAAAAgBAAQgBAAAAAAQgBAAgBAAIgFACQgEAAgDgCQgDgCgCAAQgNAHAAgEQgQACgIgCQAAgCgMABQgMACAAABQgLAAgKABQgCAFgGgCIgKgDQAAADgLAAQgKgHgCACIgDADIgFABQgDADgGABQgDAAAAAHQgMAAgCAIQgCAIAMAAQACADAKABQAKABADACQAAgFAHADIAKADQAAgEANACQAIABgDACIgFADQgCACgJAAQgIAAgEgCQAAABgHABQgGABgBAFQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCADQgKAAgIACQgKADgHAAIgqADQgCAEgLAAIgRAAIgtACQAAABgfAEQggADgFgBQAAAGgzgBQAAABgIADIgJACQgYAAAAADQgFgBgOADIgiACQAAABgVAEIgYADQAAgDgKAHQgLAGAAACIAhAAIAbgEIATACQADAAAFgCQAEgCAFAAIAOgDQANgCAAACQAFABAHgFIAOABQAAAFALgHQAKgBARgDQAAgCAJAAQAGgBAFABQAGACAGgBQAGgCAFACQAAgDARgDQARgEAAAFQArAFAAgDIAJABQAGABAAADQgNAHgDgBQgFgBgKABQgLABAAADQAkgDBBACQANAAAaAEQAYADANAAQAlAAA5AKQArAFAAAFQAFAAAXAFQAZAFAAADIAIAAQAEAAABgEQAJgDAFAAQAFAAAFACQAAABAIACQAIACAAACQATAAAZAOQAPASgBAAQAAAGASAAIgLgKQgIgHAJAAQAGAAAJAFQAJAFAFAAQAqAWAEAAQAAABAPAEQAOADAAADQADAAAHAEQAIADADAAQAAABAoAOIAZAOQASALAAAHQAEAEAFACQAAACAJAIQAKAIAAADQAHAMACAAQAAADAEAGQAEAGAAAEQABAAACAHIACAJQAEAAAFATQAFATADAAIAJAUQAFAMAAAKQACAAAFAbQACAAAGAXIANAyIAHAaQAHAXgDAAQACAGADApQABADgCAFIgCAIQgCAAAAAGIAAAJQgCAAgDAIIgDAJQgDABgFAPIgFAPQgBADgDAAIgDAAIgBAGQgBAAAAAAQgBABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgIAAIAAAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgEACgBAGQgCAAgDAGQgDADgCgFQgHABgFAFQgEAAgCAIQgCAIgCABQAAAHgGADQgGADgGgCQABANgJgDQgMgEgCAEIAAAMQgCABgDADIgCADIgEACQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAGQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQgJgCAAABIgKAEQgEAAgCADQgCAAAAAFQgBAFACAAQgBAKgNABQAAgDgIgBIgLgCIgGADQgGACAAADQAAADgMACQgEABgKAFQgKAFAAADQgCAAgNAHQgNAHAAACQgFACgDAHQgCAFgHgCQAAACgDAEQABAAACAEQACADAAACQgGACgLgDQgLgDgFABIABAKQAAAGgFAAQgCgDgEACQgBABAAAAQAAABAAABQgBAAABABQAAAAABAAQADACABADQgEACgFAAIgJAAQgCAAgHgFQgHgEgFAFIgDAGQgBACgEABIgHAEIgFADQgBAFgJAAIgPgBQAAAHgJADQgLADgCADIgDADQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBgBQgCgDgDAAQgEgBAAAEQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAIAAAGIgMABQgDAAgGAFQgEADgDgHQgDgBgDAFQgDAEAAAEQgFAAgFADQgFADAAAEIgGgBIgHABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgEAAIgPADQgFAGgHACIgPACQAAAAgBAAQAAABAAAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAADABAGQAAAEgNgEIgHAFQgHAEAAADIgJgBQgEABgCAGIgJADQgHABgCgEQgGADgHAFIgMAIQAAAGgRgDQgSgDAAAIIgFgCQgBgBgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQgBAAgDAFQgDAEgCgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgGAHQgDAFgFgBIgEAAIgFACQAAAAgBABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgFAFIgJAEQgHADABABIAYAAQAOgBAIgDQADgBAcgFQAYgFAAgDQADgBAFAGQAEAGAEgCIARgFQACgFAZgDQAAgBALgDIALgEIALgCQAJgBgBgDQARgHABAHIAPgGQAKgDAHABQgSALgFABIgpAUQABgGgKACQgIABgEAEIAEADQgEAAgUAIQgUAIAAACIgJABQgIACAAADQgFABgFgBIgJgDQgBAKgHgBQgMgBgCABQAAABgIABQgJAAABAEQgRAJgKABQgWADAAACIgIABQgGgBAAgBQgDgBgEABIgHACQgWAMAAgIQgDAAgEACQgFABgBADQgDgBgIADIgGADQAAABgVAEQgGAAgFAEQgGAEAKABQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABQAAgDARAAQAQgBAAgCQAIAAAWgHIAdgEIAkgGIAVgEQATgEAAABQAIAAAMgEIASgHQgBgBAOgFIAQgEIAVgIQAPgHAEAFIgUAKIgRAHQgGABgLAGQgMAFgEABQABADgKACIgNACQgKAGgLACQAAgCgMAIQgCAFgDgFIgDgDQgEABgFADQgFAEgDAAIgKADQgJABAAADQgFAAgGACQgGACgGAAQAAAJgLgMQgCAGgBAAQgDgFgJACIgLADQgFAGgBADQgFAAgEgDQgFgDgEgBQAAAFgGAEIgLAEQgXALgNgLQgMAEgDAAQAAAHgPAAQAAACgMADQgLADgEgBQAAgEgIAAIgMAAQgCAHgBAAIgHgBQAAACgVgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAADgJAAQAAgGgEAIIgDAEIgIAEQAAgEgHABIgIACQgCABgQAAQgOAAgBADIgYAAQgFAAgHgDIgMgDQgHAHgIAAIgRgDQAAABgKADQgKACAAABIgPACQgMACgEgEQAAgBgNAAIgRgBQAAAFgHgBIgKgCQAAADgPABIgFAAQgKAAAAgDgACUKCQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAIAEgCIAdgDQAZgCABAEQABAAAAAAQABAAAAgBQAAAAABgBQAAAAABgBQACgDADAAIAEAAIADgBQAEgBAGABQAHAAADgBIAOgFQAJgCAHAEQABgGAEADIAFAFQADAAAFgFQADgGAEABIAHACQADAAAFgDQACgBAFAAIAHgCQAFgBABABIABAFQAEAAAEgGIAJgDIASgFIALgBQAHgBAEgDQALgFADAAQgFgBgPAEIgTAGIgfADQgPACgVgBIgWAEQgSACgBgEQgNACgBABQgKADgJgCQgKgDgNACIg1ADQgFABgCgFIgKADQgBgDgFgBQgIgBgCgCQgLAEgEgBQgMgDgagBIgagBQgFAAgJgCIgOgBIgMAAIgKgCIgBACQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDgCgCABQgBgDgFgBIgHAAQgKgDgYgBIgOgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDABQgLABgIgDIgFgDQgCgCgDABIgNAAQAAgCgFAAIgHAAQgDgBgEAAIgIAAQgEAAgDgCIgGgEIgPgDQgJgBgEgEQgFgEgBAAQgCACgEAAIgKgCQgGgBgEABQgBgEgMgDQgIgCgGAAQgDABgDgDQgCgCgDABQgDAAgGgBIgKgEQACABgSgIQgQgHAEgBQgCgBgHAAQgGABgDgCQgIgEADgCIgQgFQgDgBgPADQgRADgOgBIApAdQARgBALAEIANAFQAIgBAMAGIAMAFQAKAEAAACIAHgCQADgBACADIAGAHQACgBAIgBQAJgBABADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIASAGQADACAFAAIAIABIASAFQAEACAFABIAJABQAQAEAjAEQA8ALA6AFIAbACQARABALACIAhABQADgBALACIAQABIAMgBQAIgBAEACQABAAAAAAQAAAAABAAQAAAAABgBQABAAAAAAIABgBQABAAAAAAQAAABABAAQAAAAAAAAQAAABABAAgAGCH/IgCgHQAAgDAHAAQABABAHgBQAHgBABgCIAPADQALACAAgEQAGgHAHAFIAMAHQAGAAAAgDQgBgEADgCIAHgCQACAAACAEQAIgIAQgBQAJAAAQABQAAgBAFgCIAGgDIARAAQAAgCAPAAQACAGAEAAQAAgGAIgBQAHgCAAACIAJgCIAJgCQAAAAABgBQAAAAABAAQAAgBABAAQABAAABAAQADAAACgDQALgFAIADQACAAATgEIAGACQAAAAABAAQAAgBABAAQAAAAAAgBQABgBAAgBQAAgBAAgBQABgBAAAAQAAAAABAAQABgBAAABQAFACABgBQAAgCAPgDIARgDQABgCAOgFQANgFAEAAQADABAEgEQAEgDADAAQAAgDAQAAQAGABALgHQAGAAALgFQALgGAGAAQACgDANgEQANgFAFAAQABgCAMgEQALgDAAgBIAVgIQADAAAEgCQAEgDAEAAIAKgEIAHgDQAEgCAEgBQABgDAGgBQAGgCACgCQAEAAAIgDQAJgEACgCQAEAAAHgEQAHgEADgEQAFAAAJgFQAIgFAGAAIAYgMQAAgBAVgIQAWgJACgDQAFAAAJgFQAIgGAGAAQAFAAAGgGQAHgHADAAQAEAAAGgGQAHgGADAAQAHAAAKgIQAEgCAHgHQAAgBAGgCQAGgCAAgCQgHAAAGgCQAFgCADAAQAAgEAJgBQAHgBADABQAAgDADgEQADgFAAgFIAQAAQAAgEAEgCIAIgFIANgIQAAgFAMgGQALgGAAgCQAMgCADgDQAGgEADgJQAFgBAQgbQAMgGAGgKIACgEQABgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQADAAAFgJQAFgKAFAAQADgFAAgJQAFgDgBgEQABAAACgMQACgNACAAQAAgBgCgFIgEgGQAAAHgLAAIgFAGQgEAGACAAQAAADgHAGQgIAFAAACIgFAGIgGAIQgDAAgFAFIgIAFIgFADQgFADABAEIgJADIgHADIADAAIgBAEQADAAgMAKQgDADgIAAQgHABgCACQAFAAgFAHQgFAGgEAAQgJAMgOADQgEAIgOAFIgCACQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAIgKABQgCABAAAHQgbAFAAAGQgPALAAABIgJADQgGACgEAAQAAADgFACQgEACgEAAQgEgGgEAHQgEAHgCABQAAACgKAGIgMAGQgEABgIAGQgJAGAAAEQAAACgMAEIgQACQAAAEgJACQgJABABAEQAAABgaAFQAAAHgOAGQgLAFgKABQAAgFgOAHIgOAGQgDAAgJAEQgIAEAAABQgEAAgHADQgHADgEAAQAAACgJAEQgIADgCgBIgBADIgBADQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgDABgCgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgIAFIgDAAIgCgBQAAADgFABQgGABAAABQgEACgCgBQgDAAgDACQgDADgMAAIgIAGQAAABgKADIgNADQgNAGgDAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABIgYAKQgYAGgGAEQAAADgXAAIgHAEQgEABgBAFQgFACgEgBIAAAFIgPAAQAAAGgGABQgHACAAgCQgDAAgLAFQgJAEgFgBQAAgBgGACIgHACQgDADgIAAIgMgBQgCAEgLAAIgbAJQAAABgFACIgJADQgFADgKAAQgDgDgDACIgFAEIgKgDQAAAHgNABIgTABIgIABQgFACgBADIgMgBQgcALgDgBIgUACQgSADAAACIgPADIgOACIgHACQgFACAAABQgIAAgQACQgVAEgDAEQACgCATAAQAAAEAZAAQADgEALABIAQACQAAgEANACIAOABQACAAADADQADACADAAIAAAAgAn2HeQgCAEgDAAIANAKQAJAGAEAAIADgDQABAAAAgBQAAgBAAAAQgBgBAAAAQgBgBgBAAQgBgDgGgFIgKgFIgDgCIgCACgAAUGwQACAEACAAIAIACQAFABACgEIADgBQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAgBAHgBQAHgCAAgBQAigBAAgFIAGABQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAFgBANADIAJgDQAGgDADAEQACADAFgBQAFAAACgDQACgCAFACIAIACIgEgEIADgGIAKgCQAGAHAAgFIASABQAFgCAHgHQACgBAKABQAJABADgDQAEgEAHAAIALABQACgFALABIAOABQAAgDAHABIAJADQAAABAKgHQAKgBAOACQAAgIAPgBQAAgBAVgEQAVgFADABQABADAMAAQAMAAACgEIACgFQAEgEADAFQACABAEAAIAGAAQAAgIABgCQACgBAIABQABAEAHgDIALgDQAEgBAKAEIAIgEQAAgFANgDIARgCQAHgDAEgGQADgCAHABIALABIgBgFQAEAAABgCQACgDADgBQADgBADABIAHACQAAgCAPgCIASgBIgCgEIADgBQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAJgBAHgEQAJgHAFgCQAXAAADgFQANAAABgCQAGAAgDgGIAKgBIAEgGQABgBAAgBQABgBAAAAQABAAAAAAQAAAAAAAAQADABADgCQADgCADABQAAACAHAAQAHAAAAgCQAHAAAEgDIAJgIQAHgBAEAAQACgEAEABQAGACACAAQAAgBASgGIAUgIQgDgDABgCQACgCAFAAQADADAFgCIAIgDQAAgBAHgBQAHgBAAgDIAGACQAIgFgEAAQgBgDAPgEQAQgEAAgCQAHAAAHgDIAOgIQABgCAIABQAHABAAgEIADgDQABgCAFAAQAEAAAHgDQAAgBAKgDQAKgCADABQgBgFAFgDQAGgEACgDQAPABAAgDIAHABQAEAAABgEIAKgIQAAgDAIgEQAHgFAEAAIALAAQAAABATgLQAAgDAHgFIAIgFQAGAAAIgHQAIgIAFAAQAAADASgNQAIgGAKAAQAUgNAAgCIAWgPQALAAAMgIQADgHAEAAQADgDAJgDQAJgEACgDQAFAAADgGQADgHADAAIAKgHQABgDAEgEIAHgGIAGgCQAFgBABgCQAAgFANgGQAMgHgBgDQAVgZADgBIAHgPQAFgKgHgDQAAgCgHgEQgIgDgBgDQAAgDgEgCIgHgFQgMgLgGgDIgQgHQgNgHAAgDQgGAAgJgFQgKgGgEgBQAAgBgJgFIgKgHQgEgBgIgFQgHgFgEAAQAAgBgSgEQgUgHgDgDIgQgIIgKABQgHABgEgBIgFgCIgHgBQgRgLgDAAQAAABgSgHIgJgDQgDgEgGgCIgKgBQgtgKgGgBQgGgHgWADQgSACgDgEQgDgEgHAAQAAgBgOACQgPACAAgDIgTgBQAAgEgGgBQgHgHgIAEIgNAFQgHAAgKgEIgRgGQAAAFgXgBQgWgBAAgJQABgEgFgBQgEgBgFABQgCADgIgCQgBgBgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAADgJgBQADAHAAAEQAHAAACAeQACAcgCAIQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABABQAAAAAAAAQgBABAAAAIgBAUQgBATgEAAQgBADADADIgIAQIgGANQgFAIAAAGIgGAPQgFAOgHAAIABAFQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIAAAEQgCAAgCAGQgBAGgDAAIAAAEQAAABgBAAQAAAAAAABQAAAAgBABQgBAAAAABIgFAEIgBAHQgDAAgBAFQgBAAgGAIQgHAJgFABQgBADgIADQgIACABAFIgCAFIgCADQAAACgEAEIgGAFQAEAKgSACQgBAGgHAEQgIAGgCADQgFAIgTAJQgCABgDAEIgFAFQgJAAgRAOQgUARgFACIgNAFQgJAEAAAEIgLAHQgGAFgGABQAAgBgFAFQgFAEABAAIgKAFIgKAGQAAABgLADQgMADAAAEQgJAAgRANQgSAMgMAAIgKADQgIAEgBABIgJAHQgFAFgFAAQgeAKgEAAQAAACgJAGQgJAFAAgEQgEAAgHADQgHAEgDADIgLACQgFABgEAFQgFAAgKAGQgJAGgEAAQgDAFgVAAQgCADgDACQgEABgBACIgGABQgEABgCgCIgGgDQgHgBgGADIgKAIQgBAFgNAEQgDAAgIAFQgHAEgEAAQgsANgHAAQAAADgZAHQgaAIgDADQgTACghANQgHADgOAAQAAAGgPAAQAAACgVAGQABgGgiAKQgEAAgGACIgKAEQAAgBgMAEIgPAFQgIAGgMACIgWAFIAFAAIABABIARACQAOACABgDQAcAAASAEQAsgBAAAFQAFABAvgHQAHgDAHAEIANAHQAAgCAQgCIAUgCIAQgBQAEABACADgAqtGZQgHgMAAgBIAHAFIAGAEQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgGAAIgCgBIgBAAIAAgBQgDgDgDgCQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgBQgjAFAAgEIgJgBIgIgCQAAgEgOACIgQADQgGAJATADQAWADAAABIAVABQARAAAAACIASAAIAAAAgAopGGQgDABAAAFIADAEIAEAFIAHgBQALAAgJgLQgFgEgEAAgAmTFsIAIAOIAFAFIAOACQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIAOgCQAJgCAEABIBCgLQAAgCAVgDIAYgEQBOgSAHAAQAAgBAXgGQAXgFAEAAQAAgDAWgEQAWgDACgEQAHAAAKgEQALgDAGgBQAGAAALgEIAQgFQACgDAdgHQAagGgBgHQAYgBAAgDQAJgBARgHQAAgBAJgCQAJgCAAgBQADAAADgCQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAGgBIAFABQAAgDAQgFQAOgEAFAAQACgDAJgDQAKgCAAgDQAEAAAIgDQAJgDACgDQAGAAALgEQAJgEAFgEQAGgFAPgDQABgCANgEQANgEAAgCIANgGIAOgHIAPgFQAKgEADgEQACAAAJgFQAIgEAAgBQAEAAAIgEQAIgFADgDQAKAAAOgKQAOgKAIgBQACgEAUgJQATgKgBgCQAAgBANgHQAOgHAAgBIAHgGQADgDAFgBQAKACAEgGIAEgIQAEgIAFAAQAAgBAFgEQAGgDAAgCQAFgBAIgHQAIgHAFgBQADAAACgFQACgFADgBIAIgFIALgKQAEgCAFgHQAFgHAEgCQAAgFAOgMIAOgRQACgEAFgIQAGgIACAAQABgGAFgHIAGgMQACAAACgFIACgGIACgHQACgGgBgDQgFAAgJAOQgKAQgEACQAAAGgMAJIgLAKQgGAHgEACQAAAFgHAFIgKAKQgBACgIAFQgHAEAAAEQgDABgDAEQgDAEgFABIgEAFQgEADgCAAIgHADIgIADQAAACgEADQgFAEgBADIgKAGQgHAGgBACQgDAAgJAGQgJAGgCADQgKADgQANQgPAMgMACQgFAGgMAEQgLAEgIAAIgOAOQgFAAgHAGQgHAFgDAAQgCAEgIABQgHABgDADIgHADIgGADQgCAAgEAEIgFADQgCAEgJAAQgJABgDAEQgEACgDAAQgCAEgIABIgNABIgJABQgGAAgDABQgDABgDAHQgDAGgEABQgEAEgFgCQgHgCgDABQAAAEgFACQAAAEgVAJIgbALQgDAAgFADQgFADgDAAQAAACgNACQgEAEgIADQgHACgGAAQAAACgNADQgNADAAADIgNACQgKACgCADQgGAAgCABQgDABgFAFQgHAAgGACIgNADIgWAHQgBACgKACQgKACAAACIgbAHQgFAAgIADQgIADgFAAQgCACgOAEQgNADAAABQgDAAgFADQgFADgDAAQgBACgGABQgFABgCgCQgRAHgCAAQgDADgNADIgMACQgEABgKAEQgIADgEAAQAAACgOAAIgQgCQAAABgJADIgMACQgPAAgMAFQAAAFgLACQgMABAAABIgXAAQgQAAgFAFIgDACIgDADIgJADIgHACQgCADgcAEQgcAFAAACIgFAAIgFAAgAxuEwQAAgCgHgCQgFgCgEAAQAAAGAQAAgAzoD+IgCADIAOALIAKACIALACQAEAHAcAKQAbAKAAgGQgOAAAAgHQgQgCAAgCIgUgKQgCAAgEgIQgEgHgGAAQAAgDgKgBIgKgBIAAAAIgGACgAmhD9QgJAEgBADQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADAAQAAACAsgFIA0gGQAAgDAWgEIAcgFQABgDANAAIARAAQAFAAARgGQANgEAIACQAAgCATgDIAWgEQAAgFALACQAMACAAgEIAKAAQAGAAADgEIAJgDQAFgGAQACQAQABACgFQgIAAAHgEQAGgEAEAAIANgBIAEACIAFABIASgEQAAgCgFABIgHABQgDgGAcgHQAXgHAKAAQAAgBALgCQALgBABgCIAHgCIAHAAIADADIAFABQAAgBAAgBQgBgBABAAQAAgBAAAAQABAAABAAQgCgFAEgBIAJgCIAKAGQAKAGADgBIgHgDIgDgKIAGgFQADgBAFACQACABAMgFQALgFAAAEQADABAEgCQAEgCAAgCQAOAAADgFQAAgJAJAAQACgEAKAAIANAAQAFgBADgEQADgEADAAIAVAAIAEgJQADgDAEABIAGADQgBgJAGABIALADQADAAAEgDQAEgEADAAQACgCAJgFQALgFABACQAAgHAUgCQAUgCAAgCQAIAAAFgBIAFgDIAGgDQACgDALgDQAMgDAAAGQAEABAOgEQAGgEABgFQgEAAAEgHIAFgIQAEgCAAgJIANgHQAJgFAGAAQABACAKACIAMACQAAAEAMgGQALgFACgEQgHAAgCgMQAFAAAMgPQASgEAAgCQAMgCAOgGIAWgKQAFgFARgHQAOgGADgHQAGgCANgOQALgMAHAAQACgDAFgDQAFgEACgDQACgCAHgGQAHgFAAgEQACAAAFgIQAFgHAAgCQAEAAAJgXQAKgXgCgFQgCAAAAgMQABgMgEgCIADAAQgBAAgDgHIgHgRIgSgBQAAACgPgEQgPgDAAADQgmAHAAgBQgLABAAgCIgIABQgFABgDgDIgHABIgJABQAAgBAAAAQAAAAgBAAQgBAAAAAAQgBAAgBABIgGABQAAAEgMABQgLABgFgBIgPgBIgDAFQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAgBAAgBIgOABQgCAHgNgEIgUgGQgBACgIABQgFABAAAHQgYAAgEABQAAADgUABQgUABAAACIgZABQgLAAgDADIgBABQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgQABQAAABgGACIgIABQAAgBgSADQgTACAAACIgMADQgIACgFAAIgJAIQAAAEgJgHQgDAAgBADIgCAFQgBADgEABIgGABQAAAEgMAAQgBACgEABQgEABgDADQgDADgGAAQAAgEgGABIgKACQAAAFgWgCQAAAGgJADQgLADgCACQgCAAgEADIgHAEQgEACgCgBQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgDAAgCgCQgEgCgCAAIgIADIgIACQgDgCgEACIgHADIgEAEQgEAEAAACQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAEIgEAFIgCAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQgDABgCgCQgDgCgCABQgFAJgVACIgUAMQgKAEgEgDIAAgEQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQAAgBgKAHQAAAHgEABIgIgCQgBgBgHADQgHADgBACQgFAAgDADQgDADABAEIgMACQgNADgEAFQgEAAgBAFIAAAGIgRAJQgEAGgIAAIgMgCQACAMgGACIgMAHQgMAIAAgFQgGgEgBADIAAAEQAAADgKAIQgLAGgEABQAAACgGAEIgKADQAAgGgFAEQgHAFACAAQAAAFgHAIQgGAHgFAEQgCAFgFADIgKAEQgJADgDgEIgIAHQgFAFAGAAIgCAHIgGAJQgFAGgCAAIgKAJQgHAHgCAEQgGAAgCADIgEAJQgEABgEAFIgGAHQACAEgZAYQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIAPgBIAqgFQAAAFARgHIAFAAIADgCQAAAAABAAQABgBAAAAQAAAAABAAQAAAAAAABIAEACQABgFAKgDIAJgEQAGAAAVgEQASgDAEAIQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAgBABAAQACgEACAAQAAgBAFABIAHAAQAAgBAGAAIAJgBQAAABAAAAQAAABABAAQAAAAABAAQABAAABAAQAAgKAqAAQAAgEAKgBIAOgBQAAgHAZgBQAZgCAAADQADgBAEgEQAEgDACAAQAAgCAHACIAIACQAAAHAVgMQAAgCAHgDIAJgCQAFAHAHgBIARgDIAOgBQAHgBAAgGQgEADgEAAQAAgEADgCQAEgCABgCIAOgCIAGgCQAAgFALAAIAPAAQAHAHAGgGQAJgKAEgBQAMAAAAgCQAFAAADAFQACAFgHAAQAAAEAHACQAGADAAgFQgEAAgBgDQAAgEAEAAQAAgCAKAAIAGgEQAFgCAAgDQAHAAAEgDQABgCAEABQAEABACgBQAEgHALAAQACABAHgDIAIgEQAVgLAAAFQALAAgDgBQgIgEgBgCQgHgCAGgCIAJgBIAFAGQACACAEABQAMAAAAgCIAYgLQAFAAAJgEQALgEAFAAQAAgEAMgEQAKgDAFAAQABgCAFgCQAFgCACgCQAQgEACAAQAEABADgDQAFgFADgBIAJgFQAHgDACAEQACADgLANQgEAAgHAGQgIAFgEAAQAAAFgNAGQgOAGgCAEQgCAEgKACQgIABgCAEQgEAAgHAFIgJAHQgcALAAgBIgTAPIgMAEIgLAEQgZAGgGAIQgGgBgGAEQgGADgEAAQAAABgMABQgLABAAAGIgQADQgLACgEAEQgMAGgHABQAAACgJADIgKAEIgEAAQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgKADQgEAGgJABIABADIgGACIgHACIgJAAQgFgBgEABIgKAGQgKAFAAgBQgIAAgPAFQgPAFgJAAQAAABgWAEQgWAEAAADQgdALAAgEQgEAAgIAFQgHAFgEAAIgQAFQgRAEgBABIgZAFIgkAJQgaAAgCAEIgIACIgIACQAAgDgUAHIgNAEQgIADgHAAQgKADgFAAIgTAAQgFAFgMAAQgNgCgFABQAAABgIACIgLADIgBgBIgIACgAz3D2QAEgHgIgCQAAgBgEgEIgFgFQgDAAgIgFQgHgEgEAAQgBgDgHgGQgHgGgDAAQAAgCgLgIQgLgIgEAAQACAFAGAIQAGAHAFADQANAKgCAAQADAFAGAAQAWATAAgCQACABAFgCQAAAHALAAgApzCuIAGAEQgEABgCADQgDAEADADQAFADgDADIgEAEQATgEAAgBQADgBAFABIAHACIAEgBIADgDIADgBIAKgCQgFgZACAAIgCgJQgCgGABgDIACgOQABgIABgEQADAAgBgIQgBgIgGgBIgMASQAAAFgGAJQgGAJABAEQgGADgCACIgEAJQgCAAgCAEIgDAFQAAAEgIgGQgBABAGAEgAnqBaQgEAAgDAIQgEAKgDABQgDAVgBAAIAAACQgDAAgDAUQgDAUACADQADgBAFgIIADgIQADgHACAAIAFgLQAEgIACAAIADgHQAEgFAAgDQACAAAEgJIAFgLIAIgGQAHgGAAgCQAEAAABgDIABgIQACAAACgDQABgEADAAQAIgJABgEQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgFQAIgFAHgLQAEAAAGgJQAFgJAGAAQAegLgOAAQAAgGAFgCIAJgDQAAgGAIgEQAIgEAAgFQAFgBADgEQAEgFADgBQACgDAMgGQALgFAAgEQAKgGAGAAQAAgEAIgFQAIgEAAgDIAGgEIAHgEIAHgFQADAAAIgHQAIgGABABIALgGQAIgFACgDQAHgFABgGQAFAAAGgBQAGgCAJgGQAAAHAMgIIAPgKQACAAAGgEIAHgGQABgBAIgDIAIgDQAhgKAAgDQAFAAAJgEQAIgDAGAAQABgEAFACQAHABACgIIAGgCQACAAAHgEQACgCAOgEQANgDAAgCIAJgDQAGgDAAgDQAQgCAAgBIAJgCQAHgCAAgBQAFAAAKgEQALgFAGgBQAAgBAIgDIALgCQA2gRAEAAQAAgBAOgDIAQgEQATABAAgGQAFAAALgDQAKgDAGAAIAfgIQAAgCAMgBIAOgBQAAgCAMgCQAMgBABgCQAEAAAGgCQAHgDAEAAIAMABQAHgBADgDQAXgCAKgDQAAgEAygEQADgFAeAAQASABARgEQAAgFA4gBIA+gBQAAgCAGABQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIADAAIgBgCQgEAAgEgIQgFgIgDAAQAAgDgHgHQgHgGAAgEQAHgCAJADQALADAAAIQAEABAFAEQAFAEACAEQADACAAAFIADABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAEADQAEgBAEABQAGABAMgBIAUAAIAmACQAhABAAABQAIABAHgBQAAgCAUACIAZADQArACAAACIAzAEQArAFAAAGQAKAAAUAFQAVAEAKAAQAAACAPADQAPACAAACQAHABAKAEQAJADAHABQADABAHADQAGADADAAQAAADAJAAQAKABABACIAcAJQAEAAAIAEQAJAEACADQAOAHAAgDIAEABIACACQAEAAALAGQALAGAAABQAFAAAIAGQAIAFAEAAQAAABAHAFQAHAEACAAQAAABAIADQAIAEABACQADADAKAFQAIAFADAEQAHAAgHgJQgGgKgFAAIgEgEQgEgDAAgCQgIAAgHgKQgEAAgKgJQgLgKAAgDIgLgBQgHgCAAgEIgDgCIgGgBQgIgIgCgBIgOgHQgGgEgHAAQgEgFgKgDQgEgBgBgCQgCgDgCgBQAAgCgSAAQAAgGgLgCIgPgCQgHAAgHgDQgIgEAAgEQgIAAgNgJQgNgKgHAAQAAgBgKgCIgKgBQgZgHAAgCIgPgDQgIgDgEAAQAAgEgdgGQgZgEgKAAQAAgCgOAAQgPgBAAgEIgXgDQAAgDgbgCIgbgDQgZgDgMAAQAAgBgMgBQgMgBgBgBIgbgBQAAADgogCQgBgCgOAAQgNgBAAACQgDABgGgBIgIgBQgRACgIgBIgKADQAAABgKAAIgMgBQAAADgVACQgVABgFgBIgwAEIg5AEQgFAAgYAEQgZAEAAACIgXACIgUADQAAAHgyACQAAADgkAGQgCADgJAAQgJAAgDAEQgFgBgGACIgJABQAAACgOABQgNABAAADIgeAJQgSAFgLAAIgdAKQgeAJgCgBQAAAEgNACQgOACgBAEIgOAEQgIACgFABQAAABgHADIgIACQAAABgKAEIgPADQgCAEgLADQgLADgCAEQgEAAgGADQgHAEgDAAQgVAFgFAHQgFAAgIAGQgJAGgFAAQgDADgHAEQgHAEgEAAQgCADgPAIQgEAAgJAHQgIAHgHgCQgBAEgJAAQgBAEgIADQgNAFgHAGIgPAJIgPAJIgJAIQgEAFgFAAQABgCgKAHQAAAGgYAPQgLAMgKAEQAAABgEADIgGAEQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAABgFAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEABQgDAEgMAHIgDAEIgEAEQAAADgEAEQgDAEgDAAIgFAHIgHAFQAAACgJAIQgDADgEACQgFABgDADQAAADgEACQAAADgDACIgGAEQgCACAAAEQAAAFgCACIgFADQgDAAgCADQgCAFgBAAQgBACgEAGQgEAFgCABQAAAGgJAGQgKAGAAAGQABAAgFARIABAIQgBAFgDABIgBABIAAAAIgBABgAxpmXQgDABgCACIgCAFQgHAAgCADQgCAAgGADQgFADgCACIgHADIgGADQgGAHgTAGQgCAEgKACQgKABgBADIgHAGQgGAFAAABQgOAAgBAHIgSAOQgEAAgPAKQgJAGgGAHQgCADgFADQgFADgCADQAAAHgIAEQgKAEgBAFQgCABgDAGQgCAEgDABQgBACgGAFQgFAEAAADIgJAJIgIALIgDACQACACAlgbQAmgdAHgBIAHgFQAEgDADAAQAAgBAEgCIADgEQgDgBAAgEIAMgBQAIgCACgCIADgCQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgCAGgDQAFgDACAAQACgDALgFQAJgEACgDQADAAAFgFIAHgHQAMgEABgBQADAAAHgEQAJgEADgBQACgCAHAAQAEABABgFQABgJANAAIAHgIQACgDAFABQAFABABgDQACAAAHgEQAHgFACgBQAAgCARgHQAQgHADABIgBgEQAGgBAHgEQAHgEAFgBIALgFQAHgEACgDQADAAAFgCIAHgDQACgCAFAAIAIABQACgFADgCQAGgHAPgDIAYgDQACgDAIgDQAIgDAEAAQAAgDAIACQACABAEgCIAGgEIAIgEQAEgCADAAQAEgGAOgEIAWgEQAGgBALgDQAOgEAAgDIAHgCIAFgDIAJABQAFgBAAgFQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAABgBIACgDIgGgDIgvAMIgCgBQAAACgLABQgKACAAABQgHAAgLAGQgLAGgGABIAAgDQgFAAgKADQgJADgFAAQgEgBgCADIgFAEQgEAEgCAAIgHgDIgIAEQgIADgBAEIADABQgBADgFAAQgEABACgEQgDAAgHADQgHADgEAAIgFACQgGADgBACIgDAFQgDABgDgBQgCAGgOAFQAAABgFABQgFAAAAABIgLACQgEABgCAHIgDABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgKAAAAgCQgCAAgDACQgEADgCABIgOAHQgNAIACABIgNAGIgNgCIgDABgAlSlJQgFgDAKgGIALgHQAIgDAAgBQABgBABAAQAAAAABAAQABAAAAAAQAAABABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQACACgOAJQgJAGgFAAIgEgBg");
	this.shape_1.setTransform(7.7762,27.7414,0.4947,0.4947);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#101E28").s().p("ABwDnIAAkXQAAgygageQgbgeguAAQgfAAgdAPQgdAPgkAjIAAFEIhjAAIAAnEIBjAAIAAA8IADAAQAdghAogSQAngSAqAAQBLAAAvAtQAxAxAABZIAAEWg");
	this.shape_2.setTransform(117.9744,94.1798,0.4948,0.4948);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#101E28").s().p("AjCCoQhLhEAAhnQAAhiBNhCQBNhDBxgBQB2AABNBCQBNBBAABlQAABqhMBCQhMBDh4AAQh1AAhLhEgAh4hvQgvAqAABCQAABGAuAsQAtArBIABQBPgBAugqQAugrAAhIQAAhBgwgrQgxgrhKAAQhGAAguArg");
	this.shape_3.setTransform(90.3993,94.4149,0.4948,0.4948);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#101E28").s().p("AiqEwQhCgnAAg8QABgyAegeQAfgfBBgOQgygbAAgeQAAgWAWgRQAWgRAjgIIAAgCQg3gVgdgkQgbgjAAgyQAAhIA8gqQA7gqBkAAIDRAAIAABFIhoAAQAeAbAMAWQALAVAAAdQAAAbgPAeQgNAcgTARQgiAghdAPQgoAGgOAGQgXAJAAARQAAASAnAOQAiAMBQAOQBNAOAlAjQAhAfgBAuQAABEg/AmQg/AmhvAAQhmAAhBgmgAhtCYQggATAAAeQAAAiAkASQAkASBEAAQBBAAAlgRQAlgSAAgfQgBgmg7gUQgsgOg9AAQgyAAggATgAhIjvQgdAYAAAhQABAlAbAXQAcAXAtAAQApAAAcgYQAbgYAAglQAAgggdgYQgdgYgnAAQgpAAgeAZg");
	this.shape_4.setTransform(64.4324,100.1427,0.4948,0.4948);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#101E28").s().p("AijCiQhAhEAAhiQAAhoBCg/QBChABoAAQBmAAA5A+QA8BAAAB7IliAAQAYCHCQAAQBVAABbg2IAABXQguAcgsAMQgxAOg9AAQhxgBhEhJgAhPiAQgjAdgKA2ID9AAQgDg0gfgeQgggeg0AAQg4AAgiAdg");
	this.shape_5.setTransform(39.6903,94.4149,0.4948,0.4948);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#101E28").s().p("Ai3DnIAAnEIBkAAIAABoIACAAQBHhxBKAAQA6AAA/A1Ig1BNQgXgTgbgNQgagMgSAAQgzAAgjAoQgjApAAA6IAADsg");
	this.shape_6.setTransform(19.8966,94.1798,0.4948,0.4948);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101E28").s().p("Aj1DJQhahSAAh3QAAh3BchTQBfhVCUAAQCWAABfBVQBbBSAAB4QAAB3haBSQhfBXiYAAQiVAAhfhXgAitiYQhGA8AABcQAABcBGA9QBFA9BoAAQBpAABFg9QBFg8AAhdQAAhchFg8QhFg9hpAAQhoAAhFA9g");
	this.shape_7.setTransform(-9.7074,91.718,0.4948,0.4948);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#101E28").s().p("AijCiQhAhEAAhiQAAhoBCg/QBChABnAAQBnAAA5A+QA8BAAAB7IljAAQAMBCArAjQAqAiBIAAQBUAABdg2IAABXQgwAcgrAMQgwAOg/AAQhvgBhFhJgAhQiAQgjAdgKA2ID+AAQgDg0gfgeQgggeg0AAQg4AAgjAdg");
	this.shape_8.setTransform(-41.7361,94.4149,0.4948,0.4948);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#101E28").s().p("Ai4DnIAAnEIBkAAIAABoIADAAQBHhxBKAAQA7AAA9A1Ig1BNQgWgTgbgNQgagMgSAAQgyAAgkAoQgkApAAA6IAADsg");
	this.shape_9.setTransform(-61.1834,94.1798,0.4948,0.4948);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#101E28").s().p("ABFDgQgTgLgHgYQhAAuhHABQg2AAgkgiQgiggAAguQABg7A3gkQAfgUBVgbIBYgcIAAgYQAAgpgWgUQgWgTguAAQhZAAhHBLIAAhiQA7g+BtAAQBQABAxAjQA1AoAABKIAADoQAAAXATAAQARAAAkgYIAAA2QgjAVgTAHQgUAIgWAAQghAAgSgMgAhCAtQgxAbAAAkQABAcAUASQAVASAeAAQAsAAArgmIAAiDQhOAXggATg");
	this.shape_10.setTransform(-84.5399,94.4149,0.4948,0.4948);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#101E28").s().p("AjIDAQhRhQAAhnQAAiABhhUQBhhUCUAAQBcAAB7AuIAABXQg6gfg0gOQgzgOg3AAQhqAAhHA9QhHA+AABbQAABeBGA8QBGA7BwAAQBsAABug/IAABXQgzAYgwAMQg6AOhFAAQihAAhfhgg");
	this.shape_11.setTransform(-112.7831,91.9902,0.4948,0.4948);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CO_v_color, new cjs.Rectangle(-126.7,-7.3,264.2,124.39999999999999), null);


(lib.BUTTONbkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB8202").s().p("AmyCvQhIAAgzg0QgzgzAAhIQAAhHAzgzQAzg0BIAAINlAAQBIAAAzA0QAzAzAABHQAABIgzAzQgzA0hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-17.4,121.8,34.9);


(lib.ICONxOR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.crossORsvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,15.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONxOR, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONxhandteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.crosshandsvg("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,12.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONxhandteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONtoothblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.toothsvg("synched",0);
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,10.7,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONtoothblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONstethteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.stethsvg("synched",0);
	this.instance.setTransform(0.05,0,1,1,0,0,0,13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONstethteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONstethblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.stethsvg("synched",0);
	this.instance.setTransform(0.05,0,1,1,0,0,0,13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONstethblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONshotteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.shotsvg("synched",0);
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,12.6,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONshotteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONpreggoblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.preggosvg("synched",0);
	this.instance.setTransform(0,0.05,1,1,0,0,0,7,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONpreggoblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONmhteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.mhsvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,13.3,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONmhteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONmaskteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.masksvg("synched",0);
	this.instance.setTransform(0,1,1,1,0,0,0,15.3,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONmaskteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONdevicesteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.devicessvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,15.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONdevicesteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONbabyblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.baby01svg("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,14,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONbabyblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.HEAD5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD5type();
	this.instance.setTransform(0,24,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD5, new cjs.Rectangle(-147,0,294,28.4), null);


(lib.HEAD4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD4type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD4, new cjs.Rectangle(-155.5,0,305,56.7), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-155.5,0,305,56.7), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD2type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-152.5,0,305,56.7), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD1type();
	this.instance.setTransform(0,24,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-152.5,0,305,56.7), null);


(lib.BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAkIAggkIgggjIAbAAIAgAjIggAkgAgyAkIAggkIgggjIAcAAIAfAjIgfAkg");
	this.shape.setTransform(39.1,2.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAvQgKgDgHgHQgHgHgEgJQgEgJAAgMQAAgKADgJQAEgJAHgHQAHgHAJgEQAKgEAKAAQALAAAJAEQAJAEAGAHQAHAHAEAKQADAKAAALIAAAHIhDAAQABAHAGAFQAGAFAKAAIAGgBIAGgBIAHgDIAFgDIANATQgIAGgKADQgLAEgMAAQgKAAgJgEgAgHgYIgGAEIgDAFIgCAGIAnAAIgCgGQgBgDgCgCQgCgDgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_1.setTransform(25.375,2.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAxIAAhfIAeAAIAAAMIAGgGIAIgFIAIgDIAJgBIAAAeIgEgBIgEAAIgGAAIgGACIgGAEIgFADIAAA8g");
	this.shape_2.setTransform(17,2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAxQgFgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgFAFgDQAFgEAFgCIAMgBQAKAAAHADQAIADAEAFIAAgMQAAgGgFgEQgFgEgIAAQgIAAgHADQgHADgGAFIgLgUQAJgIAMgDQAMgEAKAAIARACQAIACAGAEQAHAFADAHQAEAIAAALIAAA7IgfAAIAAgJQgEAFgJADQgGAEgKAAQgGAAgGgCgAgLALQgEACgBAGQABAGAEADQAEACAHAAIAJgBQAFgCACgEIAAgIQgCgEgFgBIgJgCQgHAAgEADg");
	this.shape_3.setTransform(8.05,2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBAQgNgFgJgJQgKgKgGgMQgFgNAAgPQAAgOAFgNQAGgNAKgJQAJgJANgFQAOgFAOAAQAMAAAJADQAKADAHAFQAHAFAFAGIAIAOIgdANQgCgEgDgDIgHgGIgIgFIgJgBQgHAAgHAEQgHACgFAGQgFAEgCAIQgDAGAAAIQAAAIADAHQACAHAFAGQAFAEAHAEQAHADAHAAIAJgCIAIgEIAHgGQADgEACgEIAdAOQgDAGgFAHQgFAHgHAEQgHAFgKAEQgJADgMAAQgOAAgOgFg");
	this.shape_4.setTransform(-3.575,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA3QgHgHgBgOIAAgrIgQAAIAAgaIAQAAIAAgbIAeAAIAAAbIAUAAIAAAaIgUAAIAAAjQAAAEADADQABACAFAAIAEAAIADgCIAGAXQgCADgGACQgGACgIAAQgOAAgIgIg");
	this.shape_5.setTransform(-18.2,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAvQgKgDgHgHQgHgHgEgJQgEgJAAgMQAAgKADgJQAEgJAHgHQAHgHAJgEQAKgEAKAAQALAAAJAEQAJAEAGAHQAHAHAEAKQADAKAAALIAAAHIhDAAQABAHAGAFQAGAFAKAAIAGgBIAGgBIAHgDIAFgDIANATQgIAGgKADQgLAEgMAAQgKAAgJgEgAgHgYIgGAEIgDAFIgCAGIAnAAIgCgGQgBgDgCgCQgCgDgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(-26.725,2.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBAQgNgEgJgKQgKgIgGgNQgGgNAAgQQAAgPAGgNQAGgNAKgJQAJgJANgFQAOgEAOAAQALAAAJACQAJADAHAEQAHAFAFAGIAJAMIgdAPQgEgHgHgEQgIgGgJAAQgIAAgGAEQgHACgFAGQgFAEgDAIQgDAGAAAIQAAAIADAHQADAHAFAGQAFAEAHAEQAGADAIAAQAHgBAHgCQAHgDADgDIAAgKIgeAAIAAgdIBBAAIAAA0QgLAMgPAHQgOAHgTAAQgOAAgOgFg");
	this.shape_7.setTransform(-39.125,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.BUTTONbkgd();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BUTTON, new cjs.Rectangle(-64,-17.4,126.2,34.9), null);


(lib.StripFade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_341 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(341).call(this.frame_341).wait(1));

	// mh3
	this.instance = new lib.ICONmhteal();
	this.instance.setTransform(793.7,141.25,2.4844,2.4844,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,x:331.55},341,cjs.Ease.sineInOut).wait(1));

	// baby2
	this.instance_1 = new lib.ICONbabyblue();
	this.instance_1.setTransform(768.65,69.5,2.7049,2.7049,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:262.6},341,cjs.Ease.sineInOut).wait(1));

	// devices
	this.instance_2 = new lib.ICONdevicesteal();
	this.instance_2.setTransform(608.95,142.15,3.0577,3.0577);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:173.45},341,cjs.Ease.sineInOut).wait(1));

	// preggo2
	this.instance_3 = new lib.ICONpreggoblue();
	this.instance_3.setTransform(560.3,64,2.6756,2.6756);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.35},341,cjs.Ease.sineInOut).wait(1));

	// tooth
	this.instance_4 = new lib.ICONtoothblue();
	this.instance_4.setTransform(519.4,140.95,2.4991,2.4991,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:31.05},341,cjs.Ease.sineInOut).wait(1));

	// xhand
	this.instance_5 = new lib.ICONxhandteal();
	this.instance_5.setTransform(423.95,57,2.3374,2.3374,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-11.45},341,cjs.Ease.sineInOut).wait(1));

	// mh2
	this.instance_6 = new lib.ICONmhteal();
	this.instance_6.setTransform(400.95,140.95,2.4844,2.4844,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,x:-90.4},341,cjs.Ease.sineInOut).wait(1));

	// mask
	this.instance_7 = new lib.ICONmaskteal();
	this.instance_7.setTransform(337,51.35,2.4844,2.4844,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-171.8},341,cjs.Ease.sineInOut).wait(1));

	// preggo1
	this.instance_8 = new lib.ICONpreggoblue();
	this.instance_8.setTransform(272.3,143.75,2.6756,2.6756);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-223.2},341,cjs.Ease.sineInOut).wait(1));

	// xOR
	this.instance_9 = new lib.ICONxOR();
	this.instance_9.setTransform(200.4,55.8,3.1607,3.1607,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0,regY:0,x:-265.95,y:55.5},341,cjs.Ease.sineInOut).wait(1));

	// baby1
	this.instance_10 = new lib.ICONbabyblue();
	this.instance_10.setTransform(151.8,145.4,2.7049,2.7049,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0,regY:0,x:-505.6,y:145.15},341,cjs.Ease.sineInOut).wait(1));

	// steth
	this.instance_11 = new lib.ICONstethblue();
	this.instance_11.setTransform(67.9,64.25,3.293,3.293);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-480.55,y:62.75},341,cjs.Ease.sineInOut).wait(1));

	// mh1
	this.instance_12 = new lib.ICONmhteal();
	this.instance_12.setTransform(-26.15,139.5,2.4844,2.4844,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-316.1},341,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-561.2,-9.3,1405.6,214.20000000000002);


// stage content:
(lib.CO_IconsProc_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,341];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_341 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(341).call(this.frame_341).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(342));

	// ICON1
	this.instance = new lib.ICONstethteal();
	this.instance.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150,alpha:1,mode:"synched",startPosition:0},39,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},40,cjs.Ease.quartIn).to({_off:true},1).wait(262));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(150,369,1,1,0,0,0,0,24);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(334));

	// ICON2
	this.instance_2 = new lib.ICONbabyblue();
	this.instance_2.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},39,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},41,cjs.Ease.quartIn).to({_off:true},1).wait(190));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(156,381,1,1,0,0,0,0,36);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,163,181,1)",0,0,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({alpha:1},8).wait(263));

	// ICON3
	this.instance_4 = new lib.ICONshotteal();
	this.instance_4.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(143).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},38,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},42,cjs.Ease.quartIn).to({_off:true},1).wait(118));

	// HEAD3
	this.instance_5 = new lib.HEAD3();
	this.instance_5.setTransform(156,369,1,1,0,0,0,0,24);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:false},0).to({alpha:1},8).wait(191));

	// ICON4
	this.instance_6 = new lib.ICONtoothblue();
	this.instance_6.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(215).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},38,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},40,cjs.Ease.quartIn).to({_off:true},1).wait(48));

	// HEAD4
	this.instance_7 = new lib.HEAD4();
	this.instance_7.setTransform(156,369,1,1,0,0,0,0,24);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(215).to({_off:false},0).to({alpha:1},8).wait(119));

	// ICON5
	this.instance_8 = new lib.ICONxhandteal();
	this.instance_8.setTransform(318.75,257.3,3.3749,3.3749);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(287).to({_off:false},0).to({x:150,alpha:1},35,cjs.Ease.quartOut).wait(20));

	// HEAD5
	this.instance_9 = new lib.HEAD5();
	this.instance_9.setTransform(150,423,1,1,0,0,0,0,24);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(287).to({_off:false},0).to({alpha:1},8).wait(47));

	// StripFade
	this.instance_10 = new lib.StripFade();
	this.instance_10.setTransform(272.8,62.3,0.8,0.8,0,0,0,272.8,57.9);
	this.instance_10.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(342));

	// HS logo
	this.instance_11 = new lib.HS_logo();
	this.instance_11.setTransform(72.15,543.05,0.4305,0.4305,0,0,0,0.8,71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(342));

	// CO logo
	this.instance_12 = new lib.CO_v_color();
	this.instance_12.setTransform(204.1,540.85,0.486,0.486,0,0,0,0.2,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(342));

	// CTA
	this.instance_13 = new lib.BUTTON();
	this.instance_13.setTransform(150.1,466.05,1,1,0,0,0,-0.8,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(341).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_14 = new lib.icon_bg_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(342));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(62.1,299.5,668,301);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CO_IconsProc_300x600_atlas_1.jpg", id:"CO_IconsProc_300x600_atlas_1"}
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;