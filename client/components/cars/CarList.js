import CarCard from './CarCard';

export default function CarList({ cars }) {
  if (!cars || cars.length === 0) {
    return (
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <p className="text-gray-600">No cars found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {cars.map(car => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
}
