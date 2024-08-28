let websites;

chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const hostname = new URL(tab.url).hostname;

    chrome.storage.sync.get(["doNotSaveToHistoryList"], (result) => {
      websites = result.doNotSaveToHistoryList || [];

      const matchedWebsite = websites.find((website: string) =>
        hostname.includes(website)
      );

      if (matchedWebsite) {
        chrome.history.search(
          {
            text: matchedWebsite,
            startTime: 0,
            maxResults: 999999,
          },
          function (results) {
            let itemsDeleted = 0;
            for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) {
              chrome.history.deleteUrl({
                url: results[itemsDeleted].url as string,
              });
            }
          }
        );
      }
    });
  }
});
