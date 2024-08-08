import { useEffect, useState } from "react";
import "../css/ShowNotes.css";
import axios from "axios";

interface Note {
  title: string;
  note: string;
}

function ShowNotes() {
  const [listOfnotes, setListOfnotes] = useState<Note[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => {
        setListOfnotes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  return (
    <>
      <h1>ShowNotes</h1>
      <div className="posts-grid">
        {listOfnotes.map((value, index) => {
          return (
            <div key={index} className="container">
              <div>
                <h2>{value.title}</h2>
              </div>
              <div className="description">
                <p>{value.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowNotes;
