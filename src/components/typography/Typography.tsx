export type TypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'subtitle'
  | 'link';
export type TypographyTag = 'h1' | 'h2' | 'span' | 'div' | 'p';
export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  tag?: TypographyTag;
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container',
};

export const Typography: React.FC<TypographyProps> = ({ children, variant, tag: Tag = 'div' }) => (
  <Tag className={variant} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
    {children}
  </Tag>
);
