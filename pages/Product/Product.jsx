import { Suspense } from "react"
import { MyApp } from "../../src/modules"
function Product() {
    return <Suspense fallback="Loading...">
        <MyApp></MyApp>
    </Suspense>
}

export default Product