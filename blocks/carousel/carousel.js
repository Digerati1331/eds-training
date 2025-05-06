export default function decorate(block) {
  const divCarouselSlide = document.createElement('div');
  divCarouselSlide.setAttribute('id', 'carouselExampleControls');
  divCarouselSlide.setAttribute('class', 'carousel slide');
  divCarouselSlide.setAttribute('data-ride', 'carousel');
  const divInnerCarousel = document.createElement('div');
  divInnerCarousel.classList.add('carousel-inner');
  divCarouselSlide.append(divInnerCarousel);
  [...block.children].forEach((child, index) => {
    const img = child.firstElementChild.firstElementChild.lastElementChild;
    const divCarouselItem = document.createElement('div');
    divCarouselItem.classList.add('carousel-item');
    if (index === 0) {
      divCarouselItem.classList.add('active');
    }
    img.setAttribute('class', 'd-block w-100');
    divInnerCarousel.append(img);
  });
  const prev = document.createElement('a');
  prev.classList.add('carousel-control-prev');
  prev.setAttribute('href', '#carouselExampleControls');
  prev.setAttribute('role', 'button');
  prev.setAttribute('data-slide', 'prev');
  const prevSpan1 = document.createElement('span');
  prevSpan1.classList.add('carousel-control-prev-icon');
  prevSpan1.setAttribute('aria-hidden', true);
  const prevSpan2 = document.createElement('span');
  prevSpan2.classList.add('sr-only');
  prevSpan2.textContent = 'Previous';
  prev.append(prevSpan1);
  prev.append(prevSpan2);
  const next = document.createElement('a');
  next.classList.add('carousel-control-next');
  next.setAttribute('href', '#carouselExampleControls');
  next.setAttribute('role', 'button');
  next.setAttribute('data-slide', 'next');
  const nextSpan1 = document.createElement('span');
  nextSpan1.classList.add('carousel-control-next-icon');
  nextSpan1.setAttribute('aria-hidden', true);
  const nextSpan2 = document.createElement('span');
  nextSpan2.classList.add('sr-only');
  nextSpan2.textContent = 'Next';
  next.append(nextSpan1);
  next.append(nextSpan2);
  divCarouselSlide.append(prev);
  divCarouselSlide.append(next);
  block.textContent = '';
  block.append(divCarouselSlide);
}
