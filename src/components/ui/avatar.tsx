"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitives from "@radix-ui/react-avatar";
import React from "react";

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Root> {}

const AvatarImpl = React.forwardRef<React.ElementRef<typeof AvatarPrimitives.Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitives.Root
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  ),
);
AvatarImpl.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "Avatar.Image";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitives.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitives.Fallback
    ref={ref}
    className={cn(
      "bg-accents-0 flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = "Avatar.Fallback";

export const Avatar = Object.assign(AvatarImpl, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
