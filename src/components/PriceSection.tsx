import { pricingDetails } from "@/utils";
import PriceCard from "./PriceCard";

interface PriceCardProps {
  header: string;
  price: number;
  content: string;
  features: string[];
  buttonTitle: string;
  faq: string;
}

const PriceSection = () => {
  return (
    <div className="text-center space-y-5 py-10">
      <div className="text-3xl font-bold">
        The right price for you, with{" "}
        <span className="text-green-600">maximum value</span>
      </div>
      <div className="text-gray-700 text-sm">
        Simple pricing that makes sense for your business. No hidden fees.
      </div>
    </div>
  );
};

export default PriceSection;
