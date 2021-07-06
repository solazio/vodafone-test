Look at this two-page app design for small company contact book:

Profile Listing Page Image | Profile Page Image

The management ask to use React and NodeJS as base technology for this app (because of skills across the company). In future the company hope to build more functions around this app. You are
asked to provide initial technical design for this app which should include the following points:
1. Frontend part:
  a. Tools, frameworks, npm libraries you plan to use and why
  b. Directory structure for source code folder
  c. List of components which you’ll implement (with short descripon)
  d. For one of the components also provide in which directory/-ies component’s 9le/-es
  will be located
  e. Benefits/drawbacks comparing with traditional (not-SPA) app approach
  f. Any other comments and suggestions
2. Backend part:
  a. Short description of API – URI, format, why needed
  b. Framework
  c. Any other comments and suggestions


1. Frontend part:
- initially we will use React, Typescript, material UI
- file structure:
`````
  └── contact-book-app/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── index.tsx
  │   ├── api/
  │   ├── components/
  │   │   ├── User.tsx
  │   │   ├── User.test.tsx
  │   │   ├── App.tsx
  │   │   └── App.test.tsx
  │   ├── hooks/
  │   ├── providers/
  │   └── store/
  │       └── actionCreators.tsx
  │       └── actions.tsx
  │       └── index.tsx
  │       └── reducer.tsx
  │       └── selectors.tsx
  ├── .gitignore
  ├── package.json
  └── tsconfig.json

`````
- The components I would implement would be:
  - User - display user informatio (avatar, name, email); can be used inside the UserListItem component, as well as inside UserDetails component
  - UserListIteam - wrapper around the User component, to be used inside the UserList component
  - UserList - display a list of User components and handles pagination/loading-on-scroll
  - UserDetails - this will be used on the user details page to display all the information for the user
- If required, in the future all the components can be grouped inside directories in /src/components
- Benefits/drawbacks:
  - not-SPA are faster than SPA
  - SPA are more fragile compared to non-SPA
  - Switching pages inside a SPA is pretty much instant
  - with SPa is easier to keep state on the client side
  - SPA is harder to manage; There are far more possible side effects between different parts of the application.
  - SPA has a low level of security
2. Backend part:
- The /users endpoint should also have pagination implemented - /users?page=1
- Below is a JSON Excerpt for the /users endpoint:
  [
    {
      id: "fWJE9amob6k,
      name: "John",
      surname: "Doe",
      email: "john.doe@accenture.com",
      avatar: {
        url: "https://unsplash.com/assets/api/api-photo-grid@2x-3b92db4cdfc938c6dde2291ca1c78ab7ace98ef916a8dd08c00a6b006c0b631b.jpg",
        alt: "Corner of a building",
        "width": 300,
        "height": 300,
      }
    },
    {
      id: "Dwu85P9SOIk",
      ...
    },
  ]
- Below is a JSON Excerpt for the /user/userID endpoint:
  {
    id: "fWJE9amob6k,
    name: "John",
    surname: "Doe",
    email: "john.doe@accenture.com",
    avatar: {
      url: "https://unsplash.com/assets/api/api-photo-grid@2x-3b92db4cdfc938c6dde2291ca1c78ab7ace98ef916a8dd08c00a6b006c0b631b.jpg",
      alt: "Corner of a building",
      "width": 300,
      "height": 300,
    }
    status: "",
    address: "",
    phone: "",
    ...and many more fields
  }
- The rest API should be created using Node.js, MongoDB & Express
