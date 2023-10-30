import Image from 'next/image';
import Berserker from '@/public/Berserker.webp'

const MainSection: React.FC = () => {
  return (
    <section className="relative h-[500px] mt-4">
        <Image 
        src={Berserker} 
        layout="fill"
        objectFit="cover"
        alt="Paisaje montañoso con castillos y dragón" 
      />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <input 
          type="text" 
          className="w-96 p-2 bg-white border rounded-md shadow-md focus:outline-none focus:border-blue-500"  // Estilos básicos con Tailwind para el input
          placeholder="QUIERO UN TAVERNERO NIVEL 5, GUERRERO BÁRBARO DE LA ANTIGUA ORDEN DEL CAOS"
        />
      </div>
    </section>
  );
}

export default MainSection;
