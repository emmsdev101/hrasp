import {
  faMessage,
  faMicrophone,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Peer from "peerjs";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import PanelHeader from "../../components/header/PanelHeader";
import {
  apiBaseUrl,
  peerServer,
  peerServerPort,
  webSocketServer,
} from "../../config";

import "./conference.css";
import PeerCall from "./PeerCall";
export default function Conference({ panel,admin }) {
  const [streams, setStreams] = useState([]);
  const [myStream, setMyStream] = useState(null);

  const [camera, setCamera] = useState(true);
  const [audio, setAudio] = useState(true);

  const [calls, setCalls] = useState([]);
  const [myId, setMyId] = useState("");
  const [pinnedCall, setPinnedCall] = useState("");

  const { roomId, applicantionsId } = useParams();
  let socket = null;

  const myPeer = new Peer(undefined, {
    host: peerServer,
    port: peerServerPort,
    path: "/",
  });

  let refPeer = useRef();
  const peers = {};

  useEffect(() => {
    startStream();
    console.log("Camera ", camera ? "On" : "Off");
  }, [audio, camera]);

  useEffect(() => {
    if (!socket) socket = io(webSocketServer);

    socket.on("connect", () => {
      console.log("Self Connected:", socket.id);
      setMyId(socket.id);
    });
    if (myStream) {
      setCalls((current) => [
        ...[],
        {
          own: true,
          call: null,
        },
      ]);
      let lastId;

      myPeer.on("call", (call) => {
        call.answer(myStream);

        setCalls((current) => [
          ...current,
          {
            call: call,
            own: false,
          },
        ]);
      });
      setPinnedCall(myId);

      socket.on("user-connected", (userId) => {
        let call = myPeer.call(userId, myStream);
        setCalls((current) => [
          ...current,
          {
            call: call,
            own: false,
          },
        ]);
      });
      socket.on("pin-call", (userId) => {
        setPinnedCall(userId);
      });

      socket.on("user-disconnected", (userId) => {});
      myPeer.on("open", (id) => {
        socket.emit("join-room", roomId, id);
        console.log("joining room", roomId);
      });
    }
  }, [myStream]);
  async function startStream() {
    if (audio || camera) {
      console.log("turning off camera or audio");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: camera,
        audio: audio,
      });
      setMyStream(stream);
    }
  }
  const pinCall = (userId) => {
    socket.emit("pinCall", userId);
  };
  const endInterview = async () => {
    if (!admin) {
      window.location.href = "../../applicants/for-interview";
    } else {
      console.log(applicantionsId);
      const endRequest = await axios.post(
        apiBaseUrl + "/admin/endInterview",
        { applicantionsId },
        { withCredentials: true }
      );
      if (endRequest.data.success) {
        window.location.href = "/admin/applications/for-interview";
      }
    }
  };
  return (
    <Container fluid m={0} p={0} className="Main">
      <Container fluid></Container>
      <Row className="d-flex flex-direction-row justify-content-center align-items-center">
        {calls.map(({ own, call }, idx) => (
          <PeerCall
            own={own}
            myId={myId}
            myStream={myStream}
            call={call}
            key={idx}
            pinCall={pinCall}
            pinnedId={pinnedCall}
            setPinnedCall={setPinnedCall}
          />
        ))}
      </Row>
      <Container
        fluid
        className="d-flex flex-direction-row justify-content-center align-items-center"
      >
        <Button
          variant={camera ? "light" : "primary"}
          className="m-1"
          onClick={() => setCamera(!camera)}
        >
          <FontAwesomeIcon icon={faVideo} />
        </Button>
        <Button
          variant={audio ? "light" : "primary"}
          className="m-1"
          onClick={() => setAudio(!audio)}
        >
          <FontAwesomeIcon icon={faMicrophone} />
        </Button>
        <Button variant="primary" className="m-1">
          <FontAwesomeIcon icon={faMessage} />
        </Button>
        <Button variant="danger" className="m-1" onClick={endInterview}>
          <FontAwesomeIcon icon={faPhone} />
        </Button>
      </Container>
    </Container>
  );
}
