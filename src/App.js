import './App.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";
import { persistor } from "./toolkit/store";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/homePage";
// import Todopage from "./pages/todopage";

function App () {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        // {
        //     path: "/add",
        //     element: <Todopage />,
        // },
    ]);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>...loading</div>}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}

export default App;