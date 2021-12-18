import { defaultLocale } from 'src/localization';
import LearnPage from '../[lang]/learn';

export default LearnPage;

export async function getStaticProps(context) {
  return {
    props: {
      lang: defaultLocale,
    },
  };
}
