import Link from "next/link";

interface PriceCardProps {
  header: string;
  price: number;
  content: string;
  features: string[];
  buttonTitle: string;
  faq: string;
  dark: boolean;
}

const PriceCard = ({
  header,
  price,
  content,
  features,
  buttonTitle,
  faq,
  dark,
}: PriceCardProps) => {
  return (
    <div
      className={`w-fit px-5 py-7 rounded-3xl border ${
        dark ? "text-white bg-[#111827]" : ""
      }`}
    >
      <div className="font-bold text-green-600 pb-2">{header}</div>
      <span className={`text-xs ${dark ? "text-white" : "text-gray-600"}`}>
        pause or cancel anytime
      </span>
      <div className="text-3xl font-extrabold">${price}/mo</div>
      <div
        className={`space-y-5 text-sm  ${
          dark ? "text-white" : "text-gray-600"
        }`}
      >
        {content}
      </div>
      <div
        className={`py-5 space-y-3 text-sm  ${
          dark ? "text-white" : "text-gray-600"
        }`}
      >
        {features.map((val: string) => {
          return (
            <div className="flex items-center gap-4" key={val}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#c8e6c9"
                    d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
                  ></path>
                </svg>
              </span>
              <span>{val}</span>
            </div>
          );
        })}
      </div>
      <button
        className={`w-full border border-green-600 py-2 rounded-md font-semibold ${
          dark ? "bg-green-600 text-white" : "text-green-600"
        }`}
      >
        {buttonTitle}
      </button>
      <Link
        href={faq}
        className={`text-sm  hover:underline underline-offset-4 ${
          dark ? "text-white" : "text-gray-600"
        }`}
      >
        Questions?
      </Link>
    </div>
  );
};

export default PriceCard;
