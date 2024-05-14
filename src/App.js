import { Provider } from "react-redux";
import Body from "./components/Body";
import { store } from "./utils/store";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditContactForm from "./components/EditContactForm";

function App() {
  const routes = [
    {path: '/', element: <Body /> ,
    children: [
      {path: '/', element: <ContactList />},
      {path: '/add-contact', element: <AddContactForm />},
      {path: '/edit-contact/:id', element: <EditContactForm />}
    ]
    }
  ];
  const appRouter = createBrowserRouter(routes)
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter}>
        <Body />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
