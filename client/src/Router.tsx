import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/Not-found";
import { ImageVerification } from "./components/ImageVerification";
import { CloudinaryTest } from "./components/CloudinaryTest";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/verify-images" component={ImageVerification} />
      <Route path="/test-cloudinary" component={CloudinaryTest} />
      <Route component={NotFound} />
    </Switch>
  );
}
