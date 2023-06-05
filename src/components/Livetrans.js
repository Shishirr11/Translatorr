import React,{useState} from "react";
import "./Lt.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Livetrans() {
  const styles = {
    backgroundColor: "#2196F3",
    color: "white",
    borderRadius: "6px",
    padding: "16px 32px",
    border: "none",
    letterSpacing: "1px",
    float:'left',
    margin: "auto",
    marginRight:'16px',
    marginLeft:'16px',
    display: "flex",
    position: "relative",
    marginTop: "-80px",
    cursor: "pointer",
  };
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
  ];
  const [buttonText, setButtonText] = useState('Start Listening');
  const [buttonText1, setButtonText1] = useState('Stop Listening');

  const startListening = () => {
    console.log("listening...");
    setButtonText('Started!!!');
    setButtonText1('Stop');
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const stopListening=()=>{
    SpeechRecognition.stopListening();
    setButtonText('Start Listening');
    setButtonText1('Stop Listening');
  }
  const reset=()=>{
    resetTranscript();
    console.log(buttonText);
    setButtonText('Start Listening');
    setButtonText1('Stop Listening');
    console.log(buttonText);
    if(buttonText==="Started!!!")
      SpeechRecognition.stopListening();
  }
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="heading">
          <h2>Speech to Text Converter</h2>
          <br />

          <div className="main-content">{transcript}</div>

          <div className="btn-style">
            <button onClick={startListening} style={styles}>
              {buttonText}
            </button>
            <button
              className="mx-3"
              style={styles}
              onClick={stopListening}
            >
              {buttonText1}
            </button>
            <button className="mx-3" style={styles} onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
