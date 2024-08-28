import "../options.css";

const FAQ = () => {
  const qanda = [
    {
      question: "What does this extension do?",
      answer:
        "Our extension automatically removes records of specific websites from your browser history, helping you maintain privacy.",
    },
    {
      question: "How do I add a website to the list?",
      answer:
        "Simply enter the website name in the input field on the extension’s popup and click 'Add'. The website will be added to the list and managed by the extension.",
    },
    {
      question: "How do I remove a website from the list? ",
      answer:
        "Click the ✖️ button next to the website name in the extension’s popup to remove it from the list.",
    },
    {
      question: "Is my browsing activity tracked or stored?",
      answer:
        "No, the extension does not track your browsing activity or store any personal information. All data is kept locally on your device.",
    },
    {
      question: "Can I see which websites are being managed?",
      answer:
        "Yes, you can view the list of managed websites in the extension’s popup. You have full control over this list.",
    },
    {
      question: "What permissions does the extension need?",
      answer:
        "The extension requires permissions to access your browsing history and storage to manage and store the list of websites. These permissions are only used to provide the functionality described.",
    },
    {
      question: "Is my data shared with third parties?",
      answer:
        "No, your data is never shared with third parties. Everything is handled locally within your browser.",
    },
    {
      question: "How can I ensure the extension is working properly?",
      answer:
        "You can check the extension’s popup to see the list of websites being managed. Additionally, you can review your browser history to confirm that records of the specified websites are being removed.",
    },
    {
      question: "Can I temporarily disable the extension?",
      answer:
        "Yes, you can disable the extension from the browser’s extension management page. Reactivate it whenever you need it again.",
    },
    {
      question: "How do I uninstall the extension?",
      answer:
        "To uninstall, go to your browser’s extension management page, find our extension, and click 'Remove'.",
    },
  ];

  return (
    <div className="flex flex-col gap-5 bg-white w-[1000px] rounded-xl mx-auto p-10">
      <h2 className="text-4xl font-bold">FAQ</h2>
      <div className="flex flex-col gap-5 text-2xl">
        {qanda.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <span className="font-bold">
                {index + 1}. {item.question}
              </span>
              <span>{item.answer}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
