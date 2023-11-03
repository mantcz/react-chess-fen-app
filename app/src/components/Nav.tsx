import React from "react";

type StartScreenProps = {
  setShowApp: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Nav = ({ setShowApp }: StartScreenProps) => {
  return (
    <nav>
      <p style={{ margin: 0 }}>Chess + React</p>

      <button
        onClick={() => {
          setShowApp(false);
        }}
      >
        Exit game
      </button>
    </nav>
  );
};
