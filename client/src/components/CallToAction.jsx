import { Button } from "flowbite-react";

function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text">
      <div className="flex-1 justify-center flex flex-col ">
        <h2 className="text-2xl ">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-5">
          Checkout these resources to learn more about JavaScript.
        </p>
        <Button
          gradientDuoTone="tealToLime"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://roys-space-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://d2ms8rpfqc4h24.cloudfront.net/top_javascript_development_tools_bb7222ea32.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default CallToAction;
