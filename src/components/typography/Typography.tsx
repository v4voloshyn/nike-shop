export type TypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'title-4'
  | 'title-5'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'subtitle'
  | 'link';
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div' | 'p';
export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  tag?: TypographyTag;
  className?: string;
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'typography-container',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  tag: Tag = 'div',
  className,
}) => (
  <Tag className={`${variant} ${className}`} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}>
    {children}
  </Tag>
);
