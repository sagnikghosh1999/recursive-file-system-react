import { Node } from "@/app/page";
import {
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function FileSystemItem({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}
        {node.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              node.nodes.length === 0 ? "ml-[22px]" : ""
            }`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-700" />
        )}
        {node.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {node?.nodes?.map((node) => (
            <FileSystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
