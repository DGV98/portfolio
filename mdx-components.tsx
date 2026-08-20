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
    pre: (props) => (
      <pre
        className="mb-2 block max-w-full overflow-x-auto rounded-2xl border-l-2 border-[#f36d33] bg-[#f4f4f4] p-2 font-mono wrap-break-word text-[#666]"
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
