import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';
import Model from './components/Model';
import Navbar from './components/Navbar';
import dynamic from "next/dynamic";
import NoSSR from "react-no-ssr";
import addBgGalleryEffect from './utils/bgAnimation';
const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

export default function Home() {
  useEffect(() => {
    addBgGalleryEffect()    
  }, [])
  

  const steps = [
    { title: "👩‍🏫 Intro To FileBin", content: "FileBin is a webapp by which users can upload files and share them securely with OTP which is optional. User can upload multiple files which will be later g-zipped and shared.", target: "#mainDiv", placement: "center", styles: {options: {zIndex: 99999999}}},
    { title: "🏃‍♂️ Go To NavBar", content: "When you click on this button you can see the menu", target: "#hamburger", placement: "bottom-end", styles: {options: {zIndex: 99999999}}},
    { title: "📤 Upload Your Files", content: "Clicking on this will open a file explorer select the files later it will zip your files and create a shareable or downloadable link", target: "#uploadContent", placement: "left", styles: {options: {zIndex: 99999999}}},
    { title: "📞 SetUp Phone Number", content: "This is optional to fill but when you fill it if anyone visits the link and tries to download this number will get the OTP that user needs to enter to access the files", target: "#number", placement: "left", styles: {options: {zIndex: 99999999}}},
    { title: "🔎 Find Your Link", content: "After uploading the sharable link will be given here", target: "#shareAbleLink", placement: "top", styles: {options: {zIndex: 99999999}}},
    { title: "👨‍👨‍👦‍👦 Share The Link", content: "Click on this to copy the link. Share it and others can download", target: "#clipboard", placement: "right", styles: {options: {zIndex: 99999999}}},
  ]
  return (
    <>
      <Navbar></Navbar>
      <main className={styles.main}>
        <canvas id="canvas"></canvas>
        <Model></Model>
      </main>
      <NoSSR>
      <Joyride continuous hideCloseButton showProgress showSkipButton scrollToFirstStep steps={steps}></Joyride>
      </NoSSR>
      
    </>
  )
}
