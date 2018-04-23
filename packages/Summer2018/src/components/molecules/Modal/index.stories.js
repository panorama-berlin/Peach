import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Modal from '.'

storiesOf('Modal', module)
  .add('default', () => (
    <Modal onClose={action('onClose')} isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('with title', () => (
    <Modal onClose={action('onClose')} title="Hello" isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('closeable', () => (
    <Modal onClose={action('onClose')} closeable isOpen>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
  .add('confirm', () => (
    <Modal onClose={action('onClose')} closeable isOpen isConfirm>
      Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua.
    </Modal>
  ))
