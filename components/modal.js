import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgClose } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import styles from "../styles/Home.module.css";

const Modal = ({
  isShowing,
  hide,
  title,
  publicationDate,
  companyName,
  url,
  jobType,
  id,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modalBackground} onClick={hide}>
            <div className={styles.modalBox}>
              <div className={styles.modalTitle}>
                <div className={styles.modalImage}>
                  <img src={`https://remotive.io/job/${id}/logo `} />
                </div>
                <div className={styles.modalTitleText}>
                  Company: {companyName}
                </div>
                <div className={styles.modalTitleText}>Job title: {title}</div>
              </div>
              <div className={styles.modalDescription}>
                <div className={styles.modalJobType}>Job type: {jobType}</div>
                <div className={styles.modalPublicationDate}>
                  Publication date: {publicationDate.substring(0, 10)}
                </div>
                <a
                  className={styles.modalCheckMoreHref}
                  href={url}
                  target="_blank"
                >
                  <div className={styles.modalCheckMore}>
                    Check more & apply here
                  </div>
                </a>
              </div>
            </div>

            {console.log(title, publicationDate, companyName, url)}
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
