import Header from '../../components/Header'
import GameBoard  from '../../components/game/GameBoard'

export default function Main(){
  //access this page using localhost:3000/game
    return (
        <div className='w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full'>
          <Header />
          <GameBoard />
          
        </div>
    )
}