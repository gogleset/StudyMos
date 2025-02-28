import React from "react";

import Card from "@/components/atoms/Card";
import Tag from "@/components/atoms/Tag";
import Typography from "@/components/atoms/Typography";
import StudyMeta from "@/components/molecules/StudyMeta";
import {
  Description,
  StudiesDescriptionApiResult,
} from "@/types/api/studies/detail";

const StudyDescriptionCard = ({ data }: StudiesDescriptionApiResult) => {
  return (
    <Card className="flex flex-col col-span-8 pb-10 gap-5">
      <Card.Header className="flex-col gap-3">
        <div className="flex justify-between">
          <Tag.Green bold>{data.category}</Tag.Green>
          <div className="flex gap-2">
            <Tag.Blue bold>{data.mode}</Tag.Blue>
            <Tag.Green bold border={false}>
              {data.status}
            </Tag.Green>
          </div>
        </div>
        <div className="flex justify-between">
          <Typography.Head3>{data.title}</Typography.Head3>
        </div>
        <div className="flex flex-col gap-1">
          <StudyMeta.Date>
            {data.schedule.startDate} ~ {data.schedule.endDate}
          </StudyMeta.Date>
          <StudyMeta.Time>{data.schedule.weeklyMeeting}</StudyMeta.Time>
          <div className="flex gap-2">
            <StudyMeta.Person>
              {data.participants.current}/{data.participants.max}
            </StudyMeta.Person>
            <StudyMeta.View>{data.views}</StudyMeta.View>
          </div>
        </div>

        <div className="flex gap-2">
          {data.tags.map((item, index) => {
            return (
              <Tag.Card key={`${item}_${index}`} bold>
                #{item}
              </Tag.Card>
            );
          })}
        </div>
      </Card.Header>
      <Card.Content className="gap-5">
        <ContentWrapper>
          <Typography.SubTitle1>스터디 소개</Typography.SubTitle1>
          <Typography.P1 className="text-mos-gray-700">
            {data.description.intro}
          </Typography.P1>
        </ContentWrapper>

        <ContentWrapper>
          <Typography.SubTitle1>참여 요건</Typography.SubTitle1>
          <div>
            {data.description.requirements.map((item, index) => {
              return (
                <Typography.P1
                  key={`${item}_${index}`}
                  className="text-mos-gray-700 text-[14px]"
                >
                  {item}
                </Typography.P1>
              );
            })}
          </div>
        </ContentWrapper>

        {ListContent("스터디 규칙", data.description.rules)}
        {ListContent("스터디 혜택", data.description.benefits)}
      </Card.Content>
    </Card>
  );
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

const ListContent = (title: string, items: Description["rules"]) => {
  return (
    <ContentWrapper>
      <Typography.SubTitle1>{title}</Typography.SubTitle1>
      <ul className="study-detail text-mos-gray-700">
        {items.map((item, index) => {
          return <li key={`${item}_${index}`}> {item}</li>;
        })}
      </ul>
    </ContentWrapper>
  );
};

export default StudyDescriptionCard;
