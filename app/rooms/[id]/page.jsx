import Heading from '@/app/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import BookForm from '@/app/components/BookForm';
import { FaChevronLeft } from'react-icons/fa';
import rooms from '@/data/rooms.json';

const RoomPage = ({params}) => {
    const {id} = params;
    const room = rooms.find((room) => room.$id === id);
    if (!room) {
        return <Heading title="Salle Introuvable" />
    }
    return ( <><Heading title={room.name} />
    <div className="bg-white shadow rounded-lg p-6">
    <Link
      href="/"
      className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
    >
     <FaChevronLeft className='inline mr-1'/>
      <span className="ml-2">Retour aux choix de salle</span>
    </Link>

    <div className="flex flex-col sm:flex-row sm:space-x-6">
      <Image
        src={`/images/rooms/${room.image}`}
        width={400}
        height={100}
        alt={room.name}
        className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
      />

      <div className="mt-4 sm:mt-0 sm:flex-1">
        <p className="text-gray-600 mb-4">
          {room.description}
        </p>

        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-gray-800">Capacité:</span> {room.sqft}
          </li>
          <li>
            <span className="font-semibold text-gray-800">Disponibilité:</span>
            {room.availability}
          </li>
          <li>
            <span className="font-semibold text-gray-800">Prix:</span>
            {room.price_per_hour}€/heure
          </li>
          <li>
            <span className="font-semibold text-gray-800">Adresse:</span> 555
            {room.address}
          </li>
        </ul>
      </div>
    </div>

    <BookForm />

  </div> </>);
}
 
export default RoomPage;