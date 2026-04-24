import { t as __commonJSMin } from "./chunk-D5y7Ud3f.js";
import { r as importShared } from "./_virtual___federation_fn_import-Dh5oeNlq.js";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region src/components/Button.jsx
var import_jsx_runtime = require_jsx_runtime();
var { useState } = await importShared("react");
var Button = () => {
	const [count, setCount] = useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setCount((c) => c + 1),
		style: {
			padding: "10px 20px",
			fontSize: "16px",
			backgroundColor: "#646cff",
			color: "white",
			border: "none",
			borderRadius: "8px",
			cursor: "pointer",
			boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
			transition: "background-color 0.2s"
		},
		onMouseOver: (e) => e.target.style.backgroundColor = "#535bf2",
		onMouseOut: (e) => e.target.style.backgroundColor = "#646cff",
		children: [
			"Remote Button - Clicked ",
			count,
			" times"
		]
	});
};
//#endregion
export { require_jsx_runtime as n, Button as t };
