import {
    h as l,
    i as s,
    j as d,
    k as p,
} from './runtime-dom.esm-bundler.7bb00c9c.js';
const c = () => {},
    m = l({
        props: { value: String, name: String },
        setup({ name: n, value: t }) {
            return t
                ? () => s('astro-slot', { name: n, innerHTML: t })
                : () => null;
        },
    }),
    h =
        (n) =>
        async (t, a, o, { client: u }) => {
            if ((delete a.class, !n.hasAttribute('ssr'))) return;
            const i = t.name ? `${t.name} Host` : void 0,
                r = {};
            for (const [e, f] of Object.entries(o))
                r[e] = () =>
                    s(m, { value: f, name: e === 'default' ? void 0 : e });
            if (u === 'only') {
                const e = d({ name: i, render: () => s(t, a, r) });
                await c(), e.mount(n, !1);
            } else {
                const e = p({ name: i, render: () => s(t, a, r) });
                await c(), e.mount(n, !0);
            }
        };
export { h as default };
