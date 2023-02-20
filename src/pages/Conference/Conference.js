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
import {
  apiBaseUrl,
  peerServer,
  peerServerPort,
  webSocketServer,
} from "../../config";

import "./conference.css";
import PeerCall from "./PeerCall";
export default function Conference({ panel, admin }) {
  const [streams, setStreams] = useState([]);
  const [joined, setJoined] = useState(false);
  const [start, setStartStream] = useState(false);
  const [camera, setCamera] = useState(true);
  const [audio, setAudio] = useState(false);

  const [calls, setCalls] = useState([]);
  const [myId, setMyId] = useState("");
  const [pinnedCall, setPinnedCall] = useState(null);

  const { roomId, applicantionsId } = useParams();

  const myPeer = new Peer({
    host:peerServer,
    port:peerServerPort
  });

  let socket = useRef();
  let myStream = useRef();
  const peers = {};
  let lastId;

  useEffect(() => {
    startStream();
    console.log("Camera ", camera ? "On" : "Off");
  }, []);
  useEffect(() => {
    if (myStream.current) {
      myStream.current.getAudioTracks()[0].enabled = audio;
      myStream.current.getVideoTracks()[0].enabled = camera;
    }
  }, [audio, camera]);

  useEffect(() => {
    if (!socket.current) socket.current = io(webSocketServer);

    socket.current.on("connect", () => {
      console.log("Self Connected:", socket.current.id);
      setMyId(socket.current.id);
    });
    setStreams([]);
    if (start) {
      setStreams((current) => [
        ...[],
        {
          stream: myStream.current,
          own: true,
          userId: myId,
        },
      ]);
      myPeer.on("call", (call) => {
        call.answer(myStream.current);
        console.log("Connecting to new user");
        call.on("stream", (userVideoStream) => {
          if (lastId !== userVideoStream.id) {
            lastId = userVideoStream.id;
            if (!pinnedCall) {
              setPinnedCall({
                stream: userVideoStream,
                own: false,
              });
            } else {
              setStreams((current) => [
                ...current,
                { stream: userVideoStream, own: false },
              ]);
            }
            console.log("Adding Call");
          }
        });
      });
      socket.current.on("user-connected", (userId) => {
        socket.current.removeAllListeners("user-disconnected");
        let call = myPeer.call(userId, myStream.current);

        console.log("Connecting to new user");
        call.on("stream", (userVideoStream) => {
          if (lastId !== userVideoStream.id) {
            lastId = userVideoStream.id;
            if (!pinnedCall) {
              setPinnedCall({
                stream: userVideoStream,
                userId: userId,
                own: false,
              });
            } else {
              setStreams((current) => [
                ...current,
                { stream: userVideoStream, userId: userId, own: false },
              ]);
            }
            console.log("Adding Call");
          }
        });
      });
      myPeer.on("open", (id) => {
        socket.current.emit("join-room", roomId, id);
        console.log("joining room", roomId);
        setJoined(true);
      });
    }
  }, [start]);

  useEffect(() => {
    socket.current.on("user-disconnected", (userId) => {
      console.log("old streams", streams);
      const newCalls = streams.filter((data) => data.userId !== userId);
      console.log("new streams", newCalls);
      setStreams(newCalls);
    });
  }, [streams]);

  async function startStream() {
    setStreams([]);
    if (audio || camera) {
      console.log("turning off camera or audio");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStartStream(true);

      myStream.current = stream;
      myStream.current.getAudioTracks()[0].enabled = audio;
      myStream.current.getVideoTracks()[0].enabled = camera;
    }
  }
  const pinCall = (userId) => {
    console.log("Pin call", userId);
    const toPin = streams.find((data) => {
      console.log("this id", data.userId);
      console.log("to compare", userId);

      return data.userId === userId;
    });
    const unPins = streams.filter((data) => data.userId !== userId);
    //unPins.push(pinnedCall);
    console.log("to pin", toPin);
    console.log("calls", unPins);
    setPinnedCall(toPin);
    setStreams(unPins);
  };

  const unpinCall = (userId) => {};
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
  return joined ? (
    <Container fluid className="Conference">
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <div className="pinnedVideoBox">
            {pinnedCall ? (
              <PeerCall
                stream={pinnedCall.stream}
                userId={pinnedCall.userId}
                own={pinnedCall.own}
                pinned={true}
              />
            ) : (
              ""
            )}
          </div>
          <div className="videoBox row">
            {streams.map(({ own, userId, stream }, idx) => (
              <PeerCall
                stream={stream}
                userId={userId}
                index={idx}
                key={idx}
                own={own}
                pinCall = {pinCall}
              />
            ))}
          </div>
        </Col>
      </Row>
      <div fluid className="buttonsDiv">
        <Button
          size="lg"
          variant={camera ? "light" : "primary"}
          className="m-1"
          onClick={() => setCamera(!camera)}
        >
          <FontAwesomeIcon icon={faVideo} />
        </Button>
        <Button
          size="lg"
          variant={audio ? "light" : "primary"}
          className="m-1"
          onClick={() => setAudio(!audio)}
        >
          <FontAwesomeIcon icon={faMicrophone} />
        </Button>
        <Button size="lg" variant="primary" className="m-1">
          <FontAwesomeIcon icon={faMessage} />
        </Button>
        <Button
          size="lg"
          variant="danger"
          className="m-1"
          onClick={endInterview}
        >
          <FontAwesomeIcon icon={faPhone} />
        </Button>
      </div>
    </Container>
  ) : (
    <div className="loading">
      <p>Joining Room...</p>
    </div>
  );
}
