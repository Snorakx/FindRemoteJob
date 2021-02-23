import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import ScrollToTop from "react-scroll-up";
import { FaFilter } from "react-icons/fa";
import Modal from "../components/modal";
import useModal from "../components/useModal";

import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  ListGroup,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";

const defaultEndpoint = "https://remotive.io/api/remote-jobs?limit=60";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
const categoriesArray = [
  { slug: "software-dev", name: "Software Developer", id: 1 },
  { slug: "design", name: "Design", id: 2 },
  { slug: "marketing", name: "Marketing", id: 3 },
  { slug: "sales", name: "Sales", id: 4 },
  { slug: "devops", name: "Dev Ops", id: 5 },
  { slug: "data", name: "Data Scientist", id: 6 },
  { slug: "hr", name: "Human Resources", id: 7 },
  { slug: "qa", name: "QA Engineer", id: 8 },
];

export default function Home({ data }) {
  const { jobs: defaultResults = [] } = data; //tak kurwa kazde api ma tu inne kurwa zmienen

  const [results, updateResults] = useState(defaultResults);

  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState({
    firstPageItem: 0,
    lastPageItem: 15,
  });

  const {
    isShowing,
    toggle,
    title,
    publicationDate,
    companyName,
    url,
    jobType,
    id,
  } = useModal();

  const prevPageRef = useRef(); //0.Nan 1.0 2.3 3.3 4.3+3
  useEffect(() => {
    prevPageRef.current = page;
  });
  const prevPage = prevPageRef.current;

  async function handleOnSubmitSearch(e) {
    setLoading(true);
    e.preventDefault();
    const proxyurl = "";
    const searchEndpoint = `https://remotive.io/api/remote-jobs?search=${searchValue}`;

    const res = await fetch(proxyurl + searchEndpoint);
    const searchData = await res.json();
    setLoading(false);
    updateResults(searchData.jobs);

    console.log(searchValue);
  }
  async function handleCategory1(buttonValue) {
    setLoading(true);
    const proxyurl = "";

    const searchEndpoint = `https://remotive.io/api/remote-jobs?category=${buttonValue}&limit=60`;

    const res = await fetch(proxyurl + searchEndpoint);
    const categoryData = await res.json();
    setLoading(false);

    updateResults(categoryData.jobs);
  }

  function handleNextPage() {
    if (page.firstPageItem === 0) {
      setPage({
        firstPageItem: 15,
        lastPageItem: 30,
      });
    } else if (page.firstPageItem > 0 && page.lastPageItem < results.length) {
      let nextPageCountFirstItem = page.firstPageItem + 15;
      let nextPageCountLastItem = page.lastPageItem + 15;
      setPage({
        firstPageItem: nextPageCountFirstItem,
        lastPageItem: nextPageCountLastItem,
      });
    } else if (page.lastPageItem >= results.length) {
      console.log("koniec");
    }
  }
  function handlePreviousPage() {
    if (page.firstPageItem === 0) {
      console.log(results.length);
    } else if (page.firstPageItem > 0) {
      let nextPageCountFirstItem = page.firstPageItem - 15;
      let nextPageCountLastItem = page.lastPageItem - 15;
      setPage({
        firstPageItem: nextPageCountFirstItem,
        lastPageItem: nextPageCountLastItem,
      });
    }
  }
  function goToFilters() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Head>
        <title>Remote job for you!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.headerNav}>
          <div className={styles.logoTitle}>
            <img
              src="https://i.ibb.co/ZM6Jntz/logo1.png"
              alt="Logo"
              className={styles.logoImg}
            />
            find<h3 className={styles.wordRemote}> remote </h3>jobs
          </div>
          <h1 className={styles.header}>
            Just find your dream job and start earning money
          </h1>
          <Container className={styles.categoriesButtonContainer}>
            <ButtonGroup
              className={styles.categoriesButtonBox}
              aria-label="Basic example"
            >
              {categoriesArray.map((result) => {
                return (
                  <Button
                    className={styles.categoriesButton}
                    onClick={() => handleCategory1(result.slug)}
                    variant="secondary"
                    key={result.id}
                  >
                    <div className={styles.buttonText}> {result.name}</div>
                  </Button>
                );
              })}
            </ButtonGroup>
          </Container>
          <form className={styles.searchForm} onSubmit={handleOnSubmitSearch}>
            <InputGroup className="mx-auto" style={{ width: "80vw" }}>
              <FormControl
                placeholder="Enter the word that you associate with your dream remote job!"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                name="query"
                type="search"
                className={styles.formControl}
              />
              <InputGroup.Append>
                <Button
                  className={styles.searchButton}
                  variant="outline-secondary"
                  type="submit"
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </div>
        <Container className={styles.grid}>
          {results
            .slice(page.firstPageItem, page.lastPageItem)
            .map((result) => {
              if (loading === true) {
                return <Spinner key={result.id} animation="grow" />;
              } else {
                return (
                  <a
                    // href={result.url}
                    className={styles.rowHref}
                    key={result.id}
                    target="_blank"
                    onClick={() =>
                      toggle(
                        result.title,
                        result.publication_date,
                        result.company_name,
                        result.url,
                        result.job_type,
                        result.id
                      )
                    }
                  >
                    <ListGroup horizontal={true} className={styles.listRow}>
                      <ListGroup.Item className={styles.listColImg}>
                        <img
                          src={`https://remotive.io/job/${result.id}/logo `}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item className={styles.listColTitle}>
                        <div className={styles.titleText}> {result.title} </div>
                        <div className={styles.companyNameText}>
                          {result.company_name}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item
                        className={styles.listColStripe}
                      ></ListGroup.Item>
                    </ListGroup>
                  </a>
                );
              }
            })}
          <Modal
            isShowing={isShowing}
            hide={toggle}
            title={title}
            publicationDate={publicationDate}
            companyName={companyName}
            url={url}
            jobType={jobType}
            id={id}
          />
        </Container>

        <Container className={styles.buttonHandler}>
          <Button
            onClick={handlePreviousPage}
            variant="secondary"
            block
            className={styles.previousButton}
          >
            Previous Page
          </Button>
          <Button
            className={styles.nextButton}
            onClick={handleNextPage}
            variant="primary"
            block
          >
            Next Page
          </Button>
        </Container>
        <ScrollToTop className={styles.filterButton} showUnder={160}>
          <div>
            <FaFilter className={styles.filterIcon} />
            <div className={styles.filterText}>filter</div>
          </div>
        </ScrollToTop>
      </main>

      <footer>
        <div className={styles.footerGrid}>
          <div className={styles.logoTitle}>
            <img
              src="https://i.ibb.co/ZM6Jntz/logo1.png"
              alt="Logo"
              className={styles.logoImg}
            />
            find<h3 className={styles.wordRemote}> remote </h3>jobs
          </div>
          <div className={styles.footerSection}>
            Copyright © 2020 by&nbsp;
            <a href="https://patrykkoziel.netlify.app/" target="_blank">
              Patryk Kozieł
            </a>
          </div>
          <div className={styles.footerSection}>
            <a href="https://www.behance.net/oliwiakawa" target="_blank">
              Designed by
              <span style={{ fontFamily: "Shadows Into Light" }}> Tchibo</span>
            </a>
            <br />
            <a href="https://remotive.io/" target="_blank">
              API remotive
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
