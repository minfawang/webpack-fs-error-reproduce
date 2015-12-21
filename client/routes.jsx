import { Route, IndexRoute } from 'react-router';

import TodoApp from './components/TodoApp';
import TodoMain from './components/TodoMain';

ReactRouterSSR.Run(
  <Route path="/" component={TodoApp}>
    <IndexRoute component={TodoMain} />
  </Route>
);
