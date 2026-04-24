import { r as importShared } from "./_virtual___federation_fn_import-Dh5oeNlq.js";
import { n as require_jsx_runtime, t as Button } from "./Button-CMkBSF87.js";
//#region src/pages/Page1.jsx
var import_jsx_runtime = require_jsx_runtime();
await importShared("react");
var Page1 = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			padding: "20px",
			minHeight: "80vh",
			backgroundColor: "#eef2f3"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				style: { color: "#2c3e50" },
				children: "Micro-Frontend: Page 1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				style: {
					color: "#34495e",
					fontSize: "18px"
				},
				children: [
					"Tây là nội dung toàn bộ trang được load từ ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "remote1" }),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					marginTop: "30px",
					padding: "20px",
					backgroundColor: "white",
					borderRadius: "8px",
					boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Thành phần tương tác bên trong Page 1" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ví dụ component Button vẫn ở đây:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {})
				]
			})
		]
	});
};
//#endregion
export { Page1 as default };
