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
      <div className="p-7 flex-1 ">
        <img
          className="border border-teal-500 rounded-xl w-full h-full object-cover"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjh2i6AfQKADKjAK7jATMP8DZVhSLDOT5c0sXFvgmAH1DFFO5CTnYrzSZpt1l-VYGawPWN96nDl1UyntEc4ZefBEyOF_0ostTx7pDMbDJhFzPuft2pMAj85GObIR9hkU2YGnv9m8-WmSOgN0KfoRM6WERghtBmvT8Tvve_5k1ISNFJN57t8NXXC4KbCEvzt/w497-h243/Screenshot%202024-02-19%20182231.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default CallToAction;
