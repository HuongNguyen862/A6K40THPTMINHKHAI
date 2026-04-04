document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const menuList = document.getElementById('menu-list');

  if (menuBtn && menuList) {
    menuBtn.addEventListener('click', () => {
      // Toggle lớp 'active' để hiện/ẩn menu
      menuList.classList.toggle('active');
      
      // Hiệu ứng xoay mũi tên (tùy chọn)
      menuBtn.style.transform = menuList.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }
});

