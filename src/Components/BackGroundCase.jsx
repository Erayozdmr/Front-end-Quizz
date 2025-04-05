import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const BackGroundCase = ({ children }) => {
  const [hover, setHover] = useState();

  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/quiz");
  };

  return (
    <div
      className={`flex -z-2 flex-col items-center transition-all duration-700 md:h-screen ${
        hover === 1
          ? "bg-gradient-radial1 "
          : hover === 2
          ? "bg-gradient-radial2 "
          : hover === 3
          ? " bg-gradient-radial3 "
          : " bg-gradient-radial "
      }`}
    >
      {children}
      <div className="flex flex-col text-white justify-center items-center mt-30 ">
        <h1
          className={`headerfonts transition-all  text-4xl ${
            hover == 1
              ? "text-orange-500 "
              : hover == 2
              ? "text-blue-500"
              : hover == 3
              ? "text-yellow-500"
              : "text-gradient-radial"
          }`}
        >
          Front-End Quiz
        </h1>
        <button
          onClick={HandleClick}
          className={`mt-10 p-5 border-1 transition-all hover:cursor-pointer hover:scale-105  rounded-2xl ${
            hover == 1
              ? "bg-orange-500"
              : hover == 2
              ? "bg-blue-500"
              : hover == 3
              ? "bg-yellow-500"
              : "bg-gradient-to-r from-green-500 to-blue-500"
          }`}
        >
          Hazırsan Tıkla Ve Quize Başla
        </button>
        <p className="mt-10 ">
          Frontend dünyasına ne kadar hakimsin? HTML, CSS, JavaScript ve daha
          fazlasıyla ilgili sorulara cevap vererek bilginizi test edin! Hazır
          mısınız?
        </p>
      </div>
      <h1 className="text-2xl text-white mt-20">Quiz Bilgileri</h1>
      <div className="md:flex-row flex flex-col text-white text-center  justify-center items-center mt-10 gap-5 ">
        <div
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover()}
          className="border-1 p-10 rounded-4xl  h-[265px] max-w-[500px] md:rounded-none md:rounded-l-[50px] mb-5  shadow-2xl  hover:bg-orange-500/80 hover:scale-102 duration-300"
        >
          <h1 className="text-2xl mb-2">Quiz Konuları Ve Puan Sistemi</h1>
          Quizimiz de 5 HTML, 5 CSS, 5 JAVASCRİPT ve 5 tane REACT ile ilgili
          sorular bulunup her soru 10 puandır toplamda 200 puan alabilirsiniz.
        </div>
        <div
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover()}
          className="border-1 max-w-[500px] h-[265px] mb-5 rounded-4xl md:rounded-none p-10 bg-black/20 hover:bg-blue-500/80 hover:scale-102 duration-300"
        >
          <h1 className="text-2xl mb-2">Quiz Kuralları</h1>
          Doğru bildiğiniz sorular değerine göre puanınıza eklenir, yanlış
          yaptığınız takdir de puanınız eksilmez sadece puan kazanamazsınız, her
          hangi bir süre sınırı yoktur
        </div>
        <div
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover()}
          className="border-1 max-w-[500px] h-[265px] mb-5 rounded-4xl p-10 md:rounded-r-[50px] md:rounded-none bg-black/20 hover:bg-yellow-500/80 hover:scale-102 duration-300"
        >
          <h1 className="text-2xl mb-2">Tavsiyeler </h1>
          Quiz de eksik gördüğünüz veya böyle olursa daha güzel olur dediğiniz
          bir durum olursa{" "}
          <p className="text-[17px] underline underline-offset-2">
            weboz5756@gmail.com
          </p>
          adresinden iletişime geçip bize destek olabilirsiniz
        </div>
      </div>
    </div>
  );
};

export default BackGroundCase;
