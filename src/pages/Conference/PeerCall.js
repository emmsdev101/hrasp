import { faClose, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

export default function PeerCall({ myStream, own, call, pinCall, pinnedId, myId }) {
  const [stream, setStream] = useState(null);
  const [userId, setUserId] = useState(null)

  let vref = useRef();

  useEffect(() => {
    if (!own) {
      let lastId;

      console.log("Connecting to new user");

      call.on("stream", (userVideoStream) => {
        if (lastId !== userVideoStream.id) {
          lastId = userVideoStream.id;
          setStream(userVideoStream);
          console.log("Adding Call");
          setUserId(lastId)
        }
      });
      call.on("close", () => {
        setStream(null);
      });

    } else {
      setStream(myStream);
      setUserId(myId)
    }

    if(stream){
      vref.current.muted = own;
      vref.current.srcObject = stream;
    vref.current.addEventListener("loadedmetadata", () => {
      vref.current.play();
    });
    }
  }, [stream]);
  return stream ? (
    <Col
      className={pinnedId === userId?"col-12":"col-sm-4 col-md-3 col-lg-1"}
      style={{
        padding: "2px",
        border: "1px solid grey",
        borderRadius: "10px",
        margin: "5px",
        display: "flex",
        maxHeight:"80vh"


      }}
      
    >
      <FontAwesomeIcon icon={faThumbTack} color = "white" style ={{
        position:'relative',
        left:"5px",
        top:"5px"
      }}
      onClick = {()=>pinCall(userId)}
      />
      <video
        ref={vref}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          objectFit: "cover",
          marginLeft:"-12px"
        }}
      ></video>
    </Col>
  ) : (
    <></>
  );
}
