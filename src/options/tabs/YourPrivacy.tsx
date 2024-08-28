import "../options.css";

const YourPrivacy = () => {
  return (
    <div className="flex flex-col gap-5 bg-white w-[1000px] rounded-xl mx-auto p-10">
      <h2 className="text-4xl font-bold">Your Privacy</h2>
      <div className="flex flex-col gap-5 text-2xl">
        <p>
          We prioritize your privacy and data security. Here’s how we protect
          you:
        </p>
        <ul className="flex flex-col gap-5">
          <li className="flex flex-col gap-2">
            <span>
              ✳️ <strong>Local Storage</strong>
            </span>
            <span className="pl-10">
              All settings and website lists are stored locally on your device.
              No data is transmitted to external servers.
            </span>
          </li>
          <li className="flex flex-col gap-2">
            <span>
              ✳️ <strong>No Tracking</strong>
            </span>
            <span className="pl-10">
              Our extension does not track your browsing activity or collect any
              personal information.
            </span>
          </li>
          <li className="flex flex-col gap-2">
            <span>
              ✳️ <strong>Full Control</strong>
            </span>
            <span className="pl-10">
              You can easily add or remove websites from your list, ensuring
              only the sites you choose are managed.
            </span>
          </li>
          <li className="flex flex-col gap-2">
            <span>
              ✳️ <strong>Transparency</strong>
            </span>
            <span className="pl-10">
              The extension's actions are clear and straightforward. You can
              always see and manage the list of sites being handled.
            </span>
          </li>
        </ul>
        <p>
          Your trust is important to us. We are committed to maintaining the
          highest standards of privacy and security for our users.
        </p>
      </div>
    </div>
  );
};

export default YourPrivacy;
