
// ===== CONTROLLER =====
define(
  'controller', // module name
  ['jquery'], // зависимости

  function () {
    return function Controller(model, view) {
      var self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.todolist__pic--delete', removeItem);
      view.elements.listContainer.on('click', '.todolist__pic--edit', editItem);

      function addItem() {
        // body...
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        // body...
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
      }

      function editItem() {
        // body...
        $(this).prev().attr('contenteditable','true');
        $(this).prev().focus();
        $('.todolist__pic--edit').css('display', 'none');
        $('.todolist__pic--ok').css('display', 'inline');
        $(this).prevAll().addClass('todolist__edit');
        
        $('.todolist__pic--ok').on('click', function(){

          $(this).prevAll().attr('contenteditable', 'false');
          $(this).prevAll().removeClass('todolist__edit');
          $('.todolist__pic--edit').css('display', 'inline');
          $('.todolist__pic--ok').css('display', 'none');
        });
      }
    };
  }
);