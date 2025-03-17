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
            // href="https://roys-space-portfolio.vercel.app/"
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
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUTKKMOQcDVhB7FbU3Utn1dy3Vk7zQ9l72d_WeTi5s2d6Abu6GpQf2kDq2LK5vLKHLYFtxQ601XR9Z6tzXsdkQPZNjJlkNxOOlt8W1qsdyg5TyNQ3cmsbYdY5VfknnpJEUoK81xFMIqLDvPXdbeoKXezwpnrdPxdzzmLGeKqZCakFlIVZdkwzvf4bGV8Z9/s1895/Screenshot%202025-03-17%20222420.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default CallToAction;
