import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/Not-found";
import { ImageVerification } from "./components/ImageVerification";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/verify-images" component={ImageVerification} />
      <Route component={NotFound} />
    </Switch>
  );
}
