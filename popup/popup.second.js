/**
 * Secondary popup script providing the same behaviour as popup.js
 * for legacy compatibility.
 */
function setupPopupSecond() {
  const copyBtn = document.querySelector('.main-button');
  const askBtn = document.querySelector('.ask-button');
  const outlineCheckbox = document.querySelector('input[type="checkbox"]');

  chrome.storage.sync.get(['outlineBuilderComponents'], (data) => {
    outlineCheckbox.checked = !!data.outlineBuilderComponents;
    sendOutlineMessageSecond(outlineCheckbox.checked);
  });

  copyBtn?.addEventListener('click', handleCopyLayoutSecond);
  askBtn?.addEventListener('click', handleAskNowSecond);
  outlineCheckbox?.addEventListener('change', () => {
    const checked = outlineCheckbox.checked;
    chrome.storage.sync.set({ outlineBuilderComponents: checked }, () => {
      sendOutlineMessageSecond(checked);
    });
  });
}

/** Sends a copyLayout message and closes the popup. */
function handleCopyLayoutSecond() {
  chrome.runtime.sendMessage({ type: 'copyLayout', payload: {} }, () => {
    setTimeout(() => window.close(), 100);
  });
}

/** Opens the extension documentation in a new tab. */
function handleAskNowSecond() {
  chrome.tabs.create({ url: 'https://www.builder.io/c/docs/chrome-extension' });
}

/** Communicates the outline state to the active tab. */
function sendOutlineMessageSecond(shouldOutline) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'outlineElements',
      payload: {
        shouldOutline,
        builderOutlineStylesClass: 'builder-outline-elements-style',
        builderEditClassName: 'builder-edit-extension',
      },
    });
  });
}

document.addEventListener('DOMContentLoaded', setupPopupSecond);
