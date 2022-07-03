import React, { useState } from "react";
import axios from "axios";
import DeleteArticle from "./DeleteArticle";

const Article = (props) => {
  const { article } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  const handleEdit = () => {
    
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };

    axios
      .put("http://localhost:3003/articles/" + article.id, data)
      .then((Response) => Response.status === 200 && props.func()); //methode de pacome tres fonctionnelle pour

    setIsEditing(false);
  };

  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>

      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={article.content}
        ></textarea>
      ) : (
        <p>{article.content} </p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Save Changes</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <DeleteArticle func = {props.func} id={article.id}/>
      </div>
      <br />
    </div>
  );
};

export default Article;
