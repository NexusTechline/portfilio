import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>
          You've received a new message from your portfolio website's contact
          form.
        </Text>
        <Section style={section}>
          <Text style={sectionHeader}>Name:</Text>
          <Text style={sectionContent}>{name}</Text>
        </Section>
        <Section style={section}>
          <Text style={sectionHeader}>Email:</Text>
          <Text style={sectionContent}>{email}</Text>
        </Section>
        <Section style={section}>
          <Text style={sectionHeader}>Message:</Text>
          <Text style={sectionContent}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This email was sent from your portfolio website's contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.4",
  padding: "0 48px",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.6",
  padding: "0 48px",
};

const section = {
  padding: "24px 48px",
};

const sectionHeader = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1.4",
  marginBottom: "8px",
};

const sectionContent = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 48px",
};
    