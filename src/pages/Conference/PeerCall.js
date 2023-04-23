import { faClose, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

export default function PeerCall({
  stream
}) {
  let vref = useRef();

  useEffect(()=>{
    vref.current.srcObject = stream
    vref.current.play()
  },[])
  return(
    <div>
      <video ref={vref}></video>
    </div>
  )
}
