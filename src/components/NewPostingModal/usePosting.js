import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { apiBaseUrl } from "../../config";

export default function usePosting(handleClose) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [numPersons, setNumPersons] = useState(1);

  const handleTitle = (input) => setTitle(input.target.value);
  const handleDescription = (input) => setDescription(input.target.value);
  const handlePoster = (input) => setPoster(input.target.files[0]);
  const handleJobtype = (input) => setJobtype(input.target.value);
  const handleNumPersons = (input) => setNumPersons(input.target.value)

  const submit = async () => {
      
    const postingData = {
        jobtype : jobtype,
        title: title,
        description: description,
        poster:"",
        numPersons:numPersons
      };

    if (poster) {
      let data = new FormData();
      data.append("file", poster, poster.name);

      const headers = {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      };
      const uploadRequest = await axios.post(
        apiBaseUrl + "/admin/upload",
        data,
        headers
      );
      if (uploadRequest.status !== 200) {
        throw uploadRequest;
      }
      const imagePath = uploadRequest.data;
      postingData.poster = imagePath
    }

    const savePosting = await axios.post(apiBaseUrl + "/admin/postJob", {
      postingData,
    });
    if (savePosting.status === 200) alert("Post saved");
    else alert("Error saving post");
    handleClose()
  };
  return {
      jobtype,
      handleJobtype,
      numPersons,
      handleNumPersons,
    title,
    handleTitle,
    description,
    handleDescription,
    poster,
    handlePoster,
    submit,
  };
}
