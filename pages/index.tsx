import type { NextPage } from "next";
import Head from "next/head";
import { Box } from "@spark-web/box";
import { Container } from "@spark-web/container";
import { Columns } from "@spark-web/columns";
import { ButtonLink } from "@spark-web/button";
import { Heading } from "@spark-web/heading";
import Logo from "../public/logo.svg";
import { VisuallyHidden } from "@spark-web/a11y";
import { Inline } from "@spark-web/inline";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { Field } from "@spark-web/field";
import { Fieldset } from "@spark-web/fieldset";
import { TextInput } from "@spark-web/text-input";
import { Fragment } from "react";
import { css, Global } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Become a Brighte Vendor</title>
        <meta name="description" content="Sign up to become a partner vendor" />
      </Head>

      <Container size="xsmall">
        <Box
          border="standard"
          borderRadius="medium"
          padding="xlarge"
          background="surface"
        >
          <Inline marginBottom="medium" align="center">
            <VisuallyHidden>Brighte</VisuallyHidden>
            <Logo />
          </Inline>
          <Box marginBottom="medium">
            <Heading level="2" align="center">
              Welcome back
            </Heading>
          </Box>
          <Text>Sign in with your Brighte account</Text>

          <Box marginTop="large">
            <Fieldset>
              <Stack gap="small">
                <Field label="Email">
                  <TextInput />
                </Field>
                <Field label="Password">
                  <TextInput type="password" />
                </Field>
              </Stack>

              <Columns gap="small" marginTop="xlarge">
                <ButtonLink href="/vendor-accreditation-form" size="large">
                  Login
                </ButtonLink>
              </Columns>
              <Columns gap="small" marginTop="small">
                <ButtonLink
                  href="/vendor-accreditation-form"
                  size="large"
                  prominence="none"
                >
                  Forgot password
                </ButtonLink>
              </Columns>
            </Fieldset>
          </Box>
        </Box>
      </Container>
      <Global
        styles={css`
          html body {
            min-height: 100vh;
            justify-content: center;
            flex-direction: column;
            display: flex;
          }
        `}
      />
    </Fragment>
  );
};

export default Home;
