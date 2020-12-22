import LazyHydrate from 'react-lazy-hydration';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  // Unomment this line to make the e2e tests pass
  // display: 'contents'
};

export default function Layout(props) {
  return (
    <LazyHydrate whenVisible>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
    </LazyHydrate>
  );
}
