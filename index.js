// React;
// ReactDOM;

class Heading extends React.Component {
  constructor(props) {
    super(props);

    }

render() {
  const { title, children } = this.props; // пропсы  настройка компонента извне
  return React.createElement(
    'h1',
    { title: title, tabIndex: 0, className: 'heading' },
    'Hello React.js',
    ...children
  );
}
}

const reactElement = React.createElement(
  Heading,
  { title: 'Hello  heading' },
  ' string 1',
  ' string 2',

);

ReactDOM.render(reactElement, document.getElementById('root'));
