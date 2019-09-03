import ReactDOM from 'react-dom';

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
window.smoothScrollTo = function (endX, endY, duration) {
  let startX = window.scrollX || window.pageXOffset,
    startY = window.scrollY || window.pageYOffset,
    distanceX = endX - startX,
    distanceY = endY - startY,
    startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = function (time, from, distance, duration) {
    if ((time /= duration / 2) < 1) {
      return distance / 2 * time * time * time * time + from;
    }
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  var timer = window.setInterval(() => {
    let time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      window.clearInterval(timer);
    }
    window.scrollTo(newX, newY);
  }, 1000 / 60); // 60 fps
};

export const scrollToRef = (ref, offsetTop, duration) => {
  const _offsetTop = offsetTop || 0;

  let offset;
  if (ref.offsetTop) {
    offset = ref.offsetTop + _offsetTop;
  } else {
    offset = ReactDOM.findDOMNode(ref).offsetTop + _offsetTop;
  }

  const scrollDuration = duration || (offset - 250) / (offset / 1500);
  window.smoothScrollTo(0, offset + 1, scrollDuration);
};