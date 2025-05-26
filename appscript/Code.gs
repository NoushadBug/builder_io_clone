/**
 * Append layout data to a log sheet.
 * @param {Object} data Information about the layout.
 */
function logLayout(data) {
  var id = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  var sheet = SpreadsheetApp.openById(id).getSheetByName('Layouts');
  sheet.appendRow([new Date(), data.url, data.title]);
}

/**
 * HTTP handler for POST requests.
 * Accepts a JSON body with layout info.
 */
function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  logLayout(data);
  return ContentService.createTextOutput('OK');
}

/**
 * Basic GET handler for status checks.
 */
function doGet() {
  return HtmlService.createHtmlOutput('Codro script active');
}
