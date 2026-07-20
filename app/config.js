// ─────────────────────────────────────────────────────────────────────────────
// HSDL Project Number Generator — Configuration
// Fill in these four values after completing the setup steps in setup/README.md
// ─────────────────────────────────────────────────────────────────────────────

window.HSDL_CONFIG = {

  // Azure AD → App Registrations → Your App → Application (client) ID
  clientId: "84bcef2c-6c03-47db-ad52-e312a928614e",

  // Azure AD → App Registrations → Your App → Directory (tenant) ID
  tenantId: "51b24c19-4762-49c6-849c-f1b907ff2798",

  // Full URL of the SharePoint site where your lists will live
  // e.g. "https://headspacedl.sharepoint.com/sites/HSDL"
  siteUrl: "https://headspacedl.sharepoint.com/:u:/r/sites/headspacefounders/SitePages/Home.aspx?csf=1&web=1&share=IQCRz3mHQju-R7pxxJm_5RHjActyep5DtZDJ88DnSBExXtU&e=HK447H",

  // These match the List names you create in SharePoint (don't change unless you rename the lists)
  clientsListName:  "HSDL Clients",
  projectsListName: "HSDL Projects"

};
