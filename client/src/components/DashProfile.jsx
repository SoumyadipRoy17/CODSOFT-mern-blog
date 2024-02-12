import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">PROFILE</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="userPhoto"
            className="rounded-full w-full h-full border-8 object-cover border-[lightgray]"
          ></img>
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          className=""
        ></TextInput>
        <TextInput
          type="email"
          id="email"
          placeholder="name@company.com"
          defaultValue={currentUser.email}
          className=""
        ></TextInput>
        <TextInput
          type="password"
          id="password"
          placeholder="Password"
          className=""
        ></TextInput>
        <Button type="submit" gradientDuoTone="pinkToOrange">
          Update
        </Button>
      </form>
      <div className="text-red-500 mt-4  flex justify-between">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out?</span>
      </div>
    </div>
  );
}

export default DashProfile;
