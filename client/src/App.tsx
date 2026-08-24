/* STYLE REMINDER — Vayal Vimaani standalone: farmer-first, optimistic, practical, accessible, and warm. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Vayal from "./pages/Vayal";

function NotFound() {
  return <main style={{ padding: "3rem", fontFamily: "Manrope, sans-serif" }}><h1>Page not found</h1><a href="/">Back to Vayal Vimaani</a></main>;
}

function Router() {
  return <Switch><Route path="/" component={Vayal} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster position="bottom-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
