// src/cloudinary.js
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: 'ddsh7sc4i', // Reemplaza con tu nombre de Cloud
  secure: true,
});

export default cloudinary;
