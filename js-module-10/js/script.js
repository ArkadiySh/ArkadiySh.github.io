var dropdown = document.querySelector('.dropdown');
var submenu = document.querySelector('.submenu');
var submenu2 = document.querySelector('.submenu2');
var submenuDropdown = document.querySelector('.submenu__dropdown');

// var submenuItem = document.querySelectorAll('.submenu__item');
// console.log(submenuItem);
// console.log(submenuItem.length);

function displaySubmenu(el) {
  var height = 0;

  // console.log(submenuItem);
  // var itemHeight = parseInt(submenuItem.style.height);
  // console.log(itemHeight);

	if (el.style.height == 0 || el.style.height == '0px') {
		var displayInt = setInterval(function(){
			height += 15;
			el.style.height = height + 'px'
      // if (height > (itemHeight * submenuItem.length) {
			if (height > 250){
				clearInterval(displayInt);
			};	
		}, 10);
	};
};

function hideSubmenu(el){
  var height = parseInt(el.style.height);

  if (parseInt(el.style.height) > 0) {
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