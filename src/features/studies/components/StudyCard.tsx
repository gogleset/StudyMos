import { HTMLAttributes } from "react";
import Card from "@/components/atoms/Card";
import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import StudyMeta from "@/components/molecules/StudyMeta";
import { StudyCardInterface } from "@/types/api/studies/detail";

interface StudyCardProps
  extends StudyCardInterface,
    HTMLAttributes<HTMLDivElement> {}

const StudyCard = ({ study, className, ...props }: StudyCardProps) => {
  return (
    <Card className={`w-[255px] cursor-pointer ${className ?? ""}`} {...props}>
      <Card.Header className="flex-col">
        <div className="flex justify-between mb-[20px]">
          <div className="flex gap-[4.5px]">
            <Tag.Green>{study.category}</Tag.Green>
            <Tag.Blue>{study.type}</Tag.Blue>
          </div>
          {study.recruit ? (
            <Tag.Green border={false}>모집중</Tag.Green>
          ) : (
            <Tag.Gray border={false}>모집 완료</Tag.Gray>
          )}
        </div>
        <Typography.Head3>{study.title}</Typography.Head3>
        <StudyMeta.Date className="text-red-500 text-[13px]">
          마감: {study.deadline}
        </StudyMeta.Date>
      </Card.Header>
      <Card.Content>
        <Typography.P1 className="pt-[20px] pb-[20px] text-mos-gray-700">
          {study.contents}
        </Typography.P1>
        <div className="flex flex-wrap gap-[5px] mb-[40px]">
          {study.tags.map((tag, index) => (
            <Tag.Detail key={index}>#{tag}</Tag.Detail>
          ))}
        </div>
      </Card.Content>
      <Card.Footer className="flex justify-between">
        <div className="flex gap-1  text-mos-gray-300">
          <StudyMeta.Person>
            {study.members.current}/{study.members.max}명
          </StudyMeta.Person>
        </div>
        <div className="flex gap-1 text-mos-gray-300">
          <StudyMeta.View>{study.views}</StudyMeta.View>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default StudyCard;
