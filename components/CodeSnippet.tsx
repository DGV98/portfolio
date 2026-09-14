"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
type CodeBlockProps = {
  code: string;
  language: string;
};

const CodeSnippet = ({ code, language }: CodeBlockProps) => (
  <div>
    <SyntaxHighlighter language={language} style={stackoverflowDark}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default CodeSnippet;
