import {MODULE_ID} from "./_moduleId.mjs";

Hooks.once("init", () => {
    CONFIG.fontDefinitions["Spectral SC"] = {
        editor: true,
        fonts: [
            {
                urls: [`modules/${MODULE_ID}/fonts/Spectral_SC/SpectralSC-Regular.woff2`],
                style: "normal",
                weight: "400",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Spectral_SC/SpectralSC-Bold.woff2`],
                style: "normal",
                weight: "700",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Spectral_SC/SpectralSC-Italic.woff2`],
                style: "italic",
                weight: "400",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Spectral_SC/SpectralSC-BoldItalic.woff2`],
                style: "italic",
                weight: "700",
            },
        ],
    };
    CONFIG.fontDefinitions["Montserrat"] = {
        editor: true,
        fonts: [
            {
                urls: [`modules/${MODULE_ID}/fonts/Montserrat/Montserrat-Regular.woff2`],
                style: "normal",
                weight: "400",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Montserrat/Montserrat-Bold.woff2`],
                style: "normal",
                weight: "700",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Montserrat/Montserrat-Italic.woff2`],
                style: "italic",
                weight: "400",
            },
            {
                urls: [`modules/${MODULE_ID}/fonts/Montserrat/Montserrat-BoldItalic.woff2`],
                style: "italic",
                weight: "700",
            },
        ],
    };

});