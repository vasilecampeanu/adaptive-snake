import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Game } from "./components/Game.tsx";

import './styles/styles.scss';

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Game />
    </StrictMode>
);
