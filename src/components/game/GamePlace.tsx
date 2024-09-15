interface GamePlaceProps {
    LeftUser: () => void;  
    RightUser: () => void; 
    width: {
      col1: string;  
      col2: string;  
    };
  }

export default function GamePlace({ LeftUser, RightUser, width } : GamePlaceProps) {
    return (
      <div className="grid h-full transition-all" style={{ gridTemplateColumns: `${width.col1} ${width.col2}` }}>
        <div onClick={LeftUser} className="bg-bg_secondary"></div>
        <div onClick={RightUser} className="bg-bg_black"></div>
      </div>
    );
}

