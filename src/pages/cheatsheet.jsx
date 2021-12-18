import { defaultLocale } from 'src/localization';
import CheatsheetPage from './[lang]/cheatsheet';

export default CheatsheetPage;

export async function getStaticProps(context) {
  return {
    props: {
      lang: defaultLocale,
    },
  };
}
