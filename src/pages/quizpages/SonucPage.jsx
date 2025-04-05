import React from "react";
import { useLocation } from "react-router-dom";

const SonucPage = () => {
  const location = useLocation();
  const score = location.state?.score;

  return (
    <div className="bg-green-400 w-full h-screen">
      {score < 50 ? (
        <div className="flex flex-col text-center py-30 justify-center items-center">
          <h1 className="bg-white p-6 shadow-2xl rounded-2xl text-2xl">
            Kendini Geliştirmen Lazım
            <h1 className="text-red-800 ">Skorun : {score}</h1>
          </h1>
        </div>
      ) : score > 50 && score <= 100 ? (
        <div className="flex flex-col text-center py-30 justify-center items-center">
          <h1 className="bg-white p-6 shadow-2xl rounded-2xl text-2xl">
            Daha Çok Çalış
            <h1 className="text-red-500 ">Skorun : {score}</h1>
          </h1>
        </div>
      ) : score > 100 && score <= 150 ? (
        <div className="flex flex-col text-center py-30 justify-center items-center">
          <h1 className="bg-white p-6 shadow-2xl rounded-2xl text-2xl">
            Güzel İlerliyorsun...
            <h1 className="text-orange-500 ">Skorun : {score}</h1>
          </h1>
        </div>
      ) : score > 150 && score < 200 ? (
        <div className="flex flex-col text-center py-30 justify-center items-center">
          <h1 className="bg-white p-6 shadow-2xl rounded-2xl text-2xl">
            Sen Bu İşi Çözmüşsün
            <h1 className="text-blue-500 ">Skorun : {score}</h1>
          </h1>
        </div>
      ) : score == 200 ? (
        <div className="flex flex-col text-center py-30 justify-center items-center">
          <h1 className="bg-white p-6 shadow-2xl rounded-2xl text-2xl">
            MÜKEMMEL TAM PUAN
            <h1 className="text-green-500 ">Skorun : {score}</h1>
          </h1>
        </div>
      ) : (
        <div>
          <h1>SONUCUNUZ HESAPLANAMADI {score}</h1>
        </div>
      )}
    </div>
  );
};

export default SonucPage;
