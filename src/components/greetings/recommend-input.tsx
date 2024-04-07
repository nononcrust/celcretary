import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Icon } from "@/components/ui/icon";

interface RecommendInputProps extends React.ComponentPropsWithoutRef<"input"> {}

export const RecommendInput = ({ className, children, ...props }: RecommendInputProps) => {
  return (
    <Card className={className}>
      <Card.Content className="flex flex-col">
        <div className="relative flex items-center">
          <Icon.Search className="absolute top-0 w-5" />
          <input
            className="placeholder:text-accents-3 w-full bg-inherit pb-[10px] pl-7 focus-visible:outline-none"
            {...props}
          />
        </div>
        <Divider />
        <div className="mt-2 flex flex-wrap gap-3">{children}</div>
      </Card.Content>
    </Card>
  );
};
