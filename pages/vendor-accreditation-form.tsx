import { css } from "@emotion/css";
import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@spark-web/box";
import { PhoneIcon } from "@spark-web/icon";
import { Container } from "@spark-web/container";
import { Columns } from "@spark-web/columns";
import { Divider } from "@spark-web/divider";
import { Button } from "@spark-web/button";
import { Heading } from "@spark-web/heading";
import Logo from "../public/logo.svg";
import { VisuallyHidden } from "@spark-web/a11y";
import { Inline } from "@spark-web/inline";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { StepperList } from "../components/StepperList";
import { Sidebar } from "../components/Sidebar";
import { Field } from "@spark-web/field";
import { Fieldset } from "@spark-web/fieldset";
import { TextInput } from "@spark-web/text-input";
import { Select } from "@spark-web/select";
import { Link } from "@spark-web/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Become a Brighte Vendor</title>
        <meta name="description" content="Sign up to become a partner vendor" />
      </Head>
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex="sticky"
        background="surface"
      >
        <Container size="xlarge">
          <Inline width="full" gap="large" alignY="center" padding="medium">
            <Link href="/">
              <VisuallyHidden>Brighte</VisuallyHidden>
              <Logo />
            </Link>
            <Box flex={1} justifyContent="center">
              <Heading level="3" align="center">
                Become a Brighte Vendor
              </Heading>
            </Box>
            <Button size="large" tone="neutral">
              <PhoneIcon size="xsmall" /> Need help?
            </Button>
          </Inline>
        </Container>
        <Divider />
      </Box>

      <Container>
        <Inline marginTop="xlarge" align="center">
          <Sidebar marginTop="xlarge">
            <StepperList
              steps={[
                { id: 1, name: "Contact details" },
                { id: 2, name: "Product details" },
                { id: 3, name: "Business details" },
                { id: 4, name: "Ownership details" },
                { id: 5, name: "Review" },
              ]}
              currentStep={{ id: 1, name: "Contact details" }}
            ></StepperList>
          </Sidebar>
          <Box marginTop="xlarge" className={css({ maxWidth: "488px" })}>
            <Box marginBottom="xlarge">
              <Heading level="2">Get accredited with Brighte</Heading>
            </Box>
            <Box marginBottom="xxlarge">
              <Text tone="muted">
                Join thousands of businesses who use Brighte to offer simple
                payment solutions that Aussie homeowners love. Sign up and start
                selling with Brighte today.
              </Text>
            </Box>

            <Fieldset legend="Name">
              <Stack gap="small">
                <Columns gap="small">
                  <Field label="First" labelVisibility="hidden">
                    <TextInput placeholder="e.g. Jane" />
                  </Field>
                  <Field label="Last" labelVisibility="hidden">
                    <TextInput placeholder="e.g. Smith" />
                  </Field>
                </Columns>

                <Field label="Email">
                  <TextInput />
                </Field>
                <Field label="Phone">
                  <TextInput />
                </Field>
                <Field label="Promotion code" secondaryLabel="(Optional)">
                  <TextInput />
                </Field>
                <Field label="State">
                  <Select
                    onChange={() => {}}
                    options={[
                      { label: "New South Wales", value: "NSW" },
                      { label: "Victoria", value: "VIC" },
                      { label: "Queensland", value: "QLD" },
                      { label: "South Australia", value: "SA" },
                      { label: "Western Australia", value: "WA" },
                      { label: "Tasmania", value: "TAS" },
                      { label: "Northern Territory", value: "NT" },
                      { label: "Australian Capital Territory", value: "ACT" },
                    ]}
                  />
                </Field>
              </Stack>

              <Columns gap="small" marginTop="xlarge">
                <Button size="large">Continue</Button>
              </Columns>
            </Fieldset>
          </Box>
        </Inline>
      </Container>
    </div>
  );
};

export default Home;
