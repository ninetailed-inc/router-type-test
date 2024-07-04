import React from "react";
import { useLocation } from "react-router-dom";
import { useNinetailed } from "@ninetailed/experience.js-react";

export default function NinetailedTrackPage() {
  let location = useLocation();
  let ninetailed = useNinetailed();
  React.useEffect(() => {
    ninetailed.page();
  }, [location, ninetailed]);

  return null;
}
