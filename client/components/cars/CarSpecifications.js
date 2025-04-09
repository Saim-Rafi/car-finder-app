export default function CarSpecifications({ car }) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-500 text-sm">Transmission</span>
            <p className="font-medium">{car.transmission}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-500 text-sm">Drive Type</span>
            <p className="font-medium">{car.driveType}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-500 text-sm">Fuel Type</span>
            <p className="font-medium">{car.fuelType}</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-500 text-sm">MPG</span>
            <p className="font-medium">{car.mpg}</p>
          </div>
        </div>
        
        {car.specifications && (
          <div className="space-y-3 mt-4">
            {car.specifications.engine && (
              <div className="flex justify-between">
                <span className="text-gray-600">Engine</span>
                <span className="font-medium">{car.specifications.engine}</span>
              </div>
            )}
            
            {car.specifications.horsepower && (
              <div className="flex justify-between">
                <span className="text-gray-600">Horsepower</span>
                <span className="font-medium">{car.specifications.horsepower} hp</span>
              </div>
            )}
            
            {car.specifications.torque && (
              <div className="flex justify-between">
                <span className="text-gray-600">Torque</span>
                <span className="font-medium">{car.specifications.torque} lb-ft</span>
              </div>
            )}
            
            {car.specifications.seats && (
              <div className="flex justify-between">
                <span className="text-gray-600">Seats</span>
                <span className="font-medium">{car.specifications.seats}</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  