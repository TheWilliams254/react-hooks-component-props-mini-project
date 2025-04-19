import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Read Time Indicator Logic
  let emoji = '';
  if (minutes < 30) {
    emoji = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    emoji = "🍱".repeat(Math.ceil(minutes / 10));
  }
  const readIndicator = `${emoji} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{readIndicator} | {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
