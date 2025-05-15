document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Animasi untuk seluruh halaman saat dimuat
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.add('transition-opacity', 'opacity-100', 'duration-1000');
    }, 200);
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
  
        // Sembunyikan semua tab dengan animasi keluar (fade-out)
        tabContents.forEach(content => {
          if (!content.classList.contains('hidden')) {
            content.classList.add('opacity-0');
            setTimeout(() => {
              content.classList.add('hidden');
              content.classList.remove('opacity-0', 'opacity-100', 'translate-y-0');
            }, 200); // Durasi animasi keluar
          }
        });
  
        // Tampilkan tab yang dipilih dengan animasi masuk (fade-in + slide-up)
        setTimeout(() => {
          targetContent.classList.remove('hidden');
          targetContent.classList.add('opacity-0', 'translate-y-2', 'transition-all', 'duration-300', 'ease-in-out');
  
          setTimeout(() => {
            targetContent.classList.remove('opacity-0', 'translate-y-2');
            targetContent.classList.add('opacity-100', 'translate-y-0');
          }, 10); // Biarkan DOM render dulu sebelum transisi masuk
        }, 200);
      });
    });
  
    // Animasi masuk untuk kontainer profil saat halaman dimuat
    const profileContainer = document.querySelector('.profile-container');
    profileContainer.classList.add('transition-opacity', 'duration-700', 'opacity-0');
    setTimeout(() => {
      profileContainer.classList.add('opacity-100');
      profileContainer.classList.remove('opacity-0');
    }, 100);
  
    // Efek hover pada gambar profil
    const profileImage = document.querySelector('img');
    profileImage.addEventListener('mouseover', () => {
      profileImage.classList.add('scale-105', 'transition-transform', 'duration-300');
    });
  
    profileImage.addEventListener('mouseout', () => {
      profileImage.classList.remove('scale-105');
    });
  
    // Animasi fade-in untuk seluruh halaman
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
    }, 500); // Delay untuk memastikan bahwa body dimulai dengan opacity 0
  });
  