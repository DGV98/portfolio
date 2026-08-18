import { MDXComponents } from "mdx/types";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: (props) => <h1 className="mt-10 text-4xl font-bold" {...props} />,
    h2: (props) => <h2 className="mt-8 text-xl font-bold" {...props} />,
    p: (props) => (
      <p className="my-4 py-2 text-left text-base leading-loose" {...props} />
    ),
    code: (props) => (
      <code
        className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800"
        {...props}
      />
    ),
    a: (props) => <a className="text-accent underline" {...props} />,
    ...components,
  };
}
