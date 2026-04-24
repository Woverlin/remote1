import { r as importShared } from "./_virtual___federation_fn_import-Dh5oeNlq.js";
import { n as require_jsx_runtime, t as Button } from "./Button-CMkBSF87.js";
//#region node_modules/@woverlin/shared-ui/dist/shared-ui.js
var import_jsx_runtime = require_jsx_runtime();
var m = ({ children: t, variant: r = "primary", onClick: o, ...n }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	className: `shared-btn shared-btn-${r}`,
	onClick: o,
	...n,
	children: t
});
//#endregion
//#region src/App.jsx
await importShared("react");
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			padding: "40px",
			fontFamily: "Arial"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Remote 1 App (Standalone)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is the standalone version of Remote 1. It exposes the following Button component:" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					padding: "20px",
					border: "1px solid #ccc",
					marginBottom: "20px"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "1. Nút Local cũ (Chưa dùng chung)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					padding: "20px",
					border: "1px solid #4f46e5",
					backgroundColor: "#f5f5ff"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						style: { color: "#4f46e5" },
						children: "2. Nút Component (Từ @woverlin/shared-ui 🚀)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thử 2 phiên bản màu sắc khác nhau xuất ra từ thư viện dùng chung:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: "15px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
							variant: "primary",
							onClick: () => alert("Primary button clicked!"),
							children: "Primary Style"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, {
							variant: "secondary",
							onClick: () => alert("Secondary button clicked!"),
							children: "Secondary Style"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { App as t };
