import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Icon } from "../ui/icon";

export const TogetherHistoryItem = () => {
  return (
    <li className="flex">
      <div className="mb-3 mr-[10px] flex flex-col items-center">
        <p className="text-sm font-medium text-[#454545]">2023.03.10</p>
        <div className="mt-[10px] h-full w-[3px] bg-accents-1" />
      </div>
      <Card className="flex-1">
        <Card.Content>
          <Badge className="text-primary" variant="white">
            <Icon.MoveRight className="mr-1 w-4" />
            김밤비님으로부터
          </Badge>
          <p className="mt-3 whitespace-pre-wrap text-[#1E1D1D]">
            {"김인간 생일\n오마카세 150,000원"}
          </p>
        </Card.Content>
      </Card>
    </li>
  );
};
