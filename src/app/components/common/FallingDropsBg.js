"use client";

import React from "react";

const FallingDropsBg = () => {
  return (
    <div className="absolute inset-0 w-[90vw] mx-auto h-full overflow-hidden">
      {/* Line 1 */}
      <div className="absolute top-0 left-1/2 w-px h-full overflow-hidden -ml-[40%]">
        <div className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-white top-[-15%] animate-drop animation-delay-1s"></div>
      </div>
      {/* Line 2 */}
      <div className="absolute top-0 left-1/2 w-px h-full overflow-hidden -ml-[20%]">
        <div className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-white top-[-15%] animate-drop animation-delay-3s"></div>
      </div>

      {/* Line 3 */}
      <div className="absolute top-0 left-1/2 w-px h-full overflow-hidden">
        <div className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-white top-[-15%] animate-drop "></div>
      </div>

      {/* Line 4 */}
      <div className="absolute top-0 left-1/2 w-px h-full overflow-hidden ml-[20%]">
        <div className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-white top-[-15%] animate-drop animation-delay-2s"></div>
      </div>
      {/* Line 5 */}
      <div className="absolute top-0 left-1/2 w-px h-full overflow-hidden ml-[40%]">
        <div className="absolute w-full h-[15vh] bg-gradient-to-b from-transparent to-white top-[-15%] animate-drop animation-delay-1.5s"></div>
      </div>
    </div>
  );
};

export default FallingDropsBg;
