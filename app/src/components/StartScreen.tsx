type StartScreenProps = {
  setShowApp: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StartScreen = ({ setShowApp }: StartScreenProps) => {
  return (
    <main>
      <h1>Chess + React</h1>
      <h2>The most exciting chess game ever!</h2>
      <div className="card">
        <button
          onClick={() => {
            setShowApp(true);
          }}
        >
          Start new chess game
        </button>
      </div>
    </main>
  );
};
