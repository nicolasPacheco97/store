import { lazy } from 'react'
import NotFound from './components/NotFound404/NotFound';

const MyApp = lazy(() =>
  import('productApp/App').catch(getModuleError))

function getModuleError( error ){
    console.error("Component Failed Loading:", error);
    return { default: NotFound }
}

export { MyApp }