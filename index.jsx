import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  // Single Selection
  const [selected, setSelected] = useState(null);
  // Multiple Selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={enableMultiSelection ? "active" : ""}
      >
        Enable Multi Selections
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={`item ${selected === dataItem.id ? "selected" : ""}`}
              key={dataItem.id}
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* other way of doing it */}
              {/* {selected === dataItem.id  || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
