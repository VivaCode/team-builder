import React from "react";

const MemberList = props => {
    console.log("This is from notes", props);
    return (
        <h1>I'm here!'</h1>
    //   <div className="note-list">
    //     {props.notesList.map((note, index) => {
    //       return (
    //         <div className="note" key={index}>
    //           <h2>{note.title}</h2>
    //           <p>{note.body}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    );
  };
  export default MemberList;
  