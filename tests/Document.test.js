import { describe, expect, it } from 'vitest';
import Document from '../src/domain/entities/Document.js';

describe('Document', () => {
  it('verificar se objeto esta criando certo', () => {
    expect(() => Document.create('title', 1)).toThrow('content invalid');
    expect(() => Document.create('title', false)).toThrow('content invalid');
    expect(() => Document.create('title', null)).toThrow('content invalid');
    expect(() => Document.create('title', undefined)).toThrow('content invalid');
    expect(() => Document.create('', 'content')).toThrow('title invalid');
    expect(() => Document.create(null, 'content')).toThrow('title invalid');
    expect(() => Document.create(undefined, 'content')).toThrow('title invalid');
    expect(() => Document.create(1, 'content')).toThrow('title invalid');
    expect(Document.create('title', 'content').getNamePDF()).toBe('title.pdf');
    expect(Document.create('title e title', 'content').getNamePDF()).toBe('title_e_title.pdf');
    expect(Document.create('title', 'content').getHtmlDataToSave())
      .toBe(`<!DOCTYPE><html><head><meta charset="UTF-8"/><style>body{font-family:Arial,sans-serif;background:white}h1{color:#0055aa;font-size:24px;border-bottom:1px solid #0055aa;margin-bottom:20px;padding:10px;overflow-wrap:break-word;word-break:break-word}p{font-size:16px;line-height:1.6;overflow-wrap:break-word;word-break:break-word;margin-top:10px;margin-bottom:10px;text-align:justify}</style></head><body><h1>title</h1><p>content</p></body></html>
`);
  });
});
