import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "Please fill all the fields!"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json({ message: "Signup Successfull!" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "Please fill all the fields!"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "Invalid email or password!"));
    }
    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      return next(errorHandler(400, "Invalid email or password!"));
    }

    const token = jwt.sign(
      { id: validUser._id, email: validUser.email, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { name, email, googlePhotoUrl } = req.body;
  if (!name || !email || name === "" || email === "") {
    next(errorHandler(400, "Please fill all the fields!"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      //user is not there in DB create a new user
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      const { password: pass, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
      res.json({ message: "Signup Successfull!" });
    } else {
      //user is there in DB
      const token = jwt.sign(
        {
          id: validUser._id,
          email: validUser.email,
          isAdmin: validUser.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      const { password: pass, ...rest } = validUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
