export default function addBgGalleryEffect() {
    let Photo,
          addListeners,
          canvas,
          createGrid,
          ctx,
          gridItem,
          grids,
          height,
          img,
          imgInfo,
          imgSrc,
          imgs,
          init,
          magnet,
          mouse,
          populateCanvas,
          render,
          resizeCanvas,
          rotateAndPaintImage,
          updateMouse,
          useGrid,
          width;
        let images = [
          "https://cdn.discordapp.com/attachments/1096184493167104150/1098939363863310346/3a311286-10b5-4dbf-8b0b-55de773c3a15.jpg",
        ];
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        imgSrc = images[Math.floor(Math.random() * images.length)];
        img = new window.Image();
        useGrid = true;
        imgInfo = {};
        imgs = [];
        grids = [];
        magnet = 15000;
        mouse = {
          x: 1,
          y: 0,
        };
  
        init = function () {
          addListeners();
          img.onload = function (e) {
            let numberToShow;
            // Check for firefox.
            imgInfo.width = e.path ? e.path[0].width : e.target.width;
            imgInfo.height = e.path ? e.path[0].height : e.target.height;
            numberToShow =
              Math.ceil(window.innerWidth / imgInfo.width) *
              Math.ceil(window.innerHeight / imgInfo.height);
            if (useGrid) {
              createGrid();
            }
            populateCanvas(numberToShow * 12.5);
            canvas.classList.add("ready");
            return render();
          };
          return (img.src = imgSrc);
        };
  
        addListeners = function () {
          window.addEventListener("resize", resizeCanvas);
          window.addEventListener("mousemove", updateMouse);
          return window.addEventListener("touchmove", updateMouse);
        };
  
        updateMouse = function (e) {
          mouse.x = e.clientX;
          return (mouse.y = e.clientY);
        };
  
        resizeCanvas = function () {
          width = canvas.width = window.innerWidth;
          return (height = canvas.height = window.innerHeight);
        };
        // Magic
        populateCanvas = function (nb) {
          let i, p, results;
          i = 0;
          results = [];
          while (i <= nb) {
            p = new Photo();
            imgs.push(p);
            results.push(i++);
          }
          return results;
        };
  
        createGrid = function () {
          let c,
            grid,
            i,
            imgScale,
            item,
            j,
            k,
            l,
            r,
            ref,
            ref1,
            ref2,
            results,
            x,
            y;
          imgScale = 0.5;
          grid = {
            row: Math.ceil(window.innerWidth / (imgInfo.width * imgScale)),
            cols: Math.ceil(window.innerHeight / (imgInfo.height * imgScale)),
            rowWidth: imgInfo.width * imgScale,
            colHeight: imgInfo.height * imgScale,
          };
          for (
            r = j = 0, ref = grid.row;
            0 <= ref ? j < ref : j > ref;
            r = 0 <= ref ? ++j : --j
          ) {
            x = r * grid.rowWidth;
            for (
              c = k = 0, ref1 = grid.cols;
              0 <= ref1 ? k < ref1 : k > ref1;
              c = 0 <= ref1 ? ++k : --k
            ) {
              y = c * grid.colHeight;
              item = new gridItem(x, y, grid.rowWidth, grid.colHeight);
              grids.push(item);
            }
          }
          results = [];
          for (
            i = l = 0, ref2 = grids.length;
            0 <= ref2 ? l < ref2 : l > ref2;
            i = 0 <= ref2 ? ++l : --l
          ) {
            results.push(grids[i].draw());
          }
          return results;
        };
  
        gridItem = function (x = 0, y = 0, w, h) {
          this.draw = function () {
            ctx.drawImage(img, x, y, w, h);
          };
        };
  
        Photo = function () {
          let TO_RADIANS, finalX, finalY, forceX, forceY, h, r, seed, w, x, y;
          seed = Math.random() * (2.5 - 0.7) + 0.7;
          w = imgInfo.width / seed;
          h = imgInfo.height / seed;
          x = window.innerWidth * Math.random();
          finalX = x;
          y = window.innerHeight * Math.random();
          finalY = y;
          r = Math.random() * (180 - -180) + -180;
          forceX = 0;
          forceY = 0;
          TO_RADIANS = Math.PI / 180;
          this.update = function () {
            let distance, dx, dy, powerX, powerY, x0, x1, y0, y1;
            x0 = x;
            y0 = y;
            x1 = mouse.x;
            y1 = mouse.y;
            dx = x1 - x0;
            dy = y1 - y0;
            distance = Math.sqrt(dx * dx + dy * dy);
            powerX = x0 - ((dx / distance) * magnet) / distance;
            powerY = y0 - ((dy / distance) * magnet) / distance;
            forceX = (forceX + (finalX - x0) / 2) / 2.1;
            forceY = (forceY + (finalY - y0) / 2) / 2.2;
            x = powerX + forceX;
            y = powerY + forceY;
          };
          this.draw = function () {
            return rotateAndPaintImage(
              ctx,
              img,
              r * TO_RADIANS,
              x,
              y,
              w / 2,
              h / 2,
              w,
              h
            );
          };
        };
  
        rotateAndPaintImage = function (
          context,
          image,
          angle,
          positionX,
          positionY,
          axisX,
          axisY,
          widthX,
          widthY
        ) {
          context.translate(positionX, positionY);
          context.rotate(angle);
          context.drawImage(image, -axisX, -axisY, widthX, widthY);
          context.rotate(-angle);
          return context.translate(-positionX, -positionY);
        };
  
        render = function () {
          let x, y;
          x = 0;
          y = 0;
          ctx.clearRect(0, 0, width, height);
          while (y < grids.length) {
            grids[y].draw();
            y++;
          }
          while (x < imgs.length) {
            imgs[x].update();
            imgs[x].draw();
            x++;
          }
          return requestAnimationFrame(render);
        };
        init();
}