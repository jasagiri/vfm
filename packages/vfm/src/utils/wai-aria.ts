// Digital Publishing WAI-ARIA Module 1.0
// https://idpf.github.io/epub-guides/epub-aria-authoring/

export type RoleMappingTable = Record<string, string[]>;

export const roleMappingTable: RoleMappingTable = {
  'doc-toc': ['nav', 'section'],
  'doc-tip': ['aside'],
  'doc-subtitle': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  'doc-backlink': ['a'],
  'doc-qna': ['section'],
  'doc-pullquote': ['aside', 'section'],
  'doc-prologue': ['section'],
  'doc-preface': ['section'],
  'doc-part': ['section'],
  'doc-pagebreak': ['hr'],
  'doc-pagelist': ['nav', 'section'],
  'doc-notice': ['section'],
  'doc-noteref': ['a'],
  'doc-example': ['aside', 'section'],
  'doc-introduction': ['section'],
  'doc-index': ['nav', 'section'],
  'doc-glossref': ['a'],
  'doc-glossary': ['section'],
  'doc-foreword': ['section'],
  'doc-footnote': ['aside', 'footer', 'header'],
  'doc-errata': ['section'],
  'doc-epilogue': ['section'],
  'doc-epigraph': ['div'],
  'doc-endnotes': ['section'],
  'doc-endnote': ['li'],
  'doc-dedication': ['section'],
  'doc-credits': ['section'],
  'doc-credit': ['section'],
  'doc-cover': ['img'],
  'doc-conclusion': ['section'],
  'doc-colophon': ['section'],
  'doc-chapter': ['section'],
  'doc-biblioref': ['a'],
  'doc-bibliography': ['section'],
  'doc-biblioentry': ['li'],
  'doc-appendix': ['section'],
  'doc-afterword': ['section'],
  'doc-acknowledgements': ['section'],
  'doc-abstract': ['section'],
};