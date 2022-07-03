import React from 'react';
import axios from 'axios';

const DeleteArticle = (props) => {
    const handleDelete = ()=>{
      axios.delete('http://localhost:3003/articles/' + props.id)
      .then((Response)=>{
        props.func();
      })
    }
    return (
        <button onClick={()=>{
            if(window.confirm('Voulez vous supprimer cette pub ?'))
                handleDelete();
        }}>
            Delete Art
        </button>
    );
};

export default DeleteArticle;