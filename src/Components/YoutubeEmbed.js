import React from "react";
import PropTypes from "prop-types";
// import "./styles.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
    //   width="676"
    //   height="380"
      src="https://www.youtube.com/embed/dYBTmAl5434"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

https: YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
