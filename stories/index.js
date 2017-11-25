import React from 'react';
import {Provider} from 'react-redux'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo'
import App from '../src/containers/Home'
import configureStore from '../src/store/configureStore'
import rootSaga from '../src/sagas'

const store = configureStore()
store.runSaga(rootSaga)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('App', module)
  .addDecorator((getStory) => (<Provider store={store}>{getStory()}</Provider>))
  .add('app',()=> <App/>)