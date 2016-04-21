var dropdown = document.querySelector('.dropdown');
var submenu = document.querySelector('.submenu');
var submenu2 = document.querySelector('.submenu2');
var submenuDropdown = document.querySelector('.submenu__dropdown');

function displaySubmenu(el) {
  var submenuItem = document.querySelector('.submenu__item');
  var submenuList = document.querySelectorAll('.submenu__item');
  var height = 0;

  var submenuItemHeight = submenuItem.offsetHeight;

  if (el.style.height == 0 || el.style.height == '0px') {
    var displayInt = setInterval(function(){
      height += 15;
      el.style.height = height + 'px';
      if (height > (submenuItemHeight * submenuList.length)) {
        clearInterval(displayInt);
      };  
    }, 10);
  };
};

function hideSubmenu(el){
  var height = el.offsetHeight;

  if (el.offsetHeight > 0) {
    var hideInt = setInterval(function(){
      height -= 15;
      el.style.height = height + 'px'
      if (height < 1){
        clearInterval(hideInt);
      };  
    }, 10);
  };
};

dropdown.addEventListener('mouseover', function(){
  displaySubmenu(submenu);
});

dropdown.addEventListener('mouseleave', function(){
  hideSubmenu(submenu);
});

submenuDropdown.addEventListener('mouseover', function(){
  displaySubmenu(submenu2);
});

submenuDropdown.addEventListener('mouseleave', function(){
  hideSubmenu(submenu2);
});