import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessage2 } from '../components/myPractices/ShowHideMessage2'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { Counter } from '../components/myPractices/Counter';

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/myPractice/showHideMessage",
      element: <ShowHideMessage2 />,
    },
    {
      path: "/myPractice/counter",
      element: <Counter />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]