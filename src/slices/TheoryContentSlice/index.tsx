import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TheoryPageSlice`.
 */
export type TheoryPageSliceProps =
  SliceComponentProps<Content.TheoryPageSliceSlice>;

/**
 * Component for "TheoryPageSlice" Slices.
 */
const TheoryPageSlice = ({ slice }: TheoryPageSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for theory_page_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TheoryPageSlice;
