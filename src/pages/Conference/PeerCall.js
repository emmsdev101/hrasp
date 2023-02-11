import { faClose, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

export default function PeerCall({
  stream,
  index,
  userId,
  own,
  pinCall,
  pinned
}) {
  let vref = useRef();

  useEffect(() => {
    console.log(stream)
    if (stream) {
      vref.current.muted = own;
      vref.current.srcObject = stream;
      vref.current.addEventListener("loadedmetadata", () => {
        vref.current.play();
      });
    }
  }, []);
  return (
      <div className={pinned?"pinnedVideo":"vedioDiv"} onClick={() => pinCall(userId)}>
        <p
          icon={faThumbTack}
          color="white"
          style={{
            position: "relative",
            left: "5px",
            top: "5px",
            fontSize: "12px",
            margin: 0,
            padding: 0,
            zIndex: 1,
            color: "white",
          }}
        >
          Emmanuel Katipunan
        </p>
        <video
          ref={vref}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: 0,
            left: 0,
            top: 0,
            borderRadius: "5px",
          }}
        ></video>
      </div>
  )
}
