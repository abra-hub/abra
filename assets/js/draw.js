document.addEventListener("DOMContentLoaded", function () {
	'use strict';

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	  }

	var Agent = function(noiseZRange, index) {
		var isEven = false
		if(index % 2 == 0) {
			isEven = true
		}
		this.vector = myp5.createVector(isEven ? 0 : myp5.width, getRandomArbitrary(0, myp5.height));
		this.vectorOld = this.vector.copy();
		this.stepSize = getRandomArbitrary(1, 1.5);
		this.angle;
		this.noiseZ = getRandomArbitrary(0, noiseZRange);
	  };

	  Agent.prototype.update = function(strokeWidth, noiseZVelocity) {
		this.vector.x += Math.cos(this.angle) * this.stepSize;
		this.vector.y += Math.sin(this.angle) * this.stepSize;

		if (this.vector.x < -10) this.vector.x = this.vectorOld.x = myp5.width + 10;
		if (this.vector.x > myp5.width + 10) this.vector.x = this.vectorOld.x = -10;
		if (this.vector.y < -10) this.vector.y = this.vectorOld.y = myp5.height + 10;
		if (this.vector.y > myp5.height + 10) this.vector.y = this.vectorOld.y = -10;

		myp5.strokeWeight(strokeWidth * this.stepSize);
		myp5.line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);

		this.vectorOld = this.vector.copy();

		this.noiseZ += noiseZVelocity;
	  };

	  Agent.prototype.update1 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
		this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * noiseStrength;
		this.update(strokeWidth, noiseZVelocity);
	  };

	var sketch = function(p) {
		p.disableFriendlyErrors = true; // disables FES
		var agents = [];
		var agentCount = 1500;
		var noiseScale = 100;
		var noiseStrength = 110;
		var noiseZRange = 0.4;
		var noiseZVelocity = 0.001;
		var overlayAlpha = 10;
		var agentAlpha = 255;
		var strokeWidth = 1;
		var drawMode = 1;
		var a = 0.05
		var bgColor = p.unhex(['d1', 'd9', 'd6']);
		var r = bgColor[0] * a + 255 * (1 - a)
		var g = bgColor[1] * a + 255 * (1 - a)
		var b = bgColor[2] * a + 255 * (1 - a)
		p.setup = function() {
		  p.createCanvas(p.windowWidth, p.windowHeight);
		  p.colorMode(p.RGB, 255, 255, 255, 1);

		  for (var i = 0; i < agentCount; i++) {
			agents[i] = new Agent(noiseZRange, i);
		  }
		};

		p.draw = function() {
		//   p.fill(p.color("#d1d9d605"));
		//   p.fill(r,g,b,a);
		  p.fill('rgba(255, 255, 255, 0.025)');
		  p.noStroke();
		  p.rect(0, 0, p.width, p.height);
		  // Draw agents
		  for (var i = 0; i < agentCount; i++) {
			p.stroke(102, 116, 124, getRandomArbitrary(0.1,1));
			agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
		  }
		};

		p.windowResized = function(e) {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
		}

		p.mouseWheel = function(e) {
			// console.log(e)window.innerWidth
			var y = e.screenY
			// strokeWidth = y / 100
			// strokeWidth(x);
		}

	  };

	  var myp5 = new p5(sketch, "canvas_draw");

	  window.onscroll = function(e) {
		// print "false" if direction is down and "true" if up
		// console.log(this.oldScroll > this.scrollY);
		this.oldScroll = this.scrollY;
		// console.log(this.oldScroll)
		// myp5.noiseScale = this.oldScroll
	  }
});

