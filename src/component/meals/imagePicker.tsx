'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';


import classes from './imagePicker.module.css';

type Props = {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: Props) {
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined)

  function handlePickClick() {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    let file;
    if (event.target.files) {
      file = event.target.files[0];
    }
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result !== null) {
        setPickedImage(fileReader.result as string);

      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>{!pickedImage && <p>No image picked yet</p>}
          {pickedImage &&
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          required
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
