import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="minh-screen mt-20">
      <div
        className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5
      "
      >
        {/* {left} */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-500 via-lime-500 to-lime-300 rounded-lg text-white">
              Roys
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is my blog. There are many like it, but this one is mine.
          </p>
        </div>
        {/* {right} */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username"></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value="Your email"></Label>
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              ></TextInput>
            </div>
            <div>
              <Label value="Your password"></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
              ></TextInput>
            </div>
            <Button outline gradientDuoTone="tealToLime" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex flex-row gap-4 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
