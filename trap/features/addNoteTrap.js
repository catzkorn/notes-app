// FEATURE TEST : Add a note
bait("FEATURE TEST : Add a note")
navigateTo('./index.html');

function executeTest() {
  populateForm("message", "Our test message");
  clickButton('submit-button');
  checkPageContains("Our test message");
  closeWindow();
}

