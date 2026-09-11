/**
 * typewriter(elementId, text, options)
 * Progressively types `text` into the element with the given id.
 *
 * @param {string} elementId  - id of the target element
 * @param {string} text       - the full string to type
 * @param {object} [opts]
 * @param {number} [opts.speed=90]       - ms between each character
 * @param {number} [opts.startDelay=400] - ms before typing begins
 * @param {string} [opts.cursorId]       - id of a cursor element to settle when done
 * @param {Function} [opts.onDone]       - called once the full string is typed
 */
export function typewriter(elementId, text, opts = {}) {
  const { speed = 90, startDelay = 400, cursorId, onDone } = opts;
  const el = document.getElementById(elementId);
  if (!el) return;

  // Respect the visitor's motion preference — show the text at once.
  if (reducedMotion()) {
    el.textContent = text;
    settleCursor(cursorId);
    if (onDone) onDone();
    return;
  }

  setTimeout(() => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i < text.length) return;

      clearInterval(interval);
      setTimeout(() => settleCursor(cursorId), 800);
      if (onDone) onDone();
    }, speed);
  }, startDelay);
}

/**
 * Types each phrase in turn, deletes it, and moves to the next — forever.
 * Used for the rotating role line under the hero name.
 *
 * @param {string} elementId
 * @param {string[]} phrases
 * @param {object} [opts]
 * @param {number} [opts.typeSpeed=70]
 * @param {number} [opts.deleteSpeed=35]
 * @param {number} [opts.holdTime=1800]  - ms a completed phrase stays on screen
 * @param {number} [opts.startDelay=0]
 */
export function rotatingTypewriter(elementId, phrases, opts = {}) {
  const {
    typeSpeed = 70,
    deleteSpeed = 35,
    holdTime = 1800,
    startDelay = 0,
  } = opts;

  const el = document.getElementById(elementId);
  if (!el || !phrases.length) return;

  if (reducedMotion()) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = phrases[phraseIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = phrase.slice(0, charIndex);

    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      delay = holdTime;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 380;
    }

    setTimeout(tick, delay);
  };

  setTimeout(tick, startDelay);
}

function settleCursor(cursorId) {
  if (!cursorId) return;
  const cursor = document.getElementById(cursorId);
  if (cursor) cursor.classList.add('cursor-done');
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
