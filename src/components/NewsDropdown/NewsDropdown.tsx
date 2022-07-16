import React from "react";
import { NewsArticles, useNews } from "../../contexts/NewsContext";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import {
  ArticlesListContainer,
  ArticlesListItem,
  ArticlesListItemAuthor,
  ArticlesListItemContent,
  ArticlesListItemImage,
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
          <ArticlesListContainer>
            <ArticlesListItem>
              <ArticlesListItemTitle>
                {article.title}
                <ArticlesListItemImage src={article.urlToImage} />
                <ArticlesListItemAuthor>{article.author}</ArticlesListItemAuthor>
              </ArticlesListItemTitle>
              <ArticlesListItemContent>{article.content}</ArticlesListItemContent>
            </ArticlesListItem>
          </ArticlesListContainer>
        ))
      )}
    </ArticlesListContainer>
  );
};
function NewsDropdown() {
  const [{ news, isDropdownActive }] = useNews();
  const articles = news?.data.articles;

  return (
    <DropdownContainer isActive={isDropdownActive}>
      <ArticlesList articles={articles} />
    </DropdownContainer>
  );
}

export default NewsDropdown;
