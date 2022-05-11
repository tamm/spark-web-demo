import { Stack, StackProps } from "@spark-web/stack";
import { Inline } from "@spark-web/inline";
import { EmptyCircleIcon } from "../components/EmptyCircleIcon";
import { forwardRefWithAs } from "@spark-web/utils/ts";
import { Text } from "@spark-web/text";
import { useTheme } from "@spark-web/theme";
import { css } from "@emotion/css";
import { Box } from "@spark-web/box";

type ValidStackProps = Omit<StackProps, "align" | "dividers">;
type Step = {
  id: number;
  name: string;
};

export type StepperListProps = {
  steps: Step[];
  currentStep: Step;
} & ValidStackProps;

export const StepperList = forwardRefWithAs<"div", StepperListProps>(
  ({ currentStep, steps, ...props }, forwardedRef) => {
    const rootProps = {
      ref: forwardedRef,
      ...props,
    } as const;

    const theme = useTheme();
    const stepperLine = css({
      position: "relative",
      ":after": {
        display: "block",
        content: "''",
        position: "absolute",
        top: "-130%",
        left: ".7rem",
        borderLeft: `2px solid ${theme.border.color.fieldDisabled}`,
        height: "120%",
      },
    });
    return (
      <Stack {...rootProps} gap="xxlarge">
        {steps.map((step, idx) => (
          <Inline
            key={idx}
            alignY="center"
            className={idx > 0 ? stepperLine : ""}
          >
            <EmptyCircleIcon
              size="xsmall"
              tone={currentStep.id === step.id ? "fieldAccent" : "disabled"}
            />
            <Box marginLeft="small">
              <Text
                size="standard"
                weight="strong"
                tone={currentStep.id === step.id ? undefined : "muted"}
              >
                {step.name}
              </Text>
            </Box>
          </Inline>
        ))}
      </Stack>
    );
  }
);
