import Card from './Card';

export default function Cards({characters}) {
   return <div>
   {
      characters.map((personaje) => {
         return <Card
            key={personaje.id}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            {...personaje}
         />
      })
   }
      </div>;
}
