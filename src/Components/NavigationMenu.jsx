import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const menuItems = [
    { 
      label: "LOCATION AV (PUNE ROUTE)", 
      path: "/pune-route", 
      videoUrl: "https://www.youtube.com/embed/WqF0XIXFkpY" 
    },
    { 
      label: "WALKTHROUGH AV", 
      path: "/walkthrough",
      videoUrl: "https://www.youtube.com/embed/2iB6Gr1nufg"
    },
    { 
      label: "EXTERIOR AV", 
      path: "/exterior",
      videoUrl: "https://www.youtube.com/embed/AWXqjQKYuKs"
    },
    { 
      label: "INTERIOR AV", 
      path: "/interior",
      videoUrl: "https://www.youtube.com/embed/WP4G5i9DCsk"
    },
    { 
      label: "360° VIEW", 
      path: "/360-view",
      externalUrl: "https://view.pixeldo.com/Grande@GodrejSerene/"
    },
    { 
      label: "GET DIRECTION", 
      path: "/direction",
      externalUrl: "https://www.google.com/maps/place/Godrej+S2/@18.6681261,73.7097179,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x26b23f8686644710!8m2!3d18.6681261!4d73.7119066"
    },
    { 
      label: "BROCHURE", 
      path: "/brochure",
      externalUrl: "https://www.godrejproperties.com/backoffice/data_content/projects/godrej_serene_pune/ebrochure/-Grande_at_Godrej_Serene_Flipchart.pdf"
    }
  ];

  const openVideoInNewPage = (videoUrl) => {
    // Open a new window/tab with the video
    const newWindow = window.open('', '_blank');
    
    // Create HTML content for the new window with responsive design
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Godrej Properties - Video</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: black;
            overflow: hidden;
          }
          .video-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .video-wrapper {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
            object-fit: contain;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
          }
          @media screen and (max-width: 768px) {
            .close-btn {
              width: 30px;
              height: 30px;
              font-size: 16px;
            }
          }
        </style>
      </head>
      <body>
        <div class="video-container">
          <button class="close-btn" onclick="window.close()">✕</button>
          <div class="video-wrapper">
            <iframe 
              src="${videoUrl}?autoplay=1&mute=0" 
              title="Godrej Properties Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <script>
          // Attempt to go full screen on load
          function tryFullScreen() {
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer.requestFullscreen) {
              videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
              videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) {
              videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
              videoContainer.msRequestFullscreen();
            }
          }
          
          // Call full screen function after a short delay
          setTimeout(tryFullScreen, 500);
        </script>
      </body>
      </html>
    `);
    
    // Close the document writing
    newWindow.document.close();
  };

  const handleMenuItemClick = (e, item) => {
    e.preventDefault();
    
    // If it's a video, open in new page
    if (item.videoUrl) {
      openVideoInNewPage(item.videoUrl);
    } 
    // If it's an external URL, open in new tab
    else if (item.externalUrl) {
      window.open(item.externalUrl, '_blank');
    }
  };

  return (
    <div>
      <nav className="navigation-menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                onClick={(e) => handleMenuItemClick(e, item)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;