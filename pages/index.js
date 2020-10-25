import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
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
  { slug: "data", name: "Data Scientist", id: 5 },
  { slug: "devops", name: "Dev Ops", id: 6 },
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

  const prevPageRef = useRef(); //0.Nan 1.0 2.3 3.3 4.3+3
  useEffect(() => {
    prevPageRef.current = page;
  });
  const prevPage = prevPageRef.current;

  async function handleOnSubmitSearch(e) {
    setLoading(true);
    e.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const searchEndpoint = `https://remotive.io/api/remote-jobs?search=${searchValue}`;

    const res = await fetch(proxyurl + searchEndpoint);
    const searchData = await res.json();
    setLoading(false);
    updateResults(searchData.jobs);

    console.log(searchValue);
  }
  async function handleCategory1(buttonValue) {
    setLoading(true);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

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

  return (
    <div>
      <Head>
        <title>Remote job for u!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.header}>Remote job for u!</h1>

        <h2 className={styles.secondHeader}>
          Just find your dream job and start earning money
        </h2>
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
                  {result.name}
                </Button>
              );
            })}

            {/* <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button>
            <Button className={styles.categoriesButton} variant="secondary">
              Categories
            </Button> */}
          </ButtonGroup>
        </Container>
        <form className={styles.searchForm} onSubmit={handleOnSubmitSearch}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter the word that you associate with your dream remote job!"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              name="query"
              type="search"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" type="submit">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
        <Container className="grid">
          {results
            .slice(page.firstPageItem, page.lastPageItem)
            .map((result) => {
              if (loading === true) {
                return <Spinner key={result.id} animation="grow" />;
              } else {
                return (
                  <a href={result.url} key={result.id}>
                    <ListGroup horizontal={true} className={styles.listRow}>
                      <ListGroup.Item className={styles.listColImg}>
                        <img
                          src={`https://remotive.io/job/${result.id}/logo `}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item className={styles.listColTitle}>
                        <div className={styles.titleText}> {result.title} </div>
                      </ListGroup.Item>
                      <ListGroup.Item className={styles.listColCompany}>
                        <div className={styles.companyNameText}>
                          {result.company_name}
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </a>
                );
              }
            })}
        </Container>

        <Container className={styles.buttonHandler}>
          <Button onClick={handleNextPage} variant="primary" size="lg" block>
            Next Page
          </Button>
          <Button
            onClick={handlePreviousPage}
            variant="secondary"
            size="lg"
            block
          >
            Previous Page
          </Button>
        </Container>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
