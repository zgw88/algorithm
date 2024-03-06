function dispatch(str) {
    return new Util(str);
  }
  
  function Util(str) {
    this.pool = [];
    this.state = null;
    console.log(str);
    return this;
  }
  Util.prototype.println = function(str) {
    if (this.state === 'wait') {
      console.log(this.pool);
      this.pool.push(str);
    } else console.log(str);
    return this;
  };
  
  Util.prototype.wait = function(time) {
    this.state = 'wait';
    setTimeout(() => {
      this.pool.forEach(element => {
        console.log(element);
      });
      this.pool = [];
      this.state = null;
    }, time * 1000);
    return this;
  };
  dispatch('a').wait(3).println('b');