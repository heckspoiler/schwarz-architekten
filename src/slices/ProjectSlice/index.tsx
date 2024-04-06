import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for project_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectSlice;
