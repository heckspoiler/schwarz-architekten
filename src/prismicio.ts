import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'home',
    path: '/',
  },
  {
    type: 'projects',
    path: '/projekte',
  },
  {
    type: 'project',
    path: '/projekte/:uid',
  },
  {
    type: 'about',
    path: '/uber-uns-2/team',
  },
  {
    type: 'contact',
    path: '/kontakt-2',
  },
  {
    type: 'theory',
    path: '/theorie',
  },
  {
    type: 'theorypage',
    path: '/theorie/:uid',
  },
  {
    type: 'news',
    path: '/news',
  },
  {
    type: 'newsarticle',
    path: '/news/:uid',
  },
  {
    type: 'link_not_found',
    path: '/link-not-found',
  },
  {
    type: 'terms_of_service',
    path: '/privacy-policy',
  },
  {
    type: 'dietrich_schwarz',
    path: '/dietrich-schwarz',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
