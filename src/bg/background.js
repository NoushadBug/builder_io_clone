const INITIATORS = [
  "https://builder.io",
  "https://qa.builder.io",
  "https://beta.builder.io",
  "https://local.builder.io",
  "http://local.builder.io:1234",
  "http://localhost:1234",

  // TODO: how handle for others? proxy??? desktop app? Shogun etc proxy....
  "https://heybloomwell.com",
  "https://thebloomwell.myshopify.com",
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "resizeWindow" && message.width) {
    chrome.windows.getCurrent((window) => {
      chrome.windows.update(window.id, { width: message.width }, () => {
        if (chrome.runtime.lastError) {
          sendResponse({ success: false });
        } else {
          sendResponse({ success: true });
        }
      });
    });

    // Keep the message channel open for async response
    return true;
  }
});

const REMOVE_HEADERS = ["x-frame-options", "content-security-policy"];

const USER_AGENTS = {
  mobile: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1",
  tablet: "Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",
};

// Adopted from https://stackoverflow.com/a/2091331/1959717
function getQueryVariable(url, variable) {
  const query = url.split("?")[1] || "";
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

function removeURLParameter(url, parameter) {
  // prefer to use l.search if you have a location/link object
  const urlparts = url.split("?");

  if (urlparts.length < 2) {
    return url;
  }

  const prefix = encodeURIComponent(parameter) + "=";
  const pars = urlparts[1].split(/[&;]/g);

  // reverse iteration as may be destructive
  for (let i = pars.length; i-- > 0;) {
    //idiom for string.startsWith
    if (pars[i].lastIndexOf(prefix, 0) !== -1) {
      pars.splice(i, 1);
    }
  }

  return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
}

const BUILDER_USER_AGENT_KEY = "builder-user-agent";
const BUILDER_USER_AGENT_PARAM_NAME = "builder.overrideUserAgent";

let bound = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "copyLayout") {
    console.log("Starting copying of layout");
    // Relay the message to the active tab
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, (tabs) => {
        console.log("Identifying active tabs");
        if (tabs.length > 0) {
          console.log("Sending message to active tab");
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "copyLayout",
            payload: message.payload,
          });
        }
      });
    }, 100);
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "outlineElements") {
    // Relay the message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: "outlineElements",
          payload: message.payload,
        });
      }
    });
  }
});
