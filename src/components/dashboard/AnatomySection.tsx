import React from 'react';

const AnatomySection: React.FC = () => {
  return (
    <div className=" pt-4 pb-8 flex items-center justify-center">
      <div className=" h-[300px] w-[240px] ">
        {/* Human anatomy image */}
        <img
          src="./Anatomical-position.jpg"
          alt="Human Anatomy"
          className="h-full w-full object-contain opacity-80 mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default AnatomySection;