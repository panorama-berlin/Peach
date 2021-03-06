import React from 'react'
import * as storybook from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import 'semantic-ui-css/semantic.min.css'

import themes from '@panorama-berlin/themes'
import './styles.css'

const req = require.context('../src/components', true, /.stories.js$/)

const loadStories = () => req.keys().forEach(filename => req(filename))

storybook.addDecorator(story => (
  <BrowserRouter>
    <IntlProvider locale="en">
      <ThemeProvider theme={themes.summer2018}>{story()}</ThemeProvider>
    </IntlProvider>
  </BrowserRouter>
))

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Antigua',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off mulitple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: null,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true // true by default
})

storybook.configure(loadStories, module)
