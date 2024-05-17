import ClientButton from "./ClientButton";

interface ProjectCardProps {
  title: string;
  content: string;
  img1: string;
  img2: string;
}

const ProjectCard = ({ title, content, img1, img2 }: ProjectCardProps) => {
  return (
    <div className="flex max-lg:flex-col gap-2 w-10/12 mx-auto px-5 py-2">
      <div className="flex flex-col justify-between gap-4 w-5/12 max-lg:w-full max-lg:pb-5">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <span className="text-sm text-gray-600">{content}</span>
        </div>
        <div className="bg-black w-fit px-6 py-3 text-xs text-white rounded-md cursor-pointer">
          Live Preview
        </div>
      </div>
      <div className="flex max-lg:flex-col gap-5 w-7/12 max-lg:w-full mx-auto">
        <img src={img1} alt="" className="w-1/2 max-lg:w-full rounded-xl" />
        <img src={img2} alt="" className="w-1/2 max-lg:w-full rounded-xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
