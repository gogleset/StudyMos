import { StudyCurriculumInterface } from "@/types/api/studies/detail";
import Card from "../../../components/atoms/Card";
import Tag from "../../../components/atoms/Tag";
import Typography from "../../../components/atoms/Typography";

interface CurriculumProps {
  data: StudyCurriculumInterface[];
}

const Curriculum = ({ data }: CurriculumProps) => {
  return (
    <>
      {data.map((curriculum) => {
        return (
          <div className="flex gap-[20px]" key={curriculum.step}>
            <div>
              <Tag.Main className="flex flex-col text-nowrap">
                <Typography.P3 className="font-bold pt-[1px]">
                  {curriculum.step}
                </Typography.P3>
              </Tag.Main>

              {/* 동적으로 Card.Content 높이에 맞춰서 height 조정 */}
              <div
                className="ml-[10px] w-[2px] bg-[#DCDCDC]"
                style={{ height: "calc(70% + 10px)" }}
              ></div>
            </div>

            <div className="w-full">
              <Card className="flex flex-col col-span-12 shadow-none bg-[#F8F9FA] mb-[20px] border-none">
                <Card.Header>
                  <Typography.SubTitle1 className="text-[18px] mb-[5px] mt-[-1px]">
                    {curriculum.title}
                  </Typography.SubTitle1>
                </Card.Header>
                <Card.Content>
                  <Typography.P3 className="text-mos-gray-700 mb-[10px]">
                    {curriculum.content}
                  </Typography.P3>
                </Card.Content>
                <Card.Footer>
                  <div className="flex gap-[50px]">
                    {curriculum.task.map((task) => (
                      <Typography.P3
                        className="font-bold text-[14px]"
                        key={task}
                      >
                        {task}
                      </Typography.P3>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Curriculum;
