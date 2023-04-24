import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "@/styles/Downloads.module.css";
import { useEffect, useState } from "react";
import { downloadFile } from "../lib/supabaseClient";
import JSZip from "jszip";
import addBgGalleryEffect from "../utils/bgAnimation";
import Preloader from "../components/Preloader";

export default function download() {
  const router = useRouter();
  const { id } = router.query;
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [fileArray, setFileArray] = useState([])
  const [preloaderIsShown, setPreloaderIsShown] = useState(true)
  const jsZip = new JSZip();

  async function extractFiles(url) {
    fetch(url)
      .then(function (response) {
        return response.arrayBuffer();
      })
      .then(function (arrayBuffer) {
        jsZip.loadAsync(arrayBuffer).then(function (zip) {
          Object.keys(zip.files).forEach(function (filename) {
            zip.files[filename].async("ArrayBuffer").then(function (fileData) {
              setFileArray(prevState => [...prevState, {
                name: filename,
                size: fileData.byteLength
              }]);
            });
          });
        });
      });
  }
  useEffect(() => {
    async function fetchDownloadUrl() {
      if (id) {
        const url = await downloadFile(id);
        setDownloadUrl(url);
        if (url) {
          console.log(url);
          setPreloaderIsShown(false)
          extractFiles(url);
        }
      }
    }
    fetchDownloadUrl();
    addBgGalleryEffect()
  }, [id]);

  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.container}>
        <canvas id="canvas" className={styles.canvas}></canvas>
        <main className={styles.fileInfo}>
          <h1>Contains the following</h1>
          <div className={styles.fileExplorer}>
            {fileArray.map((file, index) => (
              <div className={styles.file} key={index}>
                <h3>{file.name}</h3>
                <h4>{Math.round(file.size/1024)} kb</h4>
              </div>
            ))}
          </div>

          <div className={styles.OTPsection}>
            <h1>Enter Your 4-digit OTP</h1>
            <div className={styles.OTPform}>
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
              <input type="text" maxLength="1" />
            </div>
          </div>
        </main>
        <main className={styles.download}>
          <h1>{id}</h1>
          <div className={styles.btns}>
            {downloadUrl !== null ? (
              <a href={downloadUrl} download={id}>
                <button>Download</button>
              </a>
            ) : (
              <a href={downloadUrl} download={id}>
                <button>Loading</button>
              </a>
            )}
            <a>
              <button>Scan For Virus</button>
            </a>
          </div>
        </main>
      </div>
      <div className={styles.overlay}></div>
      {preloaderIsShown? (
        <Preloader></Preloader>
      ): <></>}
    </div>
  );
}
