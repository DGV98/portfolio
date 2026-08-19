import { MDXComponents } from "mdx/types";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: (props) => <h1 className="mt-10 text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="mt-8 text-xl font-bold" {...props} />,
    p: (props) => (
      <p className="py-2 text-left text-base leading-loose" {...props} />
    ),
    code: (props) => (
      <code
        className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800"
        {...props}
      />
    ),
    a: (props) => <a className="text-accent underline" {...props} />,

    li: (props) => <li {...props}></li>,
    ol: (props) => (
      <ol className="list-inside list-decimal leading-loose" {...props}></ol>
    ),
    ul: (props) => (
      <ul className="list-inside list-disc py-2 leading-loose" {...props}></ul>
    ),
    ...components,
  };
}
