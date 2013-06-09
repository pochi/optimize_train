$(function() {
  chrome.runtime.onInstalled.addListener(function(){
    updateTrainSchedule();
    chrome.alarms.create('updateTrainSchedule', { delayInMinutes: 1 });
  });

  chrome.runtime.onStartup.addListener(function(){
    chrome.alarms.create('updateTrainSchedule', { periodInMinutes: 1 });
  });

  chrome.alarms.onAlarm.addListener(function(alarm) {

  });

  var updateTrainSchedule = function() {
    $.ajax({
      url: 'http://transit.loco.yahoo.co.jp/',
      type: 'POST',
      dataType: 'html',
      data: {
        'flatlon': '',
        'tlatlon': '',
        'via': '',
        'expkind': '1',
        'ym': '201306',
        'd': '09',
        'datepicker': '',
        'hh': '02',
        'm1': '0',
        'm2': '4',
        'type': '1',
        'ws': '2',
        's': '0',
        'x': '101',
        'y': '31',
        'kw': '千葉ニュータウン中央'
      },
      crossDomain: true,
      success: function(data, textStatus, xhr) {
        var h = $(data);
        console.log(h.find(".route-head"));
        console.log("----------");
        console.log(h.html());
        // chrome.browserAction.setBadgeText({"text": "hogehoge"});
        chrome.browserAction.setBadgeBackgroundColor({"color": "#00b200"});
      }
    })
  };
})