import { Button } from "../ui/button";
import fondo from "../../img/fondo.jpg"

console.log(fondo);

export function SeasonCollections() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Season Collections</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Summer", "Winter", "Spring"].map((season) => (
          <div className="relative group" key={season}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                alt={`${season} collection`}
                className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                src={fondo}  // Usamos la imagen importada aquí
                width={450}
                height={600}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{season.toUpperCase()}</h3>
              <Button variant="outline" size="sm">Read more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
