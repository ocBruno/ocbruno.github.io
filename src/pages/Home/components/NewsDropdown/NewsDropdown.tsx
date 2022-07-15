import React from "react";
import { NewsArticles, useNews } from "../../../../contexts/NewsContext";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import {
  ArticlesListContainer,
  ArticlesListItem,
  ArticlesListItemAuthor,
  ArticlesListItemContent,
  ArticlesListItemTitle,
  DropdownContainer,
} from "./NewsDropdown.styled";

const ArticlesList = ({ articles }: { articles: NewsArticles | undefined }) => {
  return (
    <ArticlesListContainer>
      {!articles ? (
        <LoadingWidget />
      ) : (
        articles.map((article) => (
          <ArticlesListItem>
            <ArticlesListContainer></ArticlesListContainer>
            <ArticlesListItem>
              <ArticlesListItemTitle>
                {article.title}

                <ArticlesListItemAuthor>{article.author}</ArticlesListItemAuthor>
              </ArticlesListItemTitle>
              <ArticlesListItemContent>{article.content}</ArticlesListItemContent>
            </ArticlesListItem>
          </ArticlesListItem>
        ))
      )}
    </ArticlesListContainer>
  );
};
function NewsDropdown() {
  const [{ news }] = useNews();
  const articles = news?.data.articles;

  return (
    <DropdownContainer>
      <ArticlesList articles={articles} />
    </DropdownContainer>
  );
}

export default NewsDropdown;
