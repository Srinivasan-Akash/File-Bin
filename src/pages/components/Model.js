import React from 'react'
import styles from '@/styles/Model.module.css'
import { useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import JSZip from 'jszip';

export default function Model() {
  const folderUpload = useRef(null)

  const openFileUploadForFolder = () => {
    folderUpload.current.click()
  }

  const handleFolderUpload = async (event) => {
    const files = Array.from(event.target.files);
  
    // Create a new instance of JSZip
    const zip = new JSZip();
  
    // Add each file to the zip archive
    files.forEach((file) => {
      const filename = file.name;
      zip.file(filename, file);
    });
  
    // Generate a random filename for the archive
    const randomName = `FileBin-${Math.random().toString(36).substr(2, 8)}.zip`;
  
    // Generate the compressed archive
    const compressedBlob = await zip.generateAsync({ type: "blob" });
  
    // Upload the compressed archive to the database
    const { data, error } = await supabase.storage
      .from("Files")
      .upload(randomName, compressedBlob);
  
    if (error) {
      console.log(error);
    } else {
      console.log(`File uploaded: ${data.Key}`);
    }
  };
  
  

  return (
    <section className={styles.glass}>
        <h1>Share Family Memories Easily</h1>
        <div className={styles.btns}>
            <button>Drag & Drop</button>
            <div>
                <button>Download Content</button>
                <button onClick={openFileUploadForFolder}>Upload Content</button>
                <input ref={folderUpload} onChange={handleFolderUpload} type='file' style={{"display": "none"}} multiple/>
            </div>
        </div>
    </section>
  )
}