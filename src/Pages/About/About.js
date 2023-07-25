import React from "react";
import pdf from "../../assets/React Tutorials.pdf";
import gif from "../../assets/XOsX.gif";
import video from "../../assets/pexels_videos_1851190 (2160p).mp4";
import "./about.css";

export default function About() {
  //For multipal download content
  const handleMultiDownload = () => {
    const filesToDownload = [pdf, gif, video];
    filesToDownload.forEach((fileURL) => {
      const anchor = document.createElement("a");
      anchor.href = fileURL;
      anchor.download = fileURL.substring(fileURL.lastIndexOf("/") + 1); // Set the filename for download
      anchor.style.display = "none"; // Hide the anchor element
      document.body.appendChild(anchor);
      anchor.click(); // Trigger the download
      document.body.removeChild(anchor); // Remove the anchor element after download
    });
  };

  return (
    <div>
      <h1>KHALAS APURV khalas ABOUT PAGE</h1>
      <div>
        <button className="about-btn" onClick={handleMultiDownload}>
          Click Here To Download!!
        </button>
      </div>
    </div>
  );
}
