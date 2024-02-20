import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/browserRoute.tsx'
import { Loader, MantineProvider, Container } from '@mantine/core'
import {theme} from "./utils/theme"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
     <MantineProvider theme={theme} >
     <Container fluid p={0} className="h-100 w-screen d-center">
      <RouterProvider router={router} fallbackElement={<div className="d-center h-screen"><Loader /></div>} />
     </Container>
      </MantineProvider>
     </Provider>
  </React.StrictMode>,
)
