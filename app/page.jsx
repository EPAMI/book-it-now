import rooms from '@/data/rooms.json';
import Heading from './components/Heading';
import RoomCard from './components/RoomCard';
export default function Home() {
  return (
    <>
      <Heading title='Salles Disponibles' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room}/>)
      ) : (<p>Aucune salle disponible pour le moment</p>)}
    </>
  );
}
