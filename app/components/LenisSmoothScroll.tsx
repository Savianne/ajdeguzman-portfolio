'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function LenisSmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  );
}
