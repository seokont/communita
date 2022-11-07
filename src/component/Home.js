import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
export default function Home() {
  return (
    <>
      <Link to="/spisok">Перейти до списку</Link>
    </>
  );
}
