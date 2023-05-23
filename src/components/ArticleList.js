import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const Articles = posts.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
    });
    return (
        <main>
            {Articles}
        </main>
    );
}

export default ArticleList;