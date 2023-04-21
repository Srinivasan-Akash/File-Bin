import React, { useRef, useState } from "react";
import styles from "@/styles/Model.module.css";
import { supabase } from "../lib/supabaseClient";
import JSZip from "jszip";

export default function Model() {
  const folderUpload = useRef(null);
  const linkOutput = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(-1);

  const openFileUploadForFolder = () => {
    folderUpload.current.click();
  };

  const handleFolderUpload = async (event) => {
    setUploading(true);
    setUploadProgress(-1);

    const files = Array.from(event.target.files);
    const zip = new JSZip();
    files.forEach((file) => {
      const filename = file.name;
      zip.file(filename, file);
    });

    const randomName = `FileBin-${Math.random().toString(36).substr(2, 8)}.zip`;
    const compressedBlob = await zip.generateAsync({ type: "blob" });

    // Subscribe to the upload progress
    const { data, error } = await supabase.storage
      .from("Files")
      .upload(randomName, compressedBlob, {
        onUploadProgress: (evt) => {
          const percent = (evt.loaded * 100) / evt.total;
          setUploadProgress(Math.floor(percent));
        },
      });

    if (error) {
      console.log(error);
      setUploading(false);
    } else {
      console.log(`File uploaded: ${data.Key}`);
      const downloadLinkInMyWebPage = `${window.location.origin}/api/download/${randomName}`;
      setUploading(false)
      setUploadProgress(100)
      // alert(downloadLinkInMyWebPage)
      linkOutput.current.value = downloadLinkInMyWebPage
    }
  };

  function copyToClipBoard() {
    if (linkOutput.current) {
      navigator.clipboard.writeText(linkOutput.current.value)
        .then(() => alert("Link copied to clipboard!"))
        .catch((error) => alert("Failed to copy link to clipboard:", error));
    }
  }

  return (
    <section className={styles.glass} id="mainDiv">
      <h1>Share Family Memories Easily</h1>
      <div className={styles.btns}>
        <input type="text" id="shareAbleLink" readOnly={true} ref={linkOutput} contentEditable="false" defaultValue="Shareable URL Goes Here"/>
        <span id="clipboard" onClick={copyToClipBoard}>Copy</span>
        <div>
          <input id="number" type="number" min={0} placeholder="eg:- (91+ 7676856815)"/>
          <button id="uploadContent" onClick={openFileUploadForFolder}>
            {uploading ? (
              <>
                {uploadProgress === -1 ? (
                  <>
                    Uploading...{" "}
                  </>
                ) : (
                  <>
                    Uploading {uploadProgress}%{" "}
                  </>
                )}
              </>
            ) : (
              "Upload Content"
            )}
          </button>
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
