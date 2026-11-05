// Open the side panel when the toolbar icon is clicked.
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});

// The content script (inside the Telegram page) tells us the unread count.
chrome.runtime.onMessage.addListener((msg) => {
  if (msg && msg.type === "unread") {
    const n = Number(msg.count) || 0;
    chrome.action.setBadgeText({ text: n > 0 ? String(n > 99 ? "99+" : n) : "" });
    chrome.action.setBadgeBackgroundColor({ color: "#e53935" });
  }
});
