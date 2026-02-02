import { LayoutProvider } from '@/context/useLayoutContext';
const AppWrapper = ({
  children
}) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};
export default AppWrapper;