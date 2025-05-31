/**
 * Popup event handlers for the Codro extension.
 * Sets up UI interactions after the DOM is ready.
 */
function setupPopup() {
  const copyBtn = document.querySelector('.main-button');
  const askBtn = document.querySelector('.ask-button');
  const outlineCheckbox = document.querySelector('input[type="checkbox"]');

  chrome.storage.sync.get(['outlineBuilderComponents'], (data) => {
    outlineCheckbox.checked = !!data.outlineBuilderComponents;
    sendOutlineMessage(outlineCheckbox.checked);
  });

  copyBtn?.addEventListener('click', handleCopyLayout);
  askBtn?.addEventListener('click', handleAskNow);
  outlineCheckbox?.addEventListener('change', () => {
    const checked = outlineCheckbox.checked;
    chrome.storage.sync.set({ outlineBuilderComponents: checked }, () => {
      sendOutlineMessage(checked);
    });
  });
}

/** Sends a copyLayout message and closes the popup. */
function handleCopyLayout() {
  chrome.runtime.sendMessage({ type: 'copyLayout', payload: {} }, () => {
    setTimeout(() => window.close(), 100);
  });
}

/** Opens the extension documentation in a new tab. */
function handleAskNow() {
  chrome.tabs.create({ url: 'https://www.builder.io/c/docs/chrome-extension' });
}

/** Informs the active tab to outline Builder components. */
function sendOutlineMessage(shouldOutline) {
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

document.addEventListener('DOMContentLoaded', setupPopup);
