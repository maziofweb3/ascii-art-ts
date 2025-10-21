"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
function getTerminalWidth() {
    return process.stdout.columns || 80;
}
function generateAsciiArt(text, width) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            figlet_1.default.text(text, {
                font: 'Block',
                width: width,
                whitespaceBreak: true,
            }, function (err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(data || '');
            });
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv.slice(2);
        if (args.length !== 1) {
            console.log('Usage: ts-node src/ascii_art.ts <text>');
            process.exit(1);
        }
        const inputText = args[0];
        const terminalWidth = getTerminalWidth();
        const asciiArtOutput = yield generateAsciiArt(inputText, terminalWidth);
        let processedAsciiArt = "";
        for (const char of asciiArtOutput) {
            if (char === ' ') {
                processedAsciiArt += ' ';
            }
            else if (char === '#') {
                processedAsciiArt += '█';
            }
            else if (char === '_') {
                processedAsciiArt += '░';
            }
            else if (char === '\n') {
                processedAsciiArt += '\n';
            }
            else { // Other figlet characters
                processedAsciiArt += '░'; // Treat other characters as lines
            }
        }
        let centeredAsciiArt = "";
        for (const line of processedAsciiArt.split('\n')) {
            const padding = terminalWidth - line.length;
            if (padding > 0) {
                const leftPadding = Math.floor(padding / 2);
                const rightPadding = padding - leftPadding;
                centeredAsciiArt += " ".repeat(leftPadding) + line + " ".repeat(rightPadding) + '\n';
            }
            else {
                centeredAsciiArt += line + '\n';
            }
        }
        centeredAsciiArt = centeredAsciiArt.trimEnd(); // Remove trailing newlines
        console.log(chalk_1.default.green(centeredAsciiArt));
    });
}
main().catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
});
