import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const Feature = () => {
  return (
    <div className="flex justify-center items-center gap-4" id="myProject">
      {feats.map((f) => (
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto sm:h-[25rem] rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {f.name}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {f.description}
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

const feats = [
  {
    name: "feature 1",
    description: "description 1",
  },
  {
    name: "feature 2",
    description: "description 1",
  },
  {
    name: "feature 2",
    description: "description 1",
  },
];
