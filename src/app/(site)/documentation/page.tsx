import { Documentation } from '../../components/documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Slate',
  description: 'Documentation and guides for Slate Link and SlateOS.',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
