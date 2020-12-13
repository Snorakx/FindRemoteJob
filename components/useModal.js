import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [title, setTitle] = useState("");
  const [publicationDate, setpublicationDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [url, setUrl] = useState("");
  const [jobType, setJobType] = useState("");
  const [id, setId] = useState("");

  function toggle(
    positionTitle,
    positionPublicationDate,
    positionCompanyName,
    positionUrl,
    positionJobType,
    positionID
  ) {
    setIsShowing(!isShowing);
    setTitle(positionTitle);
    setpublicationDate(positionPublicationDate);
    setCompanyName(positionCompanyName);
    setUrl(positionUrl);
    setJobType(positionJobType);
    setId(positionID);
  }

  return {
    isShowing,
    toggle,
    title,
    publicationDate,
    companyName,
    url,
    jobType,
    id,
  };
};

export default useModal;
