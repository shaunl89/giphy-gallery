# Giphy Gallery
## Getting Started

To start the application, run the following in your Terminal

```
yarn install
yarn start
```

Create a `.env` file in the root folder with the following (*not required with current build*): 
```
REACT_APP_API_KEY=your_api_key
```

## Description
- Search by keyword for images from GIPHY API
- Display images in a grid of 8 images by default
- Add or remove tags to mark or unmark favourite images
- "Fetch More" button to fetch next 8 image results
- View all favourited images in a dedicated page
- Responsive layout

## Assumptions
- Global state does not need to be maintained across page refreshes

## Used in this site
- [React](https://reactjs.org/) - primary web framework for building user interfaces
- [Redux](https://redux.js.org/) - for state management
- [Redux Saga](https://github.com/redux-saga/redux-saga) - Redux middleware for application side effect management
- [react-router-dom](https://reacttraining.com/react-router/core/guides/philosophy) - for switching between components
- [Axios](https://github.com/axios/axios) - for promise-based API calls
- [Radium](https://github.com/FormidableLabs/radium) - for inline styling capabilities
- [Lodash](https://lodash.com/) - for simple utility operation
- [react-notifications](https://www.npmjs.com/package/react-notifications) - for simple UI feedback
- [GIPHY API](https://developers.giphy.com/) - GIF library

## Notable Learning Points
- Debouncing in React https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
- Synthetic Events https://reactjs.org/docs/events.html
- Redux Saga's `takeLatest` cancels previous tasks but will still result in API calls being made https://redux-saga.js.org/docs/api/
- https://github.com/reduxjs/react-redux/blob/master/docs/troubleshooting.md#my-views-arent-updating-when-something-changes-outside-of-redux