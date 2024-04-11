// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = EmployeeSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * About Title field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_title: prismic.RichTextField;

  /**
   * About Description field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_description: prismic.RichTextField;

  /**
   * About Subtitle field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.about_subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_subtitle: prismic.RichTextField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type EmployeeDocumentDataSlicesSlice = EmployeeSlice;

/**
 * Content for Mitarbeiter documents
 */
interface EmployeeDocumentData {
  /**
   * Employee image field in *Mitarbeiter*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  employee_image: prismic.ImageField<never>;

  /**
   * Employee Name field in *Mitarbeiter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_name: prismic.RichTextField;

  /**
   * Employee Degree field in *Mitarbeiter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_degree
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_degree: prismic.RichTextField;

  /**
   * Employee Role field in *Mitarbeiter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_role: prismic.RichTextField;

  /**
   * Employee phone field in *Mitarbeiter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_phone: prismic.RichTextField;

  /**
   * Employee email field in *Mitarbeiter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.employee_email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_email: prismic.RichTextField;

  /**
   * Slice Zone field in *Mitarbeiter*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EmployeeDocumentDataSlicesSlice>;
}

/**
 * Mitarbeiter document from Prismic
 *
 * - **API ID**: `employee`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EmployeeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<EmployeeDocumentData>,
    "employee",
    Lang
  >;

/**
 * Item in *Footer → Address*
 */
export interface FooterDocumentDataAddressItem {
  /**
   * label field in *Footer → Address*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * value field in *Footer → Address*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address[].value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  value: prismic.KeyTextField;
}

/**
 * Item in *Footer → Contact*
 */
export interface FooterDocumentDataContactItem {
  /**
   * label field in *Footer → Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * value field in *Footer → Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[].value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  value: prismic.KeyTextField;
}

/**
 * Item in *Footer → Social*
 */
export interface FooterDocumentDataSocialItem {
  /**
   * Icon field in *Footer → Social*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * link field in *Footer → Social*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Item in *Footer → Internal Nav*
 */
export interface FooterDocumentDataInternalNavItem {
  /**
   * Label field in *Footer → Internal Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.internal_nav[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *Footer → Internal Nav*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.internal_nav[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *Footer → External Nav*
 */
export interface FooterDocumentDataExternalNavItem {
  /**
   * Label field in *Footer → External Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.external_nav[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *Footer → External Nav*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.external_nav[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Address field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  address: prismic.GroupField<Simplify<FooterDocumentDataAddressItem>>;

  /**
   * Contact field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact: prismic.GroupField<Simplify<FooterDocumentDataContactItem>>;

  /**
   * Social field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social: prismic.GroupField<Simplify<FooterDocumentDataSocialItem>>;

  /**
   * Internal Nav field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.internal_nav[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  internal_nav: prismic.GroupField<Simplify<FooterDocumentDataInternalNavItem>>;

  /**
   * External Nav field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.external_nav[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  external_nav: prismic.GroupField<Simplify<FooterDocumentDataExternalNavItem>>;

  /**
   * Map field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.map
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  map: prismic.ImageField<never>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomeDocumentDataSlicesSlice = ProjectSliceSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Header → navbar*
 */
export interface NavbarDocumentDataNavbarItem {
  /**
   * link field in *Header → navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *Header → navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * identifier field in *Header → navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[].identifier
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  identifier: prismic.KeyTextField;
}

/**
 * Content for Header documents
 */
interface NavbarDocumentData {
  /**
   * logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * navbar field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar: prismic.GroupField<Simplify<NavbarDocumentDataNavbarItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;

/**
 * Item in *Project → Project Image Legend*
 */
export interface ProjectDocumentDataProjectImageLegendItem {
  /**
   * Legend Title field in *Project → Project Image Legend*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image_legend[].legend_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  legend_title: prismic.RichTextField;

  /**
   * Legend Description field in *Project → Project Image Legend*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image_legend[].legend_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  legend_description: prismic.RichTextField;
}

/**
 * Item in *Project → Project Description *
 */
export interface ProjectDocumentDataProjectDescriptionItem {
  /**
   * Project Description Title field in *Project → Project Description *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_description[].project_description_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description_title: prismic.RichTextField;

  /**
   * Project Description Description field in *Project → Project Description *
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_description[].project_description_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description_description: prismic.RichTextField;
}

/**
 * Item in *Project → Project Image Gallery*
 */
export interface ProjectDocumentDataProjectImageGalleryItem {
  /**
   * Project Image field in *Project → Project Image Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image_gallery[].project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;
}

type ProjectDocumentDataSlicesSlice = never;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Project Index field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 01
   * - **API ID Path**: project.project_index
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_index: prismic.RichTextField;

  /**
   * Project Title field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Projekttitel
   * - **API ID Path**: project.project_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.RichTextField;

  /**
   * Project Subtitle field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Einfamilienhaus im Minergie-A-Standard
   * - **API ID Path**: project.project_subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_subtitle: prismic.RichTextField;

  /**
   * Project Main Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_main_image: prismic.ImageField<never>;

  /**
   * Project Image Legend field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image_legend[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_image_legend: prismic.GroupField<
    Simplify<ProjectDocumentDataProjectImageLegendItem>
  >;

  /**
   * Project Description  field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_description[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_description: prismic.GroupField<
    Simplify<ProjectDocumentDataProjectDescriptionItem>
  >;

  /**
   * Gallery Title field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Galerie
   * - **API ID Path**: project.gallery_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  gallery_title: prismic.RichTextField;

  /**
   * Project Image Gallery field in *Project*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image_gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  project_image_gallery: prismic.GroupField<
    Simplify<ProjectDocumentDataProjectImageGalleryItem>
  >;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

/**
 * Content for Metatag documents
 */
interface SettingsDocumentData {
  /**
   * Title field in *Metatag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Meta Description field in *Metatag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Metatag*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Technologies field in *Metatag*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.technologies
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  technologies: prismic.KeyTextField;
}

/**
 * Metatag document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

type SlideHomeDocumentDataSlicesSlice = ProjectInfoSlice;

/**
 * Content for Slide Home documents
 */
interface SlideHomeDocumentData {
  /**
   * Heroimage Home field in *Slide Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slide_home.heroimage_home
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  heroimage_home: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Slide Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: slide_home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SlideHomeDocumentDataSlicesSlice>;
}

/**
 * Slide Home document from Prismic
 *
 * - **API ID**: `slide_home`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SlideHomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SlideHomeDocumentData>,
    "slide_home",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | EmployeeDocument
  | FooterDocument
  | HomeDocument
  | NavbarDocument
  | ProjectDocument
  | ProjectsDocument
  | SettingsDocument
  | SlideHomeDocument;

/**
 * Primary content in *Employee → Primary*
 */
export interface EmployeeSliceDefaultPrimary {
  /**
   * Employee Name field in *Employee → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.primary.employee_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_name: prismic.RichTextField;

  /**
   * Employee Degree field in *Employee → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: ETH MSc
   * - **API ID Path**: employee.primary.employee_degree
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_degree: prismic.RichTextField;

  /**
   * Employee Position field in *Employee → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.primary.employee_position
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_position: prismic.RichTextField;

  /**
   * Employee Phone field in *Employee → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.primary.employee_phone
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  employee_phone: prismic.RichTextField;

  /**
   * Employee Email field in *Employee → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.primary.employee_email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  employee_email: prismic.KeyTextField;

  /**
   * Employee Image field in *Employee → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: employee.primary.employee_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  employee_image: prismic.ImageField<never>;
}

/**
 * Employee variation for Employee Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmployeeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EmployeeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Employee*
 */
type EmployeeSliceVariation = EmployeeSliceDefault;

/**
 * Employee Shared Slice
 *
 * - **API ID**: `employee`
 * - **Description**: Employee
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmployeeSlice = prismic.SharedSlice<
  "employee",
  EmployeeSliceVariation
>;

/**
 * Primary content in *ProjectInfo → Primary*
 */
export interface ProjectInfoSliceDefaultPrimary {
  /**
   * Project Title field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Projekttitel
   * - **API ID Path**: project_info.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.RichTextField;

  /**
   * Project Index field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 01
   * - **API ID Path**: project_info.primary.project_index
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_index: prismic.RichTextField;

  /**
   * Project Description field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Kurzbeschrieb
   * - **API ID Path**: project_info.primary.project_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description: prismic.RichTextField;

  /**
   * Call to Action field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Mehr sehen
   * - **API ID Path**: project_info.primary.call_to_action
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action: prismic.LinkField;
}

/**
 * complete variation for ProjectInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectInfoSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ProjectInfo → Primary*
 */
export interface ProjectInfoSliceProjectPrimary {
  /**
   * Project Title field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Projekttitel
   * - **API ID Path**: project_info.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.RichTextField;

  /**
   * Project Index field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 01
   * - **API ID Path**: project_info.primary.project_index
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_index: prismic.RichTextField;

  /**
   * Project Description field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Kurzbeschrieb
   * - **API ID Path**: project_info.primary.project_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description: prismic.RichTextField;
}

/**
 * Project variation for ProjectInfo Slice
 *
 * - **API ID**: `project`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSliceProject = prismic.SharedSliceVariation<
  "project",
  Simplify<ProjectInfoSliceProjectPrimary>,
  never
>;

/**
 * Primary content in *ProjectInfo → Primary*
 */
export interface ProjectInfoSliceContactLinksPrimary {
  /**
   * External Title field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Externer Link Titel
   * - **API ID Path**: project_info.primary.external_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  external_title: prismic.RichTextField;

  /**
   * External Description field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Kurzbeschrieb
   * - **API ID Path**: project_info.primary.external_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  external_description: prismic.RichTextField;

  /**
   * Call to Action field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.primary.call_to_action
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action: prismic.LinkField;
}

/**
 * Contact Links variation for ProjectInfo Slice
 *
 * - **API ID**: `contactLinks`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSliceContactLinks = prismic.SharedSliceVariation<
  "contactLinks",
  Simplify<ProjectInfoSliceContactLinksPrimary>,
  never
>;

/**
 * Primary content in *ProjectInfo → Primary*
 */
export interface ProjectInfoSliceNewsInformationPrimary {
  /**
   * News Title field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Newstitel
   * - **API ID Path**: project_info.primary.news_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  news_title: prismic.RichTextField;

  /**
   * News Index field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: 01
   * - **API ID Path**: project_info.primary.news_index
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  news_index: prismic.RichTextField;

  /**
   * News Description field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Kurzbeschrieb
   * - **API ID Path**: project_info.primary.news_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  news_description: prismic.RichTextField;

  /**
   * Call to Action field in *ProjectInfo → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Mehr sehen
   * - **API ID Path**: project_info.primary.call_to_action
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action: prismic.LinkField;
}

/**
 * Primary content in *ProjectInfo → Items*
 */
export interface ProjectInfoSliceNewsInformationItem {
  /**
   * Filter Link field in *ProjectInfo → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_info.items[].filter_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  filter_link: prismic.KeyTextField;
}

/**
 * News Information variation for ProjectInfo Slice
 *
 * - **API ID**: `newsInformation`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSliceNewsInformation = prismic.SharedSliceVariation<
  "newsInformation",
  Simplify<ProjectInfoSliceNewsInformationPrimary>,
  Simplify<ProjectInfoSliceNewsInformationItem>
>;

/**
 * Slice variation for *ProjectInfo*
 */
type ProjectInfoSliceVariation =
  | ProjectInfoSliceDefault
  | ProjectInfoSliceProject
  | ProjectInfoSliceContactLinks
  | ProjectInfoSliceNewsInformation;

/**
 * ProjectInfo Shared Slice
 *
 * - **API ID**: `project_info`
 * - **Description**: ProjectInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectInfoSlice = prismic.SharedSlice<
  "project_info",
  ProjectInfoSliceVariation
>;

/**
 * Primary content in *ProjectSlice → Primary*
 */
export interface ProjectSliceSliceDefaultPrimary {
  /**
   * Project Index field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.project_index
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_index: prismic.RichTextField;

  /**
   * Project Title field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.RichTextField;

  /**
   * Project Description field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.project_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description: prismic.RichTextField;

  /**
   * Project Link field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.project_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_link: prismic.ContentRelationshipField;

  /**
   * Project Image field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;

  /**
   * title field in *ProjectSlice → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: project_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  title: prismic.ContentRelationshipField;
}

/**
 * Default variation for ProjectSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectSlice*
 */
type ProjectSliceSliceVariation = ProjectSliceSliceDefault;

/**
 * ProjectSlice Shared Slice
 *
 * - **API ID**: `project_slice`
 * - **Description**: ProjectSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceSlice = prismic.SharedSlice<
  "project_slice",
  ProjectSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      EmployeeDocument,
      EmployeeDocumentData,
      EmployeeDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataAddressItem,
      FooterDocumentDataContactItem,
      FooterDocumentDataSocialItem,
      FooterDocumentDataInternalNavItem,
      FooterDocumentDataExternalNavItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataNavbarItem,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataProjectImageLegendItem,
      ProjectDocumentDataProjectDescriptionItem,
      ProjectDocumentDataProjectImageGalleryItem,
      ProjectDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SlideHomeDocument,
      SlideHomeDocumentData,
      SlideHomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      EmployeeSlice,
      EmployeeSliceDefaultPrimary,
      EmployeeSliceVariation,
      EmployeeSliceDefault,
      ProjectInfoSlice,
      ProjectInfoSliceDefaultPrimary,
      ProjectInfoSliceProjectPrimary,
      ProjectInfoSliceContactLinksPrimary,
      ProjectInfoSliceNewsInformationPrimary,
      ProjectInfoSliceNewsInformationItem,
      ProjectInfoSliceVariation,
      ProjectInfoSliceDefault,
      ProjectInfoSliceProject,
      ProjectInfoSliceContactLinks,
      ProjectInfoSliceNewsInformation,
      ProjectSliceSlice,
      ProjectSliceSliceDefaultPrimary,
      ProjectSliceSliceVariation,
      ProjectSliceSliceDefault,
    };
  }
}
