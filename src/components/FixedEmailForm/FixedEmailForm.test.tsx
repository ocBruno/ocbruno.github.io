import FixedEmailForm from "./FixedEmailForm";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { EmailProvider } from "../../contexts/EmailContext";

describe("Email form is working", () => {
  render(
    <EmailProvider>
      <FixedEmailForm />
    </EmailProvider>
  );
});
