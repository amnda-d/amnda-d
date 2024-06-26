import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const container = document.getElementById('root');
const root = createRoot(container!);

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Title />,
//       children: [
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//             path: "contact",
//             element: <Contact />,
//           },
//           {
//             path: "scil",
//             element: <SCiL />,
//           },
//           {
//             path: "software",
//             element: <Software />,
//           },
//       ],
//     },
//   ]);


root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
