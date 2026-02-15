document.addEventListener("contentLoaded", () => {
  const forYouBtn = document.querySelector('.hd-for-you');
  const followingBtn = document.querySelector('.hd-following');

  forYouBtn.addEventListener('click', () => {
    forYouBtn.classList.add('selected');
    followingBtn.classList.remove('selected');
  });

  followingBtn.addEventListener('click', () => {
    followingBtn.classList.add('selected');
    forYouBtn.classList.remove('selected');
  });
});