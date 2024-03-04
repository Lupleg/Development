import React from "react";

function card() {
  return (
    <div className="p-4 flex flex-col gap-10  w-80 h-96 bg-white rounded-lg mx-4">
      <div className="flex flex-col gap-0">
        <img
          src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5591f791726bd27710248_favourite-31.svg"
          className="w-20 h-20 "
        />
        <div className="text-xs">
          I am super grateful for this opportunity to be part of the program.
          The sleepless, foodless and stressful days and nights were all worth
          it. Zuri is doing great, and I hope to be part of this wonder and
          innovative movement to empower young Africans to take over the world.
          I once tweeted that 'Zuri will shock the world' …and I mean it because
          it is true!
        </div>
      </div>
      <div className="flex gap-1">
        <img
          src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63ef60cec0babe2a74db6559_1.webp"
          className=" rounded-full h-10 w-10 flex-shrink-0"
        />
        <div className="flex flex-col gap-1">
          <p className=" font-bold">Kingslay Onenero onoriode</p>
          <p className="text-xm">Beneficiary, Zuri Training</p>
        </div>
      </div>
    </div>
  );
}

export default card;
