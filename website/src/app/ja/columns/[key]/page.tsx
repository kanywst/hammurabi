import { makeColumnRoute } from '@/lib/columnRoute';

const route = makeColumnRoute('ja');

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export const dynamicParams = false;

export default route.Page;
