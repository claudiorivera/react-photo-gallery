import Head from "next/head";
import GalleryList from "../components/GalleryList";

const Home = () => (
  <div>
    <Head>
      <title>Photo Gallery</title>
      <link rel="icon" type="image/svg+xml" href="/camera_enhance-24px.svg" />
    </Head>
    <div className="app">
      <header className="appHeader">
        <h1 className="appTitle">Photo Gallery</h1>
      </header>
      <GalleryList />
    </div>
    <style jsx>{`
      .app {
        text-align: center;
        font-family: sans-serif;
      }

      .appHeader {
        background-color: #222;
        padding: 20px;
        color: white;
      }

      .appTitle {
        font-family: "Lobster", cursive;
        font-size: 2.5rem;
      }
    `}</style>
  </div>
);

export default Home;
