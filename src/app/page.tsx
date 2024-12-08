import Image from "next/image";
import CarCard from './components/carCard';
import RentalSummary from './components/RentalSummary';
import BillingInfo from './components/BillingInfo';
import RentalInfo from './components/RentalInfo';
import PaymentMethod from './components/PaymentMethod';
import Confirmation from './components/Confirmation';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Car Rental</h1>
      <CarCard/>
      <RentalSummary />
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod />
      <Confirmation />
    </div>
  );
}

