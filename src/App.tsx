import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [websites, setWebsites] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const maxWebsitesAllowed = 5;

  useEffect(() => {
    chrome.storage.sync.get(["doNotSaveToHistoryList"], (result) => {
      setWebsites(result.doNotSaveToHistoryList || []);
    });
  }, []);

  const handleAddWebsite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const website = (target.elements[0] as HTMLInputElement).value;

    chrome.storage.sync.get(["doNotSaveToHistoryList"], (result) => {
      const websites = result.doNotSaveToHistoryList || [];

      if (websites.includes(website)) {
        setErrorMessage(`❗${website} is already on the list.`);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
        return;
      }

      websites.push(website);
      chrome.storage.sync.set({ doNotSaveToHistoryList: websites }, () => {
        setWebsites([...websites]);
        setErrorMessage(`✔️${website} added to the list.`);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
    });
    (e.target as HTMLFormElement).reset();
    chrome.history.search(
      {
        text: website,
        startTime: 0,
        maxResults: 999999,
      },
      function (results) {
        console.log("results", results);
        let itemsDeleted = 0;
        for (itemsDeleted; itemsDeleted < results.length; itemsDeleted++) {
          chrome.history.deleteUrl({
            url: results[itemsDeleted].url as string,
          });
        }
      }
    );
  };

  const handleRemoveWebsite = (website: string) => {
    chrome.storage.sync.get(["doNotSaveToHistoryList"], (result) => {
      const websites = result.doNotSaveToHistoryList || [];
      if (websites.includes(website)) {
        const updatedWebsites = websites.filter((item: string) => {
          return item !== website;
        });

        chrome.storage.sync.set(
          { doNotSaveToHistoryList: updatedWebsites },
          () => {
            console.log(`${website} removed`);
            setWebsites(updatedWebsites);
            setErrorMessage(`✔️ ${website} removed from the list.`);
            setTimeout(() => {
              setErrorMessage("");
            }, 5000);
          }
        );
      }
    });
  };

  const openOptionsPage = () => {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL("options.html"));
    }
  };

  return (
    <div>
      <div className="flex text-slate-900 flex-col gap-2 border-b w-full h-full h-max px-5 pt-2 pb-5 text-base">
        <h1 className="text-2xl font-bold capitalize">Don't save to history</h1>
        <p>Add keywords to remove from all past and future history records.</p>
        <form
          onSubmit={(e) => handleAddWebsite(e)}
          className="flex flex-row gap-1 mt-2"
        >
          <input
            type="text"
            name="url"
            placeholder="Keyword e.g `instagram`"
            className="text-base border-2 border-slate-900 rounded-xl w-[80%] px-2 py-1"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            disabled={websites.length >= maxWebsitesAllowed}
          ></input>
          <button
            disabled={input.length < 1 || websites.length >= maxWebsitesAllowed}
            className="bg-slate-900 px-5 py-1 border-2 border-slate-900 rounded-xl text-white disabled:border-gray-300 disabled:bg-white disabled:text-gray-300"
          >
            Add
          </button>
        </form>
        {websites.length >= maxWebsitesAllowed && (
          <div className="text-xs leading-4">
            You have reached the maximum amount of keywords &#x28;
            {maxWebsitesAllowed}&#x29; in the free version. To add unlimited
            keywords for just $5/Year{" "}
            <button
              onClick={() => openOptionsPage()}
              className="font-bold text-[#007bff] underline"
            >
              click here
            </button>
            .
          </div>
        )}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="flex flex-col gap-3 px-5 py-2">
        <h2 className="font-bold text-xl">Your List</h2>
        <ul className="flex flex-col">
          {websites.map((website, index) => (
            <li
              key={index}
              className="flex flex-row gap-1 items-center text-base"
            >
              <>
                <span className="font-bold">
                  {index + 1}
                  <span />
                </span>
                . {website}
                <button
                  onClick={() => handleRemoveWebsite(website)}
                  className="my-1 text-xs"
                >
                  ✖️
                </button>
              </>
            </li>
          ))}
        </ul>
      </div>
      {websites.length >= maxWebsitesAllowed && (
        <div className="p-5">
          You have reached the maximum amount of keywords &#x28;
          {maxWebsitesAllowed}&#x29; in the free version. To add unlimited
          keywords for just $5/Year{" "}
          <button
            onClick={() => openOptionsPage()}
            className="font-bold text-[#007bff] underline"
          >
            click here
          </button>
          .
        </div>
      )}
    </div>
  );
}

export default App;
