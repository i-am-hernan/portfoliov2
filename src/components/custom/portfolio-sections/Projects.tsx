export const Projects = () => {
  return (
    <div className="absolute left-[10vw] top-[280vh] max-w-[70ch]">
      <h2 className="m-0 text-2xl">Projects</h2>
      <ul className="mt-3 list-none p-0 text-[1.05rem]">
        <li className="mb-3">
          <a
            href="https://checkoutlab.dev"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline-offset-4 hover:underline"
          >
            checkoutlab.dev
          </a>
          <span className="opacity-85"> — Rapid prototyping sandbox for Adyen payment flows.</span>
          <br />
          <span className="text-sm opacity-70">TypeScript · React · Next.js · Tailwind</span>
        </li>
        <li>
          <a
            href="https://sdkexplorer.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline-offset-4 hover:underline"
          >
            sdkexplorer.com
          </a>
          <span className="opacity-85"> — Browse Adyen Web SDK configuration options.</span>
          <br />
          <span className="text-sm opacity-70">TypeScript · React · Node.js · Material UI</span>
        </li>
      </ul>
    </div>
  );
}

