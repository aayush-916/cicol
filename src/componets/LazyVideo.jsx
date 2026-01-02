import { useEffect, useRef, useState } from "react";
import "./LazyVideo.css";

const LazyVideo = ({ videos = [] }) => {
  const refs = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="lazy-video-section">
      <div className="lazy-video-container">

        {/* HEADING (TRUE CENTER) */}
        <div className="lazy-video-heading">
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937" }}>
            Product Videos
          </h2>
          <p style={{ fontSize: "18px", color: "#4b5563", marginTop: "12px" }}>
            Watch explanations of our products and brand philosophy.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="lazy-video-grid">
          {videos.map((video, index) => (
            <div
              key={index}
              className="lazy-video-card"
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
            >
              <div className="lazy-video-wrapper">
                {visible[index] && (
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>

              <div className="lazy-video-text">
                <h3>{video.title}</h3>
                {video.description && <p>{video.description}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LazyVideo;
