'use client'

import classes from './image-picker.module.css';
import {useRef, useState} from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const [selectedImage, setSelectedImage] = useState();
    const imageInput = useRef();

    const handlePickClick = () => {
        imageInput.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if(!file) {
            setSelectedImage(null)
            return;
        }

        const fileReader = new FileReader();
        
        fileReader.onload = ()=> {
            setSelectedImage(fileReader.result)
        }
       
        fileReader.readAsDataURL(file)
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!selectedImage && <p>No image selected yet...</p>}
                {selectedImage && 
                (<Image src={selectedImage}
                alt='Image selected by you'
                fill/> )}
            </div>
            <input
            className={classes.input} 
            type='file'
            id={name}
            accept='image/png, image/jpeg'
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
            />
            <button className={classes.button} type='button' onClick={handlePickClick}>Select an image</button>
        </div>
    </div>
}