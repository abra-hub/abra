document.addEventListener("DOMContentLoaded", function () {
	'use strict';

	var Agent = function(noiseZRange) {
		this.vector = myp5.createVector(myp5.random(myp5.width), myp5.random(myp5.height));
		this.vectorOld = this.vector.copy();
		this.stepSize = myp5.random(1, 0.3);
		this.angle;
		this.noiseZ = myp5.random(noiseZRange);
	  };

	  Agent.prototype.update = function(strokeWidth, noiseZVelocity) {
		this.vector.x += myp5.cos(this.angle) * this.stepSize;
		this.vector.y += myp5.sin(this.angle) * this.stepSize;

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

	  Agent.prototype.update2 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
		this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * 24;
		this.angle = (this.angle - myp5.floor(this.angle)) * noiseStrength;

		this.update(strokeWidth, noiseZVelocity);
	  };


	var sketch = function(p) {
		var agents = [];
		var agentCount = 1000;
		var noiseScale = 100;
		var noiseStrength = 110;
		var noiseZRange = 0.4;
		var noiseZVelocity = 0.01;
		var overlayAlpha = 10;
		var agentAlpha = 90;
		var strokeWidth = 1;
		var drawMode = 1;

		p.setup = function() {
		  p.createCanvas(p.windowWidth, p.windowHeight);

		  for (var i = 0; i < agentCount; i++) {
			agents[i] = new Agent(noiseZRange);
		  }
		};

		p.draw = function() {
		  p.fill(255, overlayAlpha);
		  p.noStroke();
		  p.rect(0, 0, p.width, p.height);
		  // Draw agents
		  p.stroke(100, agentAlpha);
		  for (var i = 0; i < agentCount; i++) {
			if (drawMode == 1) {
			  agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
			} else {
			  agents[i].update2(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
			}
		  }
		};

		p.windowResized = function(e) {
			p.resizeCanvas(p.windowWidth, p.windowHeight);
		}

		p.keyReleased = function() {
		  if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
		  if (p.key == '1') drawMode = 1;
		  if (p.key == '2') drawMode = 2;
		  if (p.key == ' ') {
			var newNoiseSeed = p.floor(p.random(10000));
			// console.log('newNoiseSeed', newNoiseSeed);
			p.noiseSeed(newNoiseSeed);
		  }
		  if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
		};

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

