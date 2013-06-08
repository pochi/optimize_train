chrome.runtime.onInstalled.addListener(function(){
  chrome.alarms.create('updateTrainSchedule', { delayInMinutes: 1 });
});

chrome.runtime.onStartup.addListener(function(){
  chrome.alarms.create('updateTrainSchedule', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  alert("moge");
});