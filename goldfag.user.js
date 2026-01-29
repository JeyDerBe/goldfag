// ==UserScript==
// @name         Золотые переливающиеся Goldфаги
// @namespace    https://github.com/JeyDerBe/goldfag
// @version      1.2
// @description  Скрипт для добавления группе Goldфаги переливающегося золотого цвета
// @author       JonnyB [https://ru-minecraft.ru/user/JonnyB/]
// @match        https://ru-minecraft.ru/*
// @icon         https://www.google.com/s2/favicons?domain=ru-minecraft.ru
// @grant        none
// @updateURL    https://raw.githubusercontent.com/JeyDerBe/goldfag/main/goldfag.user.js
// @downloadURL  https://raw.githubusercontent.com/JeyDerBe/goldfag/main/goldfag.user.js
// ==/UserScript==

(
    function () {
        'use strict';

        const style = document.createElement('style');
        style.textContent = `
    .goldfaggot {
	    display: inline-block;
        padding-right: 1px;
        background-image: linear-gradient(
        90deg,
        #5c4300 0%,
        #8c6a00 20%,
        #d4af37 40%,
        #f5d76e 50%,
        #d4af37 60%,
        #8c6a00 80%,
        #5c4300 100%
        );
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        animation: gold-flow 4s linear infinite;
      }
    @keyframes gold-flow {
        from {
            background-position: 0 50%;
        }
        to {
            background-position: 200% 50%;
        }
    }`;
        document.head.appendChild(style);

        function goldfag() {
            document.querySelectorAll('span:not(.goldfaggot)').forEach(span => {
                const color = getComputedStyle(span).color;
				const text = span.textContent.trim();
                if ((color === "rgb(222, 180, 11)" || color === "rgb(255, 204, 0)") && text === "Goldфаги") {
                    span.classList.add("goldfaggot");
                }
            });
        }
        goldfag();

        const observer = new MutationObserver(goldfag);
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

    })();


