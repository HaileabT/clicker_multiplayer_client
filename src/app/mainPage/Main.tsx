import Header from './../../components/home/Header'
import GameBoard  from './../../components/home/GameBoard'

export default function Main(){
    return (
        <div className='w-2/3'>
          <Header />
          <GameBoard />
        </div>
    )
}