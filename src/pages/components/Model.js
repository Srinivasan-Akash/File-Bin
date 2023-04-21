import React from 'react'
import styles from '@/styles/Model.module.css'
import { useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import pako from 'pako';

export default function Model() {
  const folderUpload = useRef(null)

  const openFileUploadForFolder = () => {
    folderUpload.current.click()
  }

  const handleFolderUpload = async (event) => {
    const files = Array.from(event.target.files);
    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        const gzippedFile = await gzip(file);
        return new File([gzippedFile], `${file.name}.gz`, {
          type: "application/gzip",
        });
      })
    );
  
    for (const file of compressedFiles) {
      const { data, error } = await supabase.storage
        .from("Files")
        .upload(`${file.name}`, file);
  
      if (error) {
        console.log(error.message);
      } else {
        console.log(`File uploaded: ${data.Key}`);
      }
    }
  };
  
  const gzip = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const compressedFile = pako.gzip(reader.result);
        resolve(compressedFile);
      };
      reader.onerror = () => {
        reject(new Error("Unable to read file"));
      };
      reader.readAsArrayBuffer(file);
    });
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
