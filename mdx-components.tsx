import { MDXComponents } from "mdx/types";
import { isValidElement } from "react";
import CodeSnippet from "@/components/CodeSnippet";

type CodeElementProps = {
  className?: string;
  children?: string;
};

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="my-4 text-2xl font-bold lg:text-4xl" {...props} />
    ),
    h2: (props) => (
      <h2 className="my-2 text-lg font-bold lg:text-2xl" {...props} />
    ),
    p: (props) => (
      <p className="py-2 text-left text-base leading-loose" {...props} />
    ),
    pre: (props) => {
      const code = props.children;

      // Anything that isn't a fenced block wrapping a single <code> element
      // falls back to a plain <pre>.
      if (!isValidElement<CodeElementProps>(code)) {
        return <pre {...props} />;
      }

      const { className = "", children = "" } = code.props;
      const language = className.replace(/^language-/, "") || "text";

      return (
        <CodeSnippet
          code={String(children).replace(/\n$/, "")}
          language={language}
        />
      );
    },
    a: (props) => <a className="text-accent underline" {...props} />,

    li: (props) => <li {...props}></li>,
    ol: (props) => (
      <ol className="list-inside list-decimal leading-loose" {...props}></ol>
    ),
    ul: (props) => (
      <ul className="list-outside list-disc py-2 leading-loose" {...props}></ul>
    ),
    ...components,
  };
}
