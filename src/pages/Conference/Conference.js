import {
  faBolt,
  faDotCircle,
  faPhone,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import axios from "axios";
import { createLocalVideoTrack, LocalVideoTrack } from "livekit-client";
import { ReactElement, useEffect, useState } from "react";
import { AspectRatio } from "react-aspect-ratio";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_IP, apiBaseUrl } from "../../config";
import "./conference.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactMediaRecorder } from "react-media-recorder";
import { type } from "@testing-library/user-event/dist/type";
const LIVE_KIT_SERVER = "ws://" + SERVER_IP + ":4001";

export default function Conference({
  committee,
  panel,
  applicant,
  profileData,
  admin,
}) {
  const { roomId, applicantionsId } = useParams();
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("profile Data", profileData);

    const getToken = async () => {
      let tokenReq = "";

      if (committee || panel) {
        let fullname = "";

        if (profileData.fullname) {
          fullname = profileData?.fullname;
        }else{
          fullname =
            profileData?.firstname +
            " " +
            profileData?.middlename +
            " " +
            profileData?.lastname;
        }

        console.log("fullname", fullname);

        tokenReq = await axios.get(
          apiBaseUrl + "/panel/getConferenceToken/" + roomId + "/" + fullname,
          { withCredentials: true }
        );
      } else if (applicant) {
        const fullname =
          profileData?.firstname +
          " " +
          profileData?.middlename +
          " " +
          profileData?.lastname;

        tokenReq = await axios.get(
          apiBaseUrl +
            "/applicant/getConferenceToken/" +
            roomId +
            "/" +
            fullname,
          { withCredentials: true }
        );
      } else {
        tokenReq = await axios.get(
          apiBaseUrl + "/admin/getConferenceToken/" + roomId,
          { withCredentials: true }
        );
      }

      const token = await tokenReq.data;

      console.log(token);
      setToken(token);
    };
    if (profileData) {
      getToken();
    } else if (admin) {
      getToken();
    }
  }, [profileData]);

  const catchPlay = (what) => {
    console.log(what);
  };
  const endInterview = async () => {
    const endInterviewReq = await axios.post(
      `${apiBaseUrl}/admin/endInterview`,
      {
        applicantionsId: applicantionsId,
      },
      { withCredentials: true }
    );
    if (endInterviewReq.data.success) {
      window.location.href = "/admin/applications/for-interview";
    }
  };
  const downloadRecording = (blobUrl, blob)=>{
    const filename = "interview-recording"
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0)
    }
  }
  return (
    <>
      {token ? (
        <div
          data-lk-theme="default"
          style={{ width: "100vw", height: "100vh" }}
        >
          <LiveKitRoom token={token} serverUrl={LIVE_KIT_SERVER} connect={true}>
            <div className="p-1"></div>
            <div className="topbar">
              <h4>AHP - Applicant Hiring Portal </h4>
              <div className="d-flex justify-content-end">
                <ReactMediaRecorder
                  screen
                  blobPropertyBag={{type:'vedio/mp4'}}
                  onStop={downloadRecording}
                  render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                }) => (
                    <div>
                      {status === "idle" || status === 'stopped' ? (
                        <Button
                          variant="danger"
                          size="sm"
                          className="me-2"
                          aria-label="Record call"
                          onClick={startRecording}
                        >
                          <FontAwesomeIcon icon={faDotCircle} />
                        </Button>
                      ) :(
                        <Button
                          variant="danger"
                          size="sm"
                          className="me-2"
                          aria-label="Record call"
                          onClick={stopRecording}
                        >
                          <FontAwesomeIcon icon={faStop} />
                        </Button>
                      )}
                    </div>
                  )}
                />

                {admin ? (
                  <Button variant="danger" size="sm" onClick={endInterview}>
                    <FontAwesomeIcon icon={faPhone} />
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <VideoConference style={{ height: "90%" }} onPlay={catchPlay} />
          </LiveKitRoom>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
