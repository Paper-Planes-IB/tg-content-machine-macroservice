const CFG = {
  spreadsheetId: 'PASTE_SPREADSHEET_ID_HERE',
  url: 'PASTE_DASHBOARD_JSON_URL_HERE',
  auth: 'PASTE_BASIC_AUTH_SECRET_IN_APPS_SCRIPT_ONLY',
  dashboardTz: 'Asia/Tashkent'
};

/*
  This file is a safe public template.

  The full working Google Apps Script currently lives in the client table package.
  Do not commit the live script with real credentials.

  Required production modules:
  - updateTgFinances
  - writeRawDaily_
  - writeRawMonthly_
  - writeFinanceSummary_
  - writeSignals_
  - refreshMarketingDashboard_
  - generateWeeklyContentPlan
  - mergeWeeklyPlanPreservingManual_
  - syncMasterToAccountSheets_
  - syncIgRowsToMaster_
  - syncApprovedWeeklyPlan
  - handleWeeklyPlanEdit
  - setupAutomation
  - setupContentSync
*/

function setupAutomation() {
  throw new Error('Install the production script in the protected Google Apps Script project.');
}

function setupContentSync() {
  throw new Error('Install the production script in the protected Google Apps Script project.');
}
