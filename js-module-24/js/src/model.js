
// ===== MODEL =====
define(

  'model', // module name
  ['jquery'], // dependencies

  function () {
    
    return function Model(data) {
      var self = this;

      self.data = data;

      self.addItem = function (item) {
        // body...
        if (item.length === 0) { return; }
        self.data.push(item);

        return self.data;
      };

      self.removeItem = function (item) {
        // body...
        var index = self.data.indexOf(item);

        if (item === -1) { return; }

        self.data.splice(index, 1);

        return self.data;
      };
    };
  }
);