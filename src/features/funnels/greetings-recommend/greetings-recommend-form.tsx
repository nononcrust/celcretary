"use client";

import { RecommendInput } from "@/components/greetings/recommend-input";
import { CTAContainer } from "@/components/layouts/cta-container";
import { Header } from "@/components/layouts/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { SectionTitle } from "@/components/ui/section-title";
import { Title } from "@/components/ui/title";
import { ROUTE } from "@/constants/route";
import { useGreetingsRecommendFunnelContext } from "@/features/funnels/greetings-recommend/context";
import { EVENT_TYPE_LABEL, EventType } from "@/services/shared";
import { useRouter } from "next/navigation";

const DUMMY_RELATIONSHIP = ["친한 친구", "친구", "직장 동료", "상사", "가족", "기타 관계"];

const DUMMY_FAMILY = ["할머니", "할아버지", "어머니", "아버지", "언니", "오빠", "동생"];

const DUMMY_ETC_RELATIONSHIP = ["은사님", "큰아버지", "필라테스 선생님"];

const DUMMY_ETC_EVENT_TYPE = ["새해", "설날", "추석"];

export const GreetingsRecommendForm = () => {
  const {
    funnel,
    selectedEventType,
    selectedRelationship,
    selectedFamily,
    selectedEtcRelationship,
    selectedEtcEventType,
    setSelectedEtcEventType,
    setSelectedEtcRelationship,
    setSelectedFamily,
    setSelectedEventType,
    setSelectedRelationship,
  } = useGreetingsRecommendFunnelContext();

  const router = useRouter();

  const canSubmit = selectedRelationship && selectedEventType;

  return (
    <main className="px-4">
      <Header className="justify-end">
        <Header.Close onClick={() => router.push(ROUTE.HOME)} />
      </Header>
      <Title className="mt-5">{"경조사의\n인사말을 추천해드릴게요"}</Title>
      <SectionTitle className="mt-10">나와의 관계</SectionTitle>
      <div className="mt-4 flex flex-wrap gap-3">
        {DUMMY_RELATIONSHIP.map((relationship) => (
          <Badge
            key={relationship}
            variant={selectedRelationship === relationship ? "primary" : "gray"}
            onClick={() => setSelectedRelationship(relationship)}
          >
            {relationship}
          </Badge>
        ))}
      </div>
      {selectedRelationship === "가족" && (
        <Card className="mt-3">
          <Card.Content className="flex flex-wrap">
            {DUMMY_FAMILY.map((family) => (
              <Badge
                key={family}
                variant={selectedFamily === family ? "primary" : "white"}
                className="mb-2 mr-2"
                onClick={() => setSelectedFamily(family)}
              >
                {family}
              </Badge>
            ))}
          </Card.Content>
        </Card>
      )}
      {selectedRelationship === "기타 관계" && (
        <RecommendInput className="mt-3" placeholder="관계를 입력해주세요">
          {DUMMY_ETC_RELATIONSHIP.map((relationship) => (
            <Badge
              key={relationship}
              variant={selectedEtcRelationship === relationship ? "primary" : "white"}
              onClick={() => setSelectedEtcRelationship(relationship)}
            >
              {relationship}
            </Badge>
          ))}
        </RecommendInput>
      )}
      <Divider className="mt-5" />
      <SectionTitle className="mt-5">경조사 종류</SectionTitle>
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(EVENT_TYPE_LABEL).map(([value, label]) => (
          <Badge
            key={value}
            variant={selectedEventType === value ? "primary" : "gray"}
            onClick={() => setSelectedEventType(value as EventType)}
          >
            {label}
          </Badge>
        ))}
      </div>
      {selectedEventType === "ETC" && (
        <RecommendInput className="mt-3" placeholder="경조사를 입력해주세요">
          {DUMMY_ETC_EVENT_TYPE.map((eventType) => (
            <Badge
              key={eventType}
              variant={selectedEtcEventType === eventType ? "primary" : "white"}
              onClick={() => setSelectedEtcEventType(eventType)}
            >
              {eventType}
            </Badge>
          ))}
        </RecommendInput>
      )}
      <CTAContainer>
        <Button size="large" disabled={!canSubmit} variant="primary" onClick={funnel.next}>
          다음
        </Button>
      </CTAContainer>
    </main>
  );
};
