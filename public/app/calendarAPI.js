// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = 'your-app-key';

var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

/*Check the user authentication */

function checkAuth() {
  gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
}

/* Handles authorization of server */

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadCalendarApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/* Response function to user click */

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
  return false;
}

/* Load client library */

function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

/* Print results of user's calendar response */

function listUpcomingEvents() {
  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 15,
    'orderBy': 'startTime'
  });

  request.execute(function(resp) {
    var events = resp.items;

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {

        var event = events[i];

        var monthNames = [
          'January', 'February', 'March',
          'April', 'May', 'June', 'July',
          'August', 'September', 'October',
          'November', 'December'];
        var dayNames = [
          'Monday', 'Tuesday', 'Wednesday',
          'Thursday', 'Friday', 'Saturday', 'Sunday'];

        var when = new Date(event.start.dateTime);
        var print;
        if (!when) {
          when = new Date(event.start.date);
          print = dayNames[when.getDay()] + ', ' +
              monthNames[when.getMonth()] + ' ' + when.getDate();
        }
        print = when.toLocaleTimeString().replace(/(.*)\D\d+/, '$1') + ' ' +
            dayNames[when.getDay()] + ', ' + monthNames[when.getMonth()] + ' ' +
            when.getDate();
        //appendPre(i+1+'.  '+ event.summary + ' at '+' '+ print + '\n');
        appendPre(event.summary + ' at ' + ' ' + print + '\n');
      }
    } else {
      appendPre('No upcoming events found.');
    }

  });
}

/* Will retrieve the next output to body as node */

function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
