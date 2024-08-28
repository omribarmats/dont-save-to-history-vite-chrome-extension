import "../options.css";

const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-5 bg-white w-[1000px] rounded-xl mx-auto p-10">
      <h2 className="text-4xl font-bold">How it works</h2>
      <p className="text-2xl">
        Add keywords to the list, and the extension automatically deletes all
        history results that match the keywords. This ensures that any URLs
        containing these keywords will not appear in your browsing history.
      </p>
      <img
        src="dont-save-to-history-how-it-works.gif"
        alt="Gif showing a screen shot of the extension and moving arrows pointing at the inputs"
        className="my-3"
      />
      <h3 className="text-4xl font-bold">Example</h3>
      <p className="text-2xl">
        For the list above, none of these URLs will be saved to history:
      </p>
      <ul className="flex flex-col gap-5 text-2xl">
        <li>
          🔹 www.<strong>youtube</strong>.com
        </li>
        <li>
          🔹 www.<strong>youtube</strong>.com/watch?v=9bZkp7q19f0
        </li>
        <li>
          🔹 https://studio.<strong>youtube</strong>.com/channel/
        </li>
        <li>
          🔹 https://www.<strong>facebook</strong>.com
        </li>
        <li>
          🔹 m.<strong>facebook</strong>.com
        </li>
        <li>
          🔹 <strong>instagram</strong>.com
        </li>
        <li>
          🔹www.socialmedianews.com/how-to-open-<strong>instagram</strong>
        </li>
        <li>
          🔹https://<strong>twitter</strong>.com/elonmusk
        </li>
        <li>
          🔹www.<strong>twitter</strong>news.com
        </li>
      </ul>
    </div>
  );
};

export default HowItWorks;
