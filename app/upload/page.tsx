"use client"
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}
const uploadImage = () => {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      {publicId && <CldImage src={publicId} height={270} width={180} alt='Image Uploaded'/>}
    <CldUploadWidget uploadPreset='SigmaMA' onSuccess={(result, widget) => {
      if (result.event !== 'success') return;
      const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
    }}>
        {({open}) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
      </>
  )
}

export default uploadImage;

// Overall Nothing, just GAD

