/**
 * typewriter(elementId, text, options)
 * Progressively types `text` into the element with the given id.
 *
 * @param {string} elementId  - id of the target <span>
 * @param {string} text       - the full string to type
 * @param {object} [opts]
 * @param {number} [opts.speed=90]       - ms between each character
 * @param {number} [opts.startDelay=400] - ms before typing begins
 * @param {string} [opts.cursorId]       - optional id of a cursor element to hide when done
 */
export function typewriter(elementId, text, opts = {}) {
  const { speed = 90, startDelay = 400, cursorId } = opts;

  setTimeout(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        // After a short pause, stop the cursor blink to signal "done"
        if (cursorId) {
          setTimeout(() => {
            const cursor = document.getElementById(cursorId);
            if (cursor) cursor.classList.add('cursor-done');
          }, 800);
        }
      }
    }, speed);
  }, startDelay);
}
