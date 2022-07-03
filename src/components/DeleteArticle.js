import React from "react";
import axios from "axios";

const DeleteArticle = (props) => {
  const handleDelete = () => {
    axios
      .delete("http://localhost:3003/articles/" + props.id)
      .then((Response) => {
        if (Response.status === 200) {
          props.func();
          window.alert("article Well deleted !");
        } else {
          window.alert("Bad deletion !");
        }
      });
  };
  return (
    <button
      onClick={() => {
        window.confirm("Voulez vous supprimer cette pub ?") && handleDelete();
      }}
    >
      Delete Article
    </button>
  );
};

export default DeleteArticle;
