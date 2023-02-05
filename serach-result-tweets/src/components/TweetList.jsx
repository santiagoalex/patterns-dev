import React from "react";
import TweetCategory from "./TweetCategory";
import TweetRow from "./TweetRow";

const TweetList = ({ tweets, filterText, inThisLocation }) => {
  const rows = [];
  let lastCategory = null;

  tweets.forEach((tweet) => {
    if (tweet.text.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (tweet.isLocal === inThisLocation) {
      return;
    }
    if (tweet.category !== lastCategory) {
      rows.push(
        <TweetCategory category={tweet.category} key={tweet.category} />
      );
    }

    rows.push(<TweetRow tweet={tweet} key={tweet.text} />);

    lastCategory = tweet.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th> Tweet Text</th>
          <th>retweets</th>
        </tr>
        <tbody>{rows}</tbody>
      </thead>
    </table>
  );
};

export default TweetList;
