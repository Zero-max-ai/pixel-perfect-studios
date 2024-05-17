import PriceCard from "@/components/PriceCard";
import { pricingDetails, projectDetails, whatsIncluded } from "@/utils";
import PriceSection from "@/components/PriceSection";
import ImgCard from "@/components/ImgCard";
import ProjectCard from "@/components/projectCard";

const App = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <PriceSection />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 pb-12">
        {pricingDetails.map(
          ({ header, price, content, features, buttonTitle, faq, dark }) => {
            return (
              <PriceCard
                key={header}
                header={header}
                price={price}
                content={content}
                features={features}
                buttonTitle={buttonTitle}
                faq={faq}
                dark={dark}
              />
            );
          }
        )}
      </div>

      <div className="py-10">
        <ImgCard
          title={"Website Development"}
          content={
            "A website can make or break your business. We create world-class, professional websites that convert and help you achieve your sales targets."
          }
          imgSrc={
            "https://www.aceternity.com/_next/image?url=%2Fimages%2Fproducts%2Faceternity.png&w=1920&q=75"
          }
        />
      </div>

      <div className="lg:flex gap-10 py-10">
        <div className="w-5/12 text-xl font-bold pb-5">What's Included</div>
        <div className="flex flex-col gap-3">
          {whatsIncluded.map(({ title, content }) => {
            return (
              <div className="space-x-5" key={title}>
                <span className="font-bold">{title}</span>
                {"-"}
                <span className="text-gray-600">{content}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-4 py-10 text-center">
          <h1 className="text-slate-700 text-3xl font-extrabold">
            Some of the websites that we have{" "}
            <span className="text-green-500">built</span>
          </h1>
          <span className="text-gray-600">
            A look at some of the amazing webapps that we've built recently.
          </span>
        </div>
        <div className="flex flex-col gap-8">
          {projectDetails.map(({ title, content, img1, img2 }) => {
            return (
              <ProjectCard
                key={title}
                title={title}
                content={content}
                img1={img1}
                img2={img2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
