import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const InitOverLayScrollBars = () => {
  useEffect(() => {
    OverlayScrollbars(document.documentElement, {
      className: "os-theme-dark",
      scrollbars: {
        autoHide: "leave",
        clickScrolling: true,
      },
      textarea: {
        dynWidth: false,
      },
      callbacks: {
        onInitialized: function () {
          console.log("OverlayScrollbars inicializado");
        },
      },
      // ... otras opciones de configuración según tus necesidades
    });
  }, []);
};

export default InitOverLayScrollBars;
