import React from "react";

export default function Card(props) {
  const { id, subject } = props.question;
  //   console.log(answers);
  return (
    <React.Fragment>
      <div className="card card-cascade">
        <div className="card-body card-body-cascade">
          <h5 className="card-title">
            <strong>{id + ") " + subject}</strong>
          </h5>
        </div>
        <div className="form-check mb-2">{surveyOption(props)}</div>
      </div>
      &nbsp;
    </React.Fragment>
  );
}

function surveyOption({ question, question: { options, id }, onUpdate }) {
  let payload = []; //generate the input/radio buttons for this card/component
  for (let i = 0; i < Object.keys(options).length; i++) {
    //traverse the options object {a: ..., b,c,d}
    payload.push(
      <h6 key={i} className="card-body">
        <input
          onClick={(e) => onUpdate(e, question)} //callback parent function (pass event and question up to parent component)
          className="form-check-input"
          id={question} //passed the prop id here
          name={id} //set to allow single click of radio button
          type="radio"
          value={Object.keys(options)[i]} //passed the options object key
        />
        {/* display the option object value */}
        <label className="form-check-label">{Object.values(options)[i]}</label>
      </h6>
    );
  }
  //   console.log(typeof payload);
  return payload;
}
