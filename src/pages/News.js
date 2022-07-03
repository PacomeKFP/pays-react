import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../components/Article";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((response) => setNewsData(response.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    if (content.length > 14 && author !== "") {
      axios
        .post("http://localhost:3003/articles", {
          author: author,
          content: content,
          date: Date.now(),
        })
        .then(() => {
          setError(false);
          setAuthor("");
          setContent("");
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={author}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Nom"
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid blue" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Message"
        ></textarea>
        {error && <p>Veuillez ecrire un minimum de 140caractères</p>}
        <input type="submit" value="Envoyer" />
      </form>

      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article func = {getData} key={article.id} article={article} />
          ))}
      </ul>
    </div>
  );
};

export default News;
