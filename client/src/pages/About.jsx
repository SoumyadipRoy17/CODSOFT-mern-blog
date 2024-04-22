function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font-semibold text-center my-7">
            About Roy's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Roy's Blog is a full-stack web application that allows users to
              read blog posts. The app is built with the MERN stack (MongoDB,
              Express.js, React.js, and Node.js). The app also uses Tailwind CSS
              for styling and react-icons for icons.
            </p>
            <p>
              The app is built with a focus on performance, responsiveness, and
              accessibility. The app is fully responsive and accessible on all
              devices.
            </p>
            <p>Hope you Enjoyed reading my Blogs!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
