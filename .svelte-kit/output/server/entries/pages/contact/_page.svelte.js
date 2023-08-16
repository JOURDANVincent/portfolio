import { c as create_ssr_component, g as getContext, b as subscribe, a as add_attribute, e as escape, s as setContext, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { G as Github_svg, L as Linkedin_svg } from "../../../chunks/linkedin.svg.js";
const Hint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let touched;
  let errors;
  let hideWhenError;
  let requiredError;
  let value;
  let $formContext, $$unsubscribe_formContext;
  let { for: name = "" } = $$props;
  let { form = "svelte-use-form" } = $$props;
  let { class: _class = "" } = $$props;
  let { id = void 0 } = $$props;
  let { on = "" } = $$props;
  let { hideWhen = "" } = $$props;
  let { hideWhenRequired = false } = $$props;
  let { showWhenUntouched = false } = $$props;
  if (!name)
    name = getContext(`${form}_hint-group-name`);
  const formContext = getContext(form);
  $$unsubscribe_formContext = subscribe(formContext, (value2) => $formContext = value2);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.hideWhen === void 0 && $$bindings.hideWhen && hideWhen !== void 0)
    $$bindings.hideWhen(hideWhen);
  if ($$props.hideWhenRequired === void 0 && $$bindings.hideWhenRequired && hideWhenRequired !== void 0)
    $$bindings.hideWhenRequired(hideWhenRequired);
  if ($$props.showWhenUntouched === void 0 && $$bindings.showWhenUntouched && showWhenUntouched !== void 0)
    $$bindings.showWhenUntouched(showWhenUntouched);
  touched = $formContext[name]?.touched ?? {};
  errors = $formContext[name]?.errors ?? {};
  hideWhenError = hideWhen ? errors[hideWhen] : "";
  requiredError = errors["required"];
  value = errors[on];
  $$unsubscribe_formContext();
  return `${!(hideWhenRequired && requiredError) && !hideWhenError ? `${(touched || showWhenUntouched) && value ? `<div${add_attribute("id", id, 0)} class="${"svelte-use-form-hint " + escape(_class, true)}">${slots.default ? slots.default({ value }) : ``}</div>` : ``}` : ``}`;
});
const HintGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = "svelte-use-form" } = $$props;
  let { for: name = "" } = $$props;
  setContext(`${form}_hint-group-name`, name);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.for === void 0 && $$bindings.for && name !== void 0)
    $$bindings.for(name);
  return `${slots.default ? slots.default({ form }) : ``}`;
});
const isChrome = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const animationName = "svelte-use-form-webkit-autofill";
const css$1 = `
@keyframes ${animationName} {
    from {}
}

input:-webkit-autofill {
    animation-name: svelte-use-form-webkit-autofill;
}
`;
function startAnimationWhenAutofilled() {
  if (document.getElementById("svelte-use-form-chrome-autofill-styles") === null) {
    const style = document.createElement("style");
    style.setAttribute("id", "svelte-use-form-chrome-autofill-styles");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(css$1));
    document.head.appendChild(style);
  }
}
function handleChromeAutofill(textElement, control, callback) {
  if (!isChrome())
    return;
  function handleAnimationStart(event) {
    if (event.animationName.includes(animationName)) {
      const currentValue = textElement.value;
      if (!currentValue) {
        control.valid = true;
        callback();
      }
    }
  }
  textElement.addEventListener("animationstart", handleAnimationStart);
  startAnimationWhenAutofilled();
}
class FormControl {
  validators;
  /**
   * Returns an object containing possible validation errors
   * @example
   * (All validators are throwing an error)
   * `{ required: true, minLength: 4, maxLength: 20 }`
   * (Only required is invalid)
   * `{ required: true }`
   */
  errors = {};
  /**
   * Contains a map of values, that will be shown
   * in place of the original validation error.
   */
  errorMap = {};
  /**
   * The DOM elements representing this control
   */
  elements = [];
  /** Does the FormControl pass all given validators? */
  valid = true;
  /**
   * If the FormControl has been interacted with.
   * (triggered by blur event)
   */
  _touched = false;
  /** The initial value of the FormControl. Defaults to `""` if not set via `useForm(params)`. */
  initial;
  // TODO can we get the Form via Svelte context?
  formRef;
  _value = "";
  get value() {
    return this._value;
  }
  get touched() {
    return this._touched;
  }
  /**
   * This will only change the internal value of the control, not the one displayed in the actual HTML-Element
   *
   * See `change(value: String)` for doing both
   */
  set value(value) {
    this._value = value;
    this.validate();
  }
  set touched(value) {
    this._touched = value;
    this.elements.forEach((element) => {
      if (value)
        element.classList.add("touched");
      else
        element.classList.remove("touched");
    });
  }
  constructor(formControl) {
    this.formRef = formControl.formRef;
    this.validators = formControl.validators;
    this.errorMap = formControl.errorMap;
    this.initial = formControl.value;
    this.elements = formControl.elements;
    this.value = formControl.value;
  }
  /**
   * Set an error manually.
   *
   * The error will be removed after changes to the value or on validate()
   *
   * Used for setting an error that would be difficult to implement with a validator.
   * @example Backend Response returning Login failed
   * ``` typescript
   * function submit() {
   *    apiLogin($form.values).then(response => {})
   *    .catch(error => {
   *        if (error.status === 403) {
   *            $form.password.error({ login: "Password or username is incorrect" });
   *        }
   *    })
   * }
   * ```
   */
  error(errors) {
    this.errors = { ...errors, ...this.errors };
    this.valid = false;
    this.formRef()["_notifyListeners"]();
  }
  /** Change the value and the value of all HTML-Elements associated with this control */
  change(value) {
    this.value = value;
    this.elements.forEach((element) => element.value = value);
  }
  /** Validate the FormControl by querying through the given validators. */
  validate() {
    let valid = true;
    this.errors = {};
    for (const validator of this.validators) {
      const errors = validator(this.value, this.formRef(), this);
      if (!errors)
        continue;
      valid = false;
      for (const error of Object.entries(errors)) {
        let [key, value] = error;
        const errorMapping = this.errorMap[key];
        if (errorMapping) {
          value = typeof errorMapping === "function" ? errorMapping(value) : errorMapping;
        }
        this.errors[key] = value;
      }
    }
    this.valid = valid;
    this.elements.forEach((element) => element.setCustomValidity(valid ? "" : "Field is invalid"));
    return valid;
  }
  /** Reset the form control value to its initial value or `{ value }` and untouch it */
  reset({ value } = {}) {
    const resetValue = value == null ? this.initial : value;
    this.elements.forEach((element) => element.value = resetValue);
    this.value = resetValue;
    this.touched = false;
    this.formRef()["_notifyListeners"]();
  }
}
class Form {
  /**
   * Function for creating a Form
   * @remarks This allows us to specify the index signatures in the class
   */
  static create(initialData, notifyListeners) {
    return new Form(initialData, notifyListeners);
  }
  _notifyListeners;
  get valid() {
    let valid = true;
    this.forEachControl((formControl) => {
      if (!formControl.valid)
        valid = false;
    });
    return valid;
  }
  get touched() {
    let touched = true;
    this.forEachControl((formControl) => {
      if (!formControl.touched)
        touched = false;
    });
    return touched;
  }
  get values() {
    let values = {};
    this.forEachControl((formControl, key) => {
      values[key] = formControl.value;
    });
    return values;
  }
  set touched(value) {
    this.forEachControl((formControl) => {
      formControl.touched = value;
    });
    this._notifyListeners();
  }
  constructor(initialData, notifyListeners) {
    for (const [k, v] of Object.entries(initialData)) {
      this._addControl(k, v.initial, v.validators, [], v.errorMap);
    }
    this._notifyListeners = notifyListeners;
  }
  /** Reset the whole form */
  reset() {
    this.forEachControl((formControl) => formControl.reset());
  }
  /** @internal Add a form conrol to the Form */
  _addControl(name, initial = "", validators = [], elements = [], errorMap = {}) {
    this[name] = new FormControl({
      value: initial,
      validators,
      elements,
      errorMap,
      formRef: () => this
    });
  }
  forEachControl(callback) {
    for (const [key, value] of Object.entries(this)) {
      if (value instanceof FormControl) {
        callback(value, key);
      }
    }
  }
}
class FormControlMissingError extends Error {
}
function isTextElement(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement;
}
function isFormControlElement(node) {
  return node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement || node instanceof HTMLSelectElement;
}
function isIgnoredElement(node) {
  return node.hasAttribute("data-suf-ignore") && node.getAttribute("data-suf-ignore") === "true" || // <div data-suf-ignore="true">
  node.getAttribute("data-suf-ignore") === true;
}
const formReferences = writable([]);
function useForm(properties = {}, formName = "svelte-use-form") {
  const subscribers = [];
  let eventListeners = [];
  let state = Form.create(properties, notifyListeners);
  let observer;
  action.subscribe = subscribe2;
  action.set = set;
  setContext(formName, action);
  function action(node) {
    setupForm(node);
    formReferences.update((values) => [
      ...values,
      { node, form: state, notifyListeners }
    ]);
    return {
      update: () => {
      },
      destroy: () => {
        unmountEventListeners();
        observer.disconnect();
      }
    };
  }
  function setupForm(node) {
    const inputElements = [
      ...getNodeElementsByTagName(node, "input")
    ];
    const textareaElements = [
      ...getNodeElementsByTagName(node, "textarea")
    ];
    const selectElements = [
      ...getNodeElementsByTagName(node, "select")
    ];
    const textElements = [...inputElements, ...textareaElements];
    setupTextElements(textElements);
    setupSelectElements(selectElements);
    hideNotRepresentedFormControls([...textElements, ...selectElements]);
    setupFormObserver(node);
    notifyListeners();
  }
  function setupTextElements(textElements) {
    for (const textElement of textElements) {
      const name = textElement.name;
      let formControl = state[name];
      if (!formControl) {
        const initial = getInitialValueFromTextElement(textElement);
        state._addControl(name, initial, [], [textElement], {});
        formControl = state[name];
      } else {
        formControl.elements.push(textElement);
        if (textElement.type === "radio" && textElement instanceof HTMLInputElement && textElement.checked) {
          formControl.initial = textElement.value;
        }
      }
      switch (textElement.type) {
        case "checkbox":
        case "radio":
          mountEventListener(textElement, "click", handleBlurOrClick);
          break;
        default:
          setInitialValue(textElement, formControl);
          handleAutofill(textElement, formControl);
          mountEventListener(textElement, "blur", handleBlurOrClick);
      }
      mountEventListener(textElement, "input", handleInput);
    }
  }
  function setupSelectElements(selectElements) {
    for (const selectElement of selectElements) {
      const name = selectElement.name;
      const formControl = state[name];
      if (!formControl) {
        const initial = selectElement.value;
        state._addControl(name, initial, [], [selectElement], {});
      } else {
        formControl.elements.push(selectElement);
        setInitialValue(selectElement, formControl);
      }
      mountEventListener(selectElement, "input", handleInput);
      mountEventListener(selectElement, "input", handleBlurOrClick);
      mountEventListener(selectElement, "blur", handleBlurOrClick);
    }
  }
  function setupFormObserver(form) {
    observer = new MutationObserver(observeForm);
    observer.observe(form, { childList: true, subtree: true });
  }
  function observeForm(mutations) {
    for (const mutation of mutations) {
      if (mutation.type !== "childList")
        continue;
      for (const node of mutation.addedNodes) {
        if (!(isFormControlElement(node) && !isIgnoredElement(node)))
          continue;
        const initialFormControlProperty = properties[node.name];
        if (!state[node.name] && initialFormControlProperty) {
          state._addControl(
            node.name,
            initialFormControlProperty.initial,
            initialFormControlProperty.validators,
            [],
            // The setup function will add this node to the form control
            initialFormControlProperty.errorMap
          );
        }
        if (isTextElement(node))
          setupTextElements([node]);
        else if (node instanceof HTMLSelectElement)
          setupSelectElements([node]);
      }
      for (const node of mutation.removedNodes) {
        if (!(node instanceof HTMLElement))
          continue;
        const elements = isFormControlElement(node) ? [node] : getAllFormControlElements(node);
        elements.forEach((element) => {
          delete state[element.name];
          eventListeners = eventListeners.filter((eventListener) => eventListener.node !== element);
        });
      }
    }
    notifyListeners();
  }
  function mountEventListener(node, event, listener) {
    node.addEventListener(event, listener);
    eventListeners.push({ node, event, listener });
  }
  function unmountEventListeners() {
    for (const { node, event, listener } of eventListeners) {
      node.removeEventListener(event, listener);
    }
  }
  function handleAutofill(textElement, formControl) {
    handleChromeAutofill(textElement, formControl, notifyListeners);
    function handleNoEventAutofilling() {
      if (textElement.value !== formControl.initial) {
        handleBlurOrClick({ target: textElement });
        return true;
      }
      return false;
    }
    const autofillingWithoutEventInstantly = handleNoEventAutofilling();
    if (!autofillingWithoutEventInstantly)
      setTimeout(() => handleNoEventAutofilling(), 100);
  }
  function handleInput({ target: node }) {
    if (isFormControlElement(node)) {
      const name = node.name;
      const formControl = state[name];
      if (!formControl)
        throw new FormControlMissingError();
      let value;
      if (node.type === "checkbox" && node instanceof HTMLInputElement) {
        value = node.checked ? "checked" : "";
      } else {
        value = node.value;
      }
      formControl.value = value;
      notifyListeners();
    }
  }
  function handleBlurOrClick({ target: node }) {
    if (isFormControlElement(node)) {
      const formControl = state[node.name];
      if (!formControl)
        throw new FormControlMissingError();
      if (!formControl.touched)
        handleInput({ target: node });
      formControl.touched = true;
      node.classList.add("touched");
      notifyListeners();
    }
  }
  function hideNotRepresentedFormControls(nodes) {
    for (const key of Object.keys(properties)) {
      let isFormControlRepresentedInDom = false;
      for (const node of nodes) {
        if (key === node.name)
          isFormControlRepresentedInDom = true;
      }
      if (!isFormControlRepresentedInDom)
        delete state[key];
    }
  }
  function setInitialValue(element, formControl) {
    if (formControl.initial)
      element.value = formControl.initial;
  }
  function notifyListeners() {
    for (const callback of subscribers)
      callback(state);
  }
  function subscribe2(callback) {
    subscribers.push(callback);
    callback(state);
    return { unsubscribe: () => unsubscribe(callback) };
  }
  function unsubscribe(subscriber) {
    const index = subscribers.indexOf(subscriber);
    subscribers.splice(index, 1);
  }
  function set(value) {
    state = value;
    notifyListeners();
  }
  return action;
}
function getInitialValueFromTextElement(textElement) {
  let initial;
  if (textElement.type === "radio" && textElement instanceof HTMLInputElement) {
    initial = textElement.checked ? textElement.value : "";
  } else if (textElement.type === "checkbox" && textElement instanceof HTMLInputElement) {
    initial = textElement.checked ? "checked" : "";
  } else {
    initial = textElement.value;
  }
  return initial;
}
function getNodeElementsByTagName(node, tagName) {
  return Array.from(node.getElementsByTagName(tagName)).filter((element) => !isIgnoredElement(element));
}
function getAllFormControlElements(node) {
  const inputs = getNodeElementsByTagName(node, "input");
  const textareas = getNodeElementsByTagName(node, "textarea");
  const selects = getNodeElementsByTagName(node, "select");
  return [...inputs, ...textareas, ...selects];
}
const required = (value) => {
  return value.trim() ? null : { required: "Required" };
};
function maxLength(length) {
  return (value) => {
    if (value.trim().length > length)
      return { maxLength: length };
  };
}
function minLength(length) {
  return (value) => {
    if (value.trim().length < length)
      return { minLength: length };
  };
}
const email = (value) => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    return null;
  }
  return { email: {} };
};
const nameRegEx = /^[a-zA-ZàâäæáãåāèéêëęėēîïīįíìôōøõóòöœùûüūúÿçćčńñÀÂÄÆÁÃÅĀÈÉÊËĘĖĒÎÏĪĮÍÌÔŌØÕÓÒÖŒÙÛÜŪÚŸÇĆČŃÑ -]+$/;
const msgRegEx = /^[0-9a-zA-ZàâäæáãåāèéêëęėēîïīįíìôōøõóòöœùûüūúÿçćčńñÀÂÄÆÁÃÅĀÈÉÊËĘĖĒÎÏĪĮÍÌÔŌØÕÓÒÖŒÙÛÜŪÚŸÇĆČŃÑ -]+$/;
const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const invalidName = (value) => {
  return nameRegEx.test(value) ? null : { invalidName: "*caractère invalide / non supporté" };
};
const invalidMessage = (value) => {
  return msgRegEx.test(value) ? null : { invalidMessage: "*caractère invalide / non supporté" };
};
const invalidEmail = (value) => {
  return emailRegEx.test(value) ? null : { invalidEmail: "*format invalide / non supporté" };
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `section.svelte-hvszmk.svelte-hvszmk{width:100%;max-width:1400px;background-size:cover;background-repeat:no-repeat;background-position-y:center;background-position-x:center;background-attachment:fixed;margin-inline:auto;box-sizing:border-box}form.svelte-hvszmk.svelte-hvszmk{width:100%;max-width:1100px;margin-inline:auto;background-color:#fff2;backdrop-filter:blur(12px);padding:16px;box-sizing:border-box}h1.svelte-hvszmk.svelte-hvszmk{color:#fff;font-size:3rem}label.svelte-hvszmk.svelte-hvszmk{color:#000;font-size:1rem;font-weight:bold}input.svelte-hvszmk.svelte-hvszmk,textarea.svelte-hvszmk.svelte-hvszmk{min-height:40px;background-repeat:no-repeat;background-size:16px;background-position-x:12px;background-position-y:12px;width:100%;box-sizing:border-box;background-color:#000c !important;backface-visibility:visible;backdrop-filter:blur(8px);color:#fff;font-size:0.9rem;border-radius:2px;border:none;outline:none;padding:8px;padding-left:48px;margin-bottom:6px}input.svelte-hvszmk.svelte-hvszmk:autofill,input.svelte-hvszmk.svelte-hvszmk:-webkit-autofill,input.svelte-hvszmk.svelte-hvszmk:-internal-autofill-selected{background-color:#000 !important;color:#fff !important}input[name="lastname"].svelte-hvszmk.svelte-hvszmk,input[name="firstname"].svelte-hvszmk.svelte-hvszmk{background-image:url('/images/png/form/user.png') !important}input[name="email"].svelte-hvszmk.svelte-hvszmk{background-image:url('/images/png/form/arobase.png') !important}textarea.svelte-hvszmk.svelte-hvszmk{resize:none;background-position-y:8px;background-image:url('/images/png/form/message.png') !important}input.svelte-hvszmk.svelte-hvszmk:focus,textarea.svelte-hvszmk.svelte-hvszmk:focus{box-shadow:inset 0 0 28px 2px #ffffff30 !important;border:1px solid #ffffff20 !important}button.svelte-hvszmk.svelte-hvszmk{backdrop-filter:blur(20px);background-color:#000;color:#fff;font-size:1rem;padding-inline:16px;padding-top:4px;padding-bottom:4px;margin-top:12px;border:1px solid #E14242;box-sizing:border-box}button.svelte-hvszmk.svelte-hvszmk:hover{color:#fff;border:1px solid #fff;box-shadow:inset 0px 0px 20px 5px #fff5}button.svelte-hvszmk.svelte-hvszmk:active{border:2px solid #E14242}.touched:invalid{border-bottom:2px solid #ffa50090 !important;box-shadow:inset 2px 2px 20px 4px #ffa50050;color:#ffa500 !important}.svelte-use-form-hint{color:#ffa50090 !important;font-size:0.7rem;margin-bottom:8px}.footer.svelte-hvszmk.svelte-hvszmk{height:40px;width:100%;background-color:#0005;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-inline:12px;box-sizing:border-box}.footer.svelte-hvszmk a.svelte-hvszmk{height:100%;width:40px;padding-right:12px}.footer.svelte-hvszmk>div.svelte-hvszmk{font-weight:bold;font-size:1rem;color:#444}.svelte.svelte-hvszmk.svelte-hvszmk{font-weight:bold;color:#E14242}@media(min-width: 768px){section.svelte-hvszmk.svelte-hvszmk{padding:32px}form.svelte-hvszmk.svelte-hvszmk{padding:32px}.name_block.svelte-hvszmk.svelte-hvszmk{display:flex;flex-direction:row;justify-content:space-between;box-sizing:border-box}.lastname.svelte-hvszmk.svelte-hvszmk,.firstname.svelte-hvszmk.svelte-hvszmk{width:calc(50% - 3px);margin-right:6px}.firstname.svelte-hvszmk.svelte-hvszmk{margin-right:0px}}@media(min-width: 992px){input.svelte-hvszmk.svelte-hvszmk,textarea.svelte-hvszmk.svelte-hvszmk{min-height:50px;background-size:20px;background-position-x:12px;background-position-y:14px;font-size:16px}form.svelte-hvszmk.svelte-hvszmk,.footer.svelte-hvszmk.svelte-hvszmk{max-width:800px;margin-inline:auto}label.svelte-hvszmk.svelte-hvszmk{font-size:1.2rem}}`,
  map: null
};
const footerIconSize = 18;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  useForm({
    lastname: {
      validators: [invalidName, minLength(2), maxLength(40), required]
    },
    firstname: {
      validators: [invalidName, minLength(2), maxLength(40), required]
    },
    email: {
      validators: [invalidEmail, email, required]
    },
    message: {
      validators: [invalidMessage, minLength(20), maxLength(256), required]
    }
  });
  $$result.css.add(css);
  return `<section class="contact-section svelte-hvszmk"><form autocomplete="off" method="post" class="svelte-hvszmk"><h1 class="svelte-hvszmk" data-svelte-h="svelte-7spyj9"><strong>Contact</strong></h1> <div class="name_block svelte-hvszmk"><div class="input_block lastname svelte-hvszmk"><label for="lastname" class="svelte-hvszmk" data-svelte-h="svelte-r57qeb">Nom</label> <input id="lastname" name="lastname" type="text" class=" svelte-hvszmk"> ${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "lastname" }, {}, {
    default: () => {
      return `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
        default: () => {
          return `*champ obligatoire`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "minLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*minimum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "maxLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*maximum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render(
        $$result,
        {
          on: "invalidName",
          hideWhenRequired: true
        },
        {},
        {
          default: ({ value }) => {
            return `${escape(value)}`;
          }
        }
      )}`;
    }
  })}</div> <div class="input_block firstname svelte-hvszmk"><label for="firstname" class="svelte-hvszmk" data-svelte-h="svelte-1mij5rq">Prénom</label> <input id="firstname" name="firstname" type="text" class=" svelte-hvszmk"> ${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "firstname" }, {}, {
    default: () => {
      return `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
        default: () => {
          return `*champ obligatoire`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "minLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*minimum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "maxLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*maximum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render(
        $$result,
        {
          on: "invalidName",
          hideWhenRequired: true
        },
        {},
        {
          default: ({ value }) => {
            return `${escape(value)}`;
          }
        }
      )}`;
    }
  })}</div></div> <div class="input_block email"><label for="email" class="svelte-hvszmk" data-svelte-h="svelte-1p9d3fm">Email</label> <input id="email" name="email" type="email" class=" svelte-hvszmk"> ${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "email" }, {}, {
    default: () => {
      return `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
        default: () => {
          return `*champ obligatoire`;
        }
      })}  ${validate_component(Hint, "Hint").$$render(
        $$result,
        {
          on: "invalidEmail",
          hideWhenRequired: true
        },
        {},
        {
          default: ({ value }) => {
            return `${escape(value)}`;
          }
        }
      )}`;
    }
  })}</div> <div class="input_block message"><label for="message" class="svelte-hvszmk" data-svelte-h="svelte-4uee20">Message</label> <textarea id="message" name="message" cols="1" rows="4" class=" svelte-hvszmk"></textarea> ${validate_component(HintGroup, "HintGroup").$$render($$result, { for: "message" }, {}, {
    default: () => {
      return `${validate_component(Hint, "Hint").$$render($$result, { on: "required" }, {}, {
        default: () => {
          return `*champ obligatoire`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "minLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*minimum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render($$result, { on: "maxLength", hideWhenRequired: true }, {}, {
        default: ({ value }) => {
          return `*maximum ${escape(value)} caractères`;
        }
      })} ${validate_component(Hint, "Hint").$$render(
        $$result,
        {
          on: "invalidMessage",
          hideWhenRequired: true
        },
        {},
        {
          default: ({ value }) => {
            return `${escape(value)}`;
          }
        }
      )}`;
    }
  })}</div> <div class="submit_block"><button id="submit" type="submit" aria-label="envoyer demande de contact" class="svelte-hvszmk" data-svelte-h="svelte-azuz49">Envoyer</button> ${validate_component(Hint, "Hint").$$render($$result, { on: "valid" }, {}, {
    default: () => {
      return `formulaire`;
    }
  })}</div></form> <div class="footer svelte-hvszmk"><div class="svelte-hvszmk"><a href="https://github.com/JOURDANVincent" target="_blank" rel="noreferrer" class="svelte-hvszmk">${validate_component(Github_svg, "GithubSvg").$$render($$result, { size: footerIconSize, color: "#777" }, {}, {})}</a> <a href="https://www.linkedin.com/in/VincentJourdan." target="_blank" rel="noreferrer" class="svelte-hvszmk">${validate_component(Linkedin_svg, "LinkedinSvg").$$render($$result, { size: footerIconSize, color: "#777" }, {}, {})}</a></div> <div class="svelte-hvszmk" data-svelte-h="svelte-n8oe1x">Vincent <span class="svelte svelte-hvszmk">JOURDAN</span></div></div> </section>`;
});
export {
  Page as default
};
