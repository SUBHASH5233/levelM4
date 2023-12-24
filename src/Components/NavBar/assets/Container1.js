import React from "react";

const Cards = ({ label, amt, month, texts }) => {
  return (
    <div className=" cursor-pointer">
      <div className=" text-2xl font-Nunito text-center ">{label}</div>
      <div className=" text-center mt-5 ">
        <span className="text-xl text-blue-600 font-bold font-Nunito  ">$</span>
        <span className="text-5xl font-Noto text-blue-600 ">{amt}</span>
        <span className=" text-xl text-slate-500 ml-1 italic">/{month}</span>
      </div>
      <div className=" mt-5">{texts} </div>
      <button className=" text-slate-500 bg-slate-100 hover:text-white hover:bg-blue-600  px-10 py-5 text-lg mt-10  ">
        {" "}
        GET STARTED
      </button>
    </div>
  );
};

const cardData = [
  {
    label: "Classic",
    amt: "70.00",
    month: "month",
    text: "lorem ipsum",
  },
  {
    label: "Classic",
    amt: "70.00",
    month: "month",
    text: "lorem ipsum",
  },
  {
    label: "Classic",
    amt: "70.00",
    month: "month",
    text: "lorem ipsum",
  },
];

const Container1 = () => {
  return (
    <div className=" flex  bg-blue-600 w-full flex-col   ">
      <div className=" px-24  ">
        <div className=" mt-16 text-center text-5xl text-white font-Poplin">
          Pricing Tables
        </div>
        <div className="  bg-white h-96 mt-16 flex flex-row md:flex-wrap ">
          {cardData.map((data, index) => (
            <Cards
              key={index}
              label={data.label}
              texts={data.text}
              amt={data.amt}
              month={data.month}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container1;
