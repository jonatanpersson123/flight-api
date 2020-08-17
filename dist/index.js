"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const cors_1 = __importDefault(require("cors"));
app.use(cors_1.default({
    credentials: true,
    origin: true
}));
app.options('*', cors_1.default());
app.get('/', (req, res) => res.send('Working!'));
app.listen(process.env.PORT || 3000, () => {
    console.log(`server running on port ${process.env.PORT || 3000}`, '');
});
//# sourceMappingURL=index.js.map