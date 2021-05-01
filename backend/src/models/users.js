import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("User", userSchema);
