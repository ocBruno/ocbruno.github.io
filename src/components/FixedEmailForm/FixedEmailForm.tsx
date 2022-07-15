import React, { useEffect } from "react";
import { EmailProvider, useEmail } from "../../contexts/EmailContext";
import styled from "styled-components";

interface IFixedEmailFormContainer {
  isActive: boolean;
}
const FixedEmailFormContainer = styled.div<IFixedEmailFormContainer>`
  display: inline-flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 12px;
  background: #3f4758;
  border: 2px solid white;
  transform: ${(props) =>
    props.isActive ? " translateX(0)" : " translateX(100vw)"};
  transition: 300ms ease-in;
`;
const FixedForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 320px;
  height: 240px;
  padding: 12px;
  > * {
    margin: 6px 0 12px;
  }
`;
const EmailLabel = styled.label<{ for: string }>`
  color: white;
  font-weight: 600;
`;
const EmailInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.TextColor};
  border: 1px solid white;
`;
const EmailMessageInput = styled(EmailInput)`
  height: 160px;
`;
const EmailSubmitButton = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.TextColor};
  border: 1px solid white;
  color: white;
`;

const FixedEmailFormCtaButton = styled.div``;
function FixedEmailForm() {
  const [{ email, status, error, isFormActive }, dispatch] = useEmail();
  const [formState, setFormState] = React.useState(email);
  const isFormSuccess = status === "success";
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
    dispatch({
      type: "SEND_EMAIL_SUCCESS",
      payload: { subject: formState.subject, message: formState.message },
    });
    console.log(email, status);
    window.open(
      `mailto:brunocgmxus@gmail.com?subject=${email.subject}&body=${email.message}`
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <FixedEmailFormContainer isActive={isFormActive}>
      <FixedEmailFormCtaButton>Send me an email</FixedEmailFormCtaButton>
      <FixedForm onSubmit={sendEmail}>
        <EmailLabel for="subject">Subject</EmailLabel>
        <EmailInput name="subject" onChange={handleChange} />
        <EmailLabel for="message">Message</EmailLabel>
        <EmailMessageInput name="message" onChange={handleChange} />
        <EmailSubmitButton type="submit" placeholder="Send" />
      </FixedForm>
    </FixedEmailFormContainer>
  );
}

export default FixedEmailForm;
