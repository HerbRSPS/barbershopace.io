interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <i className={`fi ${name} ${className}`} />
  );
}