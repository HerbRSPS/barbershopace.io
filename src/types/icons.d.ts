declare module '*.svg' {
  const content: string;
  export default content;
}

interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}