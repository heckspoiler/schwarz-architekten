import { Content, createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { create } from 'domain';

/**
 * Props for `ProjectSlice`.
 */
export type ProjectSliceProps = SliceComponentProps<Content.ProjectSliceSlice>;

/**
 * Component for "ProjectSlice" Slices.
 */
const ProjectSlice = ({ slice }: ProjectSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.project_index} />
    </section>
  );
};

export default ProjectSlice;
