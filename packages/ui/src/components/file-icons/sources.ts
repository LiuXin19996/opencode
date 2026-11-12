// Keep globs in a non-JSX module: Vite 8's dependency scanner reparses glob transforms as plain JavaScript.
export const fileIconSources = import.meta.glob<string>(
  [
    "../../assets/icons/file-types/*.svg",
    "!../../assets/icons/file-types/document.svg",
    "!../../assets/icons/file-types/folder.svg",
    "!../../assets/icons/file-types/folder-open.svg",
  ],
  { query: "?raw", import: "default" },
)

export const fileIconFallbacks = import.meta.glob<string>(
  [
    "../../assets/icons/file-types/document.svg",
    "../../assets/icons/file-types/folder.svg",
    "../../assets/icons/file-types/folder-open.svg",
  ],
  { query: "?raw", import: "default", eager: true },
)
