import { ThemeProvider } from '~/components/Theme';
import CombineComponents from './CombineComponents';

const providers = [ThemeProvider];

export const AppContextProvider = CombineComponents(...providers);

export default function Context(properties) {
  return <AppContextProvider>{properties.children}</AppContextProvider>;
}
