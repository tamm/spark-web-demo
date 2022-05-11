import { Stack } from "@spark-web/stack";
import { forwardRefWithAs } from "@spark-web/utils/ts";
import { BoxProps } from "@spark-web/box";
import { css } from "@emotion/css";

type ValidBoxProps = Omit<
  BoxProps,
  "flexDirection" | "flexWrap" | "marginRight"
>;

export type SidebarProps = {} & ValidBoxProps;

export const Sidebar = forwardRefWithAs<"div", SidebarProps>(
  ({ children, ...props }, forwardedRef) => {
    const rootProps = {
      ref: forwardedRef,
      ...props,
    } as const;

    return (
      <Stack
        {...rootProps}
        marginRight="xxlarge"
        className={css({
          width: "280px",
        })}
      >
        {children}
      </Stack>
    );
  }
);
