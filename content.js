// Runs only on web.telegram.org. Reads the unread count from the page title,
// e.g. "(3) Telegram Web", and sends just that number to the background script.
// It does not read or send any messages or chat content.
function report() {
  const m = document.title.match(/^\((\d+)\)/);
  const count = m ? parseInt(m[1], 10) : 0;
  try {
    chrome.runtime.sendMessage({ type: "unread", count });
  } catch (e) {
    /* extension reloaded; ignore */
  }
}

setInterval(report, 3000);
report();
