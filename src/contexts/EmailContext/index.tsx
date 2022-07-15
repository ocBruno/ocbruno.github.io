import * as React from "react";

type Email = {
  subject: string | null;
  message: string | null;
};
type Status = "success" | "pending" | "error" | null;

type EmailReducerAction =
  | { type: "SEND_EMAIL"; payload: Email }
  | { type: "SEND_EMAIL_SUCCESS"; payload: Email }
  | { type: "RESET_SEND_EMAIL" }
  | { type: "SEND_EMAIL_FAIL" }
  | { type: "TOGGLE_FORM_ACTIVE" };

interface EmailContextInterface {
  email: Email;
  error: string | null;
  isFormActive: boolean;
  status: Status;
}
const initialState: EmailContextInterface = {
  status: null,
  email: { subject: null, message: null },
  error: null,
  isFormActive: false,
};

const EmailContext = React.createContext<
  [EmailContextInterface, React.Dispatch<any>]
>([initialState, () => {}]);
EmailContext.displayName = "EmailContext";

function emailReducer(
  state: EmailContextInterface,
  action: EmailReducerAction
): EmailContextInterface {
  switch (action.type) {
    case "SEND_EMAIL":
      return {
        ...state,
        status: "pending",
        email: action.payload,
      };

    case "SEND_EMAIL_SUCCESS":
      return {
        ...state,
        status: "success",
        email: action.payload,
      };

    case "SEND_EMAIL_FAIL":
      return {
        ...state,
        status: "error",
        email: { subject: "", message: "" },
      };

    case "RESET_SEND_EMAIL":
      return {
        ...state,
        status: null,
        email: { subject: "", message: "" },
        error: null,
      };

    case "TOGGLE_FORM_ACTIVE":
      return {
        ...state,
        isFormActive: !state.isFormActive,
      };
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

function useEmail() {
  const context = React.useContext(EmailContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

function EmailProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = React.useReducer(
    emailReducer,
    initialState as EmailContextInterface
  );
  return (
    <EmailContext.Provider value={[state, dispatch]}>
      {children}
    </EmailContext.Provider>
  );
}

export { EmailProvider, useEmail };
