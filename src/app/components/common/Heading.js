import React from "react";

const Heading = ({title, classname=""}) => {
  return (
    <div className={`text-[40px] xs:text-[60px] md:text-[80px] lg:text-[110px] text-center text-[#BFA181] ${classname}`}>
     {title}
    </div>
  );
};

export default Heading;
