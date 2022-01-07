import { app } from "@shared/infra/http/app"


const port = 5000


app.listen(port, () => {
  console.log('Server is runnig on port 5000')
})