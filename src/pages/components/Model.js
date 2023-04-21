import React from "react";
import styles from "@/styles/Model.module.css";
import { useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import ShareableLinkPopup from "./ShareableLinkPopup";
import JSZip from "jszip";

export default function Model() {
  const folderUpload = useRef(null);

  const openFileUploadForFolder = () => {
    folderUpload.current.click();
  };

  const handleFolderUpload = async (event) => {
    const files = Array.from(event.target.files);
    const zip = new JSZip();
    files.forEach((file) => {
      const filename = file.name;
      zip.file(filename, file);
    });

    const randomName = `FileBin-${Math.random().toString(36).substr(2, 8)}.zip`;
    const compressedBlob = await zip.generateAsync({ type: "blob" });
    const { data, error } = await supabase.storage
      .from("Files")
      .upload(randomName, compressedBlob);

    if (error) console.log(error);
    else {
      console.log(`File uploaded: ${data.Key}`);
      const downloadLinkInMyWebPage = `${window.location.origin}/api/download/${randomName}`;
      console.log(downloadLinkInMyWebPage);
      // TODO: Display Link In A PopUp
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
          <input
            ref={folderUpload}
            onChange={handleFolderUpload}
            type="file"
            style={{ display: "none" }}
            multiple
          />
        </div>
      </div>
    </section>
  );
}
