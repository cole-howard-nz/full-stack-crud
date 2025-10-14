/*
 *  Server setup
 */

import APP from "./app"

const PORT = process.env.PORT || 4120

APP.listen(PORT, () => {
  console.log(`Server running on http://localhost:${ PORT }`)
})