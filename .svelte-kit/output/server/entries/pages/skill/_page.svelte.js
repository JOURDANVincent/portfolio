import { f as noop, h as assign, i as identity, c as create_ssr_component, b as subscribe, a as add_attribute, e as escape, d as each, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Skill_item_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".item.svelte-owwygy.svelte-owwygy{width:100%;max-width:375px;min-height:46px;backdrop-filter:blur(8px);display:flex;flex-direction:row;align-items:center;margin-bottom:3px;padding-inline:16px;padding-bottom:2px;box-shadow:1px 1px 5px 2px #fff2;border:1px solid #000;box-sizing:border-box}.content.svelte-owwygy.svelte-owwygy{width:100%;display:flex;flex-direction:column;justify-content:center;margin-left:12px;box-sizing:border-box}img.svelte-owwygy.svelte-owwygy{height:28px;width:28px}.text-block.svelte-owwygy.svelte-owwygy{display:inline-flex;align-items:flex-end;justify-content:space-between}.text-block.svelte-owwygy>p.svelte-owwygy{font-size:1.2rem;color:#aaa;margin:0}h3.svelte-owwygy.svelte-owwygy{font-size:1.2rem;color:#fff;font-weight:normal;margin:0}.progress-item.svelte-owwygy.svelte-owwygy{width:100%;z-index:0}.progress-bar.svelte-owwygy.svelte-owwygy{z-index:1;position:relative;bottom:0px;height:3px;width:0;background-color:#E14242;border-radius:1px;box-sizing:border-box}.progress-bar.svelte-owwygy.svelte-owwygy:last-of-type{border-right:none}.progress-track.svelte-owwygy.svelte-owwygy{z-index:0;position:relative;bottom:2px;height:1px;width:100%;background-color:#aaa5;border-radius:1px;box-sizing:border-box}@media(min-width: 768px){img.svelte-owwygy.svelte-owwygy{height:100%;width:28px}.content.svelte-owwygy.svelte-owwygy{padding:5px 6px 5px 6px}h3.svelte-owwygy.svelte-owwygy{font-size:1.6rem}}@media(min-width: 768px) and (max-width: 991px){.item.svelte-owwygy.svelte-owwygy{margin-right:3px;min-width:calc(50% - 3px);max-width:calc(50% - 3px)}}@media(min-width: 992px){.item.svelte-owwygy.svelte-owwygy{margin-right:3px;min-width:calc(33.3% - 3px);max-width:calc(33.3% - 3px)}}",
  map: null
};
const Skill_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { title } = $$props;
  let { src } = $$props;
  let { level } = $$props;
  const progress = tweened(0, { duration: 1e3, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css$1);
  $$unsubscribe_progress();
  return `<div class="item svelte-owwygy" aria-roledescription="show level"><img${add_attribute("src", src, 0)}${add_attribute("alt", src, 0)} class="svelte-owwygy"> <div class="content svelte-owwygy"><div class="text-block svelte-owwygy"><h3 class="svelte-owwygy">${escape(title)}</h3> <p class="svelte-owwygy">${escape($progress != 0 ? Math.round($progress) + " %" : "")}</p></div> <div class="progress-item svelte-owwygy"><div class="progress-bar svelte-owwygy" style="${"width: " + escape($progress, true) + "%"}"></div> <div class="progress-track svelte-owwygy"></div></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-18yvvh7{width:100%;background-image:url(/images/svg/section/skill.svg);background-size:contain;background-repeat:no-repeat;background-position-y:40%;background-attachment:fixed;box-sizing:border-box}.filter-block.svelte-18yvvh7{z-index:1;position:sticky;top:24px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin-bottom:18px;font-size:1.8rem}.filter-button.svelte-18yvvh7{height:22px;display:inline-flex;align-items:center;background-color:#fff2;backdrop-filter:blur(12px);color:#000;font-weight:bold;padding-inline:16px;margin-right:2px;margin-bottom:6px;box-sizing:border-box;border:none}.active.svelte-18yvvh7{background-color:#000;color:#fff;font-weight:bold}h2.svelte-18yvvh7{color:#E14242;color:#555;font-size:1.6rem;font-weight:bold;width:100%}.skill_box.svelte-18yvvh7{margin-bottom:16px}@media(min-width: 768px){section.svelte-18yvvh7{margin-top:5vh;max-width:1200px;margin-inline:auto;padding-bottom:16px}.skill_box.svelte-18yvvh7{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="skill_section svelte-18yvvh7"><div class="filter-block svelte-18yvvh7"><button class="${escape(null_to_empty(`filter-button ${"active"}`), true) + " svelte-18yvvh7"}">Tout</button> <button class="${escape(null_to_empty(`filter-button ${""}`), true) + " svelte-18yvvh7"}">Mobile</button> <button class="${escape(null_to_empty(`filter-button ${""}`), true) + " svelte-18yvvh7"}">Front</button> <button class="${escape(null_to_empty(`filter-button ${""}`), true) + " svelte-18yvvh7"}">Back</button> <button class="${escape(null_to_empty(`filter-button ${""}`), true) + " svelte-18yvvh7"}">Database</button></div> <div style="${"display: " + escape(
    "block",
    true
  )}"><h2 class="svelte-18yvvh7" data-svelte-h="svelte-1desklk"><strong>Front-end</strong></h2> <div class="skill_box svelte-18yvvh7">${each(data.frontend, (front) => {
    return `${validate_component(Skill_item, "SkillItem").$$render($$result, Object.assign({}, front), {}, {})}`;
  })}</div></div> <div style="${"display: " + escape(
    "block",
    true
  )}"><h2 class="svelte-18yvvh7" data-svelte-h="svelte-1e2ptn2"><strong>Back-end</strong></h2> <div class="skill_box svelte-18yvvh7">${each(data.backend, (back) => {
    return `${validate_component(Skill_item, "SkillItem").$$render($$result, Object.assign({}, back), {}, {})}`;
  })}</div></div> <div style="${"display: " + escape(
    "block",
    true
  )}"><h2 class="svelte-18yvvh7" data-svelte-h="svelte-w2rx8z"><strong>Mobile</strong></h2> <div class="skill_box svelte-18yvvh7">${each(data.mobile, (mobile) => {
    return `${validate_component(Skill_item, "SkillItem").$$render($$result, Object.assign({}, mobile), {}, {})}`;
  })}</div></div> <div style="${"display: " + escape(
    "block",
    true
  )}"><h2 class="svelte-18yvvh7" data-svelte-h="svelte-1bg3xps"><strong>Database</strong></h2> <div class="skill_box svelte-18yvvh7">${each(data.database, (database) => {
    return `${validate_component(Skill_item, "SkillItem").$$render($$result, Object.assign({}, database), {}, {})}`;
  })}</div></div> </section>`;
});
export {
  Page as default
};
