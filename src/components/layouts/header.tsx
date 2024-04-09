import { Icon } from "@/components/ui/icon";
import { IconButton, IconButtonProps } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.ComponentPropsWithoutRef<"nav"> {}

const HeaderImpl = ({ children, className, ...props }: HeaderProps) => {
  return (
    <nav className={cn("mt-11 flex h-[52px] items-center justify-between", className)} {...props}>
      {children}
    </nav>
  );
};

const HeaderPreviousButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton size="large" {...props}>
      <Icon.ChevronLeft />
    </IconButton>
  );
};

const HeaderCloseButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton size="large" {...props}>
      <Icon.X />
    </IconButton>
  );
};

const HeaderAddButton = ({ ...props }: IconButtonProps) => {
  return (
    <IconButton size="large" {...props}>
      <Icon.Plus />
    </IconButton>
  );
};

export const Header = Object.assign(HeaderImpl, {
  Previous: HeaderPreviousButton,
  Close: HeaderCloseButton,
  Add: HeaderAddButton,
});
