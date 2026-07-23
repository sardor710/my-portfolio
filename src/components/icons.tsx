import type { SVGProps } from "react";

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="0" y1="2" x2="32" y2="2" />
      <line x1="0" y1="10" x2="24" y2="10" />
      <line x1="0" y1="18" x2="32" y2="18" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function QuoteMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 32" fill="currentColor" {...props}>
      <path d="M0 32V18C0 8 5 1.5 15 0l1.5 5C10.5 6.5 8 10 8 14h7v18H0zm23 0V18C23 8 28 1.5 38 0l1.5 5C33.5 6.5 31 10 31 14h7v18H23z" />
    </svg>
  );
}
