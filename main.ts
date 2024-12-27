// only 10 line

import { Webview } from "@webview/webview";

const origin = "https://subnect.com";

const webview = new Webview();

webview.navigate(origin);
webview.title = "Subnect Desktop";
webview.run();
webview.eval(`/* noop */`);