import React, { useState } from "react";
import questions from "../../questions/Questions";
import { useNavigate } from "react-router-dom";

const Quizpage = () => {
  const [score, setScore] = useState(0); // Puan state'i
  const [currentQuestion, setCurrentQuestion] = useState(0); // Geçerli soru index'i
  const navigate = useNavigate();

  const replyClick = (e, sucsessques) => {
    const answer = e.target.textContent === sucsessques;
    const newScore = answer ? score + 10 : score;
    if (answer) {
      setScore(newScore); // Doğru cevap verildiğinde puanı artır
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1); // Bir sonraki soruya geç
      } else {
        navigate("/sonuc", { state: { score: newScore } });
      }
    }, 100);
  };

  return (
    <div>
      {/* Soruları sırasıyla gösterme */}
      {questions && currentQuestion < questions.length && (
        <div
          key={currentQuestion}
          className={` w-screen h-screen ${
            questions[currentQuestion].tag === "HTML"
              ? "bg-orange-500/80"
              : questions[currentQuestion].tag === "CSS"
              ? "bg-blue-500/80"
              : questions[currentQuestion].tag === "JS"
              ? "bg-yellow-500/80"
              : questions[currentQuestion].tag === "REACT"
              ? "bg-blue-300/80"
              : ""
          }`}
        >
          <div className="text-2xl text-white  flex justify-center ">
            <h1
              className={`rounded-2xl p-2 mt-5 ${
                questions[currentQuestion].tag == "HTML"
                  ? "bg-orange-600"
                  : questions[currentQuestion].tag == "CSS"
                  ? "bg-blue-600"
                  : questions[currentQuestion].tag == "JS"
                  ? "bg-yellow-600"
                  : questions[currentQuestion].tag == "REACT"
                  ? "bg-blue-300/80"
                  : ""
              }`}
            >
              {" "}
              Puan: {score}
            </h1>
          </div>
          <img
            src={`
            ${
              questions[currentQuestion].tag === "HTML"
                ? "/images/html.png"
                : questions[currentQuestion].tag === "CSS"
                ? "/images/css.png"
                : questions[currentQuestion].tag === "JS"
                ? "/images/js.png"
                : questions[currentQuestion].tag === "REACT"
                ? "/images/react.png"
                : ""
            }
            
            `}
            className="w-40 ml-5"
            alt=""
          />
          <div className="flex text-center items-center justify-center py-20">
            <div
              className={`w-4xl  rounded-2xl shadow-2xl h-96 ${
                questions[currentQuestion].tag === "HTML"
                  ? "bg-orange-500"
                  : questions[currentQuestion].tag === "CSS"
                  ? "bg-blue-500"
                  : questions[currentQuestion].tag === "JS"
                  ? "bg-yellow-500"
                  : questions[currentQuestion].tag === "REACT"
                  ? "bg-blue-300/80"
                  : ""
              }`}
            >
              <h1 className="text-white text-2xl p-20">
                {questions[currentQuestion].question}
              </h1>
              <div className="grid-cols-2 grid-rows-1 grid mx-5 gap-7">
                {questions[currentQuestion].reply.map((replys, index) => (
                  <button
                    key={index}
                    onClick={(e) =>
                      replyClick(e, questions[currentQuestion].sucsess)
                    }
                    value={replys}
                    className="text-black hover:scale-105 transition-all duration-200 hover:cursor-pointer p-2 rounded-2xl bg-white"
                  >
                    {replys}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizpage;
