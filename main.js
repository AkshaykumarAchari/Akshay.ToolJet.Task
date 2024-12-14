// ----------------------product-nav-bar------------------
document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const arrow = document.querySelector('.arrow');
  
    // Toggle dropdown menu visibility
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  
    // Rotate arrow
    arrow.style.transform =
      dropdownMenu.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
  

  // ----------------------Resource-nav-bar------------------
  document.querySelector('.dropdown2-toggle').addEventListener('click', function () {
    const dropdownMenu2 = document.querySelector('.dropdown-menu2');
    const arrow2 = document.querySelector('.arrow2');
  
    dropdownMenu2.style.display =
      dropdownMenu2.style.display === 'block' ? 'none' : 'block';
  
    arrow2.style.transform =
      dropdownMenu2.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
  