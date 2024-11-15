export function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center pb-4 mx-auto mt-4 border-b border-gray-200 max-w-7xl sm:flex-row">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(72 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(144 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(216 12 12)"
          ></line>
          <line
            x1="3.6"
            y1="15"
            x2="14.15"
            y2="15"
            transform="rotate(288 12 12)"
          ></line>
        </svg>
      </div>
      <div className="flex-grow mt-3 prose text-center sm:text-left sm:mt-0 prose-md">
        <h2 className="text-lg font-bold ">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
