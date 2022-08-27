import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "sonyaweb", //YOUR CLOUDNAME HERE
  },
});

const pancake1 = cld.image("pancake1");
const baking = cld.image("baking");

export const pancakeArr = [{ img: baking }, { img: pancake1 }];
