chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command == "copy") {
      navigator.clipboard.writeText(message.text).then(function() {
        // クリップボードへのコピー成功時
      }, function() {
        // クリップボードへのコピー失敗功時
      });
    }
});