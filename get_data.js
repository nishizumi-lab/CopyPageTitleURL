// コマンドが発行されたときに、現在アクティブなタブのタイトルとURLを取得
// Markdown形式でcontent.jsにメッセージを送信
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var title = activeTab.title;
      var url = activeTab.url;
      var result = '[' + title + '](' + url + ')';
      // content.jsにメッセージを送信
      (async () => {
        chrome.tabs.sendMessage(activeTab.id, {command: "copy", text: result})
      })();
    });
  })