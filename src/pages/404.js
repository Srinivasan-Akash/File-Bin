import React from "react"
import styles from "@/styles/404.module.css"
import Image from "next/image"
import { useEffect } from "react"

export default function NotFound() {
  const [wallBgListItems, tvGlassVintageList] = [new Array(), new Array()]

  for (let i = 0; i < 40; i++) wallBgListItems.push(<li key={i}></li>)
  for (let i = 0; i < 25; i++) tvGlassVintageList.push(<li key={i}></li>)
  useEffect(() => {
    let Application = ( function () {
      let canvas, ctx, imgData, pix, flickerInterval

      let init = function () {
          canvas = document.getElementById('canvas')
          ctx = canvas.getContext('2d')
          ctx.fillStyle = 'white'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.fill()
          imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          pix = imgData.data
          flickerInterval = setInterval(flickering, 30)
      }
  
      let flickering = function () {
          for (let i = 0; i < pix.length; i += 4) {
              let color = (Math.random() * 255) + 50
              pix[i] = color
              pix[i + 1] = color
              pix[i + 2] = color
          }
          ctx.putImageData(imgData, 0, 0)
      }
  
      return {
          init: init
      }
  }())
  
  Application.init()
  }, [])
  
  return (
    <div className={styles.page}>
      <div className={styles["wall-bg"]}>
        <ul>
          {wallBgListItems}
        </ul>
        <div className={styles["wall-poster"]}>
          <h1>
            game <span>over</span>
          </h1>
          <i className={styles["mr-akabei"]}>
            <div className={styles["mr-akabei-content"]}>
              <span className={styles["mr-akabei-eye-first"]}></span>
              <span className={styles["mr-akabei-eye-second"]}></span>
              <span className={styles["mr-akabei-bottom-1"]}></span>
              <span className={styles["mr-akabei-bottom-2"]}></span>
              <span className={styles["mr-akabei-bottom-3"]}></span>
              <span className={styles["mr-akabei-bottom-4"]}></span>
              <span className={styles["mr-akabei-bottom-5"]}></span>
              <span className={styles["mr-akabei-bottom-6"]}></span>
              <span className={styles["mr-akabei-bottom-7"]}></span>
            </div>
            <i className={styles["point-first"]}></i>
            <i className={styles["point-second"]}></i>
            <i className={styles["point-third"]}></i>
            <i className={styles["point-four"]}></i>
            <i className={styles["point-last"]}></i>
          </i>
          <i className="mr-pacman">
          <i className={styles["point-first"]}></i>
            <i className={styles["point-second"]}></i>
            <i className={styles["point-third"]}></i>
            <i className={styles["point-four"]}></i>
          </i>
          <span>1980</span>
        </div>
        <div className={styles["wall-desk"]}>
          <div className={styles["timer"]}>
            <i className={styles["timer-shadow"]}></i>
            <div className={styles["timer-content"]}>
              <div className={styles["timer-hr"]}>
                <div className={styles["timer-digits"]}></div>
              </div>
              <i className={styles["timer-hr-right"]}></i>
            </div>
            <i className={styles["timer-right"]}></i>
            <i className={styles["timer-hr-first"]}></i>
            <i className={styles["timer-hr-second"]}></i>
            <i className={styles["timer-hr-third"]}></i>
            <i className={styles["timer-hr-last"]}></i>
          </div>
          <i className={styles["wall-desk-shadow"]}></i>
          <i className={styles["wall-desk-bottom"]}></i>
          <i className={styles["wall-desk-bottom"]}></i>
          <i className={styles["wall-desk-right"]}></i>
        </div>
      </div>
      <div className={styles["floor-bg"]}>
        <div className={styles["floor-hr"]}>
          <i></i>
        </div>
      </div>

      <div className={styles["tv-content"]}>
        <div className={styles["tv"]}>
          <div className={styles["tv-top"]}>
            <i className={styles["item-left"]}></i>
            <i className={styles["item-right"]}></i>
          </div>
          <div className={styles["tv-shadow"]}></div>
          <div className={styles["tv-right"]}></div>
          <div className={styles["tv-bottom"]}>
            <ul>
              {wallBgListItems}
            </ul>
            <i></i>
          </div>
          <div className={styles["tv-screen"]}>
            
            <a href="" className={styles["pw-btn"]}></a>
            
            <div className={styles["tv-hr"]}>
              
              <div className={styles["tv-hr-2"]}>
                
                <div className={styles["tv-hr-3"]}>
                  
                  <div className={styles["tv-glass"]}>
                  <canvas className={styles.canvas} id="canvas"></canvas>

                  <Image className={styles.fourOfour} src={"https://cdn.discordapp.com/attachments/1026086520802787349/1099054540852056134/21.04.2023_23.51.25_REC-removebg-preview.png"} width={100} height={100}/>

                    <div
                      className={styles["video-container paused"]}
                      data-volume-level="high"
                    >
                      
                    </div>
                    <div className={styles["tv-glass-vintage"]}>
                      <ul>
                        {tvGlassVintageList}
                      </ul>

                      <i className={styles["tv-noise"]}></i>
                      <i className={styles["tv-noise-second"]}></i>
                      <i className={styles["tv-glow"]}></i>
                    </div>
                  </div>
                  <div className={styles["tv-flashing"]}>
                    <i className={styles["tv-flashing-left"]}></i>
                    <i className={styles["tv-flashing-bottom"]}></i>
                    <i className={styles["tv-flashing-bottom-placeholder"]}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["tv-desk"]}>
          <i className={styles["tv-desk-shadow"]}></i>
          <i className={styles["tv-desk-item-left-shadow"]}></i>
          <i className={styles["tv-desk-item-left"]}></i>
          <i className={styles["tv-desk-item-right-shadow"]}></i>
          <i className={styles["tv-desk-item-right"]}></i>
          <i className={styles["tv-desk-item-rear-shadow"]}></i>
          <i className={styles["tv-desk-item-rear"]}></i>
          <i className={styles["tv-desk-top"]}></i>
          <i className={styles["tv-desk-front"]}></i>
          <i className={styles["tv-desk-right"]}></i>
        </div>
      </div>

      <div className={styles["console"]}>
        <i className={styles["console-shadow"]}></i>
        <div className={styles["console-top"]}>
          <i className={styles["console-game-top"]}></i>
          <div className={styles["console-top-panel"]}>
            <i className={styles["console-top-panel-item-2"]}></i>
            <i className={styles["console-top-panel-item-3"]}></i>
            <i className={styles["console-top-panel-item-4"]}></i>
            <i className={styles["console-top-panel-item-5"]}></i>
            <i className={styles["console-top-panel-item-6"]}></i>
            <i className={styles["console-top-panel-item-7"]}></i>
            <i className={styles["console-top-panel-item-8"]}></i>
          </div>
        </div>
        <i className={styles["console-right-top"]}></i>
        <i className={styles["console-right-bottom"]}></i>
        <div className={styles["console-front-panel"]}>
          <div className={styles["front-panel-top"]}>
            <i className={styles["console-power-dark"]}></i>
            <i className={styles["console-power-dark"]}></i>
          </div>
          <div className={styles["front-panel-bottom"]}>
            <i className={styles["console-power-indicator"]}></i>
            <i className={styles["console-btn-first"]}></i>
            <i className={styles["console-btn-second"]}></i>
            <div className={styles["console-power"]}>
              <div className={styles["console-power-plug"]}>
                <i></i>
              </div>
              <i className={styles["console-power-cable"]}></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["player-1"]}>
        <div className={styles["player-hand-left"]}>
          <div className={styles["hand-content"]}>
            <i className={styles["hand-left"]}></i>
            <i className={styles["hand-inner"]}></i>
            <i className={styles["hair-item-1"]}></i>
            <i className={styles["hair-item-2"]}></i>
            <i className={styles["hair-item-3"]}></i>
            <i className={styles["hair-item-4"]}></i>
            <i className={styles["hair-item-5"]}></i>
            <i className={styles["hair-item-6"]}></i>
            <i className={styles["hair-item-7"]}></i>
            <i className={styles["hair-item-8"]}></i>
            <i className={styles["hair-item-9"]}></i>
            <i className={styles["hair-item-10"]}></i>
            <i className={styles["hair-item-11"]}></i>
            <i className={styles["hair-item-12"]}></i>
            <i className={styles["hair-item-13"]}></i>
            <i className={styles["hair-item-14"]}></i>
            <i className={styles["hair-item-15"]}></i>
            <i className={styles["hair-item-16"]}></i>
          </div>
          <div className={styles["finger-content"]}>
            <i className={styles["finger-placeholder"]}></i>
            <i className={styles["finger-touch"]}></i>
          </div>
        </div>
        <div className={styles["player-hand-right"]}>
          <div className={styles["hand-content"]}>
            <i className={styles["hand-left"]}></i>
            <i className={styles["hand-inner"]}></i>
            <i className={styles["hair-item-1"]}></i>
            <i className={styles["hair-item-2"]}></i>
            <i className={styles["hair-item-3"]}></i>
            <i className={styles["hair-item-4"]}></i>
            <i className={styles["hair-item-5"]}></i>
            <i className={styles["hair-item-6"]}></i>
            <i className={styles["hair-item-7"]}></i>
            <i className={styles["hair-item-8"]}></i>
            <i className={styles["hair-item-9"]}></i>
            <i className={styles["hair-item-10"]}></i>
            <i className={styles["hair-item-11"]}></i>
            <i className={styles["hair-item-12"]}></i>
            <i className={styles["hair-item-13"]}></i>
            <i className={styles["hair-item-14"]}></i>
            <i className={styles["hair-item-15"]}></i>
            <i className={styles["hair-item-16"]}></i>
          </div>
          <div className={styles["finger-content"]}>
            <i className={styles["finger-placeholder"]}></i>
            <i className={styles["finger-touch"]}></i>
          </div>
        </div>

        <div className={styles["controller-nes"]}>
          <i className={styles["controller-nes-cable"]}></i>
          <div className={styles["in-controller-nes"]}>
            <i className={styles["controller-nes-pad"]}></i>
            <div className={styles["controller-nes-option"]}>
              <i className={styles["hr-first"]}></i>
              <i className={styles["hr-second"]}></i>
              <i className={styles["hr-third"]}></i>
              <i className={styles["hr-last"]}></i>
              <div className={styles["controller-nes-option-btn"]}></div>
            </div>
            <div className={styles["controller-nes-btn"]}>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
