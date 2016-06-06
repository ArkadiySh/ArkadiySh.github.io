
// ===== VIEW =====

define(
  'view', // module name
  ['jquery', 'template'], // зависимости

  function () {
    return function View(model) {
      var self = this;

      function init () {
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);

        self.elements = {
          input: $('.todolist__value'),
          addBtn: $('.todolist__button-add'),
          listContainer: $('.todolist__list') 
        };

        self.renderList(model.data);
      };

      self.renderList = function (data) {
        // body...
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);

      };

      init();
    };
  }
);