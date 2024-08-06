# Recursive File System Component

## Overview

This project features a recursive file system component built using React and Next.js, styled with Tailwind CSS, and animated with Framer Motion. The component is designed to display a hierarchical file and folder structure, allowing users to expand and collapse folders.

## Features

- **Recursive Rendering:** Handles hierarchical data to render folders and documents.
- **Collapsible Folders:** Click-to-expand/collapse functionality for folders.
- **Styled with Tailwind CSS:** Modern and responsive styling.
- **Animated with Framer Motion:** Smooth transitions for expanding and collapsing folders.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sagnikghosh1999/recursive-file-system-react
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd recursive-file-system-react
   ```

3. **Install Dependencies**

   Make sure you have `npm` or `yarn` installed. Then, run:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

### Component Overview

The `FilesystemItem` component is a recursive component used to render items in a file system. It accepts a `node` prop of type `Node`, which represents the file or folder structure.

#### `FilesystemItem` Component

```tsx
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type Node = {
  name: string;
  nodes?: Node[];
};

export function FilesystemItem({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}

        {node.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              node.nodes.length === 0 ? 'ml-[22px]' : ''
            }`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
```

### Props

- **`node`**: An object of type `Node` which contains:
  - **`name`**: The name of the file or folder.
  - **`nodes`** (optional): An array of child nodes representing the contents of the folder.

## Styling

The component uses Tailwind CSS for styling. Ensure Tailwind CSS is properly configured in your Next.js project.

## Animations

Framer Motion is used for animating the expansion and collapse of folders. Ensure Framer Motion is included in your project dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework.
- **Framer Motion**: A library for animations in React.

---

Feel free to adjust the content to better fit your project specifics or personal preferences!
