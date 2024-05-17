interface ImgCardProps {
  title: string;
  content: string;
  imgSrc: string;
}

const ImgCard = ({ title, content, imgSrc }: ImgCardProps) => {
  return (
    <div className="lg:flex gap-5 ">
      <div className="flex flex-col py-10">
        <span className="text-green-500 font-semibold">{title}</span>
        <span className="text-gray-600 font-extrathin text-sm">{content}</span>
      </div>
      <div className="border-t border-l border-spacing-3 border-gray-300 px-3 py-3">
        <img src={imgSrc} alt="" className="w" />
      </div>
    </div>
  );
};

export default ImgCard;
