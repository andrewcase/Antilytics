/**
 * AntilyticsChrome namespace.
 */
if ("undefined" == typeof(AntilyticsChrome)) {
  var AntilyticsChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
AntilyticsChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("antilytics-string-bundle");
    let message = stringBundle.getString("antilytics.greeting.label");

    window.alert(message);
  }
};
