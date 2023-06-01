class VirtualObject {
    constructor(domNode, config) {
      //core
      this.me = domNode;
      //config
      this.power = (config && config.power) ? config.power : {x : 0.06,y : 0.05};
      this.maxSpeed = (config && config.maxSpeed) ? config.maxSpeed : 10;
      this.maxDistance = (config && config.maxDistance) ? config.maxDistance : {x : 3000,y : 200};
      //core config
      this.localPosition = {x : 0,y : 0};
      this.last = {x : 0,y : 0};
      this.vector = {x : 0,y: 0};
      this.seed = {x : 0,y : 0};
      this.allowSeed = {x : true,y : true};
      window.addEventListener("mousemove", (e) => this.brain(e));
    }
    brain(e) {
      const x = e.clientX;
      const y = e.clientY;
      //plant a seed
      if (this.allowSeed.x) {
        this.seed.x = x;
        this.allowSeed.x = false;
      }
      if (this.allowSeed.y) {
        this.seed.y = y;
        this.allowSeed.y = false;
      }
      //control seed and direction X
      this.controllDirectionX(x);
      this.controllDirectionY(y);
      //update last position and move (send diference)
      this.move(x - this.seed.x , y - this.seed.y);
      this.last.x = x;
      this.last.y = y;
    }
    controllDirectionX(x){
      if (x >= this.last.x + 1) {
        if (this.vector.x == -1) this.allowSeed.x = true;
        this.vector.x = 1;
      }
      else if (x <= this.last.x - 1) {
        if (this.vector.x == 1) this.allowSeed.x = true;
        this.vector.x = -1;
      }
    }
    controllDirectionY(y){
      if (y >= this.last.y + 1) {
        if (this.vector.y == -1) this.allowSeed.y = true;
        this.vector.y = 1;
      }
      else if (y <= this.last.y - 1) {
        if (this.vector.y == 1) this.allowSeed.y = true;
        this.vector.y = -1;
      }
    }
    move(x = 0, y = 0) {
      //prepare movement
      this.localPosition.x = 
        this.applyLimits(this.localPosition.x + this.applyLimits(x,this.maxSpeed) , this.maxDistance.x);
      this.localPosition.y = 
        this.applyLimits(this.localPosition.y + this.applyLimits(y,this.maxSpeed) , this.maxDistance.y);
      //apply movement
      this.me.style.left = `${this.localPosition.x * this.power.x}px`;
      this.me.style.top = `${this.localPosition.y * this.power.y}px`;
    }
    applyLimits(value , limit){
      if(value > 0){
        if(value > limit) return limit;
        else return value;
      }
      else{
        if(value < -limit) return -limit;
        else return value;
      }
    }
  }
  

  export  {
    VirtualObject
  }