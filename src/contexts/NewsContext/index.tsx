import * as React from "react";
import { getNewsFeed } from "../../services/NewsService";

type News = {
  subject: string | null;
  message: string | null;
};
type Status = "success" | "pending" | "error" | null;

type NewsReducerAction =
  | { type: "GET_NEWS" }
  | { type: "GET_NEWS_SUCCESS"; payload: any }
  | { type: "RESET_GET_NEWS" }
  | { type: "GET_NEWS_FAIL"; error: string }
  | { type: "TOGGLE_DROPDOWN" };

interface NewsContextInterface {
  news: { data: { articles: NewsArticles } } | undefined;
  error: string | null;
  isDropdownActive: boolean;
  status: Status;
}

export type NewsArticles = NewsArticle[];
const initialState: NewsContextInterface = {
  status: null,
  news: undefined,
  error: null,
  isDropdownActive: false,
};

export interface NewsArticle {
  source: {
    id?: any;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
const NewsContext = React.createContext<[NewsContextInterface, React.Dispatch<any>]>([initialState, () => {}]);
NewsContext.displayName = "NewsContext";

function newsReducer(state: NewsContextInterface, action: NewsReducerAction): NewsContextInterface {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        status: "pending",
      };

    case "GET_NEWS_SUCCESS":
      return {
        ...state,
        status: "success",
        news: action.payload,
      };

    case "GET_NEWS_FAIL":
      return {
        ...state,
        status: "error",
        news: undefined,
      };

    case "RESET_GET_NEWS":
      return {
        ...state,
        status: null,
        news: undefined,
        error: null,
      };

    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isDropdownActive: !state.isDropdownActive,
      };
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}

function useNews() {
  const context = React.useContext(NewsContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

function NewsProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = React.useReducer(newsReducer, initialState as NewsContextInterface);
  React.useEffect(() => {
    dispatch({ type: "GET_NEWS" });
    getNewsFeed()
      .then((data) => dispatch({ type: "GET_NEWS_SUCCESS", payload: data }))
      .catch((e) => dispatch({ type: "GET_NEWS_FAIL", error: e }));
  }, []);
  return <NewsContext.Provider value={[state, dispatch]}>{children}</NewsContext.Provider>;
}

export { NewsProvider, useNews };
