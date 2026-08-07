import { describe, expect, it } from 'vitest';
import { createPageMetadata } from '@/lib/metadata';

describe('createPageMetadata', () => {
  it('creates route-specific canonical and Open Graph URLs', () => {
    const metadata = createPageMetadata({
      title: 'Parser Case',
      description: 'A technical case.',
      path: '/case-studies/parser',
    });

    expect(metadata.alternates).toEqual({
      canonical: 'https://nabinpariyar.com.np/case-studies/parser',
    });
    expect(metadata.openGraph).toMatchObject({
      title: 'Parser Case',
      url: 'https://nabinpariyar.com.np/case-studies/parser',
    });
  });
});
