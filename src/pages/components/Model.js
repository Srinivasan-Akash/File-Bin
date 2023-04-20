import React from 'react'
import styles from '@/styles/Model.module.css'
import { useRef } from 'react';

export default function Model() {
  const folderUpload = useRef(null)

  const openFileUploadForFolder = () => {
    folderUpload.current.click()
  }

  const handleFolderUpload = () => {

  }

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
